import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// 개발 서버(npm run dev)에서 api/*.js 파일들을 Vercel 서버리스 함수처럼 동작하게 만드는 미들웨어.
// 배포 환경(Vercel)에서는 api/ 아래 파일들이 자동으로 서버리스 함수가 되므로 이 플러그인은 쓰이지 않는다.
function apiDevMiddleware() {
  return {
    name: 'agarit-api-dev-middleware',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const key of Object.keys(env)) {
        if (process.env[key] === undefined) process.env[key] = env[key]
      }

      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) {
          next()
          return
        }

        const urlObj = new URL(req.url, 'http://localhost')
        const modulePath = urlObj.pathname + '.js'

        let mod
        try {
          mod = await server.ssrLoadModule(modulePath)
        } catch {
          res.statusCode = 404
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: `API 라우트를 찾을 수 없습니다: ${urlObj.pathname}` }))
          return
        }

        const handler = mod.default
        if (typeof handler !== 'function') {
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'API 핸들러가 올바르지 않습니다.' }))
          return
        }

        req.query = Object.fromEntries(urlObj.searchParams)
        req.cookies = parseCookieHeader(req.headers.cookie)

        if (req.method !== 'GET' && req.method !== 'HEAD') {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const raw = Buffer.concat(chunks).toString('utf8')
          const contentType = req.headers['content-type'] || ''
          if (raw && contentType.includes('application/json')) {
            try {
              req.body = JSON.parse(raw)
            } catch {
              req.body = {}
            }
          } else {
            req.body = raw
          }
        }

        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (obj) => {
          if (res.writableEnded) return
          if (!res.getHeader('Content-Type')) res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(obj))
        }
        res.send = (data) => {
          if (res.writableEnded) return
          res.end(typeof data === 'string' ? data : JSON.stringify(data))
        }

        try {
          await handler(req, res)
        } catch (err) {
          if (!res.writableEnded) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message || '알 수 없는 오류가 발생했습니다.' }))
          }
        }
      })
    },
  }
}

function parseCookieHeader(header) {
  const out = {}
  if (!header) return out
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=')
    if (idx === -1) return
    const k = pair.slice(0, idx).trim()
    const v = pair.slice(idx + 1).trim()
    if (k) out[k] = decodeURIComponent(v)
  })
  return out
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevMiddleware()],
})
