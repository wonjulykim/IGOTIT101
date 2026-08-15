import { gradeWriting } from './_openrouter.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { prompt, conditions, model, similarAnswers, rubric, totalScore, studentAnswer } = body || {}

    const result = await gradeWriting({ prompt, conditions, model, similarAnswers, rubric, totalScore, studentAnswer })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message || '알 수 없는 오류가 발생했습니다.' })
  }
}
