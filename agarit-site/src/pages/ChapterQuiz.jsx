import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapter } from '../data/chapters'
import { getChapterQuiz } from '../data/quizzes'
import { isShortAnswerCorrect } from '../utils/grading'
import { saveQuizScore, getQuizScore } from '../utils/progress'
import { XP_RULES } from '../utils/gamification'
import { useGame } from '../context/GameContext'
import QuestionCard from '../components/QuestionCard'
import GameQuiz from '../components/GameQuiz'
import GameModeSelect from '../components/GameModeSelect'
import TypingRaceGame from '../components/TypingRaceGame'
import FallingDefenseGame from '../components/FallingDefenseGame'
import MemoryMatchGame from '../components/MemoryMatchGame'
import './ChapterQuiz.css'

const TABS = [
  { key: 'mcq', label: '객관식 (5지선다)' },
  { key: 'short', label: '단답형' },
  { key: 'essay', label: '서술형' },
]

const GAME_TITLES = {
  heart: '하트런',
  falling: '낙하 방어전',
  typing: '스피드 타자전',
  match: '짝맞추기 메모리',
}

export default function ChapterQuiz() {
  const { chapterId } = useParams()
  const chapter = getChapter(chapterId)
  const quiz = getChapterQuiz(chapterId)
  const [tab, setTab] = useState('mcq')
  const [gameMode, setGameMode] = useState(false)
  const [gameType, setGameType] = useState(null)

  if (!chapter || !quiz) return <Navigate to="/" replace />

  if (gameMode) {
    return (
      <div className="chapter-quiz-page">
        <div className="lesson-breadcrumb">
          <Link to="/">차례</Link> <span>›</span> <span>{chapter.num}장 {chapter.title}</span>
        </div>
        <h1>{chapter.num}장 퀴즈 · 게임 모드{gameType ? ` · ${GAME_TITLES[gameType]}` : ''}</h1>
        {!gameType && (
          <GameModeSelect
            quiz={quiz}
            onSelect={setGameType}
            onExit={() => { setGameMode(false); setGameType(null) }}
          />
        )}
        {gameType === 'heart' && (
          <GameQuiz questions={quiz.mcq} onExit={() => setGameType(null)} />
        )}
        {gameType === 'falling' && (
          <FallingDefenseGame questions={quiz.mcq} onExit={() => setGameType(null)} />
        )}
        {gameType === 'typing' && (
          <TypingRaceGame questions={quiz.short} onExit={() => setGameType(null)} />
        )}
        {gameType === 'match' && (
          <MemoryMatchGame questions={quiz.mcq} onExit={() => setGameType(null)} />
        )}
      </div>
    )
  }

  return (
    <div className="chapter-quiz-page">
      <div className="lesson-breadcrumb">
        <Link to="/">차례</Link> <span>›</span> <span>{chapter.num}장 {chapter.title}</span>
      </div>
      <h1>{chapter.num}장 퀴즈</h1>
      <p className="quiz-intro">배운 내용을 세 가지 유형의 문제로 점검해보세요.</p>

      <button className="btn-primary quiz-game-cta" onClick={() => { setGameType(null); setGameMode(true) }}>
        🎮 게임 모드로 도전하기
      </button>

      <div className="quiz-tabs">
        {TABS.map((t) => (
          <button key={t.key} className={`quiz-tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
            {t.label} ({quiz[t.key].length})
          </button>
        ))}
      </div>

      <QuizSection key={tab} chapterId={chapterId} type={tab} questions={quiz[tab]} />
    </div>
  )
}

function QuizSection({ chapterId, type, questions }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const prevScore = getQuizScore(chapterId, type)
  const { registerAnswer, awardXp } = useGame()

  const score = useMemo(() => {
    if (type === 'essay') return null
    let correct = 0
    questions.forEach((q) => {
      if (type === 'mcq' && answers[q.id] === q.answer) correct++
      if (type === 'short' && isShortAnswerCorrect(answers[q.id], q.answers)) correct++
    })
    return correct
  }, [answers, questions, type])

  function handleSubmit() {
    setSubmitted(true)
    if (type === 'mcq') {
      questions.forEach((q) => registerAnswer(answers[q.id] === q.answer, XP_RULES.mcqCorrect))
      saveQuizScore(chapterId, type, score, questions.length)
    } else if (type === 'short') {
      questions.forEach((q) => registerAnswer(isShortAnswerCorrect(answers[q.id], q.answers), XP_RULES.shortCorrect))
      saveQuizScore(chapterId, type, score, questions.length)
    } else {
      const attempted = questions.filter((q) => (answers[q.id] || '').trim().length > 0)
      if (attempted.length > 0) awardXp(attempted.length * XP_RULES.essayAttempt)
    }
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div>
      {!submitted && prevScore && type !== 'essay' && (
        <div className="prev-score">이전 기록: {prevScore.score} / {prevScore.total}</div>
      )}
      {questions.map((q, i) => (
        <QuestionCard
          key={q.id}
          q={{ ...q, type }}
          index={i}
          value={answers[q.id]}
          onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          submitted={submitted}
        />
      ))}

      <div className="quiz-actions">
        {!submitted ? (
          <button className="btn-primary" onClick={handleSubmit}>채점하기</button>
        ) : (
          <>
            {score !== null && (
              <div className="quiz-score">
                결과: <strong>{score} / {questions.length}</strong>
              </div>
            )}
            <button className="btn-secondary" onClick={handleRetry}>다시 풀기</button>
          </>
        )}
      </div>
    </div>
  )
}
