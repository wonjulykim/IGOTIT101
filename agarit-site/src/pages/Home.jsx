import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>📘 아가릿(I GOT IT) 101</h1>
        <p>지평선중학교 김원준 선생님과 함께하는 단계별 중학교 영어 문법 학습 사이트</p>
        <Link to="/chapter/ch1/lesson/ch1-1" className="btn-primary hero-cta">1장부터 시작하기 →</Link>
      </div>

      <h2 className="home-section-title">차례</h2>
      <div className="chapter-grid">
        {chapters.map((ch) => (
          <div key={ch.id} className={`home-card ${!ch.ready ? 'home-card-disabled' : ''}`}>
            <div className="home-card-num">{ch.num}장</div>
            <div className="home-card-title">{ch.title}</div>
            {ch.ready ? (
              <div className="home-card-links">
                <Link to={`/chapter/${ch.id}/lesson/${ch.lessons[0].id}`}>학습하기</Link>
                <Link to={`/chapter/${ch.id}/quiz`}>퀴즈</Link>
              </div>
            ) : (
              <span className="home-card-soon">준비중</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
