import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapter } from '../data/chapters'
import { getChapterQuiz } from '../data/quizzes'
import QuizSection from '../components/QuizSection'
import './ChapterQuiz.css'

const TABS = [
  { key: 'mcq', label: '객관식 (5지선다)' },
  { key: 'short', label: '단답형' },
  { key: 'essay', label: '서술형' },
]

export default function ChapterQuiz() {
  const { chapterId } = useParams()
  const chapter = getChapter(chapterId)
  const quiz = getChapterQuiz(chapterId)
  const visibleTabs = TABS.filter((t) => quiz?.[t.key]?.length)
  const [tab, setTab] = useState(visibleTabs[0]?.key || 'mcq')
  const isReading = chapter?.kind === 'reading'

  if (!chapter || !quiz) return <Navigate to="/" replace />

  return (
    <div className="chapter-quiz-page">
      <div className="lesson-breadcrumb">
        <Link to="/">차례</Link> <span>›</span> <span>{chapter.num}{isReading ? '편' : '장'} {chapter.title}</span>
      </div>
      <h1>{chapter.num}{isReading ? '편' : '장'} 퀴즈</h1>
      <p className="quiz-intro">
        {isReading ? '지문을 바탕으로 다양한 서답형 문제를 풀어보세요.' : '배운 내용을 세 가지 유형의 문제로 점검해보세요.'}
      </p>

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
