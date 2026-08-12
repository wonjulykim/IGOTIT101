import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import {
  getGameState,
  registerAnswer as registerAnswerRaw,
  registerLessonComplete as registerLessonCompleteRaw,
  awardXp as awardXpRaw,
  levelFromXp,
  xpForLevel,
} from '../utils/gamification'

const GameContext = createContext(null)

let toastId = 0

export function GameProvider({ children }) {
  const [state, setState] = useState(() => getGameState())
  const [toasts, setToasts] = useState([])

  const pushToast = useCallback((toast) => {
    const id = ++toastId
    setToasts((t) => [...t, { id, ...toast }])
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 3200)
  }, [])

  const handleGameResult = useCallback((result) => {
    setState(result.state)
    if (result.leveledUp) {
      pushToast({ kind: 'level', text: `레벨 업! Lv.${result.newLevel}` })
    }
    if (result.streakBonus) {
      pushToast({ kind: 'streak', text: `연속 정답 보너스 +${result.streakBonus}XP!` })
    }
    ;(result.newBadges || []).forEach((b) => {
      pushToast({ kind: 'badge', text: `업적 달성: ${b.icon} ${b.title}` })
    })
  }, [pushToast])

  const registerAnswer = useCallback((correct, xpAmount) => {
    const result = registerAnswerRaw(correct, xpAmount)
    handleGameResult(result)
    return result
  }, [handleGameResult])

  const registerLessonComplete = useCallback(() => {
    const result = registerLessonCompleteRaw()
    handleGameResult(result)
    return result
  }, [handleGameResult])

  const awardXp = useCallback((amount) => {
    const result = awardXpRaw(amount)
    handleGameResult(result)
    return result
  }, [handleGameResult])

  const value = useMemo(() => {
    const level = levelFromXp(state.xp)
    const currLevelXp = xpForLevel(level)
    const nextLevelXp = xpForLevel(level + 1)
    const levelProgress = (state.xp - currLevelXp) / (nextLevelXp - currLevelXp)
    return {
      ...state,
      level,
      levelProgress,
      nextLevelXp,
      toasts,
      registerAnswer,
      registerLessonComplete,
      awardXp,
    }
  }, [state, toasts, registerAnswer, registerLessonComplete, awardXp])

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used within GameProvider')
  return ctx
}
