import './SentenceDiagram.css'

const TAG_CLASS = {
  S: 'tag-s',
  V: 'tag-v',
  O: 'tag-o',
  O1: 'tag-o',
  O2: 'tag-o2',
  C: 'tag-c',
  OC: 'tag-c',
  M: 'tag-m',
}

export default function SentenceDiagram({ label, parts, translation }) {
  return (
    <div className="sentence-diagram">
      {label && <div className="sd-label">{label}</div>}
      <div className="sd-row">
        {parts.map((p, i) => (
          <div className="sd-part" key={i}>
            <span className={`sd-tag ${TAG_CLASS[p.tag] || 'tag-m'}`}>{p.tag}</span>
            <span className="sd-text">{p.text}</span>
          </div>
        ))}
      </div>
      {translation && <div className="sd-translation">{translation}</div>}
    </div>
  )
}
