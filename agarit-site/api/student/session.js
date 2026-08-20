import { getStudentIdFromReq } from '../_studentAuth.js'
import { getStudentById } from '../_studentStore.js'

export default async function handler(req, res) {
  const studentId = getStudentIdFromReq(req)
  if (!studentId) {
    res.status(200).json({ loggedIn: false })
    return
  }
  try {
    const student = await getStudentById(studentId)
    if (!student) {
      res.status(200).json({ loggedIn: false })
      return
    }
    res.status(200).json({ loggedIn: true, student: { id: student.id, name: student.name, classCode: student.class_code } })
  } catch (err) {
    res.status(500).json({ error: err.message || '세션 확인 중 오류가 발생했습니다.' })
  }
}
