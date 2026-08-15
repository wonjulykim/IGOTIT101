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
      id: 'r24-essay-1',
      subtype: '서술형',
      q: '위 표를 참고하여, 이산화탄소 배출량을 줄이기 위해 국가 또는 개인이 할 수 있는 노력을 한 가지 이상 서술하시오.',
      standard: '[10영04-06] 일상생활이나 친숙한 일반적 주제에 관한 그림, 도표 등을 설명하는 글을 쓸 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['표의 내용(순위 또는 수치)을 최소 한 번 언급할 것', '구체적인 노력이나 방법을 제시할 것'],
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
