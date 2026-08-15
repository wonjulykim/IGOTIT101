import { useEffect, useRef, useState } from 'react'
import { useGame } from '../context/GameContext'
import { XP_RULES } from '../utils/gamification'
import { isShortAnswerCorrect } from '../utils/grading'
import { isMuted, playClear, playCorrect, playOver, playWrong, setMuted } from '../utils/sound'
import './TypingRaceGame.css'

const TIME_PER_QUESTION = 20
const START_LIVES = 3
const FEEDBACK_DELAY_MS = 1300

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function TypingRaceGame({ questions, onExit }) {
  const { registerAnswer } = useGame()
  const [phase, setPhase] = useState('ready') // ready | racing | answered | over | clear
  const [order, setOrder] = useState(() => shuffle(questions))
  const [index, setIndex] = useState(0)
  const [lives, setLives] = useState(START_LIVES)
  const [playerPct, setPlayerPct] = useState(0)
  const [rivalPct, setRivalPct] = useState(0)
  const [input, setInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [lastCorrect, setLastCorrect] = useState(null)
  const [score, setScore] = useState(0)
  const [rivalWon, setRivalWon] = useState(false)
  const [muted, setMutedState] = useState(() => isMuted())
  const tickRef = useRef(null)
  const advanceRef = useRef(null)
  const inputRef = useRef(null)

  const current = order[index]
  const step = 100 / order.length
  const rivalPerSec = 100 / (order.length * TIME_PER_QUESTION) * 1.05

  useEffect(() => {
    if (phase !== 'racing') return
    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(tickRef.current)
          handleSubmit(true)
          return 0
        }
        return t - 1
      })
      setRivalPct((p) => Math.min(100, p + rivalPerSec))
    }, 1000)
    return () => clearInterval(tickRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index])

  useEffect(() => {
    if (phase === 'racing' && inputRef.current) inputRef.current.focus()
  }, [phase, index])

  useEffect(() => () => {
    clearInterval(tickRef.current)
    clearTimeout(advanceRef.current)
  }, [])

  useEffect(() => {
    if (rivalPct >= 100 && phase === 'racing') {
      clearInterval(tickRef.current)
      setRivalWon(true)
      playOver()
      setPhase('over')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rivalPct])

  function toggleMute() {
    const next = !muted
    setMuted(next)
    setMutedState(next)
  }

  function start() {
    setOrder(shuffle(questions))
    setIndex(0)
    setLives(START_LIVES)
    setPlayerPct(0)
    setRivalPct(0)
    setInput('')
    setTimeLeft(TIME_PER_QUESTION)
    setLastCorrect(null)
    setScore(0)
    setRivalWon(false)
    setPhase('racing')
  }

  function handleSubmit(timedOut = false) {
    if (phase !== 'racing') return
    clearInterval(tickRef.current)
    const correct = !timedOut && isShortAnswerCorrect(input, current.answers)
    setLastCorrect(correct)
    setPhase('answered')
    registerAnswer(correct, XP_RULES.shortCorrect)

    let nextLives = lives
    if (correct) {
      playCorrect()
      setScore((s) => s + 1)
      setPlayerPct((p) => Math.min(100, p + step))
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
      setInput('')
      setTimeLeft(TIME_PER_QUESTION)
      setPhase('racing')
    }, FEEDBACK_DELAY_MS)
  }

  const muteButton = (
    <button className="gq-mute" onClick={toggleMute} title={muted ? '소리 켜기' : '소리 끄기'}>
      {muted ? '🔇' : '🔊'}
    </button>
  )

  if (phase === 'ready') {
    return (
      <div className="trg trg-center">
        {muteButton}
        <div className="trg-icon">⌨️</div>
        <h2>스피드 타자전</h2>
        <ul className="trg-rules">
          <li>🏃 정답을 빨리, 정확하게 입력할수록 캐릭터가 앞으로 나가요.</li>
          <li>🤖 라이벌은 시간이 지나면 저절로 전진해요. 라이벌보다 먼저 결승선에 도착하세요!</li>
          <li>⏱️ 문제당 {TIME_PER_QUESTION}초, 목숨은 {START_LIVES}개예요.</li>
          <li>오답이거나 시간 초과되면 목숨이 하나 줄어요.</li>
        </ul>
        <button className="btn-primary" onClick={start}>시작하기</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'over') {
    return (
      <div className="trg trg-center">
        {muteButton}
        <div className="trg-icon">{rivalWon ? '🤖' : '💦'}</div>
        <h2>{rivalWon ? '라이벌에게 추월당했어요!' : '완주 실패'}</h2>
        <p className="trg-result-line">
          {index + 1} / {order.length}문제까지 도전, <strong>{score}</strong>개 정답!
        </p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'clear') {
    const won = playerPct >= rivalPct
    return (
      <div className="trg trg-center">
        {muteButton}
        <div className="trg-icon">{won ? '🏆' : '🥈'}</div>
        <h2>{won ? '1등으로 골인!' : '아쉽게 2등...'}</h2>
        <p className="trg-result-line">{order.length}문제 중 <strong>{score}</strong>개 정답!</p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  const isAnswered = phase === 'answered'

  return (
    <div className="trg">
      <div className="trg-topbar">
        <div className="trg-lives">{Array.from({ length: START_LIVES }).map((_, i) => <span key={i}>{i < lives ? '❤️' : '🖤'}</span>)}</div>
        <div className="trg-progress">{index + 1} / {order.length}</div>
        {muteButton}
      </div>

      <div className="trg-track">
        <div className="trg-lane">
          <span className="trg-runner trg-player" style={{ left: `calc(${playerPct}% - 14px)` }}>🏃</span>
          <div className="trg-finish">🏁</div>
        </div>
        <div className="trg-lane">
          <span className="trg-runner trg-rival" style={{ left: `calc(${rivalPct}% - 14px)` }}>🤖</span>
          <div className="trg-finish">🏁</div>
        </div>
      </div>

      <div className="trg-timerbar">
        <div className={`trg-timerbar-fill ${timeLeft <= 6 ? 'low' : ''}`} style={{ width: `${(timeLeft / TIME_PER_QUESTION) * 100}%` }} />
      </div>

      <div className={`trg-card ${isAnswered ? (lastCorrect ? 'flash-correct' : 'flash-wrong') : ''}`}>
        <p className="trg-question">{current.q}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(false)
          }}
        >
          <input
            ref={inputRef}
            className="trg-input"
            type="text"
            value={input}
            disabled={isAnswered}
            onChange={(e) => setInput(e.target.value)}
            placeholder="정답을 입력하고 Enter"
            autoComplete="off"
          />
        </form>
        {isAnswered && (
          <div className="trg-feedback">
            {lastCorrect ? '✅ 정답!' : `❌ 오답 (정답: ${current.answers[0]})`}
            {current.explain && <p className="trg-explain">{current.explain}</p>}
          </div>
        )}
      </div>

      <button className="trg-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
