import { createClient } from '@supabase/supabase-js'
import { isAdminAuthed } from '../_auth.js'

const BUCKET = 'lesson-images'
const MAX_BYTES = 5 * 1024 * 1024

let client = null
function db() {
  if (!client) {
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    })
  }
  return client
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
    return
  }
  if (!isAdminAuthed(req)) {
    res.status(401).json({ error: '로그인이 필요합니다.' })
    return
  }

  const { filename, dataBase64, contentType } = req.body || {}
  if (!filename || !dataBase64) {
    res.status(400).json({ error: 'filename, dataBase64가 필요합니다.' })
    return
  }

  const buffer = Buffer.from(dataBase64, 'base64')
  if (buffer.length > MAX_BYTES) {
    res.status(413).json({ error: '이미지는 5MB 이하만 업로드할 수 있습니다.' })
    return
  }

  const ext = (filename.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin'
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

  const { error } = await db().storage.from(BUCKET).upload(path, buffer, {
    contentType: contentType || 'application/octet-stream',
  })
  if (error) {
    res.status(500).json({ error: error.message })
    return
  }

  const { data } = db().storage.from(BUCKET).getPublicUrl(path)
  res.status(200).json({ url: data.publicUrl })
}
