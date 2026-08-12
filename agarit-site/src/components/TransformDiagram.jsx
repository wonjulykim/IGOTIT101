import './TransformDiagram.css'

function Box({ label, text }) {
  return (
    <div className="tf-box">
      {label && <div className="tf-box-label">{label}</div>}
      <div className="tf-box-text">{text}</div>
    </div>
  )
}

export default function TransformDiagram({ from, to, note }) {
  const fromItems = Array.isArray(from) ? from : [from]
  return (
    <div className="tf-diagram">
      <div className="tf-from">
        {fromItems.map((f, i) => (
          <Box key={i} label={f.label} text={f.text} />
        ))}
      </div>
      <div className="tf-arrow">↓</div>
      <Box label={to.label} text={to.text} />
      {note && <div className="tf-note">{note}</div>}
    </div>
  )
}
