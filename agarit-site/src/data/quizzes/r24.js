export const r24Quiz = {
  mcq: [
    {
      id: 'r24-mcq-1',
      q: '표에서 3번째로 많은 이산화탄소를 배출한 국가는?',
      options: ['China', 'the U.S.', 'Japan', 'Korea', 'Canada'],
      answer: 2,
      explain: '표에 따르면 Japan이 3위(1.3 billion tons)입니다.',
    },
  ],
  short: [
    {
      id: 'r24-short-1',
      subtype: '문장완성',
      q: '다음 문장을 표의 내용에 맞게 완성하시오. (국가명을 쓸 것)\n"________ was ranked highest in CO2 emissions, followed by the U.S."',
      answers: ['China'],
      explain: '표에서 China가 가장 많은 이산화탄소를 배출해 1위입니다.',
    },
    {
      id: 'r24-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 것을 쓰시오. (가주어)\n"________ is urgent for the Chinese government to take action to reduce CO2 emissions."',
      answers: ['It', 'it'],
      explain: '진주어 to take action이 뒤로 가고 가주어 It이 그 자리를 대신합니다.',
    },
  ],
  essay: [
    {
      id: 'r24-essay-short',
      subtype: '단문 서술형',
      q: '표에서 이산화탄소를 가장 많이 배출한 국가를 언급하고, 이산화탄소 배출을 줄이기 위해 개인이 할 수 있는 노력 한 가지를 3~5문장으로 쓰시오.',
      standard: '[10영04-06] 일상생활이나 친숙한 일반적 주제에 관한 그림, 도표 등을 설명하는 글을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '표에서 배출량 1위 국가명을 언급할 것'],
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
        "According to the table, China was ranked highest in CO2 emissions among the five countries. This shows how much impact one country's energy use can have on the environment. As an individual, I can help reduce CO2 emissions by using public transportation instead of asking my parents to drive me everywhere. Turning off lights and unplugging devices when they are not in use is another small but helpful habit.",
      totalScore: 6,
      rubric: [
        {
          criterion: '국가명 언급 및 노력 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '표의 1위 국가를 정확히 언급하고 구체적인 개인 노력을 제시함' },
            { score: 2, desc: '국가명 언급이나 노력 제시 중 하나가 미흡함' },
            { score: 1, desc: '국가명과 노력을 거의 제시하지 않음' },
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
      id: 'r24-essay-1',
      subtype: '서술형',
      q: '위 표를 참고하여, 이산화탄소 배출량을 줄이기 위해 국가 또는 개인이 할 수 있는 노력을 한 가지 이상 서술하시오.',
      standard: '[10영04-06] 일상생활이나 친숙한 일반적 주제에 관한 그림, 도표 등을 설명하는 글을 쓸 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['표의 내용(순위 또는 수치)을 최소 한 번 언급할 것', '구체적인 노력이나 방법을 제시할 것'],
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
          title: '설명하는 글을 완성해보세요',
          items: [
            { label: '대상 확인하기', prompt: '조건에서 설명하라고 요구하는 대상(사건·개념·경험)이 정확히 무엇인지 한 문장으로 적어보세요.' },
            { label: '사실 정보 정리하기', prompt: '지문에서 그 대상과 관련된 사실이나 정보를 찾아 목록으로 나열해보세요.' },
            { label: '순서 정하기', prompt: '조건에 제시된 항목(예: 안내문 형식, 원인-결과 등) 순서대로 배열해보세요.' },
            { label: '객관적으로 서술하기', prompt: '개인적인 느낌은 빼고, 사실에 근거한 문장으로 각 항목을 서술해보세요. 예: "First, ~. Second, ~."' },
            { label: '형식 갖추기', prompt: '제목이나 문단 구성 등 조건에서 요구하는 형식을 마지막으로 점검하고 완성하세요.' },
          ],
        },
      },
      model:
        "Since China emits far more CO2 than any other country in the table, it is important for governments and individuals to take action together. For example, countries can invest more in renewable energy like solar and wind power, while individuals can reduce car use and rely more on public transportation to lower their own carbon footprint.",
      totalScore: 8,
      rubric: [
        {
          criterion: '표 내용 인용 및 노력 제시',
          maxScore: 5,
          levels: [
            { score: 5, desc: '표의 내용을 언급하고 구체적인 노력이나 방법을 제시함' },
            { score: 3, desc: '표 내용 언급이나 노력 제시 중 하나가 미흡함' },
            { score: 1, desc: '표 내용과 노력을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 3,
          levels: [
            { score: 3, desc: '문법과 어휘 사용이 정확함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
