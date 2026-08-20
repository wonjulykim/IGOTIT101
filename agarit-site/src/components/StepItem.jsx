import { useState } from 'react'
import { saveStepDraft, getStepDraft } from '../utils/progress'
import './StepItem.css'

export function StepItem({ groupKey, index, step, unitId, qid }) {
  const draftKey = `${groupKey}-${index}`
  const [text, setText] = useState(() => getStepDraft(unitId, qid, draftKey))

  function handleChange(v) {
    setText(v)
    saveStepDraft(unitId, qid, draftKey, v)
  }

  return (
    <li className={`qcard-step-item ${text.trim() ? 'step-answered' : ''}`}>
      <div className="qcard-step-label">
        <span className="qcard-step-num">{index + 1}</span>
        {step.label}
      </div>
      <p className="qcard-step-prompt">{step.prompt}</p>
      <textarea
        className="qcard-step-input"
        rows={4}
        placeholder="여기에 적어보세요"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </li>
  )
}

export function StepChecklist({ heading, items, groupKey, unitId, qid }) {
  return (
    <div className="qcard-step-group">
      {heading && <div className="qcard-step-heading">{heading}</div>}
      <ol>
        {items.map((step, i) => (
          <StepItem key={i} groupKey={groupKey} index={i} step={step} unitId={unitId} qid={qid} />
        ))}
      </ol>
    </div>
  )
}
