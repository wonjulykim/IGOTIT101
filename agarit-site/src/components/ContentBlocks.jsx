import SentenceDiagram from './SentenceDiagram'
import PrepositionDiagram from './PrepositionDiagram'
import WordOrderDiagram from './WordOrderDiagram'
import TimelineDiagram from './TimelineDiagram'
import TransformDiagram from './TransformDiagram'
import IconRow from './IconRow'
import VideoEmbed from './VideoEmbed'
import './ContentBlocks.css'

export default function ContentBlocks({ blocks }) {
  return (
    <div className="content-blocks">
      {blocks.map((block, i) => <Block key={i} block={block} />)}
    </div>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h3 className="block-heading">{block.text}</h3>
    case 'p':
      return <p className="block-p">{block.text}</p>
    case 'note':
      return (
        <div className="block-note">
          <span className="block-note-icon">💡</span>
          <p>{block.text}</p>
        </div>
      )
    case 'callout':
      return (
        <div className="block-callout">
          <h4>{block.title}</h4>
          <ul>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )
    case 'example':
      return (
        <div className="block-example">
          {block.items.map((item, i) => (
            <div className="example-row" key={i}>
              <span className="example-num">{i + 1}</span>
              <div className="example-text">
                {item.en && <div className="example-en">{item.en}</div>}
                {item.ko && <div className="example-ko">{item.ko}</div>}
                {item.note && <div className="example-note">↳ {item.note}</div>}
              </div>
            </div>
          ))}
        </div>
      )
    case 'table':
      return (
        <div className="block-table-wrap">
          {block.caption && <div className="table-caption">{block.caption}</div>}
          <table className="block-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'sentence-diagram':
      return <SentenceDiagram label={block.label} parts={block.parts} translation={block.translation} />
    case 'preposition-diagram-row':
      return (
        <div className="prep-diagram-row">
          {block.items.map((it, i) => (
            <PrepositionDiagram key={i} prep={it.prep} caption={it.caption} />
          ))}
        </div>
      )
    case 'word-order':
      return <WordOrderDiagram korean={block.korean} english={block.english} />
    case 'timeline':
      return (
        <TimelineDiagram
          label={block.label}
          now={block.now}
          points={block.points}
          range={block.range}
          translation={block.translation}
        />
      )
    case 'transform':
      return <TransformDiagram from={block.from} to={block.to} note={block.note} />
    case 'icon-row':
      return <IconRow caption={block.caption} items={block.items} />
    case 'video':
      return <VideoEmbed youtubeId={block.youtubeId} src={block.src} caption={block.caption} />
    case 'image':
      return (
        <figure className="block-image">
          <img src={block.src} alt={block.alt || ''} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    default:
      return null
  }
}
