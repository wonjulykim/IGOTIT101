import { useMemo, useState } from 'react'
import { isShortAnswerCorrect } from '../utils/grading'
import { saveQuizScore, getQuizScore } from '../utils/progress'
import { XP_RULES } from '../utils/gamification'
import { useGame } from '../context/GameContext'
import QuestionCard from './QuestionCard'

export default function QuizSection({ chapterId, type, questions }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const prevScore = getQuizScore(chapterId, type)
  const { registerAnswer, awardXp } = useGame()

  const score = useMemo(() => {
    if (type === 'essay') return null
    let correct = 0
    questions.forEach((q) => {
      if (type === 'mcq' && answers[q.id] === q.answer) correct++
      if (type === 'short' && isShortAnswerCorrect(answers[q.id], q.answers)) correct++
    })
    return correct
  }, [answers, questions, type])

  function handleSubmit() {
    setSubmitted(true)
    if (type === 'mcq') {
      questions.forEach((q) => registerAnswer(answers[q.id] === q.answer, XP_RULES.mcqCorrect))
      saveQuizScore(chapterId, type, score, questions.length)
    } else if (type === 'short') {
      questions.forEach((q) => registerAnswer(isShortAnswerCorrect(answers[q.id], q.answers), XP_RULES.shortCorrect))
      saveQuizScore(chapterId, type, score, questions.length)
    } else {
      const attempted = questions.filter((q) => (answers[q.id] || '').trim().length > 0)
      if (attempted.length > 0) awardXp(attempted.length * XP_RULES.essayAttempt)
    }
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div>
      {!submitted && prevScore && type !== 'essay' && (
        <div className="prev-score">이전 기록: {prevScore.score} / {prevScore.total}</div>
      )}
      {questions.map((q, i) => (
        <QuestionCard
          key={q.id}
          q={{ ...q, type }}
          index={i}
          value={answers[q.id]}
          onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          submitted={submitted}
          unitId={chapterId}
        />
      ))}

      <div className="quiz-actions">
        {!submitted ? (
          <button className="btn-primary" onClick={handleSubmit}>채점하기</button>
        ) : (
          <>
            {score !== null && (
              <div className="quiz-score">
                결과: <strong>{score} / {questions.length}</strong>
              </div>
            )}
            <button className="btn-secondary" onClick={handleRetry}>다시 풀기</button>
          </>
        )}
      </div>
    </div>
  )
}
