import { buildLogoutCookie } from '../_auth.js'

export default async function handler(req, res) {
  res.setHeader('Set-Cookie', buildLogoutCookie())
  res.status(200).json({ ok: true })
}
