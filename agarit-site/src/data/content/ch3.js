export const ch3 = {
  'ch3-1': {
    title: '주어와 동사의 관계',
    blocks: [
      {
        type: 'p',
        text: '주어와 동사는 영어 문장의 가장 기본적인 요소입니다. 주어는 영어로 Subject(줄여서 S), 동사는 Verb(줄여서 V)라고 합니다. 주어는 문장에서 누가 어떤 행동을 하는지에 대한 정보를 제공하고, 동사는 주어의 행동이나 상태, 발생을 나타냅니다.',
      },
      {
        type: 'p',
        text: '영어 문장에는 주어와 동사가 반드시 존재해야 합니다. 만약 문장에 주어나 동사가 없다면, 특수한 경우로 생략된 것이며 보통 문맥으로 유추할 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He slept.', ko: '그는 잠을 잔다.' },
          { en: 'He laughed.', ko: '그는 웃는다.' },
          { en: 'The wind blows.', ko: '바람이 분다.' },
        ],
      },
      {
        type: 'p',
        text: '이런 기본 문장에 요소를 더해가며 문장을 길게 만들어 갑니다. 그런데 주어와 동사는 그냥 나란히 놓인 두 단어가 아닙니다. 동사는 어떤 주어와 어울릴 수 있는지에 대한 조건(의미상의 자격)을 스스로 가지고 있고, 주어는 그 조건을 만족시킬 수 있는 대상이어야만 문장이 성립합니다. 이를 언어학에서는 "선택 제약(selectional restriction)"이라고 부르는데, 용어를 외울 필요는 없지만 그 개념만은 꼭 이해해야 합니다.',
      },
      { type: 'heading', text: '동물 주어와 동사의 어울림' },
      {
        type: 'p',
        text: '동물은 감각·행동 범위가 넓기 때문에 많은 동사와 자연스럽게 어울리지만, 그 동물이 실제로 할 수 없는 행동을 나타내는 동사와는 절대 함께 쓸 수 없습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The dog barked at the mailman.', ko: '개는 우체부에게 짖었다.', note: '개는 짖을 수 있는 존재 → 성립' },
          { en: '*The pencil barked at the mailman.', ko: '연필은 우체부에게 짖었다.', note: '비문 — 연필은 짖을 수 없음' },
          { en: 'The bird flew over the lake.', ko: '새는 호수 위를 날았다.', note: '새는 날 수 있는 존재 → 성립' },
          { en: '*The desk flew over the lake.', ko: '책상은 호수 위를 날았다.', note: '비문 — 책상은 날 수 없음' },
          { en: 'The horse galloped across the field.', ko: '말은 들판을 질주했다.', note: '말은 질주할 수 있는 존재 → 성립' },
        ],
      },
      { type: 'heading', text: '사물 주어와 동사의 어울림' },
      {
        type: 'p',
        text: '사물도 마찬가지입니다. 기계나 자연물은 그것이 낼 수 있는 소리·움직임을 나타내는 동사와는 어울리지만, 생명체의 행위를 나타내는 동사와는 어울릴 수 없습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The engine roared to life.', ko: '엔진이 요란한 소리를 내며 작동했다.', note: '엔진은 큰 소리를 낼 수 있음 → 성립' },
          { en: '*The pillow roared to life.', ko: '베개가 요란한 소리를 내며 작동했다.', note: '비문 — 베개는 소리를 낼 수 없음' },
          { en: 'The volcano erupted violently.', ko: '화산이 격렬하게 폭발했다.', note: '화산은 폭발할 수 있는 대상 → 성립' },
          { en: '*The bookshelf erupted violently.', ko: '책장이 격렬하게 폭발했다.', note: '비문 — 책장은 폭발할 수 없음' },
          { en: 'The phone rang twice.', ko: '전화가 두 번 울렸다.', note: '전화는 울릴 수 있는 대상 → 성립' },
        ],
      },
      { type: 'heading', text: '사람 주어와 동사의 어울림' },
      {
        type: 'p',
        text: '사람은 대부분의 동사와 자연스럽게 어울리지만, 사람이 아닌 대상만 할 수 있는 동사나 사람이 할 수 없는 동사와는 어울릴 수 없습니다. 단, 시나 동화처럼 사물·자연물을 사람처럼 표현하는 "인격화(personification)" 기법이 쓰이는 경우는 예외적으로 허용됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She laughed at the joke.', ko: '그녀는 그 농담에 웃었다.', note: '성립' },
          { en: '*The moon laughed at the joke.', ko: '달이 그 농담에 웃었다.', note: '일반적으로 비문 (문학적 인격화 표현 제외)' },
          { en: 'He whispered a secret.', ko: '그는 비밀을 속삭였다.', note: '성립' },
          { en: '*The silence whispered a secret.', ko: '침묵이 비밀을 속삭였다.', note: '비문 — 침묵은 속삭일 수 없음' },
          { en: 'The teacher explained the rule.', ko: '선생님은 규칙을 설명했다.', note: '성립' },
        ],
      },
      {
        type: 'note',
        text: '정리하면, 주어는 동사가 나타내는 의미를 실제로 실현시킬 수 있는 대상이어야 합니다. 이것이 통하지 않으면 문법적으로 완벽해 보이는 문장도 비문이 됩니다.',
      },
      { type: 'heading', text: '동사도 주어를 가려서 쓰인다' },
      {
        type: 'p',
        text: '반대 방향에서 보면, 하나의 동사가 같은 의미로 여러 종류의 주어와 함께 쓰이지는 못합니다. 그런데 흥미로운 점은, 같은 동사라도 주어가 사람인지 사물인지에 따라 의미 자체가 살짝 달라지기도 한다는 것입니다. 즉 동사의 뜻은 주어에 맞춰 조정됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The wind blows steadily.', ko: '바람이 꾸준히 분다.', note: '바람 주어 + blow(불다) → 성립' },
          { en: '*He blows steadily.', ko: '그는 꾸준히 분다.', note: '비문 — 사람은 바람처럼 불 수 없음' },
          { en: 'He breathes steadily.', ko: '그는 꾸준히 숨을 쉰다.', note: '사람 주어에는 breathe(숨쉬다)가 어울림' },
          { en: 'He runs fast.', ko: '그는 빨리 달린다.', note: 'run = (사람이) 달리다' },
          { en: 'The river runs through the valley.', ko: '강은 계곡을 흐른다.', note: 'run = (강이) 흐르다 — 같은 동사, 주어에 따라 뜻이 달라짐' },
        ],
      },
      { type: 'heading', text: '문장은 반드시 주어로 시작한다' },
      {
        type: 'p',
        text: '영어는 위치 규칙도 엄격합니다. 아무리 주어와 동사가 의미적으로 잘 어울려도, 동사가 주어보다 앞에 나오는 평서문은 성립하지 않습니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*Lived he in the house.', ko: '산다 그는 그 집에', note: '비문 — 동사로 문장을 시작함' },
          { en: 'He lived in the house.', ko: '그는 그 집에 산다.', note: '올바른 문장 — 주어(He)로 시작' },
        ],
      },
      {
        type: 'transform',
        from: { label: '✗ 어순 오류', text: '*Lived he in the house.' },
        to: { label: '✓ 올바른 어순', text: 'He lived in the house.' },
        note: '평서문은 반드시 주어(S) 뒤에 동사(V)가 온다. 동사가 문장 맨 앞에 나올 수 없다.',
      },
      {
        type: 'transform',
        from: { label: '✗ 의미 불일치', text: '*The door slept.' },
        to: { label: '✓ 의미가 성립하는 주어로 교체', text: 'The cat slept.' },
        note: '문(door)은 잘 수 없는 대상이므로, 동사의 의미를 실현할 수 있는 주어(cat)로 바꿔야 문장이 성립한다.',
      },
      {
        type: 'callout',
        title: '핵심 정리',
        items: [
          '주어와 동사는 영어 문장에서 절대 빠질 수 없는 핵심 요소다.',
          '주어는 동사가 나타내는 의미를 실제로 실현시킬 수 있는 대상이어야 한다 (선택 제약).',
          '같은 동사도 주어의 종류(사람/동물/사물)에 따라 뜻이 조정될 수 있다.',
          '영어 평서문은 반드시 주어로 시작하며, 동사가 주어보다 앞에 올 수 없다.',
        ],
      },
    ],
  },

  'ch3-2': {
    title: '문장의 형식 (1~5형식)',
    blocks: [
      {
        type: 'p',
        text: '형식이란 문장을 구성하는 단어의 배열에 따라 분류한 문장 구조입니다. 한국에서는 대표적으로 영어 문장을 다섯 가지 형식으로 구분합니다. 모든 문장을 다섯 형식으로만 나눌 수는 없지만, 알아두면 문장을 이해하는 데 큰 도움이 됩니다. 형식을 배우는 진짜 목적은 암기가 아니라, "왜 이 문장에는 이 요소가 더 필요한가"를 이해하는 것입니다.',
      },
      {
        type: 'table',
        caption: '문장의 5형식',
        headers: ['형식', '구조'],
        rows: [
          ['1형식', '주어 + 동사'],
          ['2형식', '주어 + 동사 + 보어'],
          ['3형식', '주어 + 동사 + 목적어'],
          ['4형식', '주어 + 동사 + 목적어 + 목적어'],
          ['5형식', '주어 + 동사 + 목적어 + 목적격 보어'],
        ],
      },
      {
        type: 'icon-row',
        caption: '5형식 한눈에 보기',
        items: [
          { icon: '🚶', label: '1형식', sub: 'S+V' },
          { icon: '😊', label: '2형식', sub: 'S+V+C' },
          { icon: '🎯', label: '3형식', sub: 'S+V+O' },
          { icon: '🎁', label: '4형식', sub: 'S+V+O+O' },
          { icon: '🏷️', label: '5형식', sub: 'S+V+O+OC' },
        ],
      },

      { type: 'heading', text: '1형식: 주어 + 동사' },
      {
        type: 'p',
        text: '「주어+동사」로만 이루어진 가장 기본적인 구조입니다. 이 형식이 성립하려면 동사 하나만으로도 의미가 완결되어야 합니다. 즉, 동사가 "누구에게 무엇을" 같은 추가 정보 없이도 그 자체로 완전한 동작·상태를 나타낼 수 있어야 1형식이 가능합니다. 다만 「주어+동사」로만 이루어진 문장은 그만큼 단순한 의미밖에 전달할 수 없다는 한계도 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Humans walk.', ko: '사람은 걷는다.' },
          { en: 'Fish swim.', ko: '물고기는 헤엄친다.' },
          { en: 'The baby cried.', ko: '아기가 울었다.' },
          { en: 'She lives alone.', ko: '그녀는 혼자 산다.', note: 'alone이 동사 의미를 보충하지만 형식 구분상 1형식으로 봄' },
          { en: 'We depend on him.', ko: '우리는 그에게 의존한다.', note: 'on him이 동사 의미를 보충하지만 형식 구분상 1형식으로 봄' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '1형식',
        parts: [
          { tag: 'S', text: 'Fish' },
          { tag: 'V', text: 'swim' },
        ],
        translation: '물고기는 헤엄친다.',
      },
      {
        type: 'sentence-diagram',
        label: '1형식',
        parts: [
          { tag: 'S', text: 'The baby' },
          { tag: 'V', text: 'cried' },
        ],
        translation: '아기가 울었다.',
      },
      { type: 'heading', text: '헷갈리는 포인트 1: 자동사에는 전치사가 필요하다' },
      {
        type: 'p',
        text: '1형식 동사(자동사) 중에는 목적어를 바로 취할 것처럼 보이지만 실제로는 전치사가 있어야만 뒤에 명사를 연결할 수 있는 동사들이 있습니다. arrive, depend, listen 등이 대표적입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He arrived.', ko: '그는 도착했다.', note: '성립 — 동사만으로 의미 완결' },
          { en: '*He arrived the station.', ko: '그는 역에 도착했다.', note: '비문 — arrive는 자동사라 목적어를 바로 취할 수 없음' },
          { en: 'He arrived at the station.', ko: '그는 역에 도착했다.', note: '전치사 at을 붙여야 올바른 문장' },
        ],
      },

      { type: 'heading', text: '2형식: 주어 + 동사 + 보어' },
      {
        type: 'p',
        text: 'be동사는 "~이다/~있다"라는 뜻만 가질 뿐, 그 자체로는 주어가 어떤 상태인지 알려주지 못합니다. 그래서 주어의 성질·상태를 설명해주는 말인 보어(Complement)가 반드시 필요합니다. 명사나 형용사가 주어를 설명해줄 때 이를 주격보어라고 하며, be동사뿐 아니라 become, seem, look, feel, taste, smell, sound 같은 동사들도 2형식을 만듭니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She is pretty.', ko: '그녀는 예쁘다.' },
          { en: 'He is a student.', ko: '그는 학생이다.' },
          { en: 'My hobby is reading a book.', ko: '나의 취미는 책을 읽는 것이다.' },
          { en: 'He became a doctor.', ko: '그는 의사가 되었다.' },
          { en: 'This soup tastes salty.', ko: '이 수프는 짠 맛이 난다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '2형식',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'pretty' },
        ],
        translation: '그녀는 예쁘다. (pretty가 She를 보충 설명)',
      },
      {
        type: 'sentence-diagram',
        label: '2형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'became' },
          { tag: 'C', text: 'a doctor' },
        ],
        translation: '그는 의사가 되었다.',
      },
      { type: 'heading', text: '헷갈리는 포인트 2: 보어 자리에 부사를 쓰는 실수' },
      {
        type: 'p',
        text: '2형식 동사(특히 look, seem, feel, sound 등) 뒤에는 형용사 보어가 와야 합니다. 그런데 "동사를 꾸며야 하니 부사를 써야 한다"고 오해하는 경우가 많습니다. 하지만 이 자리는 동사를 꾸미는 자리가 아니라 주어의 상태를 설명하는 자리이므로 형용사가 와야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*He looks happily.', ko: '그는 행복하게 보인다.', note: '비문 — happily(부사)는 주어를 설명할 수 없음' },
          { en: 'He looks happy.', ko: '그는 행복해 보인다.', note: '성립 — happy(형용사)가 He를 설명' },
          { en: '*She seems nervously.', ko: '그녀는 긴장한 듯 보인다.', note: '비문' },
          { en: 'She seems nervous.', ko: '그녀는 긴장한 듯 보인다.', note: '성립' },
        ],
      },
      {
        type: 'transform',
        from: { label: '✗ 부사 보어 오류', text: '*He looks happily.' },
        to: { label: '✓ 형용사 보어', text: 'He looks happy.' },
        note: '2형식 보어 자리는 동사를 꾸미는 자리가 아니라 주어(He)의 상태를 설명하는 자리이므로 형용사가 와야 한다.',
      },

      { type: 'heading', text: '3형식: 주어 + 동사 + 목적어' },
      {
        type: 'p',
        text: 'be동사는 주어의 움직임·상태·발생을 표현하지 못하기 때문에, 일반 동사가 그 동작이 "누구를/무엇을" 향하는지 알려주는 목적어와 함께 쓰여 이를 표현합니다. 즉 목적어는 동사가 나타내는 행위가 미치는 대상을 밝혀주는 역할을 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She plays the piano.', ko: '그녀는 피아노를 친다.' },
          { en: 'He makes the cake.', ko: '그는 케이크를 만든다.' },
          { en: 'They read the book.', ko: '그들은 책을 읽는다.' },
          { en: 'He gave the mail to her.', ko: '그는 그녀에게 메일을 보냈다.', note: '전치사구가 붙은 3형식' },
          { en: 'They bought the book for the teacher.', ko: '그들은 선생님을 위해 책을 샀다.', note: '전치사구가 붙은 3형식' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3형식',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'plays' },
          { tag: 'O', text: 'the piano' },
        ],
        translation: '그녀는 피아노를 친다.',
      },
      {
        type: 'sentence-diagram',
        label: '3형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'gave' },
          { tag: 'O', text: 'the mail' },
          { tag: 'M', text: 'to her' },
        ],
        translation: '그는 그녀에게 메일을 보냈다. (전치사구 to her가 대상을 밝혀줌)',
      },

      { type: 'heading', text: '4형식: 주어 + 동사 + 목적어 + 목적어' },
      {
        type: 'p',
        text: '3형식의 "He gave the mail to her." 같은 문장은 전치사(to)의 도움이 있어야만 "누구에게"라는 의미를 정확히 전달할 수 있습니다. 4형식은 전치사 없이 목적어를 2개(사람-사물 순서) 나란히 놓아 같은 의미를 더 간결하게 표현합니다. 4형식 동사는 ‘~에게 ~을 주다’라는 뜻이라 수여동사라고도 부르며, 그 의미 자체가 "받는 대상"과 "주는 대상" 두 가지 정보를 요구하기 때문에 목적어가 2개 필요합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He makes her the cake.', ko: '그는 그녀에게 케이크를 만들어 주었다.' },
          { en: 'They bought teachers the book.', ko: '그들은 선생님들에게 책을 사 주었다.' },
          { en: 'She gave him a letter.', ko: '그녀는 그에게 편지를 주었다.' },
          { en: 'He told her a story.', ko: '그는 그녀에게 이야기를 해주었다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'makes' },
          { tag: 'O1', text: 'her' },
          { tag: 'O2', text: 'the cake' },
        ],
        translation: '그는 그녀에게 케이크를 만들어 주었다. (사람 목적어 → 사물 목적어 순서)',
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'told' },
          { tag: 'O1', text: 'her' },
          { tag: 'O2', text: 'a story' },
        ],
        translation: '그는 그녀에게 이야기를 해주었다.',
      },
      { type: 'heading', text: '헷갈리는 포인트 3: 3형식과 4형식은 서로 바꿔 쓸 수 있다' },
      {
        type: 'p',
        text: '같은 의미를 3형식(목적어+전치사구)으로도, 4형식(목적어 2개)으로도 표현할 수 있습니다. 이때 전치사를 빼야 할지 살려야 할지 헷갈리기 쉬우므로, 두 형식을 나란히 비교해서 기억해두는 것이 좋습니다.',
      },
      {
        type: 'transform',
        from: { label: '3형식 (전치사 필요)', text: 'He gave the mail to her.' },
        to: { label: '4형식 (전치사 없이 목적어 2개)', text: 'He gave her the mail.' },
        note: '사물 목적어를 앞으로 옮기면 전치사(to)가 필요하고, 사람 목적어를 앞으로 옮기면 전치사가 사라진다.',
      },

      { type: 'heading', text: '5형식: 주어 + 동사 + 목적어 + 목적격 보어' },
      {
        type: 'p',
        text: '3형식과 4형식의 목적어는 모두 동사가 향하는 "대상"만 나타낼 뿐, 그 대상이 어떤 상태가 되었는지·무엇으로 불리는지·무엇을 하게 되었는지는 알려주지 못합니다. 목적어의 상태·정체·행위를 보충 설명해줄 말이 하나 더 필요한 경우, 그 자리에 목적격 보어가 들어갑니다. 명사, 형용사, 동사원형, to부정사, 분사 등이 목적격 보어로 쓰일 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'We call him Tom.', ko: '우리는 그를 Tom이라고 부른다.', note: 'Tom이 him을 보충 설명(명사)' },
          { en: 'This news makes me happy.', ko: '이 소식은 나를 행복하게 만든다.', note: 'happy가 me를 보충 설명(형용사)' },
          { en: 'He made her study English.', ko: '그는 그녀가 영어공부를 하도록 했다.', note: 'study가 her를 보충 설명(동사원형)' },
          { en: 'I thought him to be a dumb.', ko: '나는 그가 바보라고 생각한다.', note: 'to be a dumb이 him을 보충 설명(to부정사)' },
          { en: 'I saw him crossing the street.', ko: '나는 그가 길을 건너는 것을 보았다.', note: 'crossing이 him을 보충 설명(분사)' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식',
        parts: [
          { tag: 'S', text: 'We' },
          { tag: 'V', text: 'call' },
          { tag: 'O', text: 'him' },
          { tag: 'OC', text: 'Tom' },
        ],
        translation: '우리는 그를 Tom이라고 부른다. (Tom이 him을 보충 설명)',
      },
      {
        type: 'sentence-diagram',
        label: '5형식',
        parts: [
          { tag: 'S', text: 'This news' },
          { tag: 'V', text: 'makes' },
          { tag: 'O', text: 'me' },
          { tag: 'OC', text: 'happy' },
        ],
        translation: '이 소식은 나를 행복하게 만든다.',
      },
      {
        type: 'sentence-diagram',
        label: '5형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'made' },
          { tag: 'O', text: 'her' },
          { tag: 'OC', text: 'study English' },
        ],
        translation: '그는 그녀가 영어공부를 하도록 했다.',
      },
      { type: 'heading', text: '헷갈리는 포인트 4: 목적격 보어의 형태는 동사에 따라 다르다' },
      {
        type: 'p',
        text: 'make, have, let 같은 사역동사는 목적격 보어로 동사원형을 쓰는데, 여기에 to를 붙이면 틀린 문장이 됩니다. 반면 want, ask, tell처럼 "부탁·요청"의 의미를 가진 동사는 목적격 보어로 반드시 to부정사를 씁니다. 두 그룹을 섞어 쓰는 것이 가장 흔한 실수입니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*He made her to study English.', ko: '그는 그녀가 영어공부를 하도록 했다.', note: '비문 — 사역동사 make는 to 없이 동사원형을 씀' },
          { en: 'He made her study English.', ko: '그는 그녀가 영어공부를 하도록 했다.', note: '성립' },
          { en: 'He wants her to study English.', ko: '그는 그녀가 영어공부를 하기를 원한다.', note: '성립 — want는 to부정사를 씀' },
          { en: '*He wants her study English.', ko: '그는 그녀가 영어공부를 하기를 원한다.', note: '비문 — want는 동사원형을 목적격보어로 쓸 수 없음' },
        ],
      },
      {
        type: 'transform',
        from: { label: '✗ 사역동사 + to부정사', text: '*He made her to study English.' },
        to: { label: '✓ 사역동사 + 동사원형', text: 'He made her study English.' },
        note: 'make, have, let 뒤의 목적격 보어는 to 없는 동사원형(원형부정사)을 쓴다.',
      },

      {
        type: 'callout',
        title: '3장 핵심 정리',
        items: [
          '주어와 동사는 영어 문장에서 절대 빠질 수 없는 핵심 요소이며, 주어는 동사의 의미를 실현시킬 수 있는 대상이어야 한다.',
          '문장의 5형식: S+V / S+V+C / S+V+O / S+V+O+O / S+V+O+O.C',
          '2형식 보어 자리에는 부사가 아닌 형용사(또는 명사)가 온다 — He looks happy. (○) / He looks happily. (✗)',
          '3형식(전치사+명사)과 4형식(목적어 2개)은 같은 의미를 다른 구조로 표현할 수 있다.',
          '목적격 보어의 형태는 동사에 따라 달라진다 — 사역동사는 동사원형, want류는 to부정사.',
        ],
      },
    ],
  },
}
