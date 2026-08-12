const STORAGE_KEY = 'agarit-progress-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { completedLessons: {}, quizScores: {} }
  } catch {
    return { completedLessons: {}, quizScores: {} }
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

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
}
