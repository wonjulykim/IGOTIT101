import { buildLoginCookie } from '../_auth.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
    return
  }

  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    res.status(500).json({ error: '서버에 관리자 비밀번호(ADMIN_PASSWORD)가 설정되어 있지 않습니다.' })
    return
  }

  const password = req.body?.password
  if (password !== expected) {
    res.status(401).json({ error: '비밀번호가 올바르지 않습니다.' })
    return
  }

  res.setHeader('Set-Cookie', buildLoginCookie())
  res.status(200).json({ ok: true })
}
