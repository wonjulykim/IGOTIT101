import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { studentLogin, fetchStudentData } from '../utils/studentApi'
import { setCurrentStudent, hydrateFromServer } from '../utils/progress'
import './StudentLogin.css'

export default function StudentLogin() {
  const [name, setName] = useState('')
  const [classCode, setClassCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const next = params.get('next') || '/'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { student } = await studentLogin(name.trim(), classCode.trim())
      setCurrentStudent(student)
      const serverData = await fetchStudentData().catch(() => null)
      if (serverData) hydrateFromServer(serverData)
      navigate(next, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="student-login-page">
      <form className="student-login-card" onSubmit={handleSubmit}>
        <h1>학생 로그인</h1>
        <p className="student-login-hint">
          이름과 선생님께 받은 반 코드를 입력하면, 여러 기기에서도 내 학습 기록을 이어서 볼 수 있어요.
        </p>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="반 코드 (예: 3-2-2026)"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
        />
        {error && <p className="student-login-error">{error}</p>}
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? '확인 중...' : '로그인 / 시작하기'}
        </button>
      </form>
    </div>
  )
}
