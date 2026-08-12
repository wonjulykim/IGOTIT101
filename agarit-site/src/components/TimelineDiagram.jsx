import './TimelineDiagram.css'

export default function TimelineDiagram({ label, now = 100, points = [], range, translation }) {
  return (
    <div className="tl-diagram">
      {label && <div className="tl-label">{label}</div>}
      <div className="tl-track">
        <div className="tl-line" />
        {range && (
          <div
            className="tl-range"
            style={{ left: `${range.from}%`, width: `${range.to - range.from}%` }}
          >
            <span className="tl-range-text">{range.text}</span>
          </div>
        )}
        {points.map((p, i) => (
          <div className="tl-point" key={i} style={{ left: `${p.at}%` }}>
            <span className="tl-dot" />
            <span className="tl-point-text">{p.text}</span>
            {p.sub && <span className="tl-point-sub">{p.sub}</span>}
          </div>
        ))}
        <div className="tl-now" style={{ left: `${now}%` }}>
          <span className="tl-now-flag">지금</span>
          <span className="tl-now-line" />
        </div>
      </div>
      <div className="tl-axis">
        <span>과거</span>
        <span>미래</span>
      </div>
      {translation && <div className="tl-translation">{translation}</div>}
    </div>
  )
}
