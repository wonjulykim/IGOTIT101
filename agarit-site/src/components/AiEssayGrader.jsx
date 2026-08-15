import { useState } from 'react'
import { gradeWriting } from '../utils/aiGrading'
import { saveWritingResult, getWritingResult } from '../utils/progress'
import './AiEssayGrader.css'

export default function AiEssayGrader({ q, studentAnswer, unitId }) {
  const [result, setResult] = useState(() => (unitId ? getWritingResult(unitId, q.id) : null))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleGrade() {
    if (!studentAnswer || !studentAnswer.trim()) {
      setError('먼저 답안을 작성해주세요.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const graded = await gradeWriting({
        prompt: q.q,
        conditions: q.conditions,
        model: q.model,
        similarAnswers: q.similarAnswers,
        rubric: q.rubric,
        totalScore: q.totalScore,
        studentAnswer,
      })
      setResult(graded)
      if (unitId) saveWritingResult(unitId, q.id, graded)
    } catch (err) {
      setError(err.message || 'AI 채점 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ai-grader">
      {q.conditions?.length > 0 && result?.conditionsCheck?.length > 0 && (
        <div className="ai-conditions-check">
          {result.conditionsCheck.map((c, i) => (
            <span key={i} className={`ai-condition-chip ${c.met ? 'met' : 'unmet'}`}>
              {c.met ? '✅' : '❌'} {c.condition}
            </span>
          ))}
        </div>
      )}

      {!result && (
        <button className="btn-primary ai-grade-btn" onClick={handleGrade} disabled={loading}>
          {loading ? 'AI가 채점 중...' : '🤖 AI 채점 받기'}
        </button>
      )}

      {error && <div className="ai-grader-error">{error}</div>}

      {result && (
        <div className="ai-grader-result">
          <div className="ai-grader-total">
            AI 채점 결과: <strong>{result.totalScore} / {result.maxScore ?? q.totalScore}</strong>점
          </div>
          {result.criteria?.map((c, i) => (
            <div className="ai-criterion" key={i}>
              <div className="ai-criterion-head">
                <span>{c.name}</span>
                <span>{c.score} / {c.maxScore}점</span>
              </div>
              <div className="ai-criterion-bar">
                <div
                  className="ai-criterion-fill"
                  style={{ width: `${c.maxScore ? (c.score / c.maxScore) * 100 : 0}%` }}
                />
              </div>
              {c.reason && <p className="ai-criterion-reason">{c.reason}</p>}
            </div>
          ))}
          {result.feedback && (
            <div className="ai-grader-feedback">
              <strong>💬 AI 피드백</strong>
              <p>{result.feedback}</p>
            </div>
          )}
          {q.model && (
            <div className="essay-model">
              <strong>📖 모범답안</strong>
              <p>{q.model}</p>
            </div>
          )}
          <button className="btn-secondary ai-regrade-btn" onClick={handleGrade} disabled={loading}>
            {loading ? '재채점 중...' : '다시 AI 채점 받기'}
          </button>
        </div>
      )}
    </div>
  )
}
