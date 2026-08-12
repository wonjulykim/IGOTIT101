import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { chapters } from '../data/chapters'
import { getChapterCompletionRatio } from '../utils/progress'
import GameHud from './GameHud'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  const [expanded, setExpanded] = useState(() => {
    const initial = {}
    chapters.forEach((c) => {
      if (c.ready) initial[c.id] = false
    })
    return initial
  })

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

        <GameHud />

        <nav className="sidebar-nav">
          <div className="sidebar-toc-title">차례</div>
          <ul className="chapter-list">
            {chapters.map((ch) => {
              const ratio = ch.ready ? getChapterCompletionRatio(ch.id, ch.lessons) : 0
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
                  {ch.ready && ratio > 0 && (
                    <div className="chapter-progress">
                      <div className="chapter-progress-bar" style={{ width: `${ratio * 100}%` }} />
                    </div>
                  )}
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
      </aside>
    </>
  )
}
