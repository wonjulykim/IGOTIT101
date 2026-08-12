import { getOverride, setOverride, deleteOverride } from '../_store.js'
import { isAdminAuthed } from '../_auth.js'

export default async function handler(req, res) {
  const chapterId = req.query?.chapterId
  const lessonId = req.query?.lessonId
  if (!chapterId || !lessonId) {
    res.status(400).json({ error: 'chapterId, lessonId 쿼리 파라미터가 필요합니다.' })
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({ override: getOverride(chapterId, lessonId) })
    return
  }

  if (!isAdminAuthed(req)) {
    res.status(401).json({ error: '로그인이 필요합니다.' })
    return
  }

  if (req.method === 'PUT') {
    const { title, blocks } = req.body || {}
    if (!Array.isArray(blocks)) {
      res.status(400).json({ error: 'blocks 배열이 필요합니다.' })
      return
    }
    setOverride(chapterId, lessonId, { title: title || null, blocks })
    res.status(200).json({ ok: true })
    return
  }

  if (req.method === 'DELETE') {
    deleteOverride(chapterId, lessonId)
    res.status(200).json({ ok: true })
    return
  }

  res.status(405).json({ error: '지원하지 않는 메서드입니다.' })
}
