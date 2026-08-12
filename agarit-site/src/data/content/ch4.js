export const ch4 = {
  'ch4-1': {
    title: '주어 자리에 올 수 있는 것들',
    blocks: [
      {
        type: 'p',
        text: '주어는 문장의 가장 기본적인 요소입니다. 주어는 문장에서 누가 어떤 행동을 하는지, 누구에게 무엇이 일어나는지를 나타냅니다. 주어는 주로 문장의 첫 부분에 위치하며 동사와 함께 문장의 주요 주제를 제시합니다. 예를 들어 "She is reading a book."이라는 문장에서는 "She"가 주어입니다. 이 경우 "She"가 동작인 "is reading"을 수행하고 있으며, 문장의 주요 주체(행위자)가 되고 있습니다.',
      },
      {
        type: 'note',
        text: '영어에서 주어로 쓰일 수 있는 것은 명사 또는 명사의 성질을 가진 것들입니다. 명사(사람·사물·개념의 이름), 대명사(명사를 대신하는 말), to부정사, 동명사, 명사절이 모두 주어 자리에 올 수 있습니다.',
      },
      {
        type: 'icon-row',
        caption: '주어 자리에 올 수 있는 것들',
        items: [
          { icon: '📦', label: '명사', sub: '사람·사물·개념의 이름' },
          { icon: '🙋', label: '대명사', sub: '명사를 대신함' },
          { icon: '➡️', label: 'to부정사', sub: '~하는 것 (2단어 이상)' },
          { icon: '🔄', label: '동명사', sub: '~하는 것 (1단어)' },
          { icon: '📜', label: '명사절', sub: 'that/what/whether/how ~' },
        ],
      },
      {
        type: 'p',
        text: '영어 문장에서 주어는 대부분 동사 앞에 위치합니다. 그런데 간혹 동사 앞에 위치하지 않는 주어도 있습니다. 이는 특수한 경우로, 글쓴이가 어떠한 의도를 전달하기 위해 문장을 다르게 구성한 경우입니다. 이 장에서는 주어 자리에 올 수 있는 다양한 형태와, 그중 일부가 문장 앞자리를 떠나 뒤로 이동하는 이유를 살펴보겠습니다.',
      },
      { type: 'heading', text: '명사·대명사 주어' },
      {
        type: 'p',
        text: '명사와 대명사는 가장 기본적이고 흔한 주어 형태입니다. 명사는 사람·사물·장소·개념의 이름을 가리키고, 대명사는 앞에서 이미 언급된 명사를 반복하지 않기 위해 그 명사를 대신합니다. 아래 예문에서 밑줄 없이도 주어를 찾아보세요. 두 번째 문장의 대명사가 첫 번째 문장의 어떤 명사를 대신하는지 함께 확인하면 문맥 속에서 주어가 어떻게 이어지는지 알 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Tom works at a hospital. He treats patients every day.', ko: '톰은 병원에서 일한다. 그는 매일 환자들을 치료한다.', note: '두 번째 문장의 He는 Tom을 대신하는 인칭대명사 주어' },
          { en: 'My sister loves music. She plays the violin every evening.', ko: '내 여동생은 음악을 좋아한다. 그녀는 매일 저녁 바이올린을 연주한다.' },
          { en: 'I left my keys on the desk this morning, but now they are gone.', ko: '나는 오늘 아침 책상에 열쇠를 두었는데, 지금은 그것들이 없어졌다.', note: 'they는 my keys를 가리키는 인칭대명사 주어' },
          { en: 'The pen is on the table.', ko: '볼펜이 테이블 위에 있다.' },
          { en: 'A lion is a fierce animal.', ko: '사자는 무서운 동물이다.' },
          { en: 'Seoul is the capital of South Korea, and it has a population of about ten million.', ko: '서울은 대한민국의 수도이며, 인구는 약 천만 명이다.', note: '두 번째 절의 it은 Seoul을 가리키는 인칭대명사 주어' },
        ],
      },
      { type: 'heading', text: 'to부정사 주어' },
      {
        type: 'p',
        text: 'to부정사(to+동사원형)도 명사처럼 주어 자리에 올 수 있습니다. "~하는 것"이라는 뜻으로 해석되며, 어떤 행동이나 상태 자체를 하나의 명사처럼 다루는 표현입니다. 문맥 속에서 to부정사 주어가 어떤 상황을 설명하는지 살펴보세요.',
      },
      {
        type: 'example',
        items: [
          { en: 'To study English is hard.', ko: '영어를 공부하는 것은 어렵다.' },
          { en: 'To exercise regularly keeps your body healthy. That is why I jog every morning.', ko: '규칙적으로 운동하는 것은 몸을 건강하게 유지시켜준다. 그것이 내가 매일 아침 조깅하는 이유이다.' },
          { en: 'To speak in front of a large audience makes many people nervous.', ko: '많은 관객 앞에서 말하는 것은 많은 사람들을 긴장하게 만든다.' },
          { en: 'To finish this project by Friday seems impossible now.', ko: '이 프로젝트를 금요일까지 끝내는 것은 지금 불가능해 보인다.' },
        ],
      },
      { type: 'heading', text: '가주어-진주어: to부정사의 이동' },
      {
        type: 'p',
        text: '앞의 예문들은 모두 문법적으로 옳은 문장이지만, 실제 영어에서는 to부정사가 그대로 문장 맨 앞에 오는 경우보다 아래처럼 다시 쓰는 경우가 훨씬 많습니다. 주어 자리를 비워 두고 그 자리에 It을 채워 넣은 뒤, 원래의 주어였던 to부정사를 문장 끝으로 보내는 것입니다. 이렇게 다시 쓴 문장을 "가주어-진주어 문장"이라고 부릅니다. 이때 앞자리를 채우는 It을 가주어(형태상의 주어), 뒤로 이동한 to부정사를 진주어(의미상 실제 주어)라고 합니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '원래 주어(진주어, to부정사)', text: 'To study English' },
          { label: '나머지 문장', text: 'is hard.' },
        ],
        to: { label: '가주어-진주어 문장', text: 'It is hard to study English.' },
        note: '진주어 To study English를 문장 끝으로 보내고, 비어 있는 주어 자리에 가주어 It을 채운다.',
      },
      {
        type: 'transform',
        from: [
          { label: '원래 주어(진주어, to부정사)', text: 'To finish this project by Friday' },
          { label: '나머지 문장', text: 'seems impossible now.' },
        ],
        to: { label: '가주어-진주어 문장', text: 'It seems impossible now to finish this project by Friday.' },
        note: '문장이 길어질수록 to부정사를 뒤로 보내는 효과가 더 뚜렷하게 드러난다.',
      },
      {
        type: 'note',
        text: '길고 복잡한 문장은 뒤로 배치하여 듣는 사람의 이해를 돕는 것이 영어의 중요한 원칙 중 하나입니다. to부정사 주어는 최소 두 단어(to+동사원형) 이상으로 이루어져 있고, 뒤에 목적어나 수식어가 붙으면 더 길어지기 쉽습니다. 그래서 이렇게 무거워진 주어를 문장 뒤로 보내고, 가벼운 It으로 그 자리를 채워 문장을 시작하는 것입니다.',
      },
      { type: 'heading', text: '동명사 주어와 길이의 문제' },
      {
        type: 'p',
        text: '동명사(동사원형+ing)도 to부정사처럼 "~하는 것"이라는 뜻으로 주어 자리에 올 수 있습니다. 그런데 동명사 주어는 to부정사 주어와 달리 가주어-진주어 구문으로 잘 바꾸어 쓰지 않습니다. 문맥 속 예문을 먼저 살펴봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Studying English is hard.', ko: '영어를 공부하는 것은 어렵다.' },
          { en: 'Swimming in the ocean can be dangerous during a storm.', ko: '폭풍우가 몰아칠 때 바다에서 수영하는 것은 위험할 수 있다.' },
          { en: 'Learning a musical instrument takes a lot of patience.', ko: '악기를 배우는 것은 많은 인내심을 필요로 한다.' },
          { en: 'Cooking dinner for ten people was more work than I expected.', ko: '열 명을 위한 저녁을 요리하는 것은 내가 예상했던 것보다 더 많은 일이었다.' },
        ],
      },
      {
        type: 'p',
        text: '이유는 단어의 길이에 있습니다. to부정사는 "to+동사원형"으로 이루어져 기본이 이미 두 단어이고, 그 뒤에 목적어나 수식어가 붙으면 세 단어, 네 단어로 더 길어집니다. 반면 동명사는 동사원형에 -ing만 붙인 형태로, 일반 명사와 마찬가지로 대부분 한 단어로 끝납니다. 즉, "To study"는 이미 2단어이지만 "Studying"은 1단어입니다. 주어 자리를 가볍게 만들기 위해 가주어-진주어 구문을 쓰는 것인데, 동명사 주어는 애초에 한 단어로 이미 충분히 가볍기 때문에 굳이 문장을 다시 쓸 필요가 없는 것입니다.',
      },
      {
        type: 'table',
        caption: 'to부정사 주어 vs 동명사 주어의 길이 비교',
        headers: ['주어 형태', '기본 구성', '최소 단어 수', '가주어-진주어 사용'],
        rows: [
          ['to부정사', 'to + 동사원형 (+목적어/수식어)', '2단어 이상', '자주 사용함'],
          ['동명사', '동사원형 + -ing', '1단어', '거의 사용하지 않음'],
        ],
      },
      {
        type: 'note',
        text: '간혹 동명사 주어도 가주어-진주어 구문으로 쓰이는 경우가 있는데, 대부분 "It is no use/good/worth ~ing" 같은 정해진 표현(관용구)입니다. 예: "It is no use crying over spilled milk." (이미 벌어진 일을 후회해도 소용없다.) 이런 문장은 문법 규칙으로 설명하기보다 통째로 외워두는 것이 편합니다.',
      },
      { type: 'heading', text: '명사절 주어' },
      {
        type: 'p',
        text: '명사절이란 명사 역할을 하는 절(문장 형태)을 말합니다. 간단히 "절"이라는 말이 나오면 그 안에 주어와 동사를 갖춘 작은 문장이 들어 있다고 생각하면 됩니다. that, what, whether, how 등으로 시작하는 절이 통째로 주어 자리에 올 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'What I want is to study English.', ko: '내가 원하는 것은 영어를 공부하는 것이다.' },
          { en: 'What she said in the meeting surprised the whole team.', ko: '그녀가 회의에서 말한 것은 팀 전체를 놀라게 했다.' },
          { en: 'That he likes her is certain.', ko: '그가 그녀를 좋아하는 것은 확실하다.' },
          { en: 'That the Earth revolves around the Sun was proven centuries ago.', ko: '지구가 태양 주위를 돈다는 것은 수 세기 전에 증명되었다.' },
          { en: 'Whether he will accept the offer is still unknown.', ko: '그가 제안을 받아들일지는 아직 알 수 없다.' },
          { en: 'How they escaped the fire remains a mystery.', ko: '그들이 어떻게 화재에서 빠져나왔는지는 여전히 수수께끼이다.' },
        ],
      },
      { type: 'heading', text: '가주어-진주어: 명사절의 이동' },
      {
        type: 'p',
        text: '명사절 주어는 그 안에 주어와 동사를 모두 포함하고 있어서 to부정사보다도 훨씬 길고 복잡한 경우가 많습니다. 그래서 to부정사 주어와 마찬가지로, 명사절 주어도 문장 끝으로 보내고 그 자리에 가주어 It을 채워 넣는 방식이 자주 쓰입니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '원래 주어(진주어, 명사절)', text: 'That he likes her' },
          { label: '나머지 문장', text: 'is certain.' },
        ],
        to: { label: '가주어-진주어 문장', text: 'It is certain that he likes her.' },
        note: '명사절 진주어 that he likes her를 문장 끝으로 보내고, 가주어 It이 그 빈자리를 채운다.',
      },
      {
        type: 'transform',
        from: [
          { label: '원래 주어(진주어, 명사절)', text: 'That the Earth revolves around the Sun' },
          { label: '나머지 문장', text: 'was proven centuries ago.' },
        ],
        to: { label: '가주어-진주어 문장', text: 'It was proven centuries ago that the Earth revolves around the Sun.' },
        note: '명사절 진주어 that the Earth revolves around the Sun을 문장 끝으로 보내고, 가주어 It이 그 빈자리를 채운다.',
      },
      {
        type: 'transform',
        from: [
          { label: '원래 주어(진주어, 명사절)', text: 'That she passed the exam' },
          { label: '나머지 문장', text: 'surprised everyone.' },
        ],
        to: { label: '가주어-진주어 문장', text: 'It surprised everyone that she passed the exam.' },
        note: 'to부정사 문장과 같은 원리: 길고 복잡한 명사절을 뒤로, 가벼운 It을 앞으로.',
      },
      {
        type: 'sentence-diagram',
        label: '가주어-진주어',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'hard' },
          { tag: 'M', text: 'to study English' },
        ],
        translation: 'It is hard to study English. (가주어 It, 진주어 to study English)',
      },
      {
        type: 'callout',
        title: '4장 핵심 정리 (1)',
        items: [
          '주어 자리에는 명사, 대명사, to부정사, 동명사, 명사절이 올 수 있다.',
          'to부정사·명사절 주어가 길고 복잡할 때는 가주어 it을 문장 앞에 두고 진주어를 뒤로 보낸다.',
          'to부정사는 최소 2단어(to+동사원형)이지만 동명사는 1단어(Ving)로 이미 짧기 때문에, 동명사 주어는 가주어-진주어 구문을 쓰지 않는 것이 일반적이다. 예외는 "It is no use ~ing"류의 정해진 표현으로, 통째로 외워둔다.',
          '명사절 주어는 주어+동사를 포함해 길이가 길어지기 쉬워, to부정사 주어와 같은 이유로 가주어-진주어 구문을 자주 사용한다.',
        ],
      },
    ],
  },

  'ch4-2': {
    title: '가주어·비인칭 주어 it',
    blocks: [
      {
        type: 'p',
        text: '영어 문장을 보다 보면 가끔씩 가주어, 비인칭 주어라는 말을 듣게 됩니다. 그리고 가주어와 비인칭 주어라고 사용된 단어를 보면 모두 it이 사용되었다는 것을 알 수 있습니다. 그런데 it은 원래 "그것"이라는 뜻으로 앞에 나온 명사를 가리키는 인칭대명사이기도 합니다. 이 레슨에서는 세 가지 it을 문맥 속에서 구별하는 방법을 살펴봅니다.',
      },
      {
        type: 'icon-row',
        caption: '가주어 it vs 비인칭 주어 it',
        items: [
          { icon: '👤', label: '가주어 it', sub: '진주어(to부정사·명사절) 자리채우기' },
          { icon: '☀️🌧️', label: '비인칭 주어 it', sub: '날씨·날짜·거리' },
          { icon: '⏰', label: '비인칭 주어 it', sub: '시간·계절·밝기' },
        ],
      },
      { type: 'heading', text: '가주어 it' },
      {
        type: 'p',
        text: '가주어 it은 그 자체로 아무 의미가 없으며, 뒤에 있는 to부정사나 명사절(진주어)을 대신해 주어 자리를 형태상으로만 채우는 역할을 합니다. 영어 문장에서 가주어를 사용하는 이유는 문장의 주어를 가볍게 만들어 읽는 사람에게 의미 전달을 효율적으로 하기 위해서입니다. 만약 문장의 주어가 to부정사로 시작되었다면 주어가 너무 길어 이해하기가 힘들 것입니다. 영어는 전달하고자 하는 의미를 문장 앞에 두는 언어임을 기억하세요.',
      },
      {
        type: 'example',
        items: [
          { en: 'It is hard to learn a new language.', ko: '새로운 언어를 배우는 것은 어렵다.', note: '진주어: to learn a new language' },
          { en: 'It is easy to make a new friend.', ko: '새 친구를 사귀는 것은 쉽다.', note: '진주어: to make a new friend' },
          { en: 'It is important to save some money every month.', ko: '매달 돈을 조금씩 저축하는 것은 중요하다.' },
          { en: 'It takes courage to admit your mistakes.', ko: '자신의 실수를 인정하는 것은 용기를 필요로 한다.' },
          { en: 'It doesn’t matter what other people think of you.', ko: '다른 사람들이 너를 어떻게 생각하는지는 중요하지 않다.', note: '진주어: 명사절 what other people think of you' },
        ],
      },
      { type: 'heading', text: '비인칭 주어 it' },
      {
        type: 'p',
        text: '비인칭 주어 it 역시 그 자체로 "그것"이라는 뜻을 가지지 않습니다. 인칭이란 "누구의 관점(시점)에서 말하느냐"를 말합니다. 내가 말하면 1인칭, 네가 말하면 2인칭, 나와 너를 제외한 제3자가 말하면 3인칭이라고 합니다. 그런데 날씨, 날짜, 요일, 거리, 시간, 계절, 밝기 등과 같은 내용은 누구나 말할 수 있는 내용으로 주어의 인칭을 따지기가 애매합니다. 따라서 이런 내용을 표현할 때는 인칭이 존재하지 않는 자리를 it으로 채워 문장의 형태를 갖춥니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It is hot.', ko: '날씨가 덥다.', note: '날씨' },
          { en: 'It is dark.', ko: '어둡다.', note: '밝기' },
          { en: 'It is raining heavily, so bring your umbrella.', ko: '비가 많이 오니 우산을 챙겨라.', note: '날씨' },
          { en: 'It is nine o’clock already; we should leave now.', ko: '벌써 9시이니 이제 출발해야 한다.', note: '시간' },
          { en: 'It is about ten kilometers from here to the station.', ko: '여기서 역까지는 약 10킬로미터이다.', note: '거리' },
          { en: 'It gets dark early in winter.', ko: '겨울에는 일찍 어두워진다.', note: '계절/밝기' },
        ],
      },
      { type: 'heading', text: '가주어 it, 비인칭 주어 it, 인칭대명사 it 비교' },
      {
        type: 'p',
        text: '세 가지 it은 형태가 똑같아서 문맥 없이는 헷갈리기 쉽습니다. 구별하는 핵심은 딱 하나입니다. "이 it이 가리키는 특정 명사가 앞 문장(또는 앞 구절)에 있는가?"입니다. 있다면 인칭대명사 it이고, 없다면 가주어 it이거나 비인칭 주어 it입니다. 가주어와 비인칭 주어를 다시 구별할 때는 "뒤에 to부정사나 명사절(진주어)이 있는가?"를 보면 됩니다. 있으면 가주어, 없으면(날씨·시간·거리 등을 나타내는 문장이면) 비인칭 주어입니다.',
      },
      {
        type: 'table',
        caption: '가주어 it vs 비인칭 주어 it vs 인칭대명사 it',
        headers: ['구분', '뜻', '가리키는 대상', '판별 기준', '예문'],
        rows: [
          ['가주어 it', '뜻 없음 (형태상 주어)', '뒤에 오는 to부정사·명사절(진주어)', '문장 뒤에 to부정사나 명사절이 있다', 'It is important to save money.'],
          ['비인칭 주어 it', '뜻 없음 (형식상 주어)', '날씨·날짜·요일·거리·시간·계절·밝기', '뒤에 진주어가 없고, 날씨류 서술이다', 'It is raining outside.'],
          ['인칭대명사 it', '"그것" (구체적 대상)', '앞에 이미 나온 특정 명사(사물·동물 등)', '앞 문장(구절)에서 가리킬 명사를 찾을 수 있다', 'I bought a phone. It is very light.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Look at that cat on the roof. It is sleeping in the sun.', ko: '지붕 위의 저 고양이를 봐. 그것은 햇볕 속에서 자고 있다.', note: '인칭대명사 it: that cat을 가리킴' },
          { en: 'It is cold this evening.', ko: '오늘 저녁은 춥다.', note: '비인칭 주어 it: 날씨' },
          { en: 'It is necessary to be careful on icy roads.', ko: '빙판길에서는 조심하는 것이 필요하다.', note: '가주어 it: 진주어 to be careful on icy roads' },
          { en: 'The movie was three hours long, but it didn’t feel boring at all.', ko: '그 영화는 세 시간이나 길었지만, 그것은 전혀 지루하게 느껴지지 않았다.', note: '인칭대명사 it: the movie를 가리킴' },
        ],
      },
      {
        type: 'note',
        text: '세 가지 it 중 가주어 it과 비인칭 주어 it은 지워도 그 자체로는 아무 의미도 사라지지 않는다는 공통점이 있습니다(의미는 각각 진주어나 날씨류 서술 전체에 담겨 있습니다). 반면 인칭대명사 it을 지우면 "그것이 무엇인지"에 대한 정보가 통째로 사라집니다. 이 차이를 기억해두면 세 it을 훨씬 쉽게 구별할 수 있습니다.',
      },
      {
        type: 'callout',
        title: '4장 핵심 정리 (2)',
        items: [
          '가주어 it은 뒤에 있는 진주어(to부정사·명사절)를 대신해 문장 앞자리를 채운다.',
          '비인칭 주어 it은 날씨, 날짜, 요일, 거리, 시간, 계절, 밝기처럼 인칭을 따지기 애매한 내용의 주어로 쓰인다.',
          '가주어 it과 비인칭 주어 it은 그 자체로 "그것"이라는 뜻을 가지지 않지만, 인칭대명사 it은 앞에 나온 특정 명사를 가리키는 실제 의미를 가진다.',
          '구별법: 앞에 가리킬 명사가 있으면 인칭대명사, 없고 뒤에 진주어가 있으면 가주어, 없고 날씨·시간류 서술이면 비인칭 주어.',
        ],
      },
    ],
  },
}
