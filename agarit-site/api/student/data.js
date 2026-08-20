import { getStudentIdFromReq } from '../_studentAuth.js'
import { fetchAllStudentData } from '../_studentStore.js'

export default async function handler(req, res) {
  const studentId = getStudentIdFromReq(req)
  if (!studentId) {
    res.status(401).json({ error: '로그인이 필요합니다.' })
    return
  }
  try {
    const data = await fetchAllStudentData(studentId)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message || '데이터 조회 중 오류가 발생했습니다.' })
  }
}
