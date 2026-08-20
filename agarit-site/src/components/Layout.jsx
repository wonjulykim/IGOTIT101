import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import GameToasts from './GameToasts'
import ChatWidget from './ChatWidget'
import { bootstrapStudentSession } from '../utils/progress'
import './Layout.css'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    bootstrapStudentSession()
  }, [])

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <header className="mobile-header">
          <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="메뉴 열기">
            ☰
          </button>
          <span className="mobile-title">📘 아가릿 101</span>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
      <GameToasts />
      <ChatWidget />
    </div>
  )
}
