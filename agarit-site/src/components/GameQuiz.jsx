import { useEffect, useRef, useState } from 'react'
import { useGame } from '../context/GameContext'
import { XP_RULES } from '../utils/gamification'
import './GameQuiz.css'

const TIME_PER_QUESTION = 15
const START_HEARTS = 3
const FEEDBACK_DELAY_MS = 1400

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function GameQuiz({ questions, onExit }) {
  const { registerAnswer } = useGame()
  const [phase, setPhase] = useState('ready') // ready | question | answered | over | clear
  const [order, setOrder] = useState(() => shuffle(questions))
  const [index, setIndex] = useState(0)
  const [hearts, setHearts] = useState(START_HEARTS)
  const [combo, setCombo] = useState(0)
  const [bestCombo, setBestCombo] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const timerRef = useRef(null)
  const advanceRef = useRef(null)

  const current = order[index]

  useEffect(() => {
    if (phase !== 'question') return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          handleAnswer(null)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index])

  useEffect(() => () => {
    clearInterval(timerRef.current)
    clearTimeout(advanceRef.current)
  }, [])

  function start() {
    setOrder(shuffle(questions))
    setIndex(0)
    setHearts(START_HEARTS)
    setCombo(0)
    setBestCombo(0)
    setScore(0)
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setPhase('question')
  }

  function handleAnswer(optionIndex) {
    clearInterval(timerRef.current)
    const correct = optionIndex === current.answer
    setSelected(optionIndex)
    setPhase('answered')
    registerAnswer(correct, XP_RULES.mcqCorrect)

    let nextHearts = hearts
    if (correct) {
      setScore((s) => s + 1)
      setCombo((c) => {
        const nc = c + 1
        setBestCombo((b) => Math.max(b, nc))
        return nc
      })
    } else {
      nextHearts = hearts - 1
      setHearts(nextHearts)
      setCombo(0)
    }

    advanceRef.current = setTimeout(() => {
      if (nextHearts <= 0) {
        setPhase('over')
        return
      }
      if (index + 1 >= order.length) {
        setPhase('clear')
        return
      }
      setIndex((i) => i + 1)
      setSelected(null)
      setTimeLeft(TIME_PER_QUESTION)
      setPhase('question')
    }, FEEDBACK_DELAY_MS)
  }

  if (phase === 'ready') {
    return (
      <div className="game-quiz game-quiz-center">
        <div className="game-quiz-icon">🎮</div>
        <h2>게임 모드로 도전하기</h2>
        <ul className="game-quiz-rules">
          <li>❤️ 하트 3개로 시작해요. 오답이면 하트가 하나 줄어들어요.</li>
          <li>⏱️ 문제당 {TIME_PER_QUESTION}초! 시간이 다 되면 오답 처리돼요.</li>
          <li>🔥 연속으로 맞히면 콤보가 쌓여요.</li>
          <li>하트가 0이 되면 게임 오버! 다시 도전할 수 있어요.</li>
        </ul>
        <button className="btn-primary game-quiz-start" onClick={start}>시작하기</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'over') {
    return (
      <div className="game-quiz game-quiz-center">
        <div className="game-quiz-icon">💔</div>
        <h2>게임 오버</h2>
        <p className="game-quiz-result-line">하트를 모두 잃었어요. {index + 1} / {order.length}문제까지 도전, {score}개 정답!</p>
        <button className="btn-primary game-quiz-start" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  if (phase === 'clear') {
    const stars = hearts
    return (
      <div className="game-quiz game-quiz-center">
        <div className="game-quiz-icon">🏁</div>
        <h2>클리어!</h2>
        <div className="game-quiz-stars">{'⭐'.repeat(stars)}{'☆'.repeat(START_HEARTS - stars)}</div>
        <p className="game-quiz-result-line">{order.length}문제 중 {score}개 정답 · 최고 콤보 {bestCombo}</p>
        <button className="btn-primary game-quiz-start" onClick={start}>다시 도전</button>
        <button className="btn-secondary" onClick={onExit}>나가기</button>
      </div>
    )
  }

  const isAnswered = phase === 'answered'
  const timePct = (timeLeft / TIME_PER_QUESTION) * 100

  return (
    <div className="game-quiz">
      <div className="game-quiz-topbar">
        <div className="game-quiz-hearts">
          {Array.from({ length: START_HEARTS }).map((_, i) => (
            <span key={i}>{i < hearts ? '❤️' : '🖤'}</span>
          ))}
        </div>
        <div className="game-quiz-progress">{index + 1} / {order.length}</div>
        {combo >= 2 && <div className="game-quiz-combo">🔥 콤보 x{combo}</div>}
      </div>

      <div className="game-quiz-timerbar">
        <div
          className={`game-quiz-timerbar-fill ${timePct <= 30 ? 'low' : ''}`}
          style={{ width: `${timePct}%` }}
        />
      </div>

      <div className={`game-quiz-card ${isAnswered ? (selected === current.answer ? 'flash-correct' : 'flash-wrong') : ''}`}>
        <p className="game-quiz-question">{current.q}</p>
        <div className="game-quiz-options">
          {current.options.map((opt, i) => {
            let cls = 'game-quiz-option'
            if (isAnswered) {
              if (i === current.answer) cls += ' correct'
              else if (i === selected) cls += ' wrong'
            }
            return (
              <button
                key={i}
                className={cls}
                disabled={isAnswered}
                onClick={() => handleAnswer(i)}
              >
                <span className="game-quiz-option-index">{i + 1}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>
        {isAnswered && (
          <div className="game-quiz-feedback">
            {selected === current.answer ? '✅ 정답!' : selected === null ? '⏰ 시간 초과!' : '❌ 오답'}
            {current.explain && <p className="game-quiz-explain">{current.explain}</p>}
          </div>
        )}
      </div>

      <button className="game-quiz-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
