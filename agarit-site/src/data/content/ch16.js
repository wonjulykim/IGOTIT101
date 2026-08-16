export const ch16 = {
  'ch16-1': {
    title: '수여동사',
    blocks: [
      {
        type: 'p',
        text: '‘수여’는 ‘누군가에게 어떤 것을 준다’는 뜻입니다. 수여동사는 말 그대로 ‘누군가에게 어떤 것을 준다’는 의미를 가진 동사들(give, send, bring, make, buy, show, tell 등)을 가리킵니다. 이 장에서는 수여동사가 왜 목적어를 두 개나 필요로 하는지, 그리고 그 문장이 전치사를 이용해 다른 모습으로도 바뀔 수 있다는 것을 원리부터 살펴보겠습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He made the children dinner.', ko: '그는 그 아이들에게 저녁 식사를 만들어 주었다.' },
          { en: 'Tom is sending Peter an email.', ko: 'Tom은 Peter에게 이메일을 보내는 중이다.' },
          { en: 'David showed us his photos.', ko: 'David는 우리에게 그의 사진을 보여 주었다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'made' },
          { tag: 'O1', text: 'the children' },
          { tag: 'O2', text: 'dinner' },
        ],
        translation: '그는 그 아이들에게 저녁 식사를 만들어 주었다.',
      },
      { type: 'heading', text: '수여동사의 두 목적어: 간접목적어와 직접목적어' },
      {
        type: 'p',
        text: '수여동사는 목적어를 2개 가집니다. ‘누군가에게 무엇을 준다’는 뜻이니 당연히 ‘물건을 줄 사람’과 ‘줄 물건’ 두 가지 정보가 필요합니다. 이 두 목적어를 각각 간접목적어(사람)와 직접목적어(사물)라고 부르기도 하지만, 이름 자체보다는 **‘사람이 먼저, 사물이 나중’이라는 순서**가 더 중요합니다.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'David' },
          { tag: 'V', text: 'showed' },
          { tag: 'O1', text: 'us' },
          { tag: 'O2', text: 'his photos' },
        ],
        translation: 'David는 우리에게 그의 사진을 보여 주었다. (사람 O1 → 사물 O2 순서)',
      },
      {
        type: 'note',
        text: '왜 순서가 ‘사람 → 사물’일까요? 영어는 짧고 이미 알려진(구체적이지 않은) 정보를 앞에, 길고 새로운 정보를 뒤에 두는 경향이 있습니다. 대화에서 ‘받는 사람’은 대개 이미 대화에 등장한 인물(대명사 us, me, him 등)인 경우가 많고, ‘주는 물건’은 그 문장에서 새롭게 제시되는 정보인 경우가 많기 때문에 사람이 먼저 나옵니다.',
      },
      { type: 'heading', text: '왜 목적어가 두 개 필요한가 — 3형식과의 비교' },
      {
        type: 'p',
        text: '아래 두 문장을 비교해 봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She sent a birthday card.', ko: '그녀는 생일 카드를 보냈다.', note: '누구에게 보냈는지 정보가 없음' },
          { en: 'She sent me a birthday card.', ko: '그녀는 나에게 생일 카드를 보냈다.', note: '수여동사 구조로 받는 사람(me)까지 표현' },
        ],
      },
      {
        type: 'p',
        text: '첫 번째 문장에는 ‘생일 카드를 보냈다’는 정보만 있고 누구에게 보냈는지는 나타나 있지 않습니다. ‘누구’에 해당하는 정보를 제공하기 위해 수여동사를 사용하면, 생일 카드를 누구에게 보냈는지에 대한 정보까지 한 문장(S+V+O1+O2)에 함께 나타낼 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 친구가 생일 선물을 준비 중이라며 자랑한다.', note: '문맥' },
          { en: 'A: What did you get her? B: I bought her a scarf.', ko: 'A: 그녀에게 뭐 사줬어? B: 나는 그녀에게 스카프를 사줬어.', note: '대화에서 받는 사람과 물건이 한 문장에 함께 필요한 상황' },
        ],
      },
      { type: 'heading', text: '전치사를 이용한 3형식 전환' },
      {
        type: 'p',
        text: '4형식 문장은 전치사를 사용해 3형식으로 바꿀 수도 있습니다. **이때 직접목적어(사물)를 동사 뒤에 두고, 간접목적어(사람) 앞에 전치사를 붙여 문장 끝으로 보냅니다.**',
      },
      {
        type: 'transform',
        from: [{ label: '4형식 (S+V+O1+O2)', text: 'He gave her a book.' }],
        to: { label: '3형식 (S+V+O+전치사구)', text: 'He gave a book to her.' },
        note: '간접목적어(her)가 동사 바로 뒤 자리를 떠나 전치사 to와 함께 문장 끝으로 이동한다',
      },
      {
        type: 'example',
        items: [
          { en: 'She sent a birthday card to me.', ko: '그녀는 생일 카드를 나에게 보냈다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3형식 전환',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'sent' },
          { tag: 'O', text: 'a birthday card' },
          { tag: 'M', text: 'to me' },
        ],
        translation: '그녀는 생일 카드를 나에게 보냈다. (to me가 받는 사람을 강조)',
      },
      { type: 'heading', text: '4형식과 3형식, 같은 정보 다른 강조점' },
      {
        type: 'note',
        text: '"She sent me a birthday card."와 "She sent a birthday card to me."는 같은 사실을 전달하지만 강조점이 다릅니다. 3형식으로 바꾼 문장은 받는 사람(me)을 문장 끝에 두어 ‘누가 받는지’를 강조합니다. 영어는 새롭고 강조하고 싶은 정보를 문장 뒤쪽에 두는 경향이 있기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 여러 명에게 선물을 나눠준 상황에서 ‘내가 무엇을 받았는지’가 중요한 대화', note: '문맥 1 — 물건이 초점' },
          { en: 'He gave me a scarf, and gave my sister a wallet.', ko: '그는 나에게는 스카프를, 내 여동생에게는 지갑을 주었다.', note: '4형식: 받는 사람은 이미 알려져 있고, 무엇을 받았는지(물건)가 새 정보' },
          { en: 'context: 선물을 준비했는데 ‘그것을 누구에게 줬는지’가 궁금한 대화', note: '문맥 2 — 받는 사람이 초점' },
          { en: 'A: Who did you give the concert tickets to? B: I gave the tickets to my little brother.', ko: 'A: 그 콘서트 표를 누구에게 줬어? B: 나는 그 표를 내 남동생에게 줬어.', note: '3형식: 물건(the tickets)은 이미 알려져 있고, 누구에게 줬는지(사람)가 새 정보라 문장 끝에 옴' },
        ],
      },
      { type: 'heading', text: '동사의 의미에 따라 달라지는 전치사 — to와 for' },
      {
        type: 'p',
        text: '4형식을 3형식으로 바꿀 때 모든 동사가 같은 전치사를 쓰는 것은 아닙니다. 동사의 의미에 따라 사용되는 전치사도 달라집니다. **전치사 to는 단순한 물건의 이동(전달)을 나타내는 동사에, 전치사 for는 정성·노력·시간·돈을 들여 마련해 주는 동사**에 쓰입니다.',
      },
      {
        type: 'table',
        caption: '수여동사와 3형식 전환 시 전치사',
        headers: ['전치사', '행위의 성격', '동사'],
        rows: [
          ['to', '이미 존재하는 물건이 사람에게 단순히 옮겨감(전달·이동)', 'give, bring, send, teach, lend, tell, show 등'],
          ['for', '받는 사람을 위해 정성·노력·시간·돈을 들여 마련함', 'make, cook, buy 등'],
        ],
      },
      {
        type: 'icon-row',
        caption: '전치사로 보는 동사의 어감',
        items: [
          { icon: '🚚', label: 'to', sub: '전달 · give / tell / show' },
          { icon: '🎁', label: 'for', sub: '마련해줌 · buy / make' },
        ],
      },
      {
        type: 'p',
        text: '왜 두 가지로 나뉠까요? give, tell, show류는 이미 존재하는 것(물건, 정보, 모습)을 상대방 쪽으로 ‘이동’시키는 동사입니다. 이동에는 방향이 있으므로 방향을 나타내는 전치사 to가 자연스럽습니다. 반면 make, cook, buy류는 물건이 원래부터 있던 것이 아니라 ‘그 사람을 위해서’ 새로 만들어내거나 마련하는 행위입니다. 여기서 핵심은 이동이 아니라 ‘누구를 위한 것인가’이므로, 목적·수혜를 나타내는 전치사 for가 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 아이가 잠들기 전, 아빠가 인사를 하는 상황', note: '문맥 — give (전달)' },
          { en: 'He gave me a good-night kiss.', ko: '그는 나에게 잘 자라는 뽀뽀를 해 주었다.' },
          { en: 'He gave a good-night kiss to me.', ko: '그는 잘 자라는 뽀뽀를 나에게 해 주었다.', note: 'kiss라는 행위 자체가 그대로 나에게 전달됨 → to' },
          { en: 'context: 아들의 생일을 맞아 선물을 준비한 상황', note: '문맥 — buy (마련·수혜)' },
          { en: 'He bought his son a present.', ko: '그는 그의 아들에게 선물을 사 주었다.' },
          { en: 'He bought a present for his son.', ko: '그는 선물을 그의 아들을 위해 사 주었다.', note: '아들을 위해 없던 선물을 마련함 → for' },
          { en: 'context: 손님을 위해 저녁 식사를 요리한 상황', note: '문맥 — cook (마련·수혜)' },
          { en: 'She cooked her guests a wonderful meal.', ko: '그녀는 손님들에게 훌륭한 식사를 만들어 주었다.' },
          { en: 'She cooked a wonderful meal for her guests.', ko: '그녀는 훌륭한 식사를 손님들을 위해 만들었다.', note: '정성과 시간이 들어간 요리를 손님을 위해 준비 → for' },
        ],
      },
      {
        type: 'note',
        text: 'to는 물건이 단순히 사람에게 옮겨가는 것만을 나타내지만, for는 그 물건을 준비하는 데 들어간 정성·노력·시간·돈까지 함께 나타냅니다. 그래서 **make, cook, buy처럼 무언가를 만들거나 마련해서 주는 동사들은 for를 사용**합니다.',
      },
      { type: 'heading', text: '흔히 하는 실수 — 직접목적어가 대명사일 때' },
      {
        type: 'p',
        text: '직접목적어(사물)가 it, them처럼 이미 알려진 대명사일 경우, **4형식(S+V+사람+대명사) 순서로 쓰면 매우 부자연스럽거나 틀린 문장**이 됩니다. 대명사는 이미 알고 있는 짧고 가벼운 정보이므로, 문장의 무게 중심을 맨 끝에 두는 영어의 습성상 오히려 동사 바로 뒤에 붙어야 하고, 사람은 전치사와 함께 뒤로 이동해야 자연스럽습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 친구가 빌려달라고 한 책을 건네주면서', note: '문맥' },
          { en: '*He gave her it.', ko: '(어색한 표현)', note: '대명사 it이 직접목적어인 4형식 — 원어민이 거의 쓰지 않는 어색한 배열' },
          { en: 'He gave it to her.', ko: '그는 그것을 그녀에게 주었다.', note: '대명사 it은 동사 뒤에, 사람은 to와 함께 뒤로 — 올바른 표현' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3형식 (직접목적어가 대명사일 때)',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'gave' },
          { tag: 'O', text: 'it' },
          { tag: 'M', text: 'to her' },
        ],
        translation: '그는 그것을 그녀에게 주었다. (대명사 it은 동사 바로 뒤, 사람은 전치사와 함께 뒤로)',
      },
      {
        type: 'note',
        text: '정리하면, 직접목적어가 명사(a book, a present 등)일 때는 "S+V+사람+사물" 4형식과 "S+V+사물+전치사+사람" 3형식이 모두 자연스럽지만, **직접목적어가 대명사(it, them)일 때는 3형식(S+V+it/them+전치사+사람)만 쓰는 것이 원칙**입니다. 대명사처럼 가볍고 이미 알려진 정보는 문장 뒤쪽 무거운 자리로 보내지 않는다는 영어의 일반적인 정보 배치 습성과 같은 원리입니다.',
      },
      {
        type: 'callout',
        title: '16장 핵심 정리',
        items: [
          '수여동사(give, send, bring, make, buy, show, tell 등)는 ‘누군가에게 무엇을 준다’는 뜻으로, 목적어를 2개(간접목적어=사람, 직접목적어=사물) 갖는 4형식 문장을 만든다.',
          '4형식 구조: S + V + O1(사람) + O2(사물). 사람이 먼저 오는 것은 대개 이미 알려진 정보이기 때문이다.',
          '4형식은 전치사를 이용해 3형식(S + V + O + 전치사구)으로 바꿀 수 있고, 이때 사람이 문장 끝으로 이동해 ‘누구에게’가 강조된다. 반대로 4형식은 ‘무엇을’ 주었는지를 강조한다.',
          '전치사는 동사가 나타내는 행위의 성격을 반영한다: give·bring·send·teach·lend·tell·show(있는 것을 그대로 전달)는 to, make·cook·buy(없던 것을 마련해 줌)는 for를 쓴다.',
          '직접목적어가 it/them 같은 대명사일 때는 4형식(*He gave her it.)이 아니라 3형식(He gave it to her.)을 써야 한다.',
        ],
      },
    ],
  },
}
