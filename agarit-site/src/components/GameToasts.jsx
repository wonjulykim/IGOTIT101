import { useGame } from '../context/GameContext'
import './GameToasts.css'

export default function GameToasts() {
  const { toasts } = useGame()
  if (toasts.length === 0) return null
  return (
    <div className="game-toast-stack">
      {toasts.map((t) => (
        <div key={t.id} className={`game-toast toast-${t.kind}`}>
          {t.text}
        </div>
      ))}
    </div>
  )
}
