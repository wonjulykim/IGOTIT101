import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapter } from '../data/chapters'
import { getChapterQuiz } from '../data/quizzes'
import QuizSection from '../components/QuizSection'
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
  const visibleTabs = TABS.filter((t) => quiz?.[t.key]?.length)
  const [tab, setTab] = useState(visibleTabs[0]?.key || 'mcq')
  const [gameMode, setGameMode] = useState(false)
  const [gameType, setGameType] = useState(null)
  const isReading = chapter?.kind === 'reading'

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
        <Link to="/">차례</Link> <span>›</span> <span>{chapter.num}{isReading ? '편' : '장'} {chapter.title}</span>
      </div>
      <h1>{chapter.num}{isReading ? '편' : '장'} 퀴즈</h1>
      <p className="quiz-intro">
        {isReading ? '지문을 바탕으로 다양한 서답형 문제를 풀어보세요.' : '배운 내용을 세 가지 유형의 문제로 점검해보세요.'}
      </p>

      {!isReading && (
        <button className="btn-primary quiz-game-cta" onClick={() => { setGameType(null); setGameMode(true) }}>
          🎮 게임 모드로 도전하기
        </button>
      )}

      <div className="quiz-tabs">
        {visibleTabs.map((t) => (
          <button key={t.key} className={`quiz-tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
            {t.label} ({quiz[t.key].length})
          </button>
        ))}
      </div>

      <QuizSection key={tab} chapterId={chapterId} type={tab} questions={quiz[tab]} />
    </div>
  )
}
