import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { chapters } from '../data/chapters'
import { getSession, logout } from '../utils/adminApi'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  const [expanded, setExpanded] = useState(() => {
    const initial = {}
    chapters.forEach((c) => {
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
          <div className="sidebar-toc-title">차례</div>
          <ul className="chapter-list">
            {chapters.map((ch) => {
              const isExpanded = !!expanded[ch.id]
              return (
                <li key={ch.id} className={`chapter-item ${!ch.ready ? 'chapter-disabled' : ''}`}>
                  <button
                    className="chapter-head"
                    onClick={() => ch.ready && toggle(ch.id)}
                    disabled={!ch.ready}
                  >
                    <span className="chapter-num">{ch.num}장</span>
                    <span className="chapter-title">{ch.title}</span>
                    {ch.ready ? (
                      <span className="chapter-caret">{isExpanded ? '▾' : '▸'}</span>
                    ) : (
                      <span className="chapter-soon">준비중</span>
                    )}
                  </button>
                  {ch.ready && isExpanded && (
                    <ul className="lesson-list">
                      {ch.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <NavLink
                            to={`/chapter/${ch.id}/lesson/${lesson.id}`}
                            className={({ isActive }) => (isActive ? 'lesson-link active' : 'lesson-link')}
                            onClick={onClose}
                          >
                            {lesson.title}
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <NavLink
                          to={`/chapter/${ch.id}/quiz`}
                          className={({ isActive }) => (isActive ? 'lesson-link quiz-link active' : 'lesson-link quiz-link')}
                          onClick={onClose}
                        >
                          ✏️ {ch.num}장 퀴즈
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
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
