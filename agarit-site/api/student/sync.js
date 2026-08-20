import { getStudentIdFromReq } from '../_studentAuth.js'
import { applySync } from '../_studentStore.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
    return
  }
  const studentId = getStudentIdFromReq(req)
  if (!studentId) {
    res.status(401).json({ error: '로그인이 필요합니다.' })
    return
  }
  const { kind, payload } = req.body || {}
  try {
    await applySync(studentId, kind, payload)
    res.status(200).json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: err.message || '동기화 중 오류가 발생했습니다.' })
  }
}
