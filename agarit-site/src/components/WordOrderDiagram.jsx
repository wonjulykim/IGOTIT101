import './WordOrderDiagram.css'

function Row({ title, items, swappable, note }) {
  return (
    <div className="wo-row">
      <div className="wo-row-title">{title}</div>
      <div className="wo-row-items">
        {items.map((it, i) => (
          <div className="wo-item-wrap" key={i}>
            <div className="wo-item">
              <span className="wo-item-text">{it.text}</span>
              <span className="wo-item-tag">{it.tag}</span>
            </div>
            {i < items.length - 1 && (
              <span className={`wo-arrow ${swappable ? 'swappable' : 'fixed'}`}>
                {swappable ? '⇄' : '→'}
              </span>
            )}
          </div>
        ))}
      </div>
      {note && <div className="wo-note">{note}</div>}
    </div>
  )
}

export default function WordOrderDiagram({ korean, english }) {
  return (
    <div className="wo-diagram">
      <Row title="🇰🇷 한국어 — 조사가 순서를 지켜줘서 순서를 바꿔도 OK" items={korean} swappable note="조사(은/는/을/를)가 있어 순서가 자유로움" />
      <Row title="🇺🇸 영어 — 어순 자체가 문법, 순서를 바꾸면 비문!" items={english} note="정해진 어순(S-V-O)을 반드시 지켜야 함" />
    </div>
  )
}
