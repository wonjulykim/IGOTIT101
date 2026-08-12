import './PrepositionDiagram.css'

const BOX_STYLE = { fill: 'var(--code-bg, #eee)', stroke: 'var(--text-dim)', strokeWidth: 2 }
const BALL_STYLE = { fill: 'var(--accent)' }

function Box(props) {
  return <rect rx="6" {...BOX_STYLE} {...props} />
}
function Ball(props) {
  return <circle r="10" {...BALL_STYLE} {...props} />
}

function Scene({ children }) {
  return (
    <svg viewBox="0 0 200 130" className="prep-svg" role="img">
      {children}
    </svg>
  )
}

const SCENES = {
  near: () => (
    <Scene>
      <Box x="70" y="55" width="70" height="40" />
      <circle cx="140" cy="45" r="24" fill="none" stroke="var(--accent-border)" strokeDasharray="4 4" />
      <Ball cx="150" cy="45" />
    </Scene>
  ),
  between: () => (
    <Scene>
      <Box x="20" y="45" width="45" height="55" />
      <Box x="135" y="45" width="45" height="55" />
      <Ball cx="100" cy="72" />
    </Scene>
  ),
  on: () => (
    <Scene>
      <Box x="55" y="70" width="90" height="30" />
      <Ball cx="100" cy="59" />
    </Scene>
  ),
  under: () => (
    <Scene>
      <Box x="55" y="35" width="90" height="30" />
      <Ball cx="100" cy="90" />
    </Scene>
  ),
  into: () => (
    <Scene>
      <Box x="90" y="35" width="70" height="60" />
      <Ball cx="45" cy="65" />
      <path d="M 60 65 L 85 65" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" fill="none" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
        </marker>
      </defs>
    </Scene>
  ),
  in: () => (
    <Scene>
      <Box x="55" y="35" width="90" height="60" />
      <Ball cx="100" cy="65" />
    </Scene>
  ),
  infront: () => (
    <Scene>
      <Box x="90" y="30" width="70" height="70" />
      <Ball cx="55" cy="80" />
    </Scene>
  ),
  behind: () => (
    <Scene>
      <Ball cx="140" cy="65" />
      <Box x="55" y="30" width="70" height="70" opacity="0.95" />
    </Scene>
  ),
}

const LABELS = {
  near: '가까이 있음',
  between: '사이에 있음',
  on: '접해 있음 (위)',
  under: '아래에 있음',
  into: '안쪽으로 이동',
  in: '안쪽에 있음',
  infront: '앞쪽에 있음',
  behind: '뒤에 있음',
}

export default function PrepositionDiagram({ prep, caption }) {
  const key = prep.replace(/\s+/g, '').replace('frontof', 'front').replace('infrontof', 'infront')
  const renderScene = SCENES[key] || SCENES.on
  return (
    <div className="prep-diagram">
      <div className="prep-diagram-scene">{renderScene()}</div>
      <div className="prep-diagram-label">
        <span className="prep-word">{prep}</span>
        <span className="prep-desc">{caption || LABELS[key]}</span>
      </div>
    </div>
  )
}
