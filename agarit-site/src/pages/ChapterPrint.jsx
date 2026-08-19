import { Link, Navigate, useParams } from 'react-router-dom'
import { getChapter } from '../data/chapters'
import { getLessonContent } from '../data/content'
import { getChapterQuiz } from '../data/quizzes'
import ContentBlocks from '../components/ContentBlocks'
import './ChapterPrint.css'

export default function ChapterPrint() {
  const { chapterId } = useParams()
  const chapter = getChapter(chapterId)

  if (!chapter) return <Navigate to="/" replace />

  const quiz = getChapterQuiz(chapterId)
  const isReading = chapter.kind === 'reading'
  const unitLabel = isReading ? '편' : '장'
  const firstLessonId = chapter.lessons[0]?.id

  return (
    <div className="print-page">
      <div className="print-toolbar no-print">
        <Link to={`/chapter/${chapterId}/lesson/${firstLessonId}`}>← 돌아가기</Link>
        <button className="btn-primary" onClick={() => window.print()}>
          🖨️ PDF로 저장 / 인쇄하기
        </button>
        <p className="print-toolbar-hint">
          인쇄 대화상자에서 대상(프린터)을 <strong>PDF로 저장</strong>으로 선택하세요.
        </p>
      </div>

      <header className="print-header">
        <span className="print-brand">📘 아가릿(I GOT IT) 101</span>
        <h1>{chapter.num}{unitLabel}. {chapter.title}</h1>
      </header>

      {chapter.lessons.map((lesson) => {
        const content = getLessonContent(chapterId, lesson.id)
        if (!content?.blocks) return null
        return (
          <section key={lesson.id} className="print-lesson">
            {chapter.lessons.length > 1 && <h2>{lesson.title}</h2>}
            <ContentBlocks blocks={content.blocks} />
          </section>
        )
      })}

      {quiz && <PrintQuiz chapter={chapter} unitLabel={unitLabel} quiz={quiz} />}
      {quiz && <PrintAnswerKey quiz={quiz} />}
    </div>
  )
}

function PrintQuiz({ chapter, unitLabel, quiz }) {
  return (
    <section className="print-quiz print-break">
      <h2>{chapter.num}{unitLabel} 퀴즈</h2>

      {quiz.mcq?.length > 0 && (
        <div className="print-quiz-group">
          <h3>객관식</h3>
          {quiz.mcq.map((q, i) => (
            <div className="print-q" key={q.id}>
              <p className="print-q-text">
                <strong>{i + 1}.</strong> {q.q}
              </p>
              <ol className="print-q-options">
                {q.options.map((opt, j) => (
                  <li key={j}>{opt}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {quiz.short?.length > 0 && (
        <div className="print-quiz-group">
          <h3>단답형</h3>
          {quiz.short.map((q, i) => (
            <div className="print-q" key={q.id}>
              <p className="print-q-text">
                <strong>{i + 1}.</strong> {q.q}
              </p>
              <div className="print-answer-line" />
            </div>
          ))}
        </div>
      )}

      {quiz.essay?.length > 0 && (
        <div className="print-quiz-group">
          <h3>서술형·논술형</h3>
          {quiz.essay.map((q, i) => (
            <div className="print-q print-q-essay" key={q.id}>
              <p className="print-q-text">
                <strong>{i + 1}.</strong> {q.q}
              </p>
              {q.conditions?.length > 0 && (
                <ul className="print-q-conditions">
                  {q.conditions.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              )}
              <div className="print-answer-lines">
                <div className="print-answer-line" />
                <div className="print-answer-line" />
                <div className="print-answer-line" />
                <div className="print-answer-line" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function PrintAnswerKey({ quiz }) {
  return (
    <section className="print-answer-key print-break">
      <h2>정답 및 해설</h2>

      {quiz.mcq?.length > 0 && (
        <div className="print-quiz-group">
          <h3>객관식</h3>
          {quiz.mcq.map((q, i) => (
            <p className="print-key-item" key={q.id}>
              <strong>{i + 1}.</strong> {q.options[q.answer]}
              {q.explain && <span className="print-key-explain"> — {q.explain}</span>}
            </p>
          ))}
        </div>
      )}

      {quiz.short?.length > 0 && (
        <div className="print-quiz-group">
          <h3>단답형</h3>
          {quiz.short.map((q, i) => (
            <p className="print-key-item" key={q.id}>
              <strong>{i + 1}.</strong> {q.answers.join(' / ')}
              {q.explain && <span className="print-key-explain"> — {q.explain}</span>}
            </p>
          ))}
        </div>
      )}

      {quiz.essay?.length > 0 && (
        <div className="print-quiz-group">
          <h3>서술형·논술형 모범답안</h3>
          {quiz.essay.map((q, i) => (
            <p className="print-key-item" key={q.id}>
              <strong>{i + 1}.</strong> {q.model}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}
