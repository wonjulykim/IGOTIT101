import { useEffect, useRef, useState } from 'react'
import './ChatWidget.css'

const STORAGE_KEY = 'agarit-chat-history'
const WELCOME = {
  role: 'assistant',
  content: '안녕! 나는 아가릿 AI 튜터야 🤖\n영문법 관련해서 궁금한 게 있으면 편하게 물어봐줘!',
}

function loadHistory() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return [WELCOME]
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length ? parsed : [WELCOME]
  } catch {
    return [WELCOME]
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(loadHistory)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open, loading])

  async function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const raw = await res.text()
      let data = null
      try {
        data = raw ? JSON.parse(raw) : null
      } catch {
        throw new Error('서버 응답을 읽지 못했어. 방금 서버가 재시작됐을 수 있으니 다시 한 번 물어봐줘.')
      }
      if (!res.ok || !data) throw new Error(data?.error || '요청에 실패했습니다. 잠시 후 다시 시도해줘.')
      if (!data.reply) throw new Error('AI 응답이 비어 있어. 다시 한 번 물어봐줘.')
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError(err.message || '오류가 발생했어. 잠시 후 다시 시도해줘.')
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setMessages([WELCOME])
    setError('')
  }

  return (
    <div className={`chat-widget ${open ? 'chat-widget-open' : ''}`}>
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <span>🤖 아가릿 AI 튜터</span>
            <div className="chat-panel-header-actions">
              <button type="button" className="chat-icon-btn" onClick={handleReset} aria-label="대화 초기화" title="대화 초기화">
                ↺
              </button>
              <button type="button" className="chat-icon-btn" onClick={() => setOpen(false)} aria-label="닫기" title="닫기">
                ✕
              </button>
            </div>
          </div>
          <div className="chat-panel-body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble-row ${m.role}`}>
                <div className="chat-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-row assistant">
                <div className="chat-bubble chat-bubble-loading">
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                </div>
              </div>
            )}
            {error && <div className="chat-error">⚠️ {error}</div>}
          </div>
          <form className="chat-panel-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="영문법 질문을 입력해봐..."
              disabled={loading}
              maxLength={500}
            />
            <button type="submit" className="chat-send-btn" disabled={loading || !input.trim()} aria-label="전송">
              ➤
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chat-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? '챗봇 닫기' : '챗봇 열기'}
      >
        {open ? '✕' : '🤖'}
      </button>
    </div>
  )
}
