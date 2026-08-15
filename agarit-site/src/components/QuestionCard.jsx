import { isShortAnswerCorrect, essayKeywordHits } from '../utils/grading'
import { XP_RULES } from '../utils/gamification'
import { getChapter } from '../data/chapters'
import AiEssayGrader from './AiEssayGrader'
import './QuestionCard.css'

export default function QuestionCard({ q, index, value, onChange, submitted, showChapterTag, unitId }) {
  const chapter = showChapterTag ? getChapter(q.chapterId) : null
  return (
    <div className="qcard">
      <div className="qcard-head">
        <span className="qcard-num">Q{index + 1}</span>
        {chapter && <span className="qcard-tag">{chapter.num}장</span>}
        <span className={`qcard-type qtype-${q.type}`}>
          {q.type === 'mcq' ? '객관식' : q.type === 'short' ? '단답형' : q.rubric ? '서술형/논술형' : '서술형'}
        </span>
        {q.difficulty && <span className="qcard-badge">난이도 {q.difficulty}</span>}
        {q.score && <span className="qcard-badge">배점 {q.score}점</span>}
      </div>
      <p className="qcard-question">{q.q}</p>
      {q.conditions?.length > 0 && (
        <div className="qcard-conditions">
          <strong>조건</strong>
          <ul>
            {q.conditions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {q.type === 'mcq' && <MCQBody q={q} value={value} onChange={onChange} submitted={submitted} />}
      {q.type === 'short' && <ShortBody q={q} value={value} onChange={onChange} submitted={submitted} />}
      {q.type === 'essay' && (
        <EssayBody q={q} value={value} onChange={onChange} submitted={submitted} unitId={unitId} />
      )}
    </div>
  )
}

function MCQBody({ q, value, onChange, submitted }) {
  const isCorrect = value === q.answer
  return (
    <div className="mcq-options">
      {q.options.map((opt, i) => {
        let cls = 'mcq-option'
        if (submitted) {
          if (i === q.answer) cls += ' correct'
          else if (i === value) cls += ' wrong'
        } else if (value === i) {
          cls += ' selected'
        }
        return (
          <button
            key={i}
            className={cls}
            disabled={submitted}
            onClick={() => onChange(i)}
          >
            <span className="mcq-index">{i + 1}</span>
            <span>{opt}</span>
          </button>
        )
      })}
      {submitted && (
        <div className="qcard-explain">
          <span className={`xp-chip ${isCorrect ? 'xp-hit' : 'xp-miss'}`}>
            {isCorrect ? `✅ 정답! +${XP_RULES.mcqCorrect} XP` : '❌ 오답'}
          </span>
          {q.explain && <div className="explain-text"><strong>해설.</strong> {q.explain}</div>}
        </div>
      )}
    </div>
  )
}

function ShortBody({ q, value, onChange, submitted }) {
  const correct = submitted && isShortAnswerCorrect(value, q.answers)
  return (
    <div>
      <input
        className={`short-input ${submitted ? (correct ? 'correct' : 'wrong') : ''}`}
        type="text"
        placeholder="답을 입력하세요"
        value={value || ''}
        disabled={submitted}
        onChange={(e) => onChange(e.target.value)}
      />
      {submitted && (
        <div className="qcard-explain">
          <span className={`xp-chip ${correct ? 'xp-hit' : 'xp-miss'}`}>
            {correct ? `✅ 정답! +${XP_RULES.shortCorrect} XP` : `❌ 오답입니다. 정답 예시: ${q.answers[0]}`}
          </span>
          {q.explain && <div className="explain-text">{q.explain}</div>}
        </div>
      )}
    </div>
  )
}

function EssayBody({ q, value, onChange, submitted, unitId }) {
  const result = submitted && q.keywords ? essayKeywordHits(value, q.keywords) : null
  return (
    <div>
      <textarea
        className="essay-input"
        rows={q.rubric ? 8 : 5}
        placeholder="자신의 생각을 문장으로 서술해보세요."
        value={value || ''}
        disabled={submitted}
        onChange={(e) => onChange(e.target.value)}
      />
      {submitted && q.rubric && (
        <AiEssayGrader q={q} studentAnswer={value} unitId={unitId} />
      )}
      {submitted && !q.rubric && (
        <div className="essay-feedback">
          <div className="essay-model">
            <strong>📖 모범답안</strong>
            <p>{q.model}</p>
          </div>
          {result && (
            <div className="essay-keywords">
              핵심 키워드 포함: {result.hits.length} / {result.total}
              <span className="essay-keyword-list">
                {q.keywords.map((k) => (
                  <span key={k} className={`kw ${result.hits.includes(k) ? 'kw-hit' : ''}`}>{k}</span>
                ))}
              </span>
              <p className="essay-note">※ 서술형은 자동 채점이 어려워요. 모범답안과 키워드를 참고해 스스로(또는 선생님과 함께) 채점해보세요.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
