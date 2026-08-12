export const ch24 = {
  'ch24-1': {
    title: '관계부사의 개념과 종류',
    blocks: [
      {
        type: 'p',
        text: '원준이는 평소 예술에 관심이 많고 조예가 깊다고 정평이 나 있습니다. 그런 원준이가 프랑스의 작은 마을 지베르니에 있는 인상주의 화가 모네의 집을 찾아가기로 했습니다. 소문처럼 아름다운 정원과 연못을 지나자, 모네가 가족과 함께 살며 그림을 그렸던 집이 나타났습니다. 그 집을 보며 원준이는 "나는 그 집을 알아. 그가 그곳에서 살았어."라고 말하고 싶어졌습니다. 이 한 문장을 영어로 옮기려면 "I knew the house."와 "He lived in the house."라는 두 문장을 하나로 이어야 하는데, 바로 이 지점에서 관계부사가 등장합니다.',
      },
      {
        type: 'p',
        text: '우리는 앞서 두 문장을 이어주며 명사를 보충 설명해주는 관계대명사에 관해 배웠습니다. 관계부사도 관계대명사와 마찬가지로 비슷한 두 문장을 이어주며 앞에 있는 명사(선행사)를 설명해주는 역할을 합니다. 다만 관계대명사가 문장 안에서 명사처럼 역할을 하는 것과 달리, 관계부사는 문장 안에서 부사처럼 역할을 한다는 점이 다릅니다. 관계부사는 주로 시간, 장소, 이유, 방법을 나타내는 선행사를 설명합니다.',
      },
      { type: 'heading', text: '관계부사는 왜 필요한가' },
      {
        type: 'p',
        text: '관계대명사만으로도 두 문장을 이어 붙일 수 있는데, 굳이 관계부사라는 것이 따로 존재하는 이유는 무엇일까요? "I knew the house."와 "He lived in the house."라는 두 문장을 합쳐 보면 그 이유를 알 수 있습니다. the house를 관계대명사 which로 바꾸어 연결하면 "I knew the house which he lived in."이 되는데, 문장이 전치사 in으로 끝나 어딘가 허전해 보입니다. 전치사를 관계대명사 앞으로 옮기면 "I knew the house in which he lived."가 되어 문법적으로는 더 깔끔하지만, "in which"라는 두 단어를 매번 붙여 써야 해서 문장이 길고 딱딱해집니다. 이런 번거로움을 해결하기 위해 영어는 "전치사 + 관계대명사"라는 두 단어를 where라는 한 단어로 압축해서 쓸 수 있게 만들었습니다. 이렇게 압축된 단어가 바로 관계부사입니다.',
      },
      {
        type: 'note',
        text: '관계부사(when, where, why, how)는 결국 "전치사 + 관계대명사"를 한 단어로 줄인 표현입니다. 매번 전치사를 옮기고 관계대명사를 붙이는 수고를 덜기 위해 만들어진 압축 장치라고 이해하면 됩니다.',
      },
      { type: 'heading', text: '압축 과정 ① 장소: where' },
      {
        type: 'p',
        text: '먼저 장소를 나타내는 선행사 the house를 예로 압축 과정을 단계별로 살펴보겠습니다. 1단계에서는 관계대명사 which만 사용해 전치사가 문장 끝에 남고, 2단계에서는 그 전치사를 관계대명사 앞으로 이동시킵니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '문장 1', text: 'I knew the house.' },
          { label: '문장 2', text: 'He lived in the house.' },
        ],
        to: { label: '① 관계대명사', text: 'I knew the house which he lived in.' },
        note: '두 문장을 관계대명사 which로 연결. 전치사 in이 문장 끝에 남아 어색해 보인다.',
      },
      {
        type: 'transform',
        from: { label: '① 관계대명사', text: 'I knew the house which he lived in.' },
        to: { label: '② 전치사 + 관계대명사', text: 'I knew the house in which he lived.' },
        note: '전치사 in을 관계대명사 which 앞으로 이동. 문법적으로 맞지만 길고 딱딱하다.',
      },
      {
        type: 'transform',
        from: { label: '② 전치사 + 관계대명사', text: 'I knew the house in which he lived.' },
        to: { label: '③ 관계부사', text: 'I knew the house where he lived.' },
        note: '"in which"를 관계부사 where 한 단어로 압축. 훨씬 간결하고 자연스럽다.',
      },
      { type: 'heading', text: '압축 과정 ② 시간: when' },
      {
        type: 'transform',
        from: [
          { label: '문장 1', text: 'I know the date.' },
          { label: '문장 2', text: 'She will go to the zoo on the date.' },
        ],
        to: { label: '① 관계대명사', text: 'I know the date which she will go to the zoo on.' },
        note: '시간을 나타내는 the date를 관계대명사 which로 연결. 전치사 on이 문장 끝에 남는다.',
      },
      {
        type: 'transform',
        from: { label: '① 관계대명사', text: 'I know the date which she will go to the zoo on.' },
        to: { label: '② 전치사 + 관계대명사', text: 'I know the date on which she will go to the zoo.' },
        note: '전치사 on을 앞으로 이동.',
      },
      {
        type: 'transform',
        from: { label: '② 전치사 + 관계대명사', text: 'I know the date on which she will go to the zoo.' },
        to: { label: '③ 관계부사', text: 'I know the date when she will go to the zoo.' },
        note: '"on which"를 관계부사 when 한 단어로 압축.',
      },
      { type: 'heading', text: '압축 과정 ③ 이유: why' },
      {
        type: 'transform',
        from: [
          { label: '문장 1', text: 'Do you know the reason?' },
          { label: '문장 2', text: 'He was upset for the reason.' },
        ],
        to: { label: '① 관계대명사', text: 'Do you know the reason which he was upset for?' },
        note: '이유를 나타내는 the reason을 관계대명사 which로 연결. 전치사 for가 문장 끝에 남는다.',
      },
      {
        type: 'transform',
        from: { label: '① 관계대명사', text: 'Do you know the reason which he was upset for?' },
        to: { label: '② 전치사 + 관계대명사', text: 'Do you know the reason for which he was upset?' },
        note: '전치사 for를 앞으로 이동.',
      },
      {
        type: 'transform',
        from: { label: '② 전치사 + 관계대명사', text: 'Do you know the reason for which he was upset?' },
        to: { label: '③ 관계부사', text: 'Do you know the reason why he was upset?' },
        note: '"for which"를 관계부사 why 한 단어로 압축.',
      },
      { type: 'heading', text: '압축 과정 ④ 방법: how' },
      {
        type: 'transform',
        from: [
          { label: '문장 1', text: 'Can you show me the way?' },
          { label: '문장 2', text: 'You solve the problem in the way.' },
        ],
        to: { label: '① 관계대명사', text: 'Can you show me the way which you solve the problem in?' },
        note: '방법을 나타내는 the way를 관계대명사 which로 연결. 전치사 in이 문장 끝에 남는다.',
      },
      {
        type: 'transform',
        from: { label: '① 관계대명사', text: 'Can you show me the way which you solve the problem in?' },
        to: { label: '② 전치사 + 관계대명사', text: 'Can you show me the way in which you solve the problem?' },
        note: '전치사 in을 앞으로 이동.',
      },
      {
        type: 'transform',
        from: { label: '② 전치사 + 관계대명사', text: 'Can you show me the way in which you solve the problem?' },
        to: { label: '③ 관계부사', text: 'Can you show me how you solve the problem?' },
        note: '"in which"를 관계부사 how 한 단어로 압축. 단, how는 the way와 함께 쓰지 않으므로 선행사 the way는 사라진다.',
      },
      {
        type: 'p',
        text: '네 가지 압축 과정에서 볼 수 있듯, 관계부사로 무엇을 쓸지는 선행사가 어떤 전치사와 어울리는지, 그리고 그 전치사가 나타내는 의미(장소, 시간, 이유, 방법)가 무엇인지에 따라 결정됩니다. 즉 관계부사를 고를 때는 "이 선행사는 어떤 전치사 + 관계대명사의 압축인가"를 떠올리면 됩니다.',
      },
      { type: 'heading', text: '관계대명사와 관계부사, 뉘앙스는 어떻게 다른가' },
      {
        type: 'p',
        text: '"I knew the house which he lived in."과 "I knew the house where he lived."은 둘 다 문법적으로 맞는 문장이지만, 강조하는 지점이 살짝 다릅니다. 이 차이는 관계대명사 which와 that의 뉘앙스 차이를 먼저 보면 이해하기 쉽습니다. "I had the breakfast which my mom cooked."는 "나 아침 먹었는데, 어떤 아침이었냐면 우리 엄마가 해준 아침이었어."처럼 선행사(the breakfast)가 "어떤 것"인지를 새롭게 짚어주는 느낌이 강합니다. 관계대명사는 문장 안에서 명사(목적어) 역할을 대신하기 때문에, 선행사 자체를 다시 한번 지목하며 정보를 덧붙이는 셈입니다.',
      },
      {
        type: 'p',
        text: '반면 관계부사가 쓰인 문장은 선행사가 "이미 정해진 것"이라는 전제 아래, 그 장소·시간에서 일어난 일을 부가적인 배경 설명처럼 덧붙입니다. "I knew the house where he lived."는 "나 그 집 알아. 그가 그곳에서 살았어."처럼 the house를 먼저 확정해두고, where he lived는 "그곳에서 무슨 일이 있었는지"를 부사처럼 곁들이는 느낌입니다. 즉 관계대명사문은 선행사를 "명사로 다시 짚어 설명"하고, 관계부사문은 선행사를 "배경으로 두고 부사로 보충"한다는 차이가 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I knew the house which he lived in.', ko: '나 그 집 알아, 어떤 집이냐면 그가 살았던 집이야.', note: '관계대명사 which: 선행사(the house)가 "어떤 것"인지 명사로 다시 짚어 설명' },
          { en: 'I knew the house where he lived.', ko: '나 그 집 알아, 그곳에서 그가 살았어.', note: '관계부사 where: the house를 이미 정해둔 채 "그곳에서 있었던 일"을 부사로 보충' },
        ],
      },
      { type: 'heading', text: '선행사의 종류에 따른 관계부사' },
      {
        type: 'table',
        caption: '선행사의 종류와 관계부사',
        headers: ['의미', '대표 선행사', '관계부사', '전치사 + 관계대명사'],
        rows: [
          ['장소', 'the place, the house, the city 등', 'where', 'in(on, at) which'],
          ['시간', 'the time, the day, the year 등', 'when', 'at(on, in) which'],
          ['이유', 'the reason', 'why', 'for which'],
          ['방법', 'the way', 'how', 'in which'],
        ],
      },
      {
        type: 'icon-row',
        caption: '선행사 종류별 관계부사 한눈에 보기',
        items: [
          { icon: '📍', label: 'where', sub: '장소 (the place, the house)' },
          { icon: '⏰', label: 'when', sub: '시간 (the time, the day)' },
          { icon: '❓', label: 'why', sub: '이유 (the reason)' },
          { icon: '🛠️', label: 'how', sub: '방법 (the way)' },
        ],
      },
      { type: 'heading', text: 'where: 장소를 나타내는 선행사' },
      {
        type: 'p',
        text: 'where는 the place, the house, the city, the town, the restaurant처럼 장소를 나타내는 선행사를 설명합니다. 아래 예문들은 각기 다른 맥락에서 장소를 나타내는 선행사가 어떻게 관계부사절로 이어지는지 보여줍니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'This is the house where he lives.', ko: '이곳은 그가 사는 집이다.', note: '= This is the house in which he lives.' },
          { en: 'He returned to the town where he had spent his childhood.', ko: '그는 어린 시절을 보냈던 마을로 돌아갔다.', note: '장소(the town)를 설명하는 관계부사절' },
          { en: 'The restaurant where we had our first date has closed down.', ko: '우리가 첫 데이트를 했던 그 식당은 문을 닫았다.', note: '주어 자리에 온 선행사도 where로 설명할 수 있다' },
        ],
      },
      { type: 'heading', text: 'when: 시간을 나타내는 선행사' },
      {
        type: 'p',
        text: 'when은 the time, the day, the year, the season처럼 시간을 나타내는 선행사를 설명합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I know the date when she will go to the zoo.', ko: '나는 그녀가 동물원에 갈 날짜를 안다.', note: '= I know the date on which she will go to the zoo.' },
          { en: 'I still remember the day when we first met.', ko: '나는 우리가 처음 만난 날을 여전히 기억한다.', note: '시간(the day)을 설명하는 관계부사절' },
          { en: '1966 was the year when England won the World Cup.', ko: '1966년은 영국이 월드컵에서 우승한 해였다.', note: '주어를 보충 설명하는 관계부사절' },
        ],
      },
      { type: 'heading', text: 'why: 이유를 나타내는 선행사' },
      {
        type: 'p',
        text: 'why는 이유를 나타내는 선행사 the reason과 함께 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Do you know the reason why he was upset?', ko: '그가 왜 화났는지 이유를 아니?', note: '= Do you know the reason for which he was upset?' },
          { en: 'Tell me the reason why you were late this morning.', ko: '오늘 아침에 왜 늦었는지 이유를 말해줘.', note: '이유(the reason)를 설명하는 관계부사절' },
          { en: 'Nobody knows the reason why the machine suddenly stopped.', ko: '그 기계가 갑자기 멈춘 이유를 아무도 모른다.', note: '이유를 설명하는 관계부사절' },
        ],
      },
      { type: 'heading', text: 'how: 방법을 나타내는 선행사와 특별한 규칙' },
      {
        type: 'p',
        text: '다른 관계부사와 달리 how는 선행사 the way와 함께 쓰지 않습니다. the way와 how는 둘 다 "방법"이라는 같은 의미를 나타내기 때문에, 두 표현을 나란히 쓰면 의미가 중복되어 비문법적인 문장이 됩니다. 따라서 the way와 how 중 하나만 선택해서 사용해야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'That is the way how he writes.', ko: '(비문법적) 그것이 그가 글을 쓰는 방법이다.', note: 'the way와 how를 동시에 쓰면 안 된다.' },
          { en: 'That is the way he writes.', ko: '그것이 그가 글을 쓰는 방법이다.', note: 'the way만 사용 (관계부사 how 생략)' },
          { en: 'That is how he writes.', ko: '그것이 그가 글을 쓰는 방법이다.', note: 'how만 사용 (선행사 the way 생략)' },
          { en: 'Can you show me how you solve the problem?', ko: '네가 어떻게 문제를 푸는지 나에게 보여줄 수 있니?', note: '= Can you show me the way you solve the problem? (the way와 how 중 하나만 사용)' },
          { en: 'Can you explain how the volcano formed?', ko: '그 화산이 어떻게 형성되었는지 설명해줄 수 있니?', note: '방법을 나타내는 how (선행사 the way 없이 사용)' },
          { en: 'Nobody knew how she solved the puzzle so quickly.', ko: '그녀가 어떻게 그 퍼즐을 그렇게 빨리 풀었는지 아무도 몰랐다.', note: '방법을 나타내는 how' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '관계부사 where가 이끄는 절',
        parts: [
          { tag: 'S', text: 'This' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'the house' },
          { tag: 'M', text: 'where he lives' },
        ],
        translation: 'This is the house where he lives. (선행사 the house를 관계부사절이 수식)',
      },
      {
        type: 'callout',
        title: '24장 핵심 정리 (1)',
        items: [
          '관계부사(when, where, why, how)는 "전치사 + 관계대명사"를 한 단어로 줄인 압축 표현이다.',
          '압축 과정: 관계대명사 문장 → 전치사를 관계대명사 앞으로 이동 → "전치사+관계대명사"를 관계부사 한 단어로 교체.',
          '관계대명사문은 선행사를 명사로 다시 짚어 설명하고, 관계부사문은 선행사를 이미 정해둔 배경으로 두고 부사처럼 보충 설명한다는 뉘앙스 차이가 있다.',
          '선행사가 장소이면 where, 시간이면 when, 이유이면 why, 방법이면 how를 쓴다.',
          'the way와 how는 의미가 중복되므로 함께 쓰지 않고 둘 중 하나만 사용한다.',
        ],
      },
    ],
  },

  'ch24-2': {
    title: '관계부사와 관계대명사의 차이, 선행사의 생략',
    blocks: [
      {
        type: 'p',
        text: '관계부사와 관계대명사는 둘 다 앞에 있는 명사(선행사)를 설명해준다는 공통점이 있지만, 절 안에서의 역할이 다릅니다. 관계대명사는 절 안에서 주어나 목적어 같은 명사 역할을 하기 때문에, 관계대명사 뒤에는 주어나 목적어가 빠진 불완전한 문장이 옵니다. 반면 관계부사는 절 안에서 부사 역할을 하기 때문에, 관계부사 뒤에는 주어와 목적어가 모두 갖추어진 완전한 문장이 옵니다.',
      },
      {
        type: 'note',
        text: '관계대명사 뒤 = 불완전한 문장 (명사 하나가 빠져 있음) / 관계부사 뒤 = 완전한 문장 (빠진 명사 없음). 23장에서 배운 관계대명사의 "불완전한 문장" 규칙을 다시 떠올리면 두 관계사를 훨씬 쉽게 구별할 수 있습니다.',
      },
      { type: 'heading', text: '같은 상황, 다른 구조: 관계대명사절 vs 관계부사절' },
      {
        type: 'p',
        text: '같은 상황을 관계대명사로 표현할 때와 관계부사로 표현할 때 절의 구조가 어떻게 달라지는지 나란히 비교해보겠습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I knew the house which he lived in.', ko: '나는 그가 살았던 집을 알았다.', note: '관계대명사 which가 전치사 in의 목적어 역할 → in 뒤에 목적어가 없는 불완전한 문장' },
          { en: 'I knew the house where he lived.', ko: '나는 그가 살았던 집을 알았다.', note: '관계부사 where가 부사(in the house) 역할 → he lived만으로도 완전한 문장' },
          { en: 'This is the book which I bought yesterday.', ko: '이것은 내가 어제 산 책이다.', note: 'bought의 목적어가 빠진 불완전한 문장' },
          { en: 'This is the store where I bought the book yesterday.', ko: '이곳은 내가 어제 책을 산 가게이다.', note: 'I bought the book yesterday는 주어·목적어가 모두 있는 완전한 문장' },
        ],
      },
      {
        type: 'p',
        text: '위 예문들을 비교해보면, which가 쓰인 문장은 동사(lived, bought) 뒤에 있어야 할 목적어가 빠져 있어 문장 성분이 부족합니다(불완전). 반면 where가 쓰인 문장은 주어와 동사, 필요한 목적어까지 모두 갖추어진 완전한 문장입니다. 이처럼 관계사 뒤 문장이 완전한지 불완전한지를 보면 관계대명사와 관계부사를 구별할 수 있습니다.',
      },
      { type: 'heading', text: '완전한 문장 vs 불완전한 문장 대조표' },
      {
        type: 'table',
        caption: '관계대명사 vs 관계부사',
        headers: ['구분', '절 안에서의 역할', '뒤에 오는 문장', '예문'],
        rows: [
          ['관계대명사 (who, which, that)', '명사(주어·목적어) 역할', '불완전한 문장', 'This is the book which I bought yesterday.'],
          ['관계부사 (when, where, why, how)', '부사 역할', '완전한 문장', 'This is the store where I bought the book yesterday.'],
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 ① 관계부사 뒤에 불완전한 문장을 쓰는 경우' },
      {
        type: 'p',
        text: '관계부사는 절 안에서 이미 부사 역할을 하고 있으므로, 그 뒤에는 목적어가 다 채워진 완전한 문장이 와야 합니다. 그런데 학습자들은 관계부사 뒤에 목적어가 빠진 불완전한 문장을 쓰는 실수를 자주 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'This is the restaurant where I like the most.', ko: '(비문법적) 이곳은 내가 가장 좋아하는 식당이다.', note: '오류: like의 목적어가 빠져 불완전한 문장인데 관계부사 where를 썼다.' },
          { en: 'This is the restaurant which I like the most.', ko: '이곳은 내가 가장 좋아하는 식당이다.', note: '수정 ①: 목적어 자리를 비워두고 관계대명사 which를 쓴다.' },
          { en: 'This is the restaurant where I had the best pasta.', ko: '이곳은 내가 가장 맛있는 파스타를 먹었던 식당이다.', note: '수정 ②: had the best pasta로 목적어를 채워 완전한 문장으로 만들고 where를 쓴다.' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 ② 관계대명사 자리에 관계부사를 잘못 쓰는 경우' },
      {
        type: 'p',
        text: '반대로 문장에 명사(주어나 목적어) 하나가 비어 있는데도 관계부사를 쓰는 실수도 흔합니다. 이 경우에는 빠진 명사 역할을 대신할 관계대명사가 필요합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He is the person where I met at the party.', ko: '(비문법적) 그는 내가 파티에서 만난 사람이다.', note: '오류: met의 목적어가 빠져 있는데 관계부사 where를 썼다. where는 사람을 선행사로 받지도 않는다.' },
          { en: 'He is the person whom I met at the party.', ko: '그는 내가 파티에서 만난 사람이다.', note: '수정: met의 목적어 자리를 관계대명사 whom(또는 who, that)으로 채운다.' },
          { en: 'The company where I met him has grown fast.', ko: '내가 그를 만났던 그 회사는 빠르게 성장했다.', note: '참고: 선행사가 장소(the company)이고 뒤 문장이 완전하면(I met him) where를 쓸 수 있다.' },
        ],
      },
      { type: 'heading', text: '관계부사 선행사의 생략 ① 생략이 가능한 경우' },
      {
        type: 'p',
        text: '관계부사 앞의 선행사(the place, the time, the reason, the way)는 생략된 선행사의 의미가 문맥상 명확하게 유추될 수 있을 때 생략할 수 있습니다. 선행사를 생략하면 문장이 더 간결하고 자연스러워집니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'This is (the place) where the river narrows.', ko: '이곳이 강이 좁아지는 곳이다.', note: 'the place 생략 가능' },
          { en: 'This is (the time) when he crosses the threshold into the unknown parts of the ocean.', ko: '지금이 그가 대양의 미지의 영역으로 첫발을 내딛는 순간이다.', note: 'the time 생략 가능' },
          { en: 'That is (the reason) why vegetarian foods are such powerful foods for permanent weight control.', ko: '그것이 채식 음식이 체중을 영구적으로 조절하는 데 강력한 힘을 발휘하는 이유이다.', note: 'the reason 생략 가능' },
          { en: 'That is how he writes.', ko: '그것이 그가 글을 쓰는 방법이다.', note: 'how는 the way와 함께 쓰지 않으므로 선행사가 항상 생략된 형태로 쓰인다.' },
          { en: '1966 was (the year) when England won the World Cup.', ko: '1966년은 영국이 월드컵에서 우승한 해였다.', note: 'the year 생략 가능' },
          { en: 'The sports hall is (the place) where the students do the examination.', ko: '그 체육관은 학생들이 시험을 치르는 장소이다.', note: 'the place 생략 가능' },
        ],
      },
      { type: 'heading', text: '관계부사 선행사의 생략 ② 생략이 불가능한 경우' },
      {
        type: 'p',
        text: '반면 생략된 선행사의 의미를 관계부사만으로 유추할 수 없는 경우에는 선행사를 생략할 수 없습니다. 예를 들어 "She returned to the village where she was born."에서 the village를 생략하면 where she was born이 무엇을 설명하는지 알 수 없게 됩니다. 마찬가지로 "He can never remember the day of the week when he was married."에서 the day of the week를 생략하면 when he was married가 무엇을 가리키는지 불명확해집니다. 이처럼 선행사를 생략하면 문장의 의미가 불명확해지거나 오해를 일으킬 수 있는 경우에는 선행사를 생략하지 않습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She returned to the village where she was born.', ko: '그녀는 태어난 마을로 돌아갔다.', note: 'the village 생략 불가 (where she was born만으로는 어떤 장소인지 알 수 없음)' },
          { en: 'He can never remember the day of the week when he was married.', ko: '그는 결혼한 요일을 도무지 기억하지 못한다.', note: 'the day of the week 생략 불가' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '관계대명사절(불완전) vs 관계부사절(완전)',
        parts: [
          { tag: 'S', text: 'This' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'the store' },
          { tag: 'M', text: 'where I bought the book yesterday' },
        ],
        translation: 'This is the store where I bought the book yesterday. (where 뒤는 주어·목적어가 모두 있는 완전한 문장)',
      },
      {
        type: 'callout',
        title: '24장 핵심 정리 (2)',
        items: [
          '관계대명사 뒤에는 주어나 목적어가 빠진 불완전한 문장이 오고, 관계부사 뒤에는 완전한 문장이 온다.',
          '실수 ①: 관계부사 뒤에 불완전한 문장을 쓰면 안 된다 (필요하면 관계대명사로 바꾸거나 문장을 완전하게 채운다).',
          '실수 ②: 명사가 빠진 불완전한 문장에는 관계부사가 아니라 관계대명사를 써야 한다.',
          '관계부사의 선행사(the place, the time, the reason, the way)는 의미가 명확히 유추될 때 생략할 수 있다.',
          '선행사를 생략하면 의미가 불명확해지는 경우에는 선행사를 생략하지 않는다.',
        ],
      },
    ],
  },
}
