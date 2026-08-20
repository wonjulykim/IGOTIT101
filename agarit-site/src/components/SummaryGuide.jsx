import { StepChecklist } from './StepItem'
import './StepItem.css'

const SUMMARIZE_STEPS = [
  { label: '핵심어 찾기', prompt: '지문에서 중요하게 다뤄지는 핵심 단어(또는 표현)를 2~3개 찾아 써보세요.' },
  { label: '중심 문장 찾기', prompt: '지문에서 글쓴이의 주장이나 핵심 내용이 담긴 중심 문장을 찾아 그대로 옮겨 적어보세요.' },
  { label: '근거 찾기', prompt: '위 중심 문장(주장)을 뒷받침하는 근거나 예시를 지문에서 찾아 적어보세요.' },
  { label: '논리적으로 연결하기', prompt: '주장과 근거를 "therefore", "because", "for example" 같은 접속어를 사용해 한 문장으로 연결해 보세요.' },
  { label: '단락별 요약', prompt: '지문을 문단별로 나누고, 각 문단의 내용을 한 문장씩 짧게 요약해 보세요.' },
  { label: '중심 문장 엮기', prompt: '문단별 요약 문장들을 순서대로 엮어서 하나의 논리적인 글로 연결해 보세요.' },
  { label: '자기 말로 표현하기', prompt: '위에서 정리한 내용 중 어려운 단어나 표현을 자신만의 쉬운 말로 바꾸어 다시 써보세요.' },
]

export default function SummaryGuide({ unitId }) {
  return (
    <div className="qcard-steps">
      <StepChecklist items={SUMMARIZE_STEPS} groupKey="summarize" unitId={unitId} qid="_summary" />
    </div>
  )
}
