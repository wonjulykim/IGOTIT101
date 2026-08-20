import { buildStudentLogoutCookie } from '../_studentAuth.js'

export default async function handler(req, res) {
  res.setHeader('Set-Cookie', buildStudentLogoutCookie())
  res.status(200).json({ ok: true })
}
