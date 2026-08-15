import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { readings } from '../data/readings'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>📘 아가릿(I GOT IT) 101</h1>
        <p>지평선중학교 김원준 선생님과 함께하는 단계별 중학교 영어 문법 학습 사이트</p>
        <Link to="/chapter/ch1/lesson/ch1-1" className="btn-primary hero-cta">1장부터 시작하기 →</Link>
      </div>

      <h2 className="home-section-title">📘 문법 · 차례</h2>
      <UnitGrid units={chapters} unitLabel="장" />

      <h2 className="home-section-title home-section-gap">📖 독해 · 차례</h2>
      <UnitGrid units={readings} unitLabel="편" />
    </div>
  )
}

function UnitGrid({ units, unitLabel }) {
  return (
    <div className="chapter-grid">
      {units.map((u) => (
        <div key={u.id} className={`home-card ${!u.ready ? 'home-card-disabled' : ''}`}>
          <div className="home-card-num">{u.num}{unitLabel}</div>
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
      ))}
    </div>
  )
}
