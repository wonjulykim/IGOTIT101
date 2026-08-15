import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { chapters } from '../data/chapters'
import { readings } from '../data/readings'
import { getSession, logout } from '../utils/adminApi'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  const [expanded, setExpanded] = useState(() => {
    const initial = {}
    ;[...chapters, ...readings].forEach((c) => {
      if (c.ready) initial[c.id] = false
    })
    return initial
  })
  const [isAdmin, setIsAdmin] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    getSession()
      .then((data) => setIsAdmin(!!data?.loggedIn))
      .catch(() => setIsAdmin(false))
  }, [location.pathname])

  async function handleLogout() {
    await logout().catch(() => {})
    setIsAdmin(false)
    navigate('/')
  }

  function toggle(id) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-brand">
          <NavLink to="/" onClick={onClose}>
            📘 아가릿 101
          </NavLink>
          <span className="sidebar-sub">중학교 영어 문법</span>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-toc-title">📘 문법</div>
          <UnitList units={chapters} unitLabel="장" expanded={expanded} toggle={toggle} onClose={onClose} />

          <div className="sidebar-toc-title sidebar-section-gap">📖 독해</div>
          <UnitList units={readings} unitLabel="편" expanded={expanded} toggle={toggle} onClose={onClose} />
        </nav>

        <div className="sidebar-admin">
          {isAdmin ? (
            <button className="sidebar-admin-link" onClick={handleLogout}>🔓 관리자 로그아웃</button>
          ) : (
            <NavLink to="/admin/login" className="sidebar-admin-link" onClick={onClose}>
              🔒 관리자 로그인
            </NavLink>
          )}
        </div>
      </aside>
    </>
  )
}

function UnitList({ units, unitLabel, expanded, toggle, onClose }) {
  return (
    <ul className="chapter-list">
      {units.map((u) => {
        const isExpanded = !!expanded[u.id]
        return (
          <li key={u.id} className={`chapter-item ${!u.ready ? 'chapter-disabled' : ''}`}>
            <button
              className="chapter-head"
              onClick={() => u.ready && toggle(u.id)}
              disabled={!u.ready}
            >
              <span className="chapter-num">{u.num}{unitLabel}</span>
              <span className="chapter-title">{u.title}</span>
              {u.ready ? (
                <span className="chapter-caret">{isExpanded ? '▾' : '▸'}</span>
              ) : (
                <span className="chapter-soon">준비중</span>
              )}
            </button>
            {u.ready && isExpanded && (
              <ul className="lesson-list">
                {u.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <NavLink
                      to={`/chapter/${u.id}/lesson/${lesson.id}`}
                      className={({ isActive }) => (isActive ? 'lesson-link active' : 'lesson-link')}
                      onClick={onClose}
                    >
                      {lesson.title}
                    </NavLink>
                  </li>
                ))}
                {u.kind !== 'reading' && (
                  <li>
                    <NavLink
                      to={`/chapter/${u.id}/quiz`}
                      className={({ isActive }) => (isActive ? 'lesson-link quiz-link active' : 'lesson-link quiz-link')}
                      onClick={onClose}
                    >
                      ✏️ {u.num}{unitLabel} 퀴즈
                    </NavLink>
                  </li>
                )}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}
