import { useEffect, useRef, useState } from 'react'
import { useGame } from '../context/GameContext'
import { XP_RULES } from '../utils/gamification'
import { isMuted, playClear, playCombo, playCorrect, playWrong, setMuted } from '../utils/sound'
import './MemoryMatchGame.css'

const MAX_PAIRS = 6
const FLIP_BACK_DELAY_MS = 800

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + '…' : str
}

function buildDeck(questions) {
  const pool = shuffle(questions).slice(0, Math.min(MAX_PAIRS, questions.length))
  const cards = pool.flatMap((q) => [
    { cardId: `${q.id}-q`, pairId: q.id, kind: 'q', label: truncate(q.q, 60) },
    { cardId: `${q.id}-a`, pairId: q.id, kind: 'a', label: truncate(q.options[q.answer], 40) },
  ])
  return { deck: shuffle(cards), totalPairs: pool.length }
}

export default function MemoryMatchGame({ questions, onExit }) {
  const { registerAnswer } = useGame()
  const [phase, setPhase] = useState('ready') // ready | playing | clear
  const [{ deck, totalPairs }, setBoard] = useState(() => buildDeck(questions))
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState(new Set())
  const [moves, setMoves] = useState(0)
  const [combo, setCombo] = useState(0)
  const [bestCombo, setBestCombo] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [wrongPair, setWrongPair] = useState([])
  const [muted, setMutedState] = useState(() => isMuted())
  const timerRef = useRef(null)
  const flipBackRef = useRef(null)
  const lockRef = useRef(false)

  useEffect(() => {
    if (phase !== 'playing') return
    timerRef.current = setInterval(() => setElapsed((t) => t + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [phase])

  useEffect(() => () => {
    clearInterval(timerRef.current)
    clearTimeout(flipBackRef.current)
  }, [])

  function toggleMute() {
    const next = !muted
    setMuted(next)
    setMutedState(next)
  }

  function start() {
    setBoard(buildDeck(questions))
    setFlipped([])
    setMatched(new Set())
    setMoves(0)
    setCombo(0)
    setBestCombo(0)
    setElapsed(0)
    setWrongPair([])
    lockRef.current = false
    setPhase('playing')
  }

  function handleCardClick(cardIndex) {
    if (phase !== 'playing' || lockRef.current) return
    if (flipped.includes(cardIndex)) return
    if (matched.has(deck[cardIndex].pairId)) return
    if (flipped.length >= 2) return

    const nextFlipped = [...flipped, cardIndex]
    setFlipped(nextFlipped)

    if (nextFlipped.length === 2) {
      lockRef.current = true
      setMoves((m) => m + 1)
      const [a, b] = nextFlipped
      const cardA = deck[a]
      const cardB = deck[b]
      const isMatch = cardA.pairId === cardB.pairId && cardA.kind !== cardB.kind

      if (isMatch) {
        playCorrect()
        registerAnswer(true, XP_RULES.mcqCorrect)
        setCombo((c) => {
          const nc = c + 1
          setBestCombo((bc) => Math.max(bc, nc))
          if (nc >= 3) playCombo()
          return nc
        })
        setTimeout(() => {
          setMatched((prev) => {
            const next = new Set(prev)
            next.add(cardA.pairId)
            if (next.size === totalPairs) {
              clearInterval(timerRef.current)
              playClear()
              setPhase('clear')
            }
            return next
          })
          setFlipped([])
          lockRef.current = false
        }, 350)
      } else {
        playWrong()
        registerAnswer(false, 0)
        setCombo(0)
        setWrongPair(nextFlipped)
        flipBackRef.current = setTimeout(() => {
          setFlipped([])
          setWrongPair([])
          lockRef.current = false
        }, FLIP_BACK_DELAY_MS)
      }
    }
  }

  const muteButton = (
    <button className="gq-mute" onClick={toggleMute} title={muted ? '소리 켜기' : '소리 끄기'}>
      {muted ? '🔇' : '🔊'}
    </button>
  )

  if (phase === 'ready') {
    return (
      <div className="mmg mmg-center">
        {muteButton}
        <div className="mmg-icon">🧩</div>
        <h2>짝맞추기 메모리</h2>
        <ul className="mmg-rules">
          <li>🃏 카드를 뒤집어 문제와 정답 짝을 찾아보세요.</li>
          <li>✅ 짝이 맞으면 카드가 고정되고, 틀리면 다시 뒤집혀요.</li>
          <li>🔥 연속으로 짝을 맞히면 콤보가 쌓여요.</li>
          <li>⏱️ 모든 짝을 최대한 적은 이동 횟수와 빠른 시간으로 맞춰보세요!</li>
        </ul>
        <button className="btn-primary" onClick={start}>시작하기</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'clear') {
    const stars = moves <= totalPairs * 1.5 ? 3 : moves <= totalPairs * 2.5 ? 2 : 1
    return (
      <div className="mmg mmg-center">
        {muteButton}
        <div className="mmg-icon mmg-bounce">🎉</div>
        <h2>모두 짝을 맞췄어요!</h2>
        <div className="mmg-stars">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
        <p className="mmg-result-line">{moves}번 만에 완성 · {elapsed}초 · 최고 콤보 🔥{bestCombo}</p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  return (
    <div className="mmg">
      <div className="mmg-topbar">
        <div className="mmg-stat">⏱️ {elapsed}s</div>
        <div className="mmg-stat">🔁 {moves}회</div>
        {combo >= 2 && <div className="mmg-combo">🔥 x{combo}</div>}
        <div className="mmg-stat mmg-stat-right">{matched.size} / {totalPairs}</div>
        {muteButton}
      </div>

      <div className="mmg-grid">
        {deck.map((card, i) => {
          const isMatched = matched.has(card.pairId)
          const isFlipped = flipped.includes(i) || isMatched
          const isWrong = wrongPair.includes(i)
          return (
            <button
              key={card.cardId}
              className={`mmg-card ${isFlipped ? 'is-flipped' : ''} ${isMatched ? 'is-matched' : ''} ${isWrong ? 'is-wrong' : ''}`}
              onClick={() => handleCardClick(i)}
              disabled={isMatched}
            >
              <div className="mmg-card-inner">
                <div className="mmg-card-face mmg-card-back">?</div>
                <div className={`mmg-card-face mmg-card-front ${card.kind === 'q' ? 'is-q' : 'is-a'}`}>
                  {card.label}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <button className="mmg-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
