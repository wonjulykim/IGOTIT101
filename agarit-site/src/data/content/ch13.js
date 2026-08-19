export const ch13 = {
  'ch13-1': {
    title: 'to부정사란 무엇인가',
    blocks: [
      {
        type: 'p',
        text: '우리는 앞에서 문장 속 동사가 동사로서 제 역할을 하려면 주어와 시제를 가져야 한다는 것을 배웠습니다. 그런데 아래 문장들을 보면 동사처럼 생겼지만 주어·시제와 무관하게 쓰이는 단어들이 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Do you want to try some ceviche?', ko: '세비체를 좀 먹어보고 싶니?' },
          { en: 'He decided to live in France.', ko: '그는 프랑스에 살기로 결정했다.' },
          { en: 'My plan is to climb up the mountain next Saturday.', ko: '내 계획은 다음 주 토요일에 그 산을 오르는 것이다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'to부정사 — 동사의 목적어(명사적 용법)',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'decided' },
          { tag: 'O', text: 'to live in France.' },
        ],
        translation: 'He decided to live in France. (시제 없는 to live in France가 decided의 목적어 자리에서 명사처럼 쓰임)',
      },
      {
        type: 'sentence-diagram',
        label: 'to부정사 — 보어(명사적 용법)',
        parts: [
          { tag: 'S', text: 'My plan' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'to climb up the mountain next Saturday.' },
        ],
        translation: 'My plan is to climb up the mountain next Saturday. (to climb up ~가 주어 My plan을 보충 설명하는 보어)',
      },
      {
        type: 'p',
        text: '각 문장의 동사 want, decided, is는 주어(you, He, My plan)와 시제(현재, 과거, 현재)를 가지고 있어 동사의 역할을 제대로 하고 있습니다. 그런데 to try, to live, to climb up은 동사처럼 생겼지만 시제를 갖고 있지 않기 때문에 동사가 아닙니다. 이렇게 **「to + 동사원형」의 형태로 시제를 버리고 쓰이는 단어를 to부정사**라고 부릅니다.',
      },
      {
        type: 'note',
        text: '‘부정사’라는 이름의 정확한 유래를 이해하려면 굴절(inflection)이라는 어려운 개념까지 알아야 합니다. 지금 단계에서는 **to부정사를 그냥 「to + 동사원형」의 형태로 외워두고 넘어가면 충분합니다.**',
      },
      { type: 'heading', text: '동사가 시제를 버리면 무슨 일이 벌어지는가' },
      {
        type: 'p',
        text: '동사가 시제와 주어를 가지면 그 문장 안에서 오직 한 가지 일, 즉 서술어 역할만 할 수 있습니다. play는 시제가 붙는 순간 반드시 누군가의 뒤에서 그 사람이 실제로 한 행동을 서술해야 하고, 다른 자리로는 옮겨갈 수 없습니다. He plays the piano.라는 문장에서 plays를 문장 앞이나 뒤로 옮기면 문장이 무너져 버립니다. 동사는 시제를 짊어지는 대신 **자리의 자유를 완전히 잃어버리는** 셈입니다.',
      },
      {
        type: 'p',
        text: '그런데 동사에서 시제를 떼어내면 정반대의 일이 벌어집니다. 그 동사는 더 이상 ‘누가 언제 어떤 동작을 했다’는 구체적인 사건을 가리키지 않고, **‘그 동작을 한다는 것’이라는 추상적인 개념 그 자체를 가리키게 됩니다.** play는 시제가 있으면 ‘(누군가가 실제로) 연주했다/연주한다’는 구체적 사건이지만, to play는 시간에 매이지 않는 ‘연주하는 것/연주할’이라는 개념이 됩니다. 이 개념은 이제 누구의 것도 아니고, 언제 일어난 일도 아닌 채로 문장 속 어디든 필요한 자리로 옮겨갈 수 있습니다.',
      },
      {
        type: 'p',
        text: '이 자유가 바로 to부정사가 명사·형용사·부사라는 세 가지 역할을 모두 해낼 수 있는 근본 원리입니다. 추상적 개념은 명사처럼 이름 붙여 가리킬 수도 있고(주어·목적어·보어 자리에서 ‘연주하는 것’), 형용사처럼 다른 명사를 꾸며 그 명사의 용도나 목적을 설명할 수도 있고(‘연주할 시간’), 부사처럼 다른 동작이나 상태가 일어난 이유·목적·결과를 설명할 수도 있습니다(‘연주하기 위해’). 품사가 셋으로 늘어나는 것이 아니라, **하나의 추상적 개념이 문장의 세 가지 빈자리(명사 자리, 형용사 자리, 부사 자리) 중 어디에 놓이느냐에 따라 다른 역할처럼 보이는 것**뿐입니다.',
      },
      {
        type: 'table',
        caption: '동사 play와 개념 to play의 차이',
        headers: ['형태', '가리키는 것', '문장에서의 자유도'],
        rows: [
          ['play (시제 있음)', '누군가가 실제로 연주하는/했던 구체적 사건', '반드시 주어 뒤 서술어 자리에만 위치'],
          ['to play (시제 없음)', '‘연주한다는 것’이라는 시간과 무관한 개념', '명사·형용사·부사 자리 어디로든 이동 가능'],
        ],
      },
      {
        type: 'icon-row',
        caption: 'to부정사의 세 가지 역할',
        items: [
          { icon: '📦', label: '명사적 용법', sub: '주어·목적어·보어' },
          { icon: '🎨', label: '형용사적 용법', sub: '명사 수식' },
          { icon: '🏃', label: '부사적 용법', sub: '동사·형용사·문장 수식' },
        ],
      },
      { type: 'heading', text: 'to부정사의 다양한 역할을 한 문단에서 확인하기' },
      {
        type: 'p',
        text: '이제 위 원리가 실제 문장에서 어떻게 나타나는지 봅시다. 아래 문장들은 같은 to부정사가 문맥에 따라 얼마나 다른 자리에 놓일 수 있는지 보여줍니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He wants something to eat.', ko: '그는 먹을 것을 원한다.', note: '앞의 명사 something을 꾸며주는 형용사 역할' },
          { en: 'He went to the library to study.', ko: '그는 공부하기 위해 도서관에 갔다.', note: '목적을 나타내는 부사 역할' },
          { en: 'He grew up to be a singer.', ko: '그는 자라서 가수가 되었다.', note: '결과를 나타내는 부사 역할' },
          { en: 'I am glad to see you.', ko: '너를 보게 되어 기쁘다.', note: '감정의 원인을 나타내는 부사 역할' },
          { en: 'He is foolish to say so.', ko: '그렇게 말하는 것을 보니 그는 어리석다.', note: '판단의 근거를 나타내는 부사 역할' },
        ],
      },
      {
        type: 'p',
        text: '앞의 세 문장(want, decided, is 뒤)에서는 to부정사가 목적어·보어처럼 명사 역할을 했고, 지금 다섯 문장에서는 형용사·부사 역할을 하고 있습니다. 역할은 이렇게 다양하지만, to부정사가 그리는 큰 그림은 언제나 같습니다. 바로 **「to + 동사원형」 쪽으로 무엇인가를 이루기 위해 향해 가는 모습**입니다.',
      },
      {
        type: 'table',
        caption: 'to부정사가 그리는 방향성',
        headers: ['문장', 'to부정사가 향하는 그림'],
        rows: [
          ['Do you want to try some ceviche?', 'want → to try some ceviche'],
          ['He decided to live in France.', 'decided → to live in France'],
          ['My plan is to climb up the mountain next Saturday.', 'My plan → to climb up the mountain next Saturday'],
        ],
      },
      {
        type: 'p',
        text: 'to부정사가 명사적 용법인지, 형용사적 용법인지, 부사적 용법인지는 **문장에서 어떤 역할을 하느냐로 구별하면 됩니다.** 앞의 표에 등장한 to try, to live, to climb up은 모두 앞 동사·be동사와 함께 쓰여 명사 역할(목적어·보어)을 하고 있습니다. 여기까지만 이해해도 to부정사의 절반은 이해한 것입니다.',
      },
      { type: 'heading', text: 'to부정사는 왜 존재할까: 동사 하나로 문장을 더 다양하게' },
      {
        type: 'p',
        text: '동사를 주어의 움직임이나 상태만을 나타내는 용도로 쓴다면 동사는 항상 주어 뒤에만 위치하게 됩니다. 그런데 「to + 동사원형」의 형태로 명사, 형용사, 부사의 역할까지 할 수 있게 만들면, **동사 하나로도 훨씬 다양한 문장을 만들어낼 수 있습니다.**',
      },
      {
        type: 'table',
        caption: '동사 play와 to부정사 to play의 활용',
        headers: ['형태', '문장', '역할'],
        rows: [
          ['동사', 'I play the piano.', '주어 뒤 서술어'],
          ['to부정사(명사)', 'I like to play the piano.', 'like의 목적어'],
          ['to부정사(명사)', 'It is easy to play the piano.', '가주어 It의 진주어 — 주어 역할'],
          ['to부정사(부사)', 'To play the piano, I go to the shop.', '목적을 나타내는 부사'],
        ],
      },
      {
        type: 'p',
        text: '‘I like to play the piano.’에서 to부정사는 ‘피아노를 연주하는 움직임’과 ‘주어가 무엇을 좋아하는지’를 함께 설명합니다. ‘It is easy to play the piano.’에서는 ‘피아노를 연주하는 움직임’과 ‘무엇이 쉬운지’를 함께 설명합니다. ‘To play the piano, I go to the shop.’에서는 ‘피아노를 연주하는 움직임’과 ‘주어가 왜 그 가게에 갔는지’를 함께 설명합니다. 이렇게 동사를 to부정사로 바꾸면 작은 형태 변화로도 큰 효율을 얻을 수 있습니다.',
      },
      { type: 'heading', text: 'to부정사의 정체: 동사에 옷을 입히다' },
      {
        type: 'p',
        text: 'to부정사는 전치사 to의 모양을 동사원형 앞에 붙여, **동사를 명사·형용사·부사로 바꾸어주는 장치**입니다. 동사의 모양을 그대로 유지하면서 품사만 바꾸기 때문에, 동사가 원래 가지고 있던 목적어나 수식어를 그대로 데리고 올 수 있습니다. 그래서 훨씬 풍부하고 다양한 의미의 명사, 형용사, 부사를 만들어 낼 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I love to dance.', ko: '나는 춤추는 것을 좋아한다.', note: '명사적 용법' },
          { en: "I don't have time to dance.", ko: '나는 춤 출 시간이 없다.', note: '형용사적 용법' },
          { en: 'I went to a nightclub to dance.', ko: '나는 춤을 추기 위해 나이트클럽에 갔다.', note: '부사적 용법' },
        ],
      },
      {
        type: 'table',
        caption: '같은 동사구가 만들어내는 세 가지 품사 (to dance with children / to dance on the stage / to dance alone)',
        headers: ['용법', '예문', '의미'],
        rows: [
          ['명사적 용법', 'I love to dance with children.', '아이들과 춤추기 / 춤추는 것'],
          ['형용사적 용법', "I don't have time to dance with children.", '아이들과 춤출 (시간)'],
          ['부사적 용법', 'I go there to dance with children.', '아이들과 춤추기 위해'],
          ['명사적 용법', 'She loves to dance on the stage.', '무대에서 춤추기 / 춤추는 것'],
          ['형용사적 용법', 'This is the stage to dance on.', '무대에서 춤출 (무대)'],
          ['부사적 용법', 'She practiced every day to dance on the stage.', '무대에서 춤추기 위해'],
          ['명사적 용법', 'She prefers to dance alone.', '혼자 춤추는 것'],
          ['형용사적 용법', 'This is the only place to dance alone.', '혼자 춤출 (유일한 장소)'],
          ['부사적 용법', 'He turned off the lights to dance alone.', '혼자 춤추기 위해'],
        ],
      },
      {
        type: 'note',
        text: 'to부정사는 전치사 to의 형태를 빌려왔기 때문에 **to 특유의 ‘목적지로 향하는 방향성’이라는 의미가 여전히 남아 있습니다.** 그래서 to부정사는 종종 어떤 동작을 향해 다가가거나, 그것을 이루려는 상황에서 쓰입니다. 이 방향성은 특히 뒤에서 배울 부사적 용법의 ‘목적’ 의미로 이어집니다.',
      },
      { type: 'heading', text: '흔히 하는 실수: to부정사와 동명사를 헷갈리지 않기' },
      {
        type: 'p',
        text: 'to부정사와 동명사(-ing)는 둘 다 동사에서 시제를 떼어내 만든 추상적 개념이라는 점에서 비슷하지만, to부정사는 앞으로 향해 갈 미래·목표 지향적 느낌이 강하고 동명사는 이미 벌어지고 있거나 반복되는 동작 그 자체를 가리키는 느낌이 강합니다. 이 차이는 뒤의 동명사 단원에서 자세히 다루지만, 지금 단계에서는 **“동사원형 앞에 to가 붙으면 무조건 to부정사”라는 형태만 정확히 기억해 두는 것**이 중요합니다.',
      },
      {
        type: 'transform',
        from: [{ label: '틀린 문장', text: 'I enjoy to swim. (X)' }],
        to: { label: '올바른 문장', text: 'I enjoy swimming. (O)' },
        note: 'enjoy는 동명사만을 목적어로 취하는 동사이므로 to부정사를 붙이면 틀린다. (자세한 목록은 동명사 단원에서 다룬다.)',
      },
      { type: 'heading', text: '원형부정사 — to가 사라지는 경우' },
      {
        type: 'p',
        text: 'to부정사의 to에는 어떤 목적지를 향해 다가간다는 방향성이 담겨 있습니다. 그런데 어떤 동사들은 목적어가 곧바로 그 동작을 하게 만드는 관계가 너무 직접적이고 확실해서, 굳이 “그 동작을 향해 간다”는 방향성을 표시할 필요가 없습니다. **이런 경우 to를 아예 생략하고 동사원형만 남기는데, 이를 원형부정사(bare infinitive)라고 부릅니다.**',
      },
      {
        type: 'icon-row',
        caption: '원형부정사(to 없이 동사원형)를 쓰는 다섯 경우',
        items: [
          { icon: '👉', label: '사역동사', sub: 'make, have, let' },
          { icon: '👀', label: '지각동사', sub: 'see, watch, hear, feel' },
          { icon: '🧩', label: '조동사 뒤', sub: 'can, will, must' },
          { icon: '🤝', label: 'help', sub: 'to부정사도 가능' },
          { icon: '❓', label: 'why (not)', sub: '제안·질문' },
        ],
      },
      {
        type: 'table',
        caption: '원형부정사를 쓰는 대표적인 경우',
        headers: ['상황', '대표 동사', '예문'],
        rows: [
          ['사역동사 — 누군가에게 어떤 행동을 시키다', 'make, have, let', 'She made him clean his room.'],
          ['지각동사 — 보고 듣고 느끼는 동작이 그대로 목격되다', 'see, watch, hear, feel, notice', 'I saw him cross the street.'],
          ['조동사 뒤', 'can, will, must, should, may 등', 'You must finish this today.'],
          ['help — to부정사·원형부정사 둘 다 가능', 'help', "He helped me (to) carry the boxes."],
          ['why/why not으로 시작하는 제안·질문', 'why, why not', 'Why not try it yourself?'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'She made him clean his room.', ko: '그녀는 그가 방을 청소하게 시켰다.', note: '사역동사 make 뒤에는 to 없이 동사원형이 온다' },
          { en: 'I saw him cross the street.', ko: '나는 그가 길을 건너는 것을 보았다.', note: '지각동사 see 뒤에도 동사원형이 온다' },
          { en: 'Let me know if you need help.', ko: '도움이 필요하면 나에게 알려줘.', note: 'let 역시 목적격보어 자리에 원형부정사를 취한다' },
          { en: 'You must finish this today.', ko: '너는 오늘 이것을 끝내야 한다.', note: '조동사 뒤에는 항상 동사원형(원형부정사)이 온다' },
          { en: "He helped me (to) carry the boxes.", ko: '그는 내가 상자를 나르는 것을 도왔다.', note: 'help는 to부정사와 원형부정사를 모두 허용하는 예외적인 동사이다' },
          { en: 'Why not try it yourself?', ko: '네가 직접 한번 해보는 게 어때?', note: 'why/why not 뒤에는 동사원형이 온다' },
          { en: 'I want him to clean his room.', ko: '나는 그가 방을 청소하기를 원한다.', note: '같은 의미라도 want는 사역동사가 아니므로 원형부정사가 아니라 to부정사(to clean)를 쓴다는 점과 비교' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '원형부정사 — 지각동사의 목적격보어',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'saw' },
          { tag: 'O', text: 'him' },
          { tag: 'C', text: 'cross the street.' },
        ],
        translation: 'I saw him cross the street. (지각동사 saw의 목적격보어 자리에 원형부정사 cross)',
      },
      {
        type: 'sentence-diagram',
        label: '원형부정사 — 사역동사의 목적격보어',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'made' },
          { tag: 'O', text: 'him' },
          { tag: 'C', text: 'clean his room.' },
        ],
        translation: 'She made him clean his room. (사역동사 made의 목적격보어 자리에 원형부정사 clean)',
      },
      {
        type: 'note',
        text: "사역동사 중 get만은 예외적으로 원형부정사가 아니라 to부정사를 씁니다(get him to clean his room). 또한 지각동사 뒤에서 동작이 진행 중임을 강조하고 싶을 때는 원형부정사 대신 현재분사(-ing)를 쓰기도 합니다(I saw him crossing the street. — 건너는 중이었다는 진행의 느낌).",
      },
      {
        type: 'callout',
        title: '13장 보충 정리 — 원형부정사',
        items: [
          '원형부정사는 「to 없이 동사원형만 쓰는 형태」이며, 목적어가 곧바로 그 동작을 하는 관계가 직접적이어서 to의 방향성이 필요 없을 때 쓰인다.',
          '사역동사(make, have, let)와 지각동사(see, watch, hear, feel, notice)는 목적격보어 자리에 원형부정사를 쓴다.',
          '조동사(can, will, must 등) 뒤의 동사도 원형부정사이며, help는 to부정사·원형부정사를 모두 허용한다.',
          '사역동사 get만은 예외적으로 to부정사를 쓰며(get him to clean), want처럼 사역동사가 아닌 동사는 원형부정사가 아니라 to부정사를 쓴다는 점에 주의한다.',
        ],
      },
      {
        type: 'callout',
        title: '13장 핵심 정리 (1) — to부정사의 기본 성격',
        items: [
          'to부정사는 「to + 동사원형」의 형태로, 시제가 없기 때문에 동사가 아니다.',
          '시제를 버린 동사는 특정 사건이 아니라 ‘그 동작을 한다는 것’이라는 추상적 개념이 되며, 이 개념이 자유롭게 명사·형용사·부사 자리로 이동할 수 있다.',
          '명사·형용사·부사라는 세 가지 용법은 서로 다른 세 개의 단어가 아니라, 하나의 추상적 개념이 문장의 어느 빈자리에 놓이느냐에 따라 갈리는 것이다.',
          'to부정사는 동사의 모양과 성질(목적어·수식어를 데려오는 능력)을 그대로 유지한 채 품사만 바뀐 것이다.',
          'to부정사에는 전치사 to의 방향성(~을 향해 가다)이라는 의미가 남아 있으며, 이는 부사적 용법의 ‘목적’ 의미로 이어진다.',
          '동사원형 앞에 to가 붙으면 무조건 to부정사이며, enjoy처럼 동명사만 목적어로 취하는 동사에 잘못 붙이지 않도록 주의한다.',
        ],
      },
    ],
  },

  'ch13-2': {
    title: 'to부정사의 명사적 용법',
    blocks: [
      {
        type: 'p',
        text: 'to부정사가 나타내는 ‘그 동작을 한다는 것’이라는 추상적 개념은 명사처럼 이름을 붙여 가리킬 수 있습니다. 이렇게 **to부정사가 문장에서 명사가 하는 일, 즉 주어·목적어·보어 역할을 하면 이를 to부정사의 명사적 용법**이라고 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'To see my sister again is my dream.', ko: '내 여동생을 다시 보는 것이 내 꿈이다.', note: '주어 역할' },
          { en: "He can't afford to buy another car.", ko: '그는 다른 차를 살 여유가 없다.', note: '목적어 역할' },
          { en: 'My goal is to finish reading this book this month.', ko: '내 목표는 이번 달에 이 책을 다 읽는 것이다.', note: '보어 역할' },
        ],
      },
      { type: 'heading', text: '주어 역할 — 그리고 왜 뒤로 도망치는가' },
      {
        type: 'p',
        text: '1번 문장에서 to부정사(To see my sister again)는 be동사 is의 주어로 쓰였습니다. 문법적으로는 완전히 올바른 문장이지만, 실제로 이런 문장을 말이나 글에서 만나는 일은 드뭅니다. 그 이유는 문장을 듣는 사람의 입장에서 생각하면 알 수 있습니다. 영어는 주어를 듣는 순간 곧바로 동사가 나오리라 기대하는데, **주어 자리에 여러 단어로 이루어진 to부정사구가 길게 자리 잡고 있으면 동사가 나오기까지 기다려야 하는 부담이 생깁니다.**',
      },
      {
        type: 'p',
        text: '그래서 영어는 길고 무거운 진짜 주어(to부정사구)를 문장 끝으로 보내고, 원래 주어 자리에는 형식상의 자리 표시자인 It을 채워 넣습니다. 이렇게 만들어진 문장을 가주어-진주어 문장이라고 부릅니다. **It 자체는 아무 의미도 가리키지 않고, 오직 ‘주어 자리가 비어 있지 않다’는 신호만 보내는 역할을 합니다.**',
      },
      {
        type: 'sentence-diagram',
        label: '가주어-진주어',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'my dream' },
          { tag: 'M', text: 'to see my sister again' },
        ],
        translation: 'It is my dream to see my sister again. (가주어 It, 진주어 to see my sister again)',
      },
      {
        type: 'note',
        text: '**길고 복잡한 정보는 문장 뒤로 보내 듣는 사람의 이해를 돕는 것이 영어의 중요한 원칙입니다.** to부정사 주어도 이 원칙에 따라 뒤로 이동하고, 앞자리는 가주어 It이 채웁니다. (4장에서 배운 가주어-진주어 구문과 동일한 원리입니다.)',
      },
      {
        type: 'example',
        items: [
          { en: 'It is dangerous to swim in this river.', ko: '이 강에서 수영하는 것은 위험하다.' },
          { en: 'It takes courage to admit your mistakes.', ko: '실수를 인정하는 것은 용기가 필요하다.' },
          { en: 'It is not easy to raise three children alone.', ko: '혼자서 세 아이를 키우는 것은 쉽지 않다.' },
          { en: 'It made me happy to hear your voice again.', ko: '네 목소리를 다시 듣게 되어 나는 행복했다.' },
          { en: 'It is impossible to finish this project by tomorrow.', ko: '이 프로젝트를 내일까지 끝내는 것은 불가능하다.' },
        ],
      },
      { type: 'heading', text: '목적어 역할' },
      {
        type: 'p',
        text: '목적어는 동사 뒤에서 동작의 대상을 나타냅니다. to부정사가 동사의 목적어로 쓰이면, **동사가 나타내는 행동이나 상태의 목적을 분명히 설명해주는 역할**을 합니다.',
      },
      {
        type: 'sentence-diagram',
        label: '동사의 목적어',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: "can't afford" },
          { tag: 'O', text: 'to buy another car' },
        ],
        translation: "He can't afford to buy another car."
      },
      {
        type: 'example',
        items: [
          { en: 'I want to travel abroad next year.', ko: '나는 내년에 해외여행을 하고 싶다.' },
          { en: 'He decided to quit smoking after the checkup.', ko: '그는 건강검진 후 담배를 끊기로 결심했다.' },
          { en: 'We hope to see you again soon.', ko: '우리는 곧 다시 만나기를 바란다.' },
          { en: 'She promised to call me back before dinner.', ko: '그녀는 저녁 식사 전에 다시 전화하겠다고 약속했다.' },
          { en: 'They refused to answer any questions.', ko: '그들은 어떤 질문에도 대답하기를 거절했다.' },
          { en: 'He agreed to lend me his car for the weekend.', ko: '그는 주말 동안 나에게 차를 빌려주기로 동의했다.' },
          { en: 'She learned to speak French while living in Paris.', ko: '그녀는 파리에 사는 동안 프랑스어를 하는 법을 배웠다.' },
        ],
      },
      {
        type: 'table',
        caption: 'to부정사를 목적어로 취하는 대표적인 동사',
        headers: ['동사', '의미', '예문'],
        rows: [
          ['want', '~하기를 원하다', 'I want to travel abroad.'],
          ['decide', '~하기로 결심하다', 'He decided to quit smoking.'],
          ['hope / wish', '~하기를 바라다', 'I hope to see you soon.'],
          ['plan', '~할 계획이다', 'We plan to move next month.'],
          ['promise', '~하기로 약속하다', 'She promised to call me back.'],
          ['need', '~할 필요가 있다', 'You need to rest.'],
          ['refuse', '~하기를 거절하다', 'He refused to answer.'],
          ['agree', '~하기로 동의하다', 'He agreed to lend me his car.'],
          ['learn', '~하는 법을 배우다', 'They learned to swim.'],
        ],
      },
      { type: 'heading', text: '보어 역할' },
      {
        type: 'p',
        text: '**보어는 주어를 보충 설명하거나 주어의 상태를 분명히 설명해주는 역할**을 합니다. ‘My goal is to finish reading this book this month.’에서 ‘to finish reading this book this month’는 보어로 쓰여, ‘내 목표가 무엇인지’를 구체적으로 설명해줍니다.',
      },
      {
        type: 'sentence-diagram',
        label: '주격보어',
        parts: [
          { tag: 'S', text: 'My goal' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'to finish reading this book this month' },
        ],
        translation: 'My goal is to finish reading this book this month.',
      },
      {
        type: 'example',
        items: [
          { en: 'My dream is to become a doctor who helps the poor.', ko: '내 꿈은 가난한 사람들을 돕는 의사가 되는 것이다.' },
          { en: 'Her plan is to save enough money to buy a house.', ko: '그녀의 계획은 집을 살 만큼 충분한 돈을 모으는 것이다.' },
          { en: 'The best way to learn a language is to use it every day.', ko: '언어를 배우는 최고의 방법은 매일 그것을 사용하는 것이다.' },
          { en: 'My wish is to travel around the world someday.', ko: '내 소원은 언젠가 세계를 여행하는 것이다.' },
        ],
      },
      {
        type: 'icon-row',
        caption: 'to부정사의 명사적 용법 — 세 가지 자리',
        items: [
          { icon: '📍', label: '주어', sub: 'To see ~ is my dream.' },
          { icon: '🎯', label: '목적어', sub: 'want to buy ~' },
          { icon: '💬', label: '보어', sub: 'goal is to finish ~' },
        ],
      },
      { type: 'heading', text: '문맥으로 구별하기: 명사적 용법 vs 형용사적 용법' },
      {
        type: 'p',
        text: '같은 to부정사라도 **앞의 명사와의 관계가 ‘동일함’인지 ‘수식’인지에 따라 명사적 용법과 형용사적 용법이 나뉩니다.** ‘My goal is to finish this book.’에서 to finish this book은 my goal을 수식하는 것이 아니라 my goal 그 자체를 가리킵니다(my goal = to finish this book). 반면 형용사적 용법에서는 to부정사가 앞의 명사와 동일하지 않고, 그 명사를 꾸며줄 뿐입니다. 이 구별은 다음 레슨에서 자세히 다룹니다.',
      },
      { type: 'heading', text: '흔히 하는 실수: 목적어와 보어 자리에 동사원형을 그대로 넣기' },
      {
        type: 'p',
        text: '명사적 용법의 to부정사도 원래 동사가 데려오던 목적어를 그대로 가지고 올 수 있습니다. 그런데 학습자들은 종종 “I want study English.”처럼 to를 빠뜨리고 동사원형만 쓰는 실수를 저지릅니다. **want, decide, hope, plan, agree 같은 동사들은 뒤에 동사가 또 올 때 반드시 to부정사(to + 동사원형)의 형태를 갖추어야 한다**는 점을 기억해야 합니다.',
      },
      {
        type: 'transform',
        from: [{ label: '틀린 문장', text: 'I want study English. (X)' }],
        to: { label: '올바른 문장', text: 'I want to study English. (O)' },
        note: 'want 뒤에 동사가 오려면 반드시 to부정사 형태가 되어야 한다.',
      },
      { type: 'heading', text: '의문사 + to부정사 — 또 하나의 명사구' },
      {
        type: 'p',
        text: '「의문사 + to부정사」는 명사적 용법의 to부정사가 만드는 또 다른 형태입니다. **이 구조는 원래 「의문사 + 주어 + should + 동사원형」으로 이루어진 절이, 주절의 주어와 의미상의 주어가 같을 때 하나의 짧은 명사구로 압축된 것**입니다. 절 하나를 통째로 압축했기 때문에, 이 구조 전체가 문장에서 명사처럼 목적어·보어 자리에 들어갑니다.',
      },
      {
        type: 'table',
        caption: '의문사 + to부정사의 종류',
        headers: ['형태', '의미'],
        rows: [
          ['how to', '~하는 방법'],
          ['what to', '무엇을 ~할지'],
          ['when to', '언제 ~할지'],
          ['where to', '어디서 ~할지'],
          ['which to', '어느 것을 ~할지'],
          ['whether to', '~할지 말지'],
        ],
      },
      {
        type: 'icon-row',
        caption: '의문사 + to부정사의 여섯 형태',
        items: [
          { icon: '🔧', label: 'how to', sub: '~하는 방법' },
          { icon: '📦', label: 'what to', sub: '무엇을 ~할지' },
          { icon: '⏰', label: 'when to', sub: '언제 ~할지' },
          { icon: '📍', label: 'where to', sub: '어디서 ~할지' },
          { icon: '🔀', label: 'which to', sub: '어느 것을 ~할지' },
          { icon: '🤔', label: 'whether to', sub: '~할지 말지' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: "I don't know how to fix this printer.", ko: '나는 이 프린터를 고치는 방법을 모른다.', note: 'know의 목적어로 how to부정사구 전체가 쓰임' },
          { en: "She hasn't decided what to wear to the party.", ko: '그녀는 파티에 무엇을 입을지 아직 결정하지 못했다.', note: 'decide의 목적어' },
          { en: 'He asked me when to start the meeting.', ko: '그는 나에게 회의를 언제 시작할지 물었다.', note: 'ask의 직접목적어' },
          { en: 'Do you know where to buy fresh vegetables?', ko: '신선한 채소를 어디서 사야 할지 아니?', note: 'know의 목적어' },
          { en: "I can't decide which to choose.", ko: '나는 어느 것을 골라야 할지 결정할 수 없다.', note: 'decide의 목적어' },
          { en: 'We are still discussing whether to cancel the trip.', ko: '우리는 여행을 취소할지 말지 아직 논의 중이다.', note: 'discuss의 목적어' },
          { en: 'My goal this year is to learn how to cook Italian food.', ko: '올해 내 목표는 이탈리아 요리를 하는 법을 배우는 것이다.', note: '의문사+to부정사(how to cook ~) 전체가 다시 is의 보어(to learn ~)에 포함된 경우' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '의문사+to부정사 — 동사의 목적어',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: "don't know" },
          { tag: 'O', text: 'how to fix this printer.' },
        ],
        translation: "I don't know how to fix this printer. (how to fix ~ 전체가 know의 목적어)",
      },
      {
        type: 'note',
        text: "「how to fix this printer」는 원래 「how I should fix this printer」라는 절에서 온 것입니다. 주절의 주어 I와 fix의 의미상 주어가 같기 때문에 주어와 should를 생략하고 to부정사로 압축할 수 있습니다. 만약 두 주어가 다르면 절의 형태를 그대로 써야 하며 의문사+to부정사로 압축할 수 없습니다.",
      },
      {
        type: 'callout',
        title: '13장 보충 정리 — 의문사 + to부정사',
        items: [
          '「의문사+to부정사」는 「의문사+주어+should+동사원형」 절에서 주어가 같을 때 압축된 명사구이다.',
          'how to(방법), what to(무엇을), when to(언제), where to(어디서), which to(어느 것을), whether to(~할지 말지)의 형태가 있다.',
          '이 구조 전체가 하나의 명사 덩어리로서 know, decide, ask, discuss 같은 동사의 목적어 자리에 들어간다.',
          '주절의 주어와 to부정사의 의미상의 주어가 다르면 이 압축 형태를 쓸 수 없고 절 형태를 그대로 써야 한다.',
        ],
      },
      {
        type: 'callout',
        title: '13장 핵심 정리 (2) — to부정사의 명사적 용법',
        items: [
          'to부정사는 문장에서 주어·목적어·보어 역할, 즉 명사가 하는 일을 할 수 있다.',
          'to부정사가 주어로 쓰이면 길기 때문에, 문장을 듣는 사람의 부담을 줄이기 위해 대부분 뒤로 보내고 가주어 It으로 자리를 채운다.',
          'to부정사가 목적어로 쓰이면 동사(want, decide, hope, plan, promise, need, refuse, agree 등)의 의미를 완성해준다.',
          'to부정사가 보어로 쓰이면 주어와 동일한 내용을 가리키며 주어가 무엇인지 구체적으로 설명해준다.',
          '보어 자리의 to부정사는 앞 명사를 수식하는 것이 아니라 그 명사와 동일한 내용을 가리킨다는 점에서 형용사적 용법과 구별된다.',
          'want, decide, hope, plan, agree처럼 to부정사를 목적어로 취하는 동사 뒤에서는 to를 빠뜨리지 않도록 주의한다.',
        ],
      },
    ],
  },

  'ch13-3': {
    title: 'to부정사의 형용사적 용법',
    blocks: [
      {
        type: 'p',
        text: 'to부정사가 나타내는 추상적 개념은 명사를 꾸며 그 명사가 어떤 용도로 쓰이는지, 무엇을 위한 것인지를 설명해줄 수도 있습니다. 이렇게 **to부정사가 명사 뒤에 놓여 그 명사를 꾸며주면 형용사적 용법**이라고 합니다. 앞 레슨의 보어 역할과 다른 점은, 형용사적 용법의 to부정사는 앞의 명사와 동일한 것을 가리키는 게 아니라 **그 명사를 수식할 뿐**이라는 것입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have no place to go.', ko: '나는 갈 곳이 없다.' },
          { en: 'Could you please bring something to drink?', ko: '마실 것을 좀 가져다주시겠어요?' },
          { en: 'He has a lot of books to read.', ko: '그는 읽을 책이 많이 있다.' },
          { en: 'Do you have something to eat?', ko: '너는 먹을 것이 있니?' },
          { en: 'It is time to go to bed.', ko: '이제 잘 시간이다.' },
          { en: 'She is the first person to arrive at the office every morning.', ko: '그녀는 매일 아침 사무실에 가장 먼저 도착하는 사람이다.' },
          { en: 'I need something warm to wear this winter.', ko: '나는 이번 겨울에 입을 따뜻한 무언가가 필요하다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '명사를 뒤에서 수식',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'have' },
          { tag: 'O', text: 'no place' },
          { tag: 'M', text: 'to go' },
        ],
        translation: 'I have no place to go. (to go가 place를 뒤에서 수식)',
      },
      {
        type: 'sentence-diagram',
        label: '명사를 뒤에서 수식 — 목적어를 그대로 데려오는 경우',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'has' },
          { tag: 'O', text: 'a lot of books' },
          { tag: 'M', text: 'to read.' },
        ],
        translation: 'He has a lot of books to read. (read는 전치사 없이 목적어를 바로 취하는 동사이므로 to read 뒤에 전치사가 필요 없음)',
      },
      {
        type: 'note',
        text: '일반 형용사는 명사 앞에서 꾸며주지만, to부정사가 형용사 역할을 할 때는 명사 뒤에 위치합니다. 이는 ‘길고 복잡한 표현은 뒤로 보내 이해를 돕는다’는 영어의 원칙 때문입니다. to부정사는 최소 두 단어 이상으로 이루어져 있기 때문에 명사 뒤에서 그 명사를 수식합니다.',
      },
      { type: 'heading', text: '형용사적 용법이 만들어내는 의미의 종류' },
      {
        type: 'p',
        text: '형용사적 용법의 to부정사는 단순히 ‘~할’이라고만 옮겨지지 않습니다. 문맥에 따라 앞으로 해야 할 일(no place to go), 용도(something to drink), 예정된 일(time to go to bed), 자격이나 순서(the first person to arrive) 등 다양한 의미를 더해줄 수 있습니다. 아래 표로 정리해봅시다.',
      },
      {
        type: 'table',
        caption: '형용사적 용법이 더해주는 의미의 갈래',
        headers: ['의미', '예문', '설명'],
        rows: [
          ['해야 할 일 / 앞으로 할 일', 'He has a lot of books to read.', '읽어야 할 책이 많다는 뜻'],
          ['용도', 'Could you bring something to drink?', '마시는 데 쓰일 것이라는 용도를 나타냄'],
          ['예정된 일', 'It is time to go to bed.', '앞으로 일어날 일을 가리킴'],
          ['자격 · 순서', 'She is the first person to arrive.', '어떤 자격·순서에 해당하는지를 밝혀줌'],
        ],
      },
      {
        type: 'icon-row',
        caption: '형용사적 용법이 더해주는 의미',
        items: [
          { icon: '📝', label: '해야 할 일', sub: 'books to read' },
          { icon: '🔧', label: '용도', sub: 'something to drink' },
          { icon: '⏰', label: '예정된 일', sub: 'time to go to bed' },
          { icon: '🥇', label: '자격·순서', sub: 'first person to arrive' },
        ],
      },
      { type: 'heading', text: '전치사가 남는 형용사적 용법' },
      {
        type: 'p',
        text: '아래 문장들은 앞의 예문들과 다르게, to부정사 뒤에 전치사가 남아 있습니다. 이 전치사는 수식받는 명사와 to부정사의 동작을 이어주는 연결 고리 역할을 하므로 빠뜨리면 안 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'There is a chair to sit on.', ko: '앉을 의자가 있다.', note: 'sit on a chair → a chair to sit on' },
          { en: 'He needed someone to talk with.', ko: '그는 이야기할 누군가가 필요했다.', note: 'talk with someone → someone to talk with' },
          { en: 'I need a pencil to write with.', ko: '나는 쓸 연필이 필요하다.', note: 'write with a pencil → a pencil to write with' },
          { en: 'They were looking for a house to live in.', ko: '그들은 살 집을 찾고 있었다.', note: 'live in a house → a house to live in' },
          { en: 'She needs a piece of paper to write on.', ko: '그녀는 (그 위에) 쓸 종이 한 장이 필요하다.', note: 'write on a piece of paper → a piece of paper to write on' },
          { en: 'He is looking for friends to play with.', ko: '그는 함께 놀 친구들을 찾고 있다.', note: 'play with friends → friends to play with' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '형용사적 용법 — 전치사가 남는 경우',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'needed' },
          { tag: 'O', text: 'someone' },
          { tag: 'M', text: 'to talk with.' },
        ],
        translation: 'He needed someone to talk with. (talk with someone에서 someone이 앞으로 나가며 전치사 with가 남음)',
      },
      {
        type: 'p',
        text: 'sit, talk, write, live, play 같은 동사는 원래 문장에서 전치사와 함께 쓰여야 의미가 완성됩니다(sit on a chair, talk with someone, write with a pencil, live in a house, play with friends). 이 동사들이 to부정사가 되어 앞의 명사를 수식할 때도 전치사는 그대로 남아 있어야, ‘의자에 앉다’, ‘누군가와 이야기하다’와 같은 원래 의미가 유지됩니다. to부정사가 만들어질 때 명사는 원래 문장에서 전치사의 목적어 자리에 있던 것이 앞으로 튀어나온 것이므로, 그 자리를 표시해주던 전치사는 사라지지 않고 반드시 남습니다.',
      },
      {
        type: 'table',
        caption: '전치사가 필요한 형용사적 용법 정리',
        headers: ['원래 표현', 'to부정사구', '수식받는 명사'],
        rows: [
          ['sit on a chair', 'to sit on', 'a chair'],
          ['talk with someone', 'to talk with', 'someone'],
          ['write with a pencil', 'to write with', 'a pencil'],
          ['live in a house', 'to live in', 'a house'],
          ['write on a piece of paper', 'to write on', 'a piece of paper'],
          ['play with friends', 'to play with', 'friends'],
        ],
      },
      { type: 'heading', text: '흔히 하는 실수: 전치사를 빠뜨리는 것' },
      {
        type: 'p',
        text: '가장 흔한 실수는 “I need a chair to sit.”처럼 전치사를 빼먹는 것입니다. sit은 원래 뒤에 전치사 없이 명사를 바로 목적어로 취할 수 없는 동사이므로(사람이 ‘의자를’ 앉는 것이 아니라 ‘의자에’ 앉는 것), sit이 chair라는 명사를 다시 수식하려면 반드시 전치사 on이 붙어야 합니다. to부정사를 만들 때는 항상 “원래 문장으로 되돌렸을 때 전치사가 필요한가?”를 확인하는 습관을 들여야 합니다.',
      },
      {
        type: 'transform',
        from: [{ label: '틀린 문장', text: 'I need a chair to sit. (X)' }],
        to: { label: '올바른 문장', text: 'I need a chair to sit on. (O)' },
        note: 'sit on a chair라는 원래 표현에서 전치사 on을 빠뜨리면 안 된다.',
      },
      {
        type: 'note',
        text: '반대로 원래 동사가 전치사 없이 목적어를 바로 취하는 동사(read a book, eat something 등)라면 to부정사가 될 때도 전치사를 붙이지 않습니다. “books to read on”(X)처럼 불필요한 전치사를 덧붙이는 것도 흔한 실수이므로, 원래 문장으로 되돌려 전치사가 실제로 필요한지 확인해야 합니다.',
      },
      {
        type: 'callout',
        title: '13장 핵심 정리 (3) — to부정사의 형용사적 용법',
        items: [
          'to부정사가 형용사처럼 쓰이면 명사 뒤에서 그 명사를 수식하며, 명사적 용법의 보어와 달리 앞 명사와 동일한 것을 가리키지 않는다.',
          '형용사적 용법은 해야 할 일, 용도, 예정된 일, 자격·순서 등 다양한 의미를 더해줄 수 있다.',
          '수식받는 명사가 원래 문장에서 전치사의 목적어였다면(sit on a chair 등), to부정사가 되어도 그 전치사(on, with, in 등)를 빠뜨리지 않고 남겨야 한다.',
          '전치사를 넣을지 말지는 to부정사를 원래 동사 문장으로 되돌려 전치사가 필요한지 확인하면 판단할 수 있다.',
          '반대로 원래 동사가 전치사 없이 목적어를 바로 취한다면 to부정사에도 전치사를 덧붙이지 않는다.',
        ],
      },
    ],
  },

  'ch13-4': {
    title: 'to부정사의 부사적 용법 · 의미상의 주어 · 부정형',
    blocks: [
      {
        type: 'p',
        text: 'to부정사가 나타내는 추상적 개념은 동사나 형용사, 문장 전체를 꾸며 목적, 결과, 감정의 원인, 판단의 근거 등의 의미를 더해줄 수도 있습니다. 이렇게 to부정사가 부사처럼 쓰이면 부사적 용법이라고 합니다. 명사적·형용사적 용법과 달리 부사적 용법은 문장의 필수 성분이 아니라 문장 전체에 부가 정보를 더해주는 수식어(M)이므로, 문장에서 빼도 나머지 부분은 문법적으로 온전합니다. 부사적 용법은 의미가 다양하므로 하나씩 나누어 살펴보겠습니다.',
      },
      {
        type: 'icon-row',
        caption: '부사적 용법의 의미 갈래',
        items: [
          { icon: '🎯', label: '목적', sub: '~하기 위해' },
          { icon: '➡️', label: '결과', sub: '~하게 되다' },
          { icon: '😊', label: '감정의 원인', sub: '~해서' },
          { icon: '⚖️', label: '판단의 근거', sub: '~하는 것을 보니' },
          { icon: '🔥', label: '원인과 결과', sub: 'too ~ to / enough to' },
        ],
      },
      { type: 'heading', text: '① 목적: ~하기 위해' },
      {
        type: 'p',
        text: '가장 널리 쓰이는 부사적 용법입니다. 1장에서 살펴본 to의 방향성(~을 향해 가다)이 가장 뚜렷하게 남아 있는 용법으로, 어떤 행동을 한 이유나 목적을 나타냅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'To watch a movie, I closed the curtains.', ko: '영화를 보기 위해, 나는 커튼을 닫았다.' },
          { en: 'He went to the library to study for the exam.', ko: '그는 시험공부를 하기 위해 도서관에 갔다.' },
          { en: 'She saved money to buy a new laptop.', ko: '그녀는 새 노트북을 사기 위해 돈을 모았다.' },
          { en: 'I woke up early to catch the first train.', ko: '나는 첫 기차를 타기 위해 일찍 일어났다.' },
          { en: 'They worked overtime to finish the project on time.', ko: '그들은 프로젝트를 제때 끝내기 위해 초과 근무를 했다.' },
          { en: 'She turned down the offer to spend more time with her family.', ko: '그녀는 가족과 더 많은 시간을 보내기 위해 그 제안을 거절했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '목적을 나타내는 부사적 용법',
        parts: [
          { tag: 'M', text: 'To watch a movie' },
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'closed' },
          { tag: 'O', text: 'the curtains' },
        ],
        translation: 'To watch a movie, I closed the curtains.',
      },
      {
        type: 'note',
        text: '목적을 강조하고 싶을 때는 to 앞에 in order나 so as를 붙여 “in order to watch a movie”, “so as to catch the train”처럼 쓰기도 합니다. 뜻은 같지만 목적임을 더 분명하게 드러내는 표현입니다.',
      },
      { type: 'heading', text: '② 결과: (그 결과) ~하게 되다' },
      {
        type: 'p',
        text: '앞의 동작이나 상태가 이어져 어떤 결과로 마무리되었음을 나타냅니다. grow up to, live to, only to 같은 표현이 대표적입니다. 목적의 용법과 형태는 같아 보여도, 목적은 ‘아직 이루지 못한 의도’를 가리키고 결과는 ‘이미 일어난 마무리’를 가리킨다는 점에서 다릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The little boy grew up to be a teacher.', ko: '그 작은 소년은 자라서 선생님이 되었다.' },
          { en: 'She worked hard, only to fail the exam.', ko: '그녀는 열심히 공부했지만, 결국 시험에 떨어졌다.' },
          { en: 'He lived to be ninety years old.', ko: '그는 아흔 살까지 살았다.' },
          { en: 'I opened the box to find it empty.', ko: '나는 상자를 열었는데, 결국 그것이 비어 있는 것을 발견했다.' },
          { en: 'He studied abroad for ten years, only to return home with no job.', ko: '그는 십 년 동안 해외에서 공부했지만, 결국 직업 없이 집으로 돌아왔다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '결과를 나타내는 부사적 용법',
        parts: [
          { tag: 'S', text: 'The little boy' },
          { tag: 'V', text: 'grew up' },
          { tag: 'M', text: 'to be a teacher.' },
        ],
        translation: 'The little boy grew up to be a teacher. (자란 후에야 알 수 있는 결말을 나타내는 to부정사)',
      },
      {
        type: 'note',
        text: '“He went to the store to buy milk.”(목적: 우유를 사려는 의도)와 “He grew up to be a singer.”(결과: 자란 뒤의 결말)을 비교해보면, 목적의 to부정사는 앞 동작이 일어나기 전부터 품고 있던 의도를 나타내고, 결과의 to부정사는 앞 동작이 끝난 뒤에야 알 수 있는 결말을 나타냅니다.',
      },
      { type: 'heading', text: '③ 감정의 원인: ~해서 (감정을 느끼다)' },
      {
        type: 'p',
        text: 'glad, happy, sad, surprised, sorry처럼 감정을 나타내는 형용사 뒤에서, 그 감정이 왜 생겼는지 원인을 설명합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I am glad to see you here.', ko: '너를 여기에서 보게 되어 기뻐.' },
          { en: 'She was surprised to hear the news.', ko: '그녀는 그 소식을 듣고 놀랐다.' },
          { en: 'We were sad to say goodbye.', ko: '우리는 작별 인사를 하게 되어 슬펐다.' },
          { en: 'He was relieved to find his wallet.', ko: '그는 지갑을 찾아서 안심했다.' },
          { en: 'I was disappointed to learn that the concert was canceled.', ko: '나는 콘서트가 취소되었다는 것을 알고 실망했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '감정의 원인을 나타내는 부사적 용법',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'glad' },
          { tag: 'M', text: 'to see you here.' },
        ],
        translation: 'I am glad to see you here. (glad라는 감정이 왜 생겼는지를 to see you here가 설명)',
      },
      { type: 'heading', text: '④ 판단의 근거: ~하다니, ~하는 것을 보니' },
      {
        type: 'p',
        text: '어떤 상태나 성격을 판단하게 된 근거를 나타냅니다. 주로 must be, be동사 뒤에 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'You must be upset to talk to her like that.', ko: '그녀에게 그렇게 말하는 걸 보니 너는 화난 게 틀림없어.' },
          { en: 'He is foolish to say so.', ko: '그렇게 말하는 것을 보니 그는 어리석다.' },
          { en: 'She must be tired to fall asleep so quickly.', ko: '그렇게 빨리 잠든 것을 보니 그녀는 피곤한 게 틀림없다.' },
          { en: 'He must be rich to own three houses.', ko: '집을 세 채나 소유한 걸 보니 그는 부자인 게 틀림없다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '판단의 근거를 나타내는 부사적 용법',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'foolish' },
          { tag: 'M', text: 'to say so.' },
        ],
        translation: 'He is foolish to say so. (to say so라는 행동을 근거로 foolish라는 판단을 내림)',
      },
      { type: 'heading', text: '⑤ 원인과 결과: too ~ to / enough to' },
      {
        type: 'p',
        text: '「too + 형용사/부사 + to부정사」는 ‘너무 ~해서 …할 수 없다’는 뜻이며, 「형용사/부사 + enough + to부정사」는 ‘…할 만큼 충분히 ~하다’는 뜻입니다. 두 구문 모두 원인(정도)과 그로 인한 결과(가능·불가능)를 연결합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It is too cold to go outside.', ko: '너무 추워서 밖에 나갈 수가 없다.' },
          { en: 'This box is too heavy to carry alone.', ko: '이 상자는 너무 무거워서 혼자 옮길 수 없다.' },
          { en: 'He is old enough to drive a car.', ko: '그는 운전할 만큼 충분히 나이가 들었다.' },
          { en: 'She spoke slowly enough for us to understand.', ko: '그녀는 우리가 이해할 만큼 충분히 느리게 말했다.' },
          { en: 'The coffee was too hot to drink right away.', ko: '커피가 너무 뜨거워서 바로 마실 수 없었다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'too ~ to 구문 — 원인과 결과',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'too cold' },
          { tag: 'M', text: 'to go outside.' },
        ],
        translation: 'It is too cold to go outside. (too cold라는 원인이 to go outside라는 결과(불가능)로 이어짐)',
      },
      {
        type: 'sentence-diagram',
        label: 'enough to 구문 — 원인과 결과',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'old enough' },
          { tag: 'M', text: 'to drive a car.' },
        ],
        translation: 'He is old enough to drive a car. (old enough라는 충분한 정도가 to drive a car라는 결과(가능)로 이어짐)',
      },
      {
        type: 'table',
        caption: 'too ~ to 와 enough to 비교',
        headers: ['구문', '의미', '예문'],
        rows: [
          ['too + 형용사/부사 + to부정사', '너무 ~해서 …할 수 없다', 'It is too cold to go outside.'],
          ['형용사/부사 + enough + to부정사', '…할 만큼 충분히 ~하다', 'He is old enough to drive.'],
        ],
      },
      {
        type: 'table',
        caption: 'to부정사 부사적 용법 다섯 갈래 한눈에 보기',
        headers: ['의미', '대표 신호', '예문'],
        rows: [
          ['① 목적', '동사 뒤, 문장 맨앞', 'To watch a movie, I closed the curtains.'],
          ['② 결과', 'grow up to, live to, only to', 'The little boy grew up to be a teacher.'],
          ['③ 감정의 원인', 'glad/happy/sad + to', 'I am glad to see you here.'],
          ['④ 판단의 근거', 'must be/형용사 + to', 'You must be upset to talk to her like that.'],
          ['⑤ 원인과 결과', 'too ~ to / enough to', 'It is too cold to go outside.'],
        ],
      },
      { type: 'heading', text: 'to부정사의 의미상의 주어' },
      {
        type: 'p',
        text: '‘He is foolish to say so.’라는 문장을 보면, to say so라는 행동을 하는 주체는 문장의 주어 He와 같습니다. 이렇게 문장의 주어와 to부정사의 행동 주체가 같을 때는 별도의 표시를 하지 않습니다. 그런데 to부정사의 행동 주체가 문장의 주어와 다를 때는 to부정사 앞에 그 주체를 별도로 밝혀주어야 합니다. 이것을 to부정사의 의미상의 주어라고 부릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It is important for you to study English.', ko: '네가 영어를 공부하는 것은 중요하다.', note: 'to study의 주체는 you' },
          { en: 'It is easy for him to solve this problem.', ko: '그가 이 문제를 푸는 것은 쉽다.', note: 'to solve의 주체는 him' },
          { en: 'It was kind of you to help me.', ko: '나를 도와줘서 너는 친절했다.', note: 'to help의 주체는 you, 성격을 나타내는 kind는 of를 사용' },
          { en: 'It is foolish of him to say so.', ko: '그렇게 말하는 걸 보니 그는 어리석다.', note: 'to say의 주체는 him, 성격을 나타내는 foolish는 of를 사용' },
          { en: 'It is necessary for the team to finish the report by Friday.', ko: '그 팀이 금요일까지 보고서를 끝내는 것이 필요하다.', note: 'to finish의 주체는 the team' },
          { en: 'It was careless of her to leave the door unlocked.', ko: '문을 잠그지 않고 나간 것을 보니 그녀는 부주의했다.', note: 'to leave의 주체는 her, 성격을 나타내는 careless는 of를 사용' },
        ],
      },
      {
        type: 'p',
        text: '의미상의 주어는 to부정사구 바로 앞, 즉 「for/of + 목적격」의 자리에 놓입니다. to부정사구 안에서 의미상의 주어가 차지하는 위치를 도식으로 확인해봅시다.',
      },
      {
        type: 'sentence-diagram',
        label: 'to부정사 안에서 의미상의 주어의 위치',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'important' },
          { tag: 'M', text: 'for you' },
          { tag: 'M', text: 'to study English' },
        ],
        translation: 'It is important [for you] to study English. (for you = to study English의 의미상의 주어, to부정사구 바로 앞에 위치)',
      },
      {
        type: 'sentence-diagram',
        label: 'of + 목적격도 to부정사구 바로 앞에 위치',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'was' },
          { tag: 'C', text: 'kind' },
          { tag: 'M', text: 'of you' },
          { tag: 'M', text: 'to help me' },
        ],
        translation: 'It was kind [of you] to help me. (of you = to help me의 의미상의 주어)',
      },
      {
        type: 'table',
        caption: '의미상의 주어: for + 목적격 vs of + 목적격',
        headers: ['형태', '쓰이는 경우', '예문'],
        rows: [
          ['for + 목적격', '대부분의 형용사 (important, easy, hard, necessary, difficult 등)', 'It is important for you to study English.'],
          ['of + 목적격', '사람의 성격·성질을 나타내는 형용사 (kind, nice, wise, foolish, careless, rude, stupid 등)', 'It is foolish of him to say so.'],
        ],
      },
      {
        type: 'note',
        text: '의미상의 주어는 문장의 주어와 to부정사의 실제 행동 주체가 다를 때만 필요합니다. 행동 주체가 문장의 주어와 같으면 굳이 밝히지 않아도 됩니다. (참고: for/of + 목적격이 다른 단원, 즉 that절의 의미상 주어와 혼동될 수 있는데, 여기서 다루는 것은 오직 to부정사구 안에서의 위치이므로 반드시 to부정사 바로 앞에 붙습니다.)',
      },
      { type: 'heading', text: '흔히 하는 실수: for와 of를 반대로 쓰기' },
      {
        type: 'p',
        text: '가장 흔한 실수는 “It is kind for you to help me.”(X)처럼 사람의 성격을 나타내는 형용사 뒤에도 for를 쓰는 것입니다. kind, nice, foolish, careless처럼 ‘사람의 성격이 어떠한가’를 나타내는 형용사는 반드시 of를 써야 합니다. 반대로 important, necessary처럼 성격이 아니라 ‘일 자체의 성질’을 나타내는 형용사에는 for를 씁니다. “주어의 성격을 나타내는 형용사인가?”를 스스로 물어보면 구별할 수 있습니다.',
      },
      {
        type: 'transform',
        from: [{ label: '틀린 문장', text: 'It is kind for you to help me. (X)' }],
        to: { label: '올바른 문장', text: 'It was kind of you to help me. (O)' },
        note: 'kind는 사람의 성격을 나타내는 형용사이므로 of를 써야 한다.',
      },
      { type: 'heading', text: 'to부정사의 부정형' },
      {
        type: 'p',
        text: 'to부정사를 부정할 때는 to 바로 앞에 not이나 never를 붙입니다. 「not/never + to + 동사원형」의 순서를 지키는 것이 중요합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I decided not to go there.', ko: '나는 그곳에 가지 않기로 결심했다.' },
          { en: 'It is important not to be late.', ko: '늦지 않는 것이 중요하다.' },
          { en: 'He promised never to lie again.', ko: '그는 다시는 거짓말을 하지 않겠다고 약속했다.' },
          { en: 'She tried not to laugh during the meeting.', ko: '그녀는 회의 중에 웃지 않으려고 애썼다.' },
          { en: 'We advised him not to invest all his savings.', ko: '우리는 그에게 저축한 돈을 전부 투자하지 말라고 권했다.' },
        ],
      },
      {
        type: 'note',
        text: '“I don\'t decide to go there.”처럼 본동사를 부정하면 “나는 그곳에 가기로 결심하지 않았다(결심 자체가 없음)”는 뜻이 되어, “나는 그곳에 가지 않기로 결심했다(결심은 했지만 안 가기로 함)”와 의미가 달라집니다. not의 위치에 따라 부정하는 대상이 달라지므로 주의해야 합니다.',
      },
      {
        type: 'transform',
        from: [{ label: '본동사를 부정 (의미 다름)', text: "I don't decide to go there." }],
        to: { label: 'to부정사를 부정', text: 'I decide not to go there.' },
        note: '앞 문장은 ‘결심 자체를 하지 않았다’는 뜻이고, 뒤 문장은 ‘가지 않기로 결심했다’는 뜻이다. not의 위치가 부정의 대상을 바꾼다.',
      },
      { type: 'heading', text: '의미가 달라지는 동사 — to부정사 vs 동명사' },
      {
        type: 'p',
        text: '지금까지 살펴본 to부정사는 “아직 일어나지 않은, 앞으로 향해 갈 목적이나 의도”를 가리키는 경우가 많았습니다. 그런데 같은 동사라도 뒤에 to부정사가 오는지 동명사가 오는지에 따라 뜻이 완전히 달라지는 동사들이 있습니다. **원리는 간단합니다 — to부정사는 아직 실현되지 않은 미래의 동작을 가리키고, 동명사는 이미 일어났거나 지금 진행 중인 동작 그 자체를 가리킵니다.** 이 원리를 기준으로 삼으면 아래 동사들의 의미 차이를 무작정 외우지 않고도 유추할 수 있습니다.',
      },
      {
        type: 'table',
        caption: 'to부정사 vs 동명사에 따라 뜻이 달라지는 동사',
        headers: ['동사', '+to부정사 (아직 안 일어난 일)', '+동명사 (이미 일어난/진행 중인 일)'],
        rows: [
          ['remember', '~할 것을 (미리) 기억하다', '~했던 것을 (나중에) 기억하다'],
          ['forget', '~할 것을 잊다 (그래서 안 함)', '~했던 것을 잊다 (했지만 기억을 못함)'],
          ['try', '~하려고 시도·노력하다', '(시험 삼아) 한번 ~해 보다'],
          ['regret', '~하게 되어 유감이다 (앞으로 할 말)', '~했던 것을 후회하다 (이미 한 일)'],
          ['stop', '~하기 위해 (하던 일을) 멈추다', '~하던 것을 멈추다'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I remembered to lock the door.', ko: '나는 문을 잠가야 한다는 것을 기억해서 잠갔다.', note: '문을 잠그기 전에 그 일을 기억함 — 아직 안 한 일을 미리 기억' },
          { en: 'I remember locking the door.', ko: '나는 문을 잠갔던 것이 기억난다.', note: '이미 문을 잠갔고, 그 행동 자체가 기억에 남아 있음' },
          { en: 'I forgot to bring my umbrella.', ko: '나는 우산을 가져와야 하는 것을 잊어버렸다(그래서 안 가져왔다).', note: '앞으로 할 일을 잊어 결국 하지 못함' },
          { en: "I'll never forget meeting her for the first time.", ko: '나는 그녀를 처음 만났던 것을 절대 잊지 못할 것이다.', note: '이미 있었던 만남을 잊지 못함' },
          { en: "He tried to open the jar, but it wouldn't budge.", ko: '그는 병을 열려고 애썼지만, 병은 꼼짝도 하지 않았다.', note: '목표를 이루기 위한 노력' },
          { en: 'Try adding a little more salt.', ko: '소금을 조금 더 넣어 봐.', note: '결과가 어떨지 모르는 채로 시험 삼아 해보는 것' },
          { en: 'I regret to inform you that your application was rejected.', ko: '귀하의 지원이 거절되었음을 알려드리게 되어 유감입니다.', note: '지금부터 말하려는 내용에 대한 유감' },
          { en: 'She regrets quitting her job so suddenly.', ko: '그녀는 그렇게 갑자기 일을 그만둔 것을 후회한다.', note: '이미 그만둔 과거의 행동을 후회' },
          { en: 'He stopped to answer the phone.', ko: '그는 전화를 받기 위해 (하던 일을) 멈췄다.', note: '멈춘 목적이 to answer the phone — 전화는 그 후에 받았다' },
          { en: 'He stopped answering the phone.', ko: '그는 전화 받는 것을 그만두었다.', note: '전화를 받던 행동 자체를 멈춤 — 더 이상 전화를 받지 않는다' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'stop + to부정사 — 목적을 나타내는 부사적 용법',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'stopped' },
          { tag: 'M', text: 'to answer the phone.' },
        ],
        translation: 'He stopped to answer the phone. (전화를 받기 위해 하던 일을 멈춤 — to answer는 stopped의 목적어가 아니라 목적을 나타내는 부사)',
      },
      {
        type: 'note',
        text: '**stop 뒤의 to부정사는 “멈춘 목적”을 나타내는 부사적 용법이지 stop의 목적어가 아닙니다.** 반면 stop 뒤의 동명사는 stop의 목적어로 쓰여 “멈추는 대상 자체”를 가리킵니다. 이 차이는 remember, forget, regret에도 그대로 이어집니다 — to부정사는 언제나 “아직 안 한 일·목적”을, 동명사는 “이미 한 일·진행 중인 일”을 가리킨다는 하나의 원리로 정리할 수 있습니다.',
      },
      { type: 'heading', text: '독립부정사 — 문장 전체를 꾸미는 관용표현' },
      {
        type: 'p',
        text: '부사적 용법의 to부정사는 보통 특정 동사나 형용사, 또는 문장 속 한 부분을 수식합니다. 그런데 일부 to부정사 표현은 오랜 세월 관용적으로 굳어져, 문장의 특정 부분이 아니라 **문장 전체 앞에 놓여 말하는 사람의 태도나 문장을 이어가는 방식을 나타내는 독립적인 삽입구**로 쓰입니다. 이를 독립부정사라고 부르며, 문장에서 빼도 나머지 문장의 의미와 문법이 전혀 달라지지 않는다는 점에서 일반적인 부사적 용법과 같은 성질(수식어)을 공유합니다.',
      },
      {
        type: 'table',
        caption: '자주 쓰이는 독립부정사 표현',
        headers: ['표현', '의미'],
        rows: [
          ['to be honest', '솔직히 말하면'],
          ['to be frank (with you)', '솔직히 말해서'],
          ['to make matters worse', '설상가상으로'],
          ['to make a long story short', '간단히 말하면'],
          ['to begin with', '우선, 첫째로'],
          ['to sum up', '요약하자면'],
          ['needless to say', '말할 것도 없이'],
          ['to tell the truth', '사실대로 말하면'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "To be honest, I don't think this plan will work.", ko: '솔직히 말하면, 나는 이 계획이 성공할 것 같지 않다.', note: '문장 전체에 대한 화자의 태도(솔직함)를 미리 밝혀줌' },
          { en: 'It started raining, and to make matters worse, we lost our way.', ko: '비가 오기 시작했고, 설상가상으로 우리는 길을 잃었다.', note: '앞 상황에 더해 상황이 더 나빠졌음을 알려주는 삽입구' },
          { en: 'To make a long story short, we decided to cancel the trip.', ko: '간단히 말하면, 우리는 여행을 취소하기로 했다.', note: '긴 이야기를 요약해서 전달할 때 사용' },
          { en: "To begin with, let's review what we learned last week.", ko: '우선, 우리가 지난주에 배운 것을 복습해보자.', note: '이야기를 시작하는 순서를 알려줌' },
          { en: 'To sum up, the project was a success despite the delays.', ko: '요약하자면, 지연에도 불구하고 그 프로젝트는 성공적이었다.', note: '앞서 말한 내용을 요약할 때 사용' },
          { en: 'Needless to say, she was thrilled to win the prize.', ko: '말할 것도 없이, 그녀는 상을 받아서 매우 기뻐했다.', note: '너무나 당연한 사실임을 강조' },
          { en: "To tell the truth, I don't remember his name.", ko: '사실대로 말하면, 나는 그의 이름이 기억나지 않는다.', note: '숨김없이 사실을 말할 때 사용' },
        ],
      },
      {
        type: 'note',
        text: '독립부정사는 문장 맨 앞에 오는 경우가 많지만, to make matters worse처럼 문장 중간에 삽입되기도 합니다. 위치와 상관없이 콤마(,)로 나머지 문장과 구분해준다는 공통점이 있습니다.',
      },
      {
        type: 'callout',
        title: '13장 보충 정리 — 의미가 달라지는 동사 · 독립부정사',
        items: [
          'remember, forget, try, regret, stop처럼 to부정사와 동명사를 모두 목적어로 취하되 의미가 달라지는 동사가 있다 — to부정사는 아직 일어나지 않은 일·목적을, 동명사는 이미 일어났거나 진행 중인 일을 가리킨다.',
          'stop 뒤의 to부정사는 stop의 목적어가 아니라 “멈춘 목적”을 나타내는 부사적 용법이라는 점에 유의한다.',
          'to be honest, to make matters worse, needless to say 같은 독립부정사는 특정 단어가 아니라 문장 전체를 수식하며, 관용적으로 형태가 굳어진 표현이므로 통째로 외워두어야 한다.',
          '독립부정사는 문장에서 빼도 나머지 문장이 문법적으로 온전하며, 콤마로 나머지 문장과 구분된다.',
        ],
      },
      {
        type: 'callout',
        title: '13장 핵심 정리 (4) — 부사적 용법 · 의미상의 주어 · 부정형',
        items: [
          'to부정사의 부사적 용법은 목적, 결과, 감정의 원인, 판단의 근거, 원인과 결과(too~to/enough to)의 의미를 나타낸다.',
          '목적과 결과는 형태가 비슷해 보이지만, 목적은 아직 이루지 못한 의도이고 결과는 이미 일어난 마무리라는 점에서 다르다.',
          'to부정사의 행동 주체가 문장의 주어와 다르면 to부정사구 바로 앞에 「for/of + 목적격」으로 의미상의 주어를 밝혀준다.',
          '사람의 성격·성질을 나타내는 형용사(kind, foolish 등) 뒤에는 of를, 일 자체의 성질을 나타내는 형용사(important, necessary 등) 뒤에는 for를 쓴다.',
          'to부정사를 부정할 때는 to 바로 앞에 not 또는 never를 붙이며, 본동사를 부정하는 것과 의미가 다르다는 점에 유의한다.',
        ],
      },
    ],
  },
}
