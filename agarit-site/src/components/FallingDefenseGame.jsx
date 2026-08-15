import { useEffect, useRef, useState } from 'react'
import { useGame } from '../context/GameContext'
import { XP_RULES } from '../utils/gamification'
import { isMuted, playClear, playCorrect, playOver, playWrong, setMuted } from '../utils/sound'
import './FallingDefenseGame.css'

const START_LIVES = 3
const START_FALL_MS = 6200
const MIN_FALL_MS = 2600
const FALL_MS_STEP = 320
const NEXT_DELAY_MS = 900

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function FallingDefenseGame({ questions, onExit }) {
  const { registerAnswer } = useGame()
  const [phase, setPhase] = useState('ready') // ready | falling | answered | over | clear
  const [order, setOrder] = useState(() => shuffle(questions))
  const [index, setIndex] = useState(0)
  const [lives, setLives] = useState(START_LIVES)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(0)
  const [wrongClicked, setWrongClicked] = useState([])
  const [resultKind, setResultKind] = useState(null) // 'correct' | 'wrong' | 'missed'
  const [muted, setMutedState] = useState(() => isMuted())
  const missTimerRef = useRef(null)
  const advanceRef = useRef(null)
  const answeredRef = useRef(false)

  const current = order[index]
  const fallMs = Math.max(MIN_FALL_MS, START_FALL_MS - round * FALL_MS_STEP)
  const columns = current ? current.options.map((_, i) => i) : []

  useEffect(() => () => {
    clearTimeout(missTimerRef.current)
    clearTimeout(advanceRef.current)
  }, [])

  function toggleMute() {
    const next = !muted
    setMuted(next)
    setMutedState(next)
  }

  function start() {
    setOrder(shuffle(questions))
    setIndex(0)
    setLives(START_LIVES)
    setScore(0)
    setRound(0)
    setWrongClicked([])
    setResultKind(null)
    answeredRef.current = false
    setPhase('falling')
  }

  function armMissTimer(ms) {
    clearTimeout(missTimerRef.current)
    missTimerRef.current = setTimeout(() => {
      if (answeredRef.current) return
      resolveRound(false, 'missed')
    }, ms)
  }

  useEffect(() => {
    if (phase !== 'falling') return
    answeredRef.current = false
    setWrongClicked([])
    setResultKind(null)
    armMissTimer(fallMs)
    return () => clearTimeout(missTimerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index])

  function resolveRound(correct, kind) {
    if (answeredRef.current) return
    answeredRef.current = true
    clearTimeout(missTimerRef.current)
    setResultKind(kind)
    setPhase('answered')
    registerAnswer(correct, XP_RULES.mcqCorrect)

    let nextLives = lives
    if (correct) {
      playCorrect()
      setScore((s) => s + 1)
      setRound((r) => r + 1)
    } else {
      playWrong()
      nextLives = lives - 1
      setLives(nextLives)
    }

    advanceRef.current = setTimeout(() => {
      if (nextLives <= 0) {
        playOver()
        setPhase('over')
        return
      }
      if (index + 1 >= order.length) {
        playClear()
        setPhase('clear')
        return
      }
      setIndex((i) => i + 1)
      setPhase('falling')
    }, NEXT_DELAY_MS)
  }

  function handleBlockClick(optIndex) {
    if (phase !== 'falling' || answeredRef.current) return
    if (optIndex === current.answer) {
      resolveRound(true, 'correct')
    } else {
      setWrongClicked((w) => [...w, optIndex])
      playWrong()
      setLives((l) => {
        const nl = l - 1
        if (nl <= 0) {
          answeredRef.current = true
          clearTimeout(missTimerRef.current)
          setResultKind('wrong')
          setPhase('answered')
          registerAnswer(false, XP_RULES.mcqCorrect)
          advanceRef.current = setTimeout(() => {
            playOver()
            setPhase('over')
          }, NEXT_DELAY_MS)
        }
        return nl
      })
    }
  }

  const muteButton = (
    <button className="gq-mute" onClick={toggleMute} title={muted ? '소리 켜기' : '소리 끄기'}>
      {muted ? '🔇' : '🔊'}
    </button>
  )

  if (phase === 'ready') {
    return (
      <div className="fdg fdg-center">
        {muteButton}
        <div className="fdg-icon">🧱</div>
        <h2>낙하 방어전</h2>
        <ul className="fdg-rules">
          <li>⬇️ 보기들이 위에서 아래로 떨어져요.</li>
          <li>🎯 정답 블록을 바닥에 닿기 전에 클릭하세요!</li>
          <li>💥 오답을 누르거나 정답을 놓치면 목숨이 하나 줄어요.</li>
          <li>🚀 정답을 맞힐수록 블록이 점점 더 빨리 떨어져요.</li>
          <li>목숨은 {START_LIVES}개! 모두 잃으면 게임 오버.</li>
        </ul>
        <button className="btn-primary" onClick={start}>시작하기</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'over') {
    return (
      <div className="fdg fdg-center">
        {muteButton}
        <div className="fdg-icon fdg-shake">💥</div>
        <h2>게임 오버</h2>
        <p className="fdg-result-line">{index + 1} / {order.length}문제까지 방어, <strong>{score}</strong>개 정답!</p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'clear') {
    return (
      <div className="fdg fdg-center">
        {muteButton}
        <div className="fdg-icon fdg-bounce">🛡️</div>
        <h2>방어 성공!</h2>
        <div className="fdg-stars">{'⭐'.repeat(lives)}{'☆'.repeat(START_LIVES - lives)}</div>
        <p className="fdg-result-line">{order.length}문제 중 <strong>{score}</strong>개 정답!</p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  const isAnswered = phase === 'answered'
  const n = current.options.length

  return (
    <div className="fdg">
      <div className="fdg-topbar">
        <div className="fdg-lives">{Array.from({ length: START_LIVES }).map((_, i) => <span key={i}>{i < lives ? '❤️' : '🖤'}</span>)}</div>
        <div className="fdg-progress">{index + 1} / {order.length}</div>
        <div className="fdg-score">🎯 {score}</div>
        {muteButton}
      </div>

      <p className="fdg-question">{current.q}</p>

      <div className="fdg-arena">
        <div className="fdg-fall-zone">
          {columns.map((optIndex) => {
            const isWrong = wrongClicked.includes(optIndex)
            const isCorrectReveal = isAnswered && optIndex === current.answer
            let cls = 'fdg-block'
            if (isWrong) cls += ' fdg-block-wrong'
            if (isCorrectReveal) cls += ' fdg-block-correct'
            return (
              <button
                key={`${index}-${optIndex}`}
                className={cls}
                style={{
                  left: `${(optIndex / n) * 100}%`,
                  width: `${100 / n}%`,
                  animationDuration: `${fallMs}ms`,
                  animationPlayState: isAnswered ? 'paused' : 'running',
                }}
                disabled={isWrong || isAnswered}
                onClick={() => handleBlockClick(optIndex)}
              >
                {current.options[optIndex]}
              </button>
            )
          })}
          <div className="fdg-ground" />
        </div>
      </div>

      {isAnswered && (
        <div className="fdg-feedback">
          {resultKind === 'correct' && '✅ 정답 방어 성공!'}
          {resultKind === 'missed' && '⏬ 정답을 놓쳤어요!'}
          {resultKind === 'wrong' && '❌ 오답을 클릭했어요!'}
          {current.explain && <p className="fdg-explain">{current.explain}</p>}
        </div>
      )}

      <button className="fdg-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
