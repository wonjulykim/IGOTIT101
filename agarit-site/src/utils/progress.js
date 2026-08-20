import { getStudentSession, fetchStudentData, syncOne } from './studentApi'

const STORAGE_KEY = 'agarit-progress-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const data = raw ? JSON.parse(raw) : {}
    return {
      completedLessons: {},
      quizScores: {},
      writingScores: {},
      koreanDrafts: {},
      stepDrafts: {},
      essayAnswers: {},
      vocabWords: {},
      ...data,
    }
  } catch {
    return {
      completedLessons: {},
      quizScores: {},
      writingScores: {},
      koreanDrafts: {},
      stepDrafts: {},
      essayAnswers: {},
      vocabWords: {},
    }
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

// --- 학생 로그인 세션(메모리 캐시) 및 서버 동기화 ---------------------------

let currentStudent = null

export function setCurrentStudent(student) {
  currentStudent = student || null
}

export function getCurrentStudent() {
  return currentStudent
}

// 타이핑 중 매 글자마다 서버로 요청을 보내지 않도록, 같은 key로 들어오는 동기화는
// 입력이 잠시 멈췄을 때(디바운스 후) 한 번만 전송한다. 로컬(localStorage) 저장은
// 항상 즉시 이루어지므로 이 디바운스는 네트워크 동기화에만 영향을 준다.
const syncTimers = new Map()
const DEBOUNCE_MS = 800

function queueSync(kind, payload, debounceKey) {
  if (!currentStudent) return
  if (!debounceKey) {
    syncOne(kind, payload).catch(() => {})
    return
  }
  const existing = syncTimers.get(debounceKey)
  if (existing) clearTimeout(existing)
  const timer = setTimeout(() => {
    syncTimers.delete(debounceKey)
    syncOne(kind, payload).catch(() => {
      // 네트워크 오류 등으로 동기화에 실패해도 로컬 저장은 이미 완료된 상태이므로 조용히 무시한다.
    })
  }, DEBOUNCE_MS)
  syncTimers.set(debounceKey, timer)
}

export function hydrateFromServer(serverData) {
  if (!serverData) return
  const data = load()
  const buckets = ['completedLessons', 'quizScores', 'writingScores', 'essayAnswers', 'koreanDrafts', 'stepDrafts', 'vocabWords']
  buckets.forEach((b) => {
    data[b] = { ...(data[b] || {}), ...(serverData[b] || {}) }
  })
  save(data)
}

export async function bootstrapStudentSession() {
  try {
    const res = await getStudentSession()
    if (res?.loggedIn) {
      setCurrentStudent(res.student)
      const serverData = await fetchStudentData()
      hydrateFromServer(serverData)
    }
  } catch {
    // 세션 확인에 실패하면 로컬 저장 데이터만으로 계속 동작한다.
  }
  return currentStudent
}

// --- 학습 진행 데이터 ------------------------------------------------------

export function getProgress() {
  return load()
}

export function markLessonComplete(chapterId, lessonId) {
  const data = load()
  data.completedLessons[`${chapterId}/${lessonId}`] = true
  save(data)
  queueSync('lessonComplete', { chapterId, lessonId })
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
  queueSync('quizScore', { chapterId, quizType, score, total })
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
  queueSync('writingResult', { unitId, questionId, result })
}

export function getWritingResult(unitId, questionId) {
  const data = load()
  return data.writingScores?.[unitId]?.[questionId] || null
}

export function saveKoreanDraft(unitId, questionId, text) {
  const data = load()
  if (!data.koreanDrafts[unitId]) data.koreanDrafts[unitId] = {}
  data.koreanDrafts[unitId][questionId] = text
  save(data)
  queueSync('koreanDraft', { unitId, questionId, text }, `korean:${unitId}:${questionId}`)
}

export function getKoreanDraft(unitId, questionId) {
  const data = load()
  return data.koreanDrafts?.[unitId]?.[questionId] || ''
}

export function saveStepDraft(unitId, questionId, stepKey, text) {
  const data = load()
  if (!data.stepDrafts[unitId]) data.stepDrafts[unitId] = {}
  if (!data.stepDrafts[unitId][questionId]) data.stepDrafts[unitId][questionId] = {}
  data.stepDrafts[unitId][questionId][stepKey] = text
  save(data)
  queueSync('stepDraft', { unitId, questionId, stepKey, text }, `step:${unitId}:${questionId}:${stepKey}`)
}

export function getStepDraft(unitId, questionId, stepKey) {
  const data = load()
  return data.stepDrafts?.[unitId]?.[questionId]?.[stepKey] || ''
}

export function saveEssayAnswer(unitId, questionId, text) {
  const data = load()
  if (!data.essayAnswers[unitId]) data.essayAnswers[unitId] = {}
  data.essayAnswers[unitId][questionId] = text
  save(data)
  queueSync('essayAnswer', { unitId, questionId, text }, `essay:${unitId}:${questionId}`)
}

export function getEssayAnswer(unitId, questionId) {
  const data = load()
  return data.essayAnswers?.[unitId]?.[questionId] || ''
}

// --- 단어장 ----------------------------------------------------------------

export function addVocabWord(unitId, word, meaning) {
  const data = load()
  if (!data.vocabWords[unitId]) data.vocabWords[unitId] = {}
  data.vocabWords[unitId][word] = { meaning, addedAt: Date.now() }
  save(data)
  queueSync('vocabAdd', { unitId, word, meaning })
}

export function removeVocabWord(unitId, word) {
  const data = load()
  if (data.vocabWords[unitId]) delete data.vocabWords[unitId][word]
  save(data)
  queueSync('vocabRemove', { unitId, word })
}

export function isVocabSaved(unitId, word) {
  const data = load()
  return !!data.vocabWords?.[unitId]?.[word]
}

export function getAllVocabWords() {
  const data = load()
  return data.vocabWords || {}
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
}
