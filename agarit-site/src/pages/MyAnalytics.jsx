import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { readyChapters } from '../data/chapters'
import { readyReadings } from '../data/readings'
import { getChapterQuiz } from '../data/quizzes'
import { getProgress, getCurrentStudent, removeVocabWord } from '../utils/progress'
import './MyAnalytics.css'

function completionStats(units, isDone) {
  let total = 0
  let done = 0
  units.forEach((u) => {
    u.lessons.forEach((l) => {
      total += 1
      if (isDone(u.id, l.id)) done += 1
    })
  })
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 }
}

export default function MyAnalytics() {
  const [student, setStudent] = useState(getCurrentStudent())
  const [refreshKey, setRefreshKey] = useState(0)
  const progress = useMemo(() => getProgress(), [student, refreshKey])

  useEffect(() => {
    // 로그인 직후 이 페이지로 이동한 경우를 대비해 세션 캐시를 한 번 더 확인한다.
    const t = setTimeout(() => setStudent(getCurrentStudent()), 300)
    return () => clearTimeout(t)
  }, [])

  const isDone = (chapterId, lessonId) => !!progress.completedLessons?.[`${chapterId}/${lessonId}`]

  const grammarStats = completionStats(readyChapters, isDone)
  const readingStats = completionStats(readyReadings, isDone)

  const scoreRows = useMemo(() => {
    const units = [...readyChapters, ...readyReadings]
    return units
      .map((u) => {
        const s = progress.quizScores?.[u.id]
        if (!s) return null
        return { id: u.id, title: u.title, mcq: s.mcq || null, short: s.short || null }
      })
      .filter(Boolean)
  }, [progress])

  const essayEntries = useMemo(() => {
    const rows = []
    readyReadings.forEach((unit) => {
      const quiz = getChapterQuiz(unit.id)
      ;(quiz?.essay || []).forEach((q) => {
        const answer = progress.essayAnswers?.[unit.id]?.[q.id]
        if (!answer || !answer.trim()) return
        const graded = progress.writingScores?.[unit.id]?.[q.id]
        rows.push({
          unitId: unit.id,
          unitTitle: unit.title,
          questionId: q.id,
          subtype: q.subtype,
          question: q.q,
          answer,
          score: graded?.totalScore,
          maxScore: graded?.maxScore ?? q.totalScore,
        })
      })
    })
    return rows
  }, [progress])

  const unitTitleMap = useMemo(() => {
    const map = {}
    ;[...readyChapters, ...readyReadings].forEach((u) => {
      map[u.id] = u.title
    })
    return map
  }, [])

  const vocabRows = useMemo(() => {
    const rows = []
    Object.entries(progress.vocabWords || {}).forEach(([unitId, words]) => {
      Object.entries(words).forEach(([word, info]) => {
        rows.push({ unitId, word, meaning: info.meaning, addedAt: info.addedAt })
      })
    })
    rows.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
    return rows
  }, [progress])

  function handleRemoveVocab(unitId, word) {
    removeVocabWord(unitId, word)
    setRefreshKey((k) => k + 1)
  }

  return (
    <div className="my-analytics-page">
      <h1>📊 내 분석</h1>
      {!student && (
        <div className="my-analytics-guest">
          지금은 이 기기에 저장된 기록만 보고 있어요.{' '}
          <Link to="/student/login?next=/me">로그인</Link>하면 다른 기기에서도 이어서 확인할 수 있어요.
        </div>
      )}
      {student && <p className="my-analytics-welcome">{student.name}님의 학습 기록이에요.</p>}

      <section className="my-analytics-section">
        <h2>학습 완료율</h2>
        <div className="progress-bars">
          <div className="progress-bar-row">
            <div className="progress-bar-label">📘 문법 ({grammarStats.done}/{grammarStats.total})</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${grammarStats.pct}%` }} />
            </div>
            <div className="progress-bar-pct">{grammarStats.pct}%</div>
          </div>
          <div className="progress-bar-row">
            <div className="progress-bar-label">📖 독해 ({readingStats.done}/{readingStats.total})</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${readingStats.pct}%` }} />
            </div>
            <div className="progress-bar-pct">{readingStats.pct}%</div>
          </div>
        </div>
      </section>

      <section className="my-analytics-section">
        <h2>편·장별 점수 추이</h2>
        {scoreRows.length === 0 ? (
          <p className="my-analytics-empty">아직 채점된 객관식·단답형 문제가 없어요.</p>
        ) : (
          <div className="score-table-wrap">
            <table className="score-table">
              <thead>
                <tr>
                  <th>편/장</th>
                  <th>객관식</th>
                  <th>단답형</th>
                </tr>
              </thead>
              <tbody>
                {scoreRows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.title}</td>
                    <td>{r.mcq ? `${r.mcq.score} / ${r.mcq.total}` : '-'}</td>
                    <td>{r.short ? `${r.short.score} / ${r.short.total}` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="my-analytics-section">
        <h2>내가 쓴 서·논술형 답안 모아보기</h2>
        {essayEntries.length === 0 ? (
          <p className="my-analytics-empty">아직 작성한 서·논술형 답안이 없어요.</p>
        ) : (
          <div className="essay-collection">
            {essayEntries.map((e) => (
              <div className="essay-entry" key={`${e.unitId}-${e.questionId}`}>
                <div className="essay-entry-head">
                  <span className="essay-entry-unit">{e.unitTitle}</span>
                  <span className="essay-entry-subtype">{e.subtype}</span>
                  {typeof e.score === 'number' && (
                    <span className="essay-entry-score">AI 채점 {e.score} / {e.maxScore}점</span>
                  )}
                </div>
                <p className="essay-entry-question">{e.question}</p>
                <p className="essay-entry-answer">{e.answer}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="my-analytics-section">
        <h2>📚 내 단어장</h2>
        {vocabRows.length === 0 ? (
          <p className="my-analytics-empty">아직 저장한 단어가 없어요. 지문의 "어휘 노트"에서 ☆를 눌러 저장해보세요.</p>
        ) : (
          <div className="vocab-list">
            {vocabRows.map((v) => (
              <div className="vocab-list-item" key={`${v.unitId}-${v.word}`}>
                <div className="vocab-list-text">
                  <span className="vocab-list-word">{v.word}</span>
                  <span className="vocab-list-meaning">{v.meaning}</span>
                  <span className="vocab-list-unit">{unitTitleMap[v.unitId] || v.unitId}</span>
                </div>
                <button
                  type="button"
                  className="vocab-list-remove"
                  onClick={() => handleRemoveVocab(v.unitId, v.word)}
                  title="단어장에서 빼기"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
