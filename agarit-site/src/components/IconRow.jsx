import './IconRow.css'

export default function IconRow({ caption, items = [] }) {
  return (
    <div className="icon-row-wrap">
      {caption && <div className="icon-row-caption">{caption}</div>}
      <div className="icon-row">
        {items.map((it, i) => (
          <div className="icon-card" key={i}>
            <span className="icon-card-emoji">{it.icon}</span>
            <span className="icon-card-label">{it.label}</span>
            {it.sub && <span className="icon-card-sub">{it.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
