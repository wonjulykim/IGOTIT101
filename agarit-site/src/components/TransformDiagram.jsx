import './TransformDiagram.css'

function Box({ label, text }) {
  return (
    <div className="tf-box">
      {label && <div className="tf-box-label">{label}</div>}
      <div className="tf-box-text">{text}</div>
    </div>
  )
}

function normalize(item) {
  return typeof item === 'string' ? { text: item } : item
}

export default function TransformDiagram({ from, to, note }) {
  const fromItems = (Array.isArray(from) ? from : [from]).map(normalize)
  const toItem = normalize(to)
  return (
    <div className="tf-diagram">
      <div className="tf-from">
        {fromItems.map((f, i) => (
          <Box key={i} label={f.label} text={f.text} />
        ))}
      </div>
      <div className="tf-arrow">↓</div>
      <Box label={toItem.label} text={toItem.text} />
      {note && <div className="tf-note">{note}</div>}
    </div>
  )
}
