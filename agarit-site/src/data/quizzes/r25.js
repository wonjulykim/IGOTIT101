export const r25Quiz = {
  mcq: [
    {
      id: 'r25-mcq-1',
      q: '"early bird"가 의미하는 것으로 가장 적절한 것은?',
      options: [
        '아침 일찍 일어나는 새',
        '아침에 활동하기를 좋아하는 사람',
        '밤늦게까지 일하는 사람',
        '항상 늦잠을 자는 사람',
        '새를 좋아하는 사람',
      ],
      answer: 1,
      explain: 'early bird는 아침에 일하는 것을 좋아하는 사람을 뜻하는 은유적 표현입니다.',
    },
  ],
  short: [
    {
      id: 'r25-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"A ________ is a figure of speech in which a comparison is made between two different things."',
      answers: ['metaphor'],
      explain: '은유(metaphor)는 서로 다른 두 대상을 비교하는 비유적 표현입니다.',
    },
    {
      id: 'r25-short-2',
      subtype: '단답형',
      q: '"Life is a roller coaster"라는 은유가 의미하는 바를 영어로 한 문장으로 쓰시오.',
      answers: ['Life has lots of ups and downs', 'life also has lots of ups and downs'],
      explain: '롤러코스터처럼 인생에도 오르내림(기쁨과 어려움)이 있다는 뜻입니다.',
    },
  ],
  essay: [
    {
      id: 'r25-essay-short',
      subtype: '단문 서술형',
      q: '지문에 나온 은유(metaphor) 예시 중 하나를 골라, 그것이 무엇을 비교하고 있는지를 3~5문장으로 쓰시오.',
      standard: '[10영04-04] 주변의 대상이나 상황을 묘사하는 글을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 나온 은유 표현 중 하나를 언급할 것'],
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '비교·대조하는 글을 완성해보세요',
          items: [
            '1단계: 비교(또는 대조) 대상이 같은 범주·층위인지 확인하기',
            '2단계: 두 대상의 공통점(또는 유사점) 찾아 쓰기',
            '3단계: 두 대상의 차이점 찾아 쓰기',
            '4단계: 비교 기준을 정하고 표나 벤 다이어그램으로 정리해보기',
            '5단계: 기준별로 균형 있게 문장으로 서술하기',
          ],
        },
      },
      model:
        '"Life is a roller coaster" is a metaphor from the passage. It compares life to a roller coaster, which goes up and down again and again. This means that life also has many ups and downs, such as happy moments and hard moments. Understanding this metaphor helps me accept difficult times as just one part of a much bigger ride.',
      totalScore: 6,
      rubric: [
        {
          criterion: '은유 언급 및 비교 설명',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 은유 표현을 정확히 언급하고 비교 대상을 명확히 설명함' },
            { score: 2, desc: '은유 언급이나 비교 설명 중 하나가 다소 부족함' },
            { score: 1, desc: '은유와 비교 설명을 거의 제시하지 않음' },
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
      id: 'r25-essay-1',
      subtype: '서술형',
      q: '자신만의 은유(metaphor) 표현을 하나 만들고, 그것이 무엇을 비교하며 어떤 의미를 나타내는지 서술하시오.',
      standard: '[10영04-04] 주변의 대상이나 상황을 묘사하는 글을 쓸 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['"A is B" 형태의 은유 문장을 포함할 것', '그 은유가 의미하는 바를 설명할 것'],
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '비교·대조하는 글을 완성해보세요',
          items: [
            '1단계: 비교(또는 대조) 대상이 같은 범주·층위인지 확인하기',
            '2단계: 두 대상의 공통점(또는 유사점) 찾아 쓰기',
            '3단계: 두 대상의 차이점 찾아 쓰기',
            '4단계: 비교 기준을 정하고 표나 벤 다이어그램으로 정리해보기',
            '5단계: 기준별로 균형 있게 문장으로 서술하기',
          ],
        },
      },
      model:
        '"My mind is a garden." This metaphor compares the mind to a garden. Just as a garden needs regular care — watering, weeding, and sunlight — to grow beautiful flowers, the mind needs good habits like reading, rest, and positive thoughts to grow healthy ideas. If we neglect our mind, like an uncared-for garden, it can become filled with negative thoughts instead.',
      totalScore: 10,
      rubric: [
        {
          criterion: '은유 문장 및 의미 설명',
          maxScore: 6,
          levels: [
            { score: 6, desc: '"A is B" 형태의 은유를 만들고 그 의미를 창의적이고 명확하게 설명함' },
            { score: 3, desc: '은유는 만들었으나 의미 설명이 부족함' },
            { score: 1, desc: '은유나 의미 설명을 거의 제시하지 않음' },
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
