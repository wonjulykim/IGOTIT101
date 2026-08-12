import crypto from 'node:crypto'

const COOKIE_NAME = 'agarit_admin'
const MAX_AGE_SEC = 60 * 60 * 12 // 12시간

function secret() {
  return process.env.ADMIN_SESSION_SECRET || 'dev-only-insecure-secret-change-me'
}

function sign(value) {
  const h = crypto.createHmac('sha256', secret()).update(value).digest('hex')
  return `${value}.${h}`
}

function verify(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return false
  const [value, hash] = token.split('.')
  if (!value || !hash) return false
  const expected = crypto.createHmac('sha256', secret()).update(value).digest('hex')
  try {
    const ok = crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(expected, 'hex'))
    if (!ok) return false
  } catch {
    return false
  }
  const issuedAt = Number(value)
  if (!Number.isFinite(issuedAt)) return false
  return Date.now() - issuedAt < MAX_AGE_SEC * 1000
}

export function parseCookies(header) {
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

export function isAdminAuthed(req) {
  const cookies = req.cookies || parseCookies(req.headers?.cookie)
  return verify(cookies[COOKIE_NAME])
}

export function buildLoginCookie() {
  const token = sign(String(Date.now()))
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE_SEC}`
}

export function buildLogoutCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}
