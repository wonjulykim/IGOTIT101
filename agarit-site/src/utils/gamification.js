const KEY = 'agarit-game-v1'

const DEFAULT_STATE = {
  xp: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  lessonsCompletedCount: 0,
  unlocked: {},
}

export const XP_RULES = {
  mcqCorrect: 10,
  shortCorrect: 15,
  essayAttempt: 8,
  lessonComplete: 20,
  streakBonusEvery: 5, // 5연속마다 보너스
  streakBonusXp: 20,
}

// 레벨 n에 도달하는데 필요한 총 XP: 100 * n * (n+1) / 2  (레벨이 오를수록 점점 더 많은 XP 필요)
export function levelFromXp(xp) {
  let level = 1
  while (xpForLevel(level + 1) <= xp) level++
  return level
}
export function xpForLevel(level) {
  return 50 * level * (level - 1)
}

export const BADGES = [
  {
    id: 'first_correct',
    icon: '🌱',
    title: '첫 정답',
    desc: '퀴즈 문제를 처음으로 맞혔어요.',
    check: (s) => s.totalCorrect >= 1,
  },
  {
    id: 'streak5',
    icon: '🔥',
    title: '연속 정답 5!',
    desc: '5문제를 연속으로 맞혔어요.',
    check: (s) => s.bestStreak >= 5,
  },
  {
    id: 'streak10',
    icon: '🚀',
    title: '연속 정답 10!',
    desc: '10문제를 연속으로 맞혔어요. 문법 감각이 살아있네요!',
    check: (s) => s.bestStreak >= 10,
  },
  {
    id: 'lesson1',
    icon: '📘',
    title: '첫 레슨 완료',
    desc: '첫 번째 레슨을 완료했어요.',
    check: (s) => s.lessonsCompletedCount >= 1,
  },
  {
    id: 'lesson10',
    icon: '📚',
    title: '레슨 10개 완료',
    desc: '벌써 10개의 레슨을 끝냈어요.',
    check: (s) => s.lessonsCompletedCount >= 10,
  },
  {
    id: 'level5',
    icon: '⭐',
    title: '레벨 5 달성',
    desc: '꾸준한 학습으로 레벨 5에 도달했어요.',
    check: (s) => levelFromXp(s.xp) >= 5,
  },
  {
    id: 'level10',
    icon: '🏆',
    title: '레벨 10 달성',
    desc: '문법 마스터의 길에 들어섰어요.',
    check: (s) => levelFromXp(s.xp) >= 10,
  },
  {
    id: 'correct50',
    icon: '🎯',
    title: '정답 50개',
    desc: '누적 정답 50개를 달성했어요.',
    check: (s) => s.totalCorrect >= 50,
  },
]

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function getGameState() {
  return load()
}

function applyBadgeChecks(state) {
  const newlyUnlocked = []
  BADGES.forEach((b) => {
    if (!state.unlocked[b.id] && b.check(state)) {
      state.unlocked[b.id] = true
      newlyUnlocked.push(b)
    }
  })
  return newlyUnlocked
}

// correct: boolean, xpAmount: 정답일 때 얻는 기본 XP
export function registerAnswer(correct, xpAmount) {
  const state = load()
  const prevLevel = levelFromXp(state.xp)
  let xpGained = 0
  let streakBonus = 0

  state.totalAnswered += 1
  if (correct) {
    state.totalCorrect += 1
    state.currentStreak += 1
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak)
    xpGained += xpAmount
    if (state.currentStreak > 0 && state.currentStreak % XP_RULES.streakBonusEvery === 0) {
      streakBonus = XP_RULES.streakBonusXp
      xpGained += streakBonus
    }
  } else {
    state.currentStreak = 0
  }

  state.xp += xpGained
  const newLevel = levelFromXp(state.xp)
  const newBadges = applyBadgeChecks(state)
  save(state)

  return {
    state,
    xpGained,
    streakBonus,
    leveledUp: newLevel > prevLevel,
    newLevel,
    newBadges,
  }
}

// 스트릭에는 영향을 주지 않고 XP만 지급 (예: 서술형 문제 참여)
export function awardXp(amount) {
  const state = load()
  const prevLevel = levelFromXp(state.xp)
  state.xp += amount
  const newLevel = levelFromXp(state.xp)
  const newBadges = applyBadgeChecks(state)
  save(state)
  return {
    state,
    xpGained: amount,
    leveledUp: newLevel > prevLevel,
    newLevel,
    newBadges,
  }
}

export function registerLessonComplete() {
  const state = load()
  const prevLevel = levelFromXp(state.xp)
  state.lessonsCompletedCount += 1
  state.xp += XP_RULES.lessonComplete
  const newLevel = levelFromXp(state.xp)
  const newBadges = applyBadgeChecks(state)
  save(state)
  return {
    state,
    xpGained: XP_RULES.lessonComplete,
    leveledUp: newLevel > prevLevel,
    newLevel,
    newBadges,
  }
}

export function resetGameState() {
  localStorage.removeItem(KEY)
}
