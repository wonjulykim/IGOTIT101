export const r28Quiz = {
  mcq: [
    {
      id: 'r28-mcq-1',
      q: 'Franklin이 자신을 비판한 사람의 마음을 바꾸기 위해 한 행동은?',
      options: [
        '그에게 화를 내며 맞섰다.',
        '그에게 책을 빌려달라고 부탁했다.',
        '그를 험담하는 편지를 보냈다.',
        '그를 완전히 무시했다.',
        '그에게 값비싼 선물을 보냈다.',
      ],
      answer: 1,
      explain: 'Franklin은 그에게 귀한 책을 빌려달라고 부탁하는 편지를 보냈습니다.',
    },
  ],
  short: [
    {
      id: 'r28-short-1',
      subtype: '단답형',
      q: "이 글에서 설명하는 심리학 이론의 이름을 영어(또는 한글)로 쓰고, 그 개념을 한 문장으로 설명하시오.",
      answers: [
        'cognitive dissonance - 생각과 행동 사이에 갈등이 생기면 불편함을 느끼고, 그 갈등을 줄이기 위해 생각이나 행동 중 하나를 바꾸는 현상',
        '인지부조화 - 생각과 행동 사이의 갈등을 줄이기 위해 둘 중 하나를 바꾸는 심리 현상',
      ],
      explain: '인지부조화(cognitive dissonance)는 생각과 행동의 불일치에서 오는 불편함을 줄이기 위해 둘 중 하나를 바꾸는 심리 현상입니다.',
    },
    {
      id: 'r28-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 것을 쓰시오. (전치사+관계대명사)\n"We feel more positively toward people ________ we do favors." (for whom / who)',
      answers: ['for whom'],
      explain: '"do favors for people"에서 for people을 for whom으로 바꾼 전치사+관계대명사 형태가 격식체로 적절합니다.',
    },
  ],
  essay: [
    {
      id: 'r28-essay-short',
      subtype: '단문 서술형',
      q: 'Franklin이 자신을 비판한 사람에게 어떤 행동을 했는지 언급하고, 그 행동이 왜 효과가 있었는지를 3~5문장으로 쓰시오.',
      standard: '[10영03-02] 친숙한 일반적 주제에 관한 글을 읽고 주제 및 요지를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'Franklin의 행동과 그것이 효과가 있었던 이유를 포함할 것'],
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
          title: '평가·비판하는 글을 완성해보세요',
          items: [
            { label: '대상과 기준 정하기', prompt: '무엇을 평가·비판할지, 어떤 기준으로 판단할지 적어보세요.' },
            { label: '장점(지지 근거) 찾기', prompt: '대상의 장점이나 지지할 수 있는 근거를 적어보세요.' },
            { label: '단점(반박 근거) 찾기', prompt: '대상의 단점이나 반박할 수 있는 근거를 적어보세요.' },
            { label: '결론 내리기', prompt: '근거들을 종합하여 합당한 결론(판단)을 한두 문장으로 적어보세요.' },
          ],
        },
      },
      model:
        "Franklin asked his enemy to lend him a rare book, even though the man had criticized him harshly before. This worked because once the man had done Franklin a favor, it became uncomfortable for his mind to still see Franklin as an enemy. To reduce this discomfort, he started to feel more positively toward Franklin instead. This shows that helping someone can sometimes change our feelings about them more than words ever could.",
      totalScore: 6,
      rubric: [
        {
          criterion: '행동 및 이유 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: 'Franklin의 행동과 그것이 효과가 있었던 이유를 정확히 제시함' },
            { score: 2, desc: '행동이나 이유 중 하나가 미흡함' },
            { score: 1, desc: '행동과 이유를 거의 제시하지 않음' },
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
      id: 'r28-essay-1',
      subtype: '서술형',
      q: '인지부조화(cognitive dissonance) 이론을 자신의 경험이나 주변에서 본 사례에 적용하여 설명하시오.',
      standard: '[10영03-02] 친숙한 일반적 주제에 관한 글을 읽고 주제 및 요지를 파악할 수 있다.',
      difficulty: '상',
      score: 10,
      conditions: ['인지부조화 개념을 정확히 언급할 것', '구체적인 경험이나 사례를 포함할 것'],
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
        "I once helped a classmate I didn't really like with a group project, even though I didn't want to. After spending time helping him, I noticed that I actually started to see him more positively. This is a good example of cognitive dissonance: since I couldn't easily undo the effort I had already put in, my mind adjusted my feelings toward him instead, just like what happened between Franklin and his opponent.",
      totalScore: 10,
      rubric: [
        {
          criterion: '개념 이해 및 사례 적용',
          maxScore: 6,
          levels: [
            { score: 6, desc: '인지부조화 개념을 정확히 이해하고 구체적인 사례에 잘 적용함' },
            { score: 3, desc: '개념 언급은 있으나 사례 적용이 다소 부족함' },
            { score: 1, desc: '개념이나 사례를 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 4,
          levels: [
            { score: 4, desc: '문법과 어휘 사용이 정확함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
