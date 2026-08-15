import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getLesson } from '../data/chapters'
import { getLessonContent } from '../data/content'
import ContentBlocks from '../components/ContentBlocks'
import { isLessonComplete, markLessonComplete } from '../utils/progress'
import { useGame } from '../context/GameContext'
import { getOverride, getSession } from '../utils/adminApi'
import './Lesson.css'

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
  const unitLabel = chapter.kind === 'reading' ? '편' : '장'

  function handleComplete() {
    const wasAlreadyDone = isLessonComplete(chapterId, lessonId)
    markLessonComplete(chapterId, lessonId)
    setDone(true)
    if (!wasAlreadyDone) registerLessonComplete()
  }

  return (
    <article className="lesson-page">
      <div className="lesson-breadcrumb">
        <Link to="/">차례</Link> <span>›</span> <span>{chapter.num}{unitLabel} {chapter.title}</span>
        {isAdmin && (
          <Link to={`/admin/edit/${chapterId}/${lessonId}`} className="lesson-edit-link">
            ✏️ 이 레슨 편집
          </Link>
        )}
      </div>
      <h1>{effectiveTitle}</h1>

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
              ← {prev.title}
            </Link>
          ) : <span />}
        </div>
        <div className="lesson-nav-side lesson-nav-right">
          {next ? (
            <Link to={`/chapter/${chapterId}/lesson/${next.id}`} className="lesson-nav-link">
              {next.title} →
            </Link>
          ) : (
            <Link to={`/chapter/${chapterId}/quiz`} className="lesson-nav-link quiz">
              {chapter.num}{unitLabel} 퀴즈 풀기 →
            </Link>
          )}
        </div>
      </nav>
    </article>
  )
}
