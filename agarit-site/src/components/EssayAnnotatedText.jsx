import { buildAnnotatedSegments } from '../utils/textAnnotate'
import './EssayAnnotatedText.css'

const TYPE_LABEL = {
  grammar: '문법',
  word: '단어·표현',
  clarity: '명확성',
}

export default function EssayAnnotatedText({ text, annotations }) {
  const segments = buildAnnotatedSegments(text, annotations)
  const matched = segments.filter((s) => s.type === 'annotation')

  return (
    <div className="essay-annotated">
      <p className="essay-annotated-text">
        {segments.map((seg, i) =>
          seg.type === 'annotation' ? (
            <mark key={i} className={`annot annot-${seg.annotation.type || 'clarity'}`}>
              {seg.text}
              <sup>{seg.index + 1}</sup>
            </mark>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>

      {matched.length > 0 && (
        <ol className="essay-annotated-list">
          {matched.map((seg) => (
            <li key={seg.index} className={`annot-note annot-note-${seg.annotation.type || 'clarity'}`}>
              <div className="annot-note-head">
                <span className="annot-note-num">{seg.index + 1}</span>
                <span className="annot-note-type">{TYPE_LABEL[seg.annotation.type] || '확인'}</span>
              </div>
              <p className="annot-note-quote">“{seg.text}”</p>
              <p className="annot-note-issue">{seg.annotation.issue}</p>
              {seg.annotation.suggestion && (
                <p className="annot-note-suggestion">✏️ {seg.annotation.suggestion}</p>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
