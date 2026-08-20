export const r29Quiz = {
  mcq: [
    {
      id: 'r29-mcq-1',
      q: '일본에서 고개를 끄덕이는 것(nodding)이 의미하는 바로 가장 적절한 것은?',
      options: [
        '동의하지 않는다는 뜻',
        '이야기를 듣고 있으니 계속 말하라는 뜻',
        '대화를 끝내고 싶다는 뜻',
        '화가 났다는 뜻',
        '아무 의미도 없다',
      ],
      answer: 1,
      explain: '일본에서 고개를 끄덕이는 것은 상대의 말에 동의하지 않아도 "듣고 있으니 계속 말하라"는 뜻일 수 있습니다.',
    },
  ],
  short: [
    {
      id: 'r29-short-1',
      subtype: '단답형',
      q: '고개를 끄덕이는 것(a head nod)이 "no"를 의미하는 나라 세 곳을 지문에서 찾아 쓰시오.',
      answers: ['Turkey, Greece, Bulgaria', 'Turkey, Greece, and Bulgaria'],
      explain: '터키, 그리스, 불가리아에서는 고개를 끄덕이는 것이 "아니오"를 의미합니다.',
    },
    {
      id: 'r29-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 접속사를 쓰시오. (~인 반면)\n"________ a head nod means agreement in most cultures, it means \'no\' in Turkey."',
      answers: ['While', 'while'],
      explain: 'while은 "~인 반면"이라는 뜻으로 두 내용을 대조할 때 씁니다.',
    },
  ],
  essay: [
    {
      id: 'r29-essay-short',
      subtype: '단문 서술형',
      q: '지문에 나온 제스처(gesture)의 예시 중 하나를 골라, 문화마다 그 의미가 어떻게 다른지를 3~5문장으로 쓰시오.',
      standard: '[10영04-01] 일상생활이나 친숙한 일반적 주제에 관하여 듣거나 읽고 세부 정보를 기록할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 나온 제스처 예시 한 가지와 문화별 의미 차이를 포함할 것'],
      steps: {
        summarize: [
          { label: '핵심어 찾기', prompt: '지문에서 중요하게 다뤄지는 핵심 단어(또는 표현)를 2~3개 찾아 써보세요.' },
          { label: '중심 문장 찾기', prompt: '지문에서 글쓴이의 주장이나 핵심 내용이 담긴 중심 문장을 찾아 그대로 옮겨 적어보세요.' },
          { label: '근거 찾기', prompt: '위 중심 문장(주장)을 뒷받침하는 근거나 예시를 지문에서 찾아 적어보세요.' },
          { label: '논리적으로 연결하기', prompt: '주장과 근거를 "therefore", "because", "for example" 같은 접속어를 사용해 한 문장으로 연결해 보세요.' },
          { label: '단락별 요약', prompt: '지문을 문단별로 나누고, 각 문단의 내용을 한 문장씩 짧게 요약해 보세요.' },
          { label: '중심 문장 엮기', prompt: '문단별 요약 문장들을 순서대로 엮어서 하나의 논리적인 글로 연결해 보세요.' },
          { label: '자기 말로 표현하기', prompt: '위에서 정리한 내용 중 어려운 단어나 표현을 자신만의 쉬운 말로 바꾸어 다시 써보세요.' },
        ],
        task: {
          title: '자신의 생각을 문장으로 완성해보세요',
          items: [
            { label: '무엇에 대해 쓸지 고르기', prompt: '조건에서 요구하는 대상(예: 예방 방법, 가치, 경험 등) 중 하나를 정하고, 그 이름을 한 단어(구)로 적어보세요.' },
            { label: '관련 사실·경험 찾기', prompt: '그것과 관련하여 지문에 나온 사실이나 자신의 경험을 한 문장으로 적어보세요. 예: "The passage says that ~." 또는 "Once, I ~."' },
            { label: '이유를 한 문장으로 쓰기', prompt: '왜 그렇게 생각하는지 이유를 "I think this is effective/important because ~." 형태로 완성해보세요.' },
            { label: '구체적인 근거·예시 덧붙이기', prompt: '이유를 뒷받침할 구체적인 근거나 예시를 한 문장 더 적어보세요. 예: "For example, ~." "This is because ~."' },
            { label: '문장 연결하여 완성하기', prompt: '위에서 쓴 문장들을 "Also", "In addition", "Therefore" 같은 접속어로 자연스럽게 이어 3~5문장의 글로 완성해보세요.' },
          ],
        },
      },
      model:
        'A head nod means "yes" in most cultures, but in Turkey, Greece, and Bulgaria, it actually means "no." This shows that the same gesture can carry completely opposite meanings depending on where you are. I think this is important to know before traveling, because misunderstanding a simple gesture could easily cause confusion or even offend someone without meaning to.',
      totalScore: 6,
      rubric: [
        {
          criterion: '제스처 예시 및 의미 차이',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 제스처 예시를 정확히 언급하고 문화별 의미 차이를 명확히 설명함' },
            { score: 2, desc: '예시나 의미 차이 설명 중 하나가 미흡함' },
            { score: 1, desc: '예시와 의미 차이를 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '문장 수 및 언어 사용',
          maxScore: 2,
          levels: [
            { score: 2, desc: '3~5문장을 지켰으며 문법과 어휘 사용이 정확함' },
            { score: 1, desc: '문장 수를 지키지 않았거나 오류가 다소 있음' },
          ],
        },
      ],
    },
    {
      id: 'r29-essay-1',
      subtype: '서술형',
      q: '이 글의 내용을 접속사(While 또는 but 등)를 활용하여 한 문장으로 요약하고, 제스처를 사용할 때 주의해야 할 점을 서술하시오.',
      standard: '[10영04-01] 일상생활이나 친숙한 일반적 주제에 관하여 듣거나 읽고 세부 정보를 기록할 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['접속사를 사용한 한 문장 요약을 포함할 것', '제스처 사용 시 주의할 점을 서술할 것'],
      steps: {
        summarize: [
          { label: '핵심어 찾기', prompt: '지문에서 중요하게 다뤄지는 핵심 단어(또는 표현)를 2~3개 찾아 써보세요.' },
          { label: '중심 문장 찾기', prompt: '지문에서 글쓴이의 주장이나 핵심 내용이 담긴 중심 문장을 찾아 그대로 옮겨 적어보세요.' },
          { label: '근거 찾기', prompt: '위 중심 문장(주장)을 뒷받침하는 근거나 예시를 지문에서 찾아 적어보세요.' },
          { label: '논리적으로 연결하기', prompt: '주장과 근거를 "therefore", "because", "for example" 같은 접속어를 사용해 한 문장으로 연결해 보세요.' },
          { label: '단락별 요약', prompt: '지문을 문단별로 나누고, 각 문단의 내용을 한 문장씩 짧게 요약해 보세요.' },
          { label: '중심 문장 엮기', prompt: '문단별 요약 문장들을 순서대로 엮어서 하나의 논리적인 글로 연결해 보세요.' },
          { label: '자기 말로 표현하기', prompt: '위에서 정리한 내용 중 어려운 단어나 표현을 자신만의 쉬운 말로 바꾸어 다시 써보세요.' },
        ],
      },
      model:
        "While a head nod means \"yes\" in most cultures, it means \"no\" in countries like Turkey, Greece, and Bulgaria. This shows that gestures are not always universal, so when traveling to a new country, it is important to learn about local gestures beforehand to avoid misunderstandings.",
      totalScore: 10,
      rubric: [
        {
          criterion: '접속사 활용 요약',
          maxScore: 5,
          levels: [
            { score: 5, desc: '접속사를 활용해 글의 핵심 내용을 정확히 한 문장으로 요약함' },
            { score: 3, desc: '요약은 했으나 접속사 활용이 부족하거나 내용이 다소 부정확함' },
            { score: 1, desc: '요약을 거의 하지 못함' },
          ],
        },
        {
          criterion: '주의할 점 서술',
          maxScore: 5,
          levels: [
            { score: 5, desc: '제스처 사용 시 주의할 점을 구체적이고 설득력 있게 서술함' },
            { score: 3, desc: '주의할 점을 서술했으나 다소 막연함' },
            { score: 1, desc: '주의할 점을 거의 서술하지 않음' },
          ],
        },
      ],
    },
  ],
}
