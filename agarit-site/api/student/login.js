import { getOrCreateStudent } from '../_studentStore.js'
import { buildStudentLoginCookie } from '../_studentAuth.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
    return
  }

  const name = String(req.body?.name || '').trim()
  const classCode = String(req.body?.classCode || '').trim()
  if (!name || !classCode) {
    res.status(400).json({ error: '이름과 반 코드를 모두 입력해주세요.' })
    return
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    res.status(500).json({ error: '서버에 Supabase 설정(SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY)이 되어 있지 않습니다.' })
    return
  }

  try {
    const student = await getOrCreateStudent(name, classCode)
    res.setHeader('Set-Cookie', buildStudentLoginCookie(student.id))
    res.status(200).json({ ok: true, student: { id: student.id, name: student.name, classCode: student.class_code } })
  } catch (err) {
    res.status(500).json({ error: err.message || '로그인 중 오류가 발생했습니다.' })
  }
}
