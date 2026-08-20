import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getLesson } from '../data/chapters'
import { getLessonContent } from '../data/content'
import { getChapterQuiz } from '../data/quizzes'
import ContentBlocks from '../components/ContentBlocks'
import QuizSection from '../components/QuizSection'
import SummaryGuide from '../components/SummaryGuide'
import { isLessonComplete, markLessonComplete } from '../utils/progress'
import { useGame } from '../context/GameContext'
import { getOverride, getSession } from '../utils/adminApi'
import './Lesson.css'

const QUIZ_LABELS = {
  mcq: '📌 확인 문제 (객관식)',
  short: '✍️ 빈칸·단답 문제',
}

export default function Lesson() {
  const { chapterId, lessonId } = useParams()
  const info = getLesson(chapterId, lessonId)
  const [done, setDone] = useState(false)
  const [override, setOverride] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const { registerLessonComplete } = useGame()

  useEffect(() => {
    if (info) setDone(isLessonComplete(chapterId, lessonId))
    window.scrollTo({ top: 0 })
  }, [chapterId, lessonId, info])

  useEffect(() => {
    setOverride(null)
    getOverride(chapterId, lessonId)
      .then((data) => setOverride(data?.override || null))
      .catch(() => setOverride(null))
    getSession()
      .then((data) => setIsAdmin(!!data?.loggedIn))
      .catch(() => setIsAdmin(false))
  }, [chapterId, lessonId])

  if (!info) return <Navigate to="/" replace />

  const content = getLessonContent(chapterId, lessonId)
  const { chapter, lesson, prev, next } = info
  const effectiveBlocks = override?.blocks || content?.blocks
  const effectiveTitle = override?.title || lesson.title
  const isReading = chapter.kind === 'reading'
  const isGuide = chapter.kind === 'guide'
  const unitLabel = isReading ? '편' : '장'
  const unitBadge = isGuide ? '가이드' : `${chapter.num}${unitLabel}`
  const quiz = isReading ? getChapterQuiz(chapterId) : null

  function handleComplete() {
    const wasAlreadyDone = isLessonComplete(chapterId, lessonId)
    markLessonComplete(chapterId, lessonId)
    setDone(true)
    if (!wasAlreadyDone) registerLessonComplete()
  }

  return (
    <article className={`lesson-page${isReading ? ' lesson-page--reading' : ''}`}>
      <div className="lesson-breadcrumb">
        <Link to="/">차례</Link> <span>›</span> <span>{unitBadge} {chapter.title}</span>
        <Link to={`/chapter/${chapterId}/print`} target="_blank" rel="noopener" className="lesson-edit-link">
          📄 PDF 다운로드
        </Link>
        {isAdmin && (
          <Link to={`/admin/edit/${chapterId}/${lessonId}`} className="lesson-edit-link">
            ✏️ 이 레슨 편집
          </Link>
        )}
      </div>
      <h1>{effectiveTitle}</h1>

      {isReading ? (
        <div className="reading-split">
          <div className="reading-passage-col">
            {effectiveBlocks ? (
              <ContentBlocks blocks={effectiveBlocks} />
            ) : (
              <p>이 레슨의 콘텐츠는 아직 준비 중입니다.</p>
            )}
            <div className="lesson-complete-row">
              <button className={`btn-complete ${done ? 'done' : ''}`} onClick={handleComplete}>
                {done ? '✅ 학습 완료' : '학습 완료로 표시하기'}
              </button>
            </div>
          </div>

          {quiz && (() => {
            const descriptiveItems = (quiz.essay || []).filter((q) => q.subtype !== '논술형')
            const argumentativeItems = (quiz.essay || []).filter((q) => q.subtype === '논술형')
            return (
              <div className="reading-quiz-col">
                <h2>문제 풀기</h2>
                <p className="quiz-intro">지문을 왼쪽에 두고 문제를 풀어보세요.</p>
                {(quiz.essay?.length > 0) && (
                  <section className="reading-quiz-section">
                    <h3>🧭 요약하기 <span className="reading-quiz-subhead">서술형·논술형 풀기 전에 먼저 해보세요</span></h3>
                    <SummaryGuide unitId={chapterId} />
                  </section>
                )}
                {['mcq', 'short'].map(
                  (type) =>
                    quiz[type]?.length > 0 && (
                      <section key={type} className="reading-quiz-section">
                        <h3>{QUIZ_LABELS[type]}</h3>
                        <QuizSection chapterId={chapterId} type={type} questions={quiz[type]} />
                      </section>
                    )
                )}
                {descriptiveItems.length > 0 && (
                  <section className="reading-quiz-section">
                    <h3>📝 서술형 문제 <span className="reading-quiz-subhead">짧고 명확하게 쓰는 연습부터</span></h3>
                    <QuizSection key="essay-desc" chapterId={chapterId} type="essay" questions={descriptiveItems} />
                  </section>
                )}
                {argumentativeItems.length > 0 && (
                  <section className="reading-quiz-section">
                    <h3>🖋️ 논술형 문제 <span className="reading-quiz-subhead">서술형이 익숙해졌다면 도전</span></h3>
                    <QuizSection key="essay-arg" chapterId={chapterId} type="essay" questions={argumentativeItems} />
                  </section>
                )}
              </div>
            )
          })()}
        </div>
      ) : (
        <div className="lesson-main">
          {effectiveBlocks ? (
            <ContentBlocks blocks={effectiveBlocks} />
          ) : (
            <p>이 레슨의 콘텐츠는 아직 준비 중입니다.</p>
          )}
          <div className="lesson-complete-row">
            <button className={`btn-complete ${done ? 'done' : ''}`} onClick={handleComplete}>
              {done ? '✅ 학습 완료' : '학습 완료로 표시하기'}
            </button>
          </div>

          <nav className="lesson-nav">
            <div className="lesson-nav-side">
              {prev ? (
                <Link to={`/chapter/${chapterId}/lesson/${prev.id}`} className="lesson-nav-link">
                  ←&nbsp;{prev.title}
                </Link>
              ) : <span />}
            </div>
            <div className="lesson-nav-side lesson-nav-right">
              {next ? (
                <Link to={`/chapter/${chapterId}/lesson/${next.id}`} className="lesson-nav-link">
                  {next.title}&nbsp;→
                </Link>
              ) : isGuide ? (
                <Link to="/chapter/r1/lesson/r1-1" className="lesson-nav-link quiz">
                  1편 독해 시작하기&nbsp;→
                </Link>
              ) : (
                <Link to={`/chapter/${chapterId}/quiz`} className="lesson-nav-link quiz">
                  {unitBadge} 퀴즈 풀기&nbsp;→
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </article>
  )
}
