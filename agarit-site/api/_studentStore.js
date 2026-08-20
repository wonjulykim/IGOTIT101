// 학생 로그인 및 학습 진행 데이터를 위한 Supabase 저장소.
// api/_store.js(관리자용 lesson_overrides)와 별도 클라이언트를 두어 서로 영향 없게 분리했다.

import { createClient } from '@supabase/supabase-js'

let client = null
function db() {
  if (!client) {
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    })
  }
  return client
}

export async function getOrCreateStudent(name, classCode) {
  const { data: existing, error: selErr } = await db()
    .from('students')
    .select('id, name, class_code')
    .eq('name', name)
    .eq('class_code', classCode)
    .maybeSingle()
  if (selErr) throw selErr

  if (existing) {
    await db().from('students').update({ last_seen_at: new Date().toISOString() }).eq('id', existing.id)
    return existing
  }

  const { data: created, error: insErr } = await db()
    .from('students')
    .insert({ name, class_code: classCode })
    .select('id, name, class_code')
    .single()
  if (insErr) throw insErr
  return created
}

export async function getStudentById(id) {
  const { data, error } = await db().from('students').select('id, name, class_code').eq('id', id).maybeSingle()
  if (error) throw error
  return data
}

const SYNC_HANDLERS = {
  lessonComplete: async (studentId, p) => {
    const { error } = await db()
      .from('completed_lessons')
      .upsert({ student_id: studentId, chapter_id: p.chapterId, lesson_id: p.lessonId, completed_at: new Date().toISOString() })
    if (error) throw error
  },
  quizScore: async (studentId, p) => {
    const { error } = await db()
      .from('quiz_scores')
      .upsert({
        student_id: studentId,
        chapter_id: p.chapterId,
        quiz_type: p.quizType,
        score: p.score,
        total: p.total,
        updated_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  writingResult: async (studentId, p) => {
    const { error } = await db()
      .from('writing_results')
      .upsert({
        student_id: studentId,
        unit_id: p.unitId,
        question_id: p.questionId,
        result: p.result,
        updated_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  essayAnswer: async (studentId, p) => {
    const { error } = await db()
      .from('essay_answers')
      .upsert({
        student_id: studentId,
        unit_id: p.unitId,
        question_id: p.questionId,
        answer_text: p.text ?? '',
        updated_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  koreanDraft: async (studentId, p) => {
    const { error } = await db()
      .from('korean_drafts')
      .upsert({
        student_id: studentId,
        unit_id: p.unitId,
        question_id: p.questionId,
        draft_text: p.text ?? '',
        updated_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  stepDraft: async (studentId, p) => {
    const { error } = await db()
      .from('step_drafts')
      .upsert({
        student_id: studentId,
        unit_id: p.unitId,
        question_id: p.questionId,
        step_key: p.stepKey,
        draft_text: p.text ?? '',
        updated_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  vocabAdd: async (studentId, p) => {
    const { error } = await db()
      .from('vocab_words')
      .upsert({
        student_id: studentId,
        unit_id: p.unitId,
        word: p.word,
        meaning: p.meaning ?? '',
        added_at: new Date().toISOString(),
      })
    if (error) throw error
  },
  vocabRemove: async (studentId, p) => {
    const { error } = await db()
      .from('vocab_words')
      .delete()
      .eq('student_id', studentId)
      .eq('unit_id', p.unitId)
      .eq('word', p.word)
    if (error) throw error
  },
}

export async function applySync(studentId, kind, payload) {
  const handler = SYNC_HANDLERS[kind]
  if (!handler) throw new Error(`알 수 없는 sync kind: ${kind}`)
  await handler(studentId, payload || {})
}

export async function fetchAllStudentData(studentId) {
  const [lessons, scores, writing, essays, korean, steps, vocab] = await Promise.all([
    db().from('completed_lessons').select('chapter_id, lesson_id').eq('student_id', studentId),
    db().from('quiz_scores').select('chapter_id, quiz_type, score, total').eq('student_id', studentId),
    db().from('writing_results').select('unit_id, question_id, result').eq('student_id', studentId),
    db().from('essay_answers').select('unit_id, question_id, answer_text').eq('student_id', studentId),
    db().from('korean_drafts').select('unit_id, question_id, draft_text').eq('student_id', studentId),
    db().from('step_drafts').select('unit_id, question_id, step_key, draft_text').eq('student_id', studentId),
    db().from('vocab_words').select('unit_id, word, meaning, added_at').eq('student_id', studentId),
  ])
  for (const r of [lessons, scores, writing, essays, korean, steps, vocab]) {
    if (r.error) throw r.error
  }

  const completedLessons = {}
  ;(lessons.data || []).forEach((row) => {
    completedLessons[`${row.chapter_id}/${row.lesson_id}`] = true
  })

  const quizScores = {}
  ;(scores.data || []).forEach((row) => {
    quizScores[row.chapter_id] = quizScores[row.chapter_id] || {}
    quizScores[row.chapter_id][row.quiz_type] = { score: row.score, total: row.total }
  })

  const writingScores = {}
  ;(writing.data || []).forEach((row) => {
    writingScores[row.unit_id] = writingScores[row.unit_id] || {}
    writingScores[row.unit_id][row.question_id] = row.result
  })

  const essayAnswers = {}
  ;(essays.data || []).forEach((row) => {
    essayAnswers[row.unit_id] = essayAnswers[row.unit_id] || {}
    essayAnswers[row.unit_id][row.question_id] = row.answer_text
  })

  const koreanDrafts = {}
  ;(korean.data || []).forEach((row) => {
    koreanDrafts[row.unit_id] = koreanDrafts[row.unit_id] || {}
    koreanDrafts[row.unit_id][row.question_id] = row.draft_text
  })

  const stepDrafts = {}
  ;(steps.data || []).forEach((row) => {
    stepDrafts[row.unit_id] = stepDrafts[row.unit_id] || {}
    stepDrafts[row.unit_id][row.question_id] = stepDrafts[row.unit_id][row.question_id] || {}
    stepDrafts[row.unit_id][row.question_id][row.step_key] = row.draft_text
  })

  const vocabWords = {}
  ;(vocab.data || []).forEach((row) => {
    vocabWords[row.unit_id] = vocabWords[row.unit_id] || {}
    vocabWords[row.unit_id][row.word] = { meaning: row.meaning, addedAt: row.added_at }
  })

  return { completedLessons, quizScores, writingScores, essayAnswers, koreanDrafts, stepDrafts, vocabWords }
}
