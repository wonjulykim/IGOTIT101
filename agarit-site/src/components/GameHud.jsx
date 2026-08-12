import { useGame } from '../context/GameContext'
import './GameHud.css'

export default function GameHud({ compact }) {
  const { level, xp, levelProgress, currentStreak } = useGame()

  return (
    <div className={`game-hud ${compact ? 'compact' : ''}`}>
      <div className="game-hud-level">
        <span className="game-hud-badge">Lv.{level}</span>
        <div className="game-hud-bar">
          <div className="game-hud-bar-fill" style={{ width: `${Math.min(100, Math.max(0, levelProgress * 100))}%` }} />
        </div>
        <span className="game-hud-xp">{xp} XP</span>
      </div>
      {currentStreak > 0 && (
        <div className="game-hud-streak">🔥 {currentStreak}연속</div>
      )}
    </div>
  )
}
