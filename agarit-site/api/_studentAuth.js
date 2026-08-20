import crypto from 'node:crypto'
import { parseCookies } from './_auth.js'

const COOKIE_NAME = 'agarit_student'
const MAX_AGE_SEC = 60 * 60 * 24 * 30 // 30일 — 학생은 자주 재로그인하지 않도록 admin보다 길게 유지

function secret() {
  return process.env.STUDENT_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET || 'dev-only-insecure-secret-change-me'
}

function sign(value) {
  const h = crypto.createHmac('sha256', secret()).update(value).digest('hex')
  return `${value}.${h}`
}

function verify(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null
  const idx = token.lastIndexOf('.')
  const value = token.slice(0, idx)
  const hash = token.slice(idx + 1)
  if (!value || !hash) return null
  const expected = crypto.createHmac('sha256', secret()).update(value).digest('hex')
  try {
    const ok = crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(expected, 'hex'))
    if (!ok) return null
  } catch {
    return null
  }
  const sepIdx = value.indexOf('|')
  if (sepIdx === -1) return null
  const studentId = value.slice(0, sepIdx)
  const issuedAt = Number(value.slice(sepIdx + 1))
  if (!studentId || !Number.isFinite(issuedAt)) return null
  if (Date.now() - issuedAt > MAX_AGE_SEC * 1000) return null
  return studentId
}

export function getStudentIdFromReq(req) {
  const cookies = req.cookies || parseCookies(req.headers?.cookie)
  return verify(cookies[COOKIE_NAME])
}

export function buildStudentLoginCookie(studentId) {
  const token = sign(`${studentId}|${Date.now()}`)
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE_SEC}`
}

export function buildStudentLogoutCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}
