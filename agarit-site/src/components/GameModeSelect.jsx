import './GameModeSelect.css'

const MODES = [
  {
    key: 'heart',
    icon: '❤️',
    title: '하트런',
    tagline: '오답 3번이면 아웃!',
    desc: '5지선다 문제를 순서대로 풀며 하트 3개로 버티는 서바이벌 퀴즈. 콤보와 보너스 문제로 짜릿하게!',
    needs: (quiz) => quiz.mcq.length >= 3,
    need: '객관식 3문제 이상',
  },
  {
    key: 'falling',
    icon: '🧱',
    title: '낙하 방어전',
    tagline: '떨어지기 전에 정답을 잡아라!',
    desc: '보기들이 위에서 아래로 떨어져요. 정답 블록을 바닥에 닿기 전에 클릭! 오답을 누르거나 정답을 놓치면 목숨이 줄어드는 실시간 반응속도 게임.',
    needs: (quiz) => quiz.mcq.length >= 3,
    need: '객관식 3문제 이상',
  },
  {
    key: 'typing',
    icon: '⌨️',
    title: '스피드 타자전',
    tagline: '빨리, 정확하게 입력해서 완주!',
    desc: '단답형 문제의 정답을 직접 타이핑해서 트랙 위 캐릭터를 결승선까지 달리게 하는 레이싱 게임.',
    needs: (quiz) => quiz.short.length >= 3,
    need: '단답형 3문제 이상',
  },
  {
    key: 'match',
    icon: '🧩',
    title: '짝맞추기 메모리',
    tagline: '문제와 정답 카드를 뒤집어 짝을 맞춰라',
    desc: '카드를 뒤집어 문제와 정답의 짝을 찾는 메모리 게임. 최소 이동 횟수와 시간으로 승부해요.',
    needs: (quiz) => quiz.mcq.length >= 4,
    need: '객관식 4문제 이상',
  },
]

export default function GameModeSelect({ quiz, onSelect, onExit }) {
  return (
    <div className="gms">
      <h2 className="gms-title">🎮 게임 모드 선택</h2>
      <p className="gms-sub">원하는 게임을 골라서 도전해보세요.</p>
      <div className="gms-grid">
        {MODES.map((m) => {
          const enabled = m.needs(quiz)
          return (
            <button
              key={m.key}
              className={`gms-card ${enabled ? '' : 'gms-card-disabled'}`}
              onClick={() => enabled && onSelect(m.key)}
              disabled={!enabled}
            >
              <div className="gms-card-icon">{m.icon}</div>
              <div className="gms-card-title">{m.title}</div>
              <div className="gms-card-tagline">{m.tagline}</div>
              <p className="gms-card-desc">{m.desc}</p>
              {!enabled && <div className="gms-card-need">이 챕터엔 {m.need}가 필요해요</div>}
            </button>
          )
        })}
      </div>
      <button className="btn-secondary gms-exit" onClick={onExit}>나가기</button>
    </div>
  )
}
