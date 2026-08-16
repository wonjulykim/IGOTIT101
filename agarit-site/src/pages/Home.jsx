import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { readings } from '../data/readings'
import { getProgress } from '../utils/progress'
import './Home.css'

function countLessons(units, isDone) {
  let total = 0
  let done = 0
  units.forEach((u) => {
    u.lessons.forEach((l) => {
      total += 1
      if (isDone(u.id, l.id)) done += 1
    })
  })
  return { total, done }
}

function findNextLesson(units, isDone) {
  for (const u of units) {
    for (const l of u.lessons) {
      if (!isDone(u.id, l.id)) {
        return { chapterId: u.id, chapterNum: u.num, lessonId: l.id, lessonTitle: l.title }
      }
    }
  }
  return null
}

export default function Home() {
  const progress = useMemo(() => getProgress(), [])
  const isDone = (chapterId, lessonId) => !!progress.completedLessons?.[`${chapterId}/${lessonId}`]
  const hasAnyProgress = Object.keys(progress.completedLessons || {}).length > 0

  const readyChapters = chapters.filter((c) => c.ready)
  const readyReadings = readings.filter((r) => r.ready)
  const grammarStats = countLessons(readyChapters, isDone)
  const readingStats = countLessons(readyReadings, isDone)
  const nextUp = findNextLesson(readyChapters, isDone)

  const heroCta = nextUp
    ? {
        to: `/chapter/${nextUp.chapterId}/lesson/${nextUp.lessonId}`,
        label: `이어서 학습하기: ${nextUp.chapterNum}장 ${nextUp.lessonTitle} →`,
      }
    : { to: '/chapter/ch1/lesson/ch1-1', label: '1장부터 시작하기 →' }

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>📘 아가릿(I GOT IT) 101</h1>
        <p>지평선중학교 김원준 선생님과 함께하는 단계별 중학교 영어 문법 학습 사이트</p>
        <div className="home-hero-actions">
          <Link to={heroCta.to} className="btn-primary hero-cta">{heroCta.label}</Link>
          <nav className="home-hero-jump" aria-label="섹션 바로가기">
            <a href="#grammar-section">📘 문법 차례</a>
            <a href="#reading-section">📖 독해 차례</a>
          </nav>
        </div>
        {hasAnyProgress && (
          <div className="home-hero-stats">
            <span>📘 문법 {grammarStats.done}/{grammarStats.total} 레슨 완료</span>
            <span>📖 독해 {readingStats.done}/{readingStats.total}편 완료</span>
          </div>
        )}
      </div>

      <h2 id="grammar-section" className="home-section-title">📘 문법 · 차례</h2>
      <UnitGrid units={chapters} unitLabel="장" isDone={isDone} nextUpId={nextUp?.chapterId} />

      <h2 id="reading-section" className="home-section-title home-section-gap">📖 독해 · 차례</h2>
      <UnitGrid units={readings} unitLabel="편" isDone={isDone} />
    </div>
  )
}

function UnitGrid({ units, unitLabel, isDone, nextUpId }) {
  return (
    <div className="chapter-grid">
      {units.map((u) => {
        const chapterDone = u.ready && u.lessons.every((l) => isDone(u.id, l.id))
        const isNext = u.ready && u.id === nextUpId
        return (
          <div
            key={u.id}
            className={`home-card ${!u.ready ? 'home-card-disabled' : ''} ${isNext ? 'home-card-next' : ''}`}
          >
            <div className="home-card-top">
              <div className="home-card-num">{u.num}{unitLabel}</div>
              {chapterDone && <span className="home-card-done">✅ 완료</span>}
              {isNext && <span className="home-card-tag">다음 학습</span>}
            </div>
            <div className="home-card-title">{u.title}</div>
            {u.ready ? (
              <div className="home-card-links">
                <Link to={`/chapter/${u.id}/lesson/${u.lessons[0].id}`}>
                  {u.kind === 'reading' ? '읽고 문제 풀기' : '학습하기'}
                </Link>
                {u.kind !== 'reading' && <Link to={`/chapter/${u.id}/quiz`}>퀴즈</Link>}
              </div>
            ) : (
              <span className="home-card-soon">준비중</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
