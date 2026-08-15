const STORAGE_KEY = 'agarit-progress-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const data = raw ? JSON.parse(raw) : {}
    return { completedLessons: {}, quizScores: {}, writingScores: {}, ...data }
  } catch {
    return { completedLessons: {}, quizScores: {}, writingScores: {} }
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getProgress() {
  return load()
}

export function markLessonComplete(chapterId, lessonId) {
  const data = load()
  data.completedLessons[`${chapterId}/${lessonId}`] = true
  save(data)
}

export function isLessonComplete(chapterId, lessonId) {
  const data = load()
  return !!data.completedLessons[`${chapterId}/${lessonId}`]
}

export function saveQuizScore(chapterId, quizType, score, total) {
  const data = load()
  if (!data.quizScores[chapterId]) data.quizScores[chapterId] = {}
  data.quizScores[chapterId][quizType] = { score, total, at: Date.now() }
  save(data)
}

export function getQuizScore(chapterId, quizType) {
  const data = load()
  return data.quizScores?.[chapterId]?.[quizType] || null
}

export function saveWritingResult(unitId, questionId, result) {
  const data = load()
  if (!data.writingScores[unitId]) data.writingScores[unitId] = {}
  data.writingScores[unitId][questionId] = { ...result, at: Date.now() }
  save(data)
}

export function getWritingResult(unitId, questionId) {
  const data = load()
  return data.writingScores?.[unitId]?.[questionId] || null
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
}
