import { useEffect, useRef, useState } from 'react'
import { useGame } from '../context/GameContext'
import { XP_RULES } from '../utils/gamification'
import { isMuted, playClear, playCombo, playCorrect, playOver, playWrong, setMuted } from '../utils/sound'
import RunnerCanvas from './RunnerCanvas'
import './RushRunGame.css'

const START_LIVES = 3
const START_RUN_MS = 9000
const MIN_RUN_MS = 4200
const RUN_MS_STEP = 260
const NEXT_DELAY_MS = 950
const COMBO_MILESTONE_EVERY = 3

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function RushRunGame({ questions, onExit }) {
  const { registerAnswer } = useGame()
  const [phase, setPhase] = useState('ready') // ready | running | answered | over | clear
  const [order, setOrder] = useState(() => shuffle(questions))
  const [index, setIndex] = useState(0)
  const [lives, setLives] = useState(START_LIVES)
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [bestCombo, setBestCombo] = useState(0)
  const [round, setRound] = useState(0)
  const [picked, setPicked] = useState(null)
  const [resultKind, setResultKind] = useState(null) // 'correct' | 'wrong' | 'missed'
  const [muted, setMutedState] = useState(() => isMuted())
  const [burstTick, setBurstTick] = useState(0)
  const [speedUpFlash, setSpeedUpFlash] = useState(false)
  const missTimerRef = useRef(null)
  const advanceRef = useRef(null)
  const answeredRef = useRef(false)
  const speedUpTimerRef = useRef(null)

  const current = order[index]
  const runMs = Math.max(MIN_RUN_MS, START_RUN_MS - round * RUN_MS_STEP)

  useEffect(() => () => {
    clearTimeout(missTimerRef.current)
    clearTimeout(advanceRef.current)
    clearTimeout(speedUpTimerRef.current)
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
    setCombo(0)
    setBestCombo(0)
    setRound(0)
    setPicked(null)
    setResultKind(null)
    answeredRef.current = false
    setPhase('running')
  }

  function armMissTimer(ms) {
    clearTimeout(missTimerRef.current)
    missTimerRef.current = setTimeout(() => {
      if (answeredRef.current) return
      resolveRound(false, 'missed')
    }, ms)
  }

  useEffect(() => {
    if (phase !== 'running') return
    answeredRef.current = false
    setPicked(null)
    setResultKind(null)
    armMissTimer(runMs)
    return () => clearTimeout(missTimerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index])

  function resolveRound(correct, kind, optIndex) {
    if (answeredRef.current) return
    answeredRef.current = true
    clearTimeout(missTimerRef.current)
    setResultKind(kind)
    setPicked(optIndex ?? null)
    setPhase('answered')
    registerAnswer(correct, XP_RULES.mcqCorrect)

    let nextLives = lives
    if (correct) {
      playCorrect()
      setScore((s) => s + 1)
      setBurstTick((b) => b + 1)
      setRound((r) => {
        const nr = r + 1
        if (nr >= 1 && nr % 2 === 0 && START_RUN_MS - nr * RUN_MS_STEP > MIN_RUN_MS) {
          setSpeedUpFlash(true)
          clearTimeout(speedUpTimerRef.current)
          speedUpTimerRef.current = setTimeout(() => setSpeedUpFlash(false), 1100)
        }
        return nr
      })
      setCombo((c) => {
        const nc = c + 1
        setBestCombo((b) => Math.max(b, nc))
        if (nc >= 2 && nc % COMBO_MILESTONE_EVERY === 0) playCombo()
        return nc
      })
    } else {
      playWrong()
      nextLives = lives - 1
      setLives(nextLives)
      setCombo(0)
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
      setPhase('running')
    }, NEXT_DELAY_MS)
  }

  function handleGateClick(optIndex) {
    if (phase !== 'running' || answeredRef.current) return
    if (optIndex === current.answer) {
      resolveRound(true, 'correct', optIndex)
    } else {
      resolveRound(false, 'wrong', optIndex)
    }
  }

  const muteButton = (
    <button className="rrg-mute" onClick={toggleMute} title={muted ? '소리 켜기' : '소리 끄기'}>
      {muted ? '🔇' : '🔊'}
    </button>
  )

  if (phase === 'ready') {
    return (
      <div className="rrg rrg-center">
        {muteButton}
        <div className="rrg-icon">🏃</div>
        <h2>러시 앤 대시</h2>
        <ul className="rrg-rules">
          <li>🛣️ 문제를 보고, 정답이 적힌 게이트를 향해 달려가세요!</li>
          <li>🎯 게이트가 가까워지기 전에 정답 게이트를 클릭(탭)하세요.</li>
          <li>💥 오답 게이트를 클릭하거나 시간 안에 고르지 못하면 목숨이 하나 줄어요.</li>
          <li>🚀 정답을 맞힐수록 점점 더 빠르게 달려요.</li>
          <li>목숨은 {START_LIVES}개! 모두 잃으면 게임 오버.</li>
        </ul>
        <button className="btn-primary" onClick={start}>달리기 시작</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'over') {
    return (
      <div className="rrg rrg-center">
        {muteButton}
        <div className="rrg-icon rrg-shake">💥</div>
        <h2>게임 오버</h2>
        <p className="rrg-result-line">
          {index + 1} / {order.length}문제까지 달렸어요, <strong>{score}</strong>개 정답!
          {bestCombo >= COMBO_MILESTONE_EVERY && <> 최고 콤보 🔥{bestCombo}</>}
        </p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'clear') {
    return (
      <div className="rrg rrg-center">
        {muteButton}
        <div className="rrg-icon rrg-bounce">🏁</div>
        <h2>완주 성공!</h2>
        <div className="rrg-stars">{'⭐'.repeat(lives)}{'☆'.repeat(START_LIVES - lives)}</div>
        <p className="rrg-result-line">{order.length}문제 중 <strong>{score}</strong>개 정답 · 최고 콤보 🔥{bestCombo}</p>
        <button className="btn-primary" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  const isAnswered = phase === 'answered'

  return (
    <div className="rrg">
      <div className="rrg-topbar">
        <div className="rrg-lives">{Array.from({ length: START_LIVES }).map((_, i) => <span key={i}>{i < lives ? '❤️' : '🖤'}</span>)}</div>
        <div className="rrg-progress">{index + 1} / {order.length}</div>
        {combo >= 2 && <div className="rrg-combo">🔥 x{combo}</div>}
        <div className="rrg-score">🎯 {score}</div>
        {muteButton}
      </div>

      <p className="rrg-question">{current.q}</p>

      {speedUpFlash && <div className="rrg-speedup-banner">🚀 스피드 업!</div>}

      <RunnerCanvas
        key={index}
        options={current.options}
        answerIndex={current.answer}
        picked={picked}
        isAnswered={isAnswered}
        resultKind={resultKind}
        runMs={runMs}
        onPick={handleGateClick}
        burstTick={burstTick}
      />

      {isAnswered && (
        <div className="rrg-feedback">
          {resultKind === 'correct' && '✅ 정답 게이트 통과!'}
          {resultKind === 'missed' && '⏱️ 시간 안에 고르지 못했어요!'}
          {resultKind === 'wrong' && '❌ 오답 게이트에 부딪혔어요!'}
          {current.explain && <p className="rrg-explain">{current.explain}</p>}
        </div>
      )}

      <button className="rrg-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
