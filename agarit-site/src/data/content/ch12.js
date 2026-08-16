export const ch12 = {
  'ch12-1': {
    title: 'What 감탄문과 How 감탄문',
    blocks: [
      { type: 'heading', text: '감탄문이란' },
      {
        type: 'p',
        text: '감탄문이란 어떠한 상황에 대한 놀람이나 감탄을 나타내는 문장입니다. 우리말의 "우와, 정말 멋져!", "정말 예쁘다!" 같은 표현에 해당합니다. 영어에서는 What과 How라는 두 가지 감탄사를 사용해 감탄문을 만듭니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'What a nice car it is!', ko: '정말 멋진 자동차야!' },
          { en: 'How beautiful she is!', ko: '그녀는 정말 아름다워!' },
        ],
      },
      {
        type: 'note',
        text: '두 감탄문은 일반적인 영어 어순과 다릅니다. **주어-동사(it is, she is)가 문장 끝에 위치하고, What과 How가 문장 맨 앞에 옵니다.** 즉 평서문에서 동사 뒤에 있던 요소가 문장 앞으로 튀어나오고, 그 자리를 대신해 감탄사가 서 있는 구조입니다.',
      },

      { type: 'heading', text: 'What 감탄문이 만들어지는 과정' },
      {
        type: 'p',
        text: '길을 지나가다 멋진 자동차를 보았을 때 느낀 감탄을 표현하는 여러 방법을 통해 What 감탄문이 어떻게 만들어지는지 단계별로 살펴봅시다. 출발점은 평범한 문장 "It is a nice car!"입니다. 이 문장을 그대로 크게 소리 내어 말하는 것만으로도 감탄을 나타낼 수 있습니다.',
      },
      {
        type: 'transform',
        from: { label: '1단계 · 크게 말하기', text: 'It is a nice car!' },
        to: { label: '2단계 · 강조어 이동', text: 'A nice car, it is!' },
        note: '강조하고 싶은 대상인 a nice car를 문장 맨 앞으로 옮깁니다. 아직 감탄사는 없고, 어순만 뒤바뀐 상태입니다.',
      },
      {
        type: 'transform',
        from: { label: '2단계 · 강조어 이동', text: 'A nice car, it is!' },
        to: { label: '3단계 · What 추가', text: 'What a nice car it is!' },
        note: '앞으로 옮겨진 명사구 바로 앞에 감탄사 What을 붙입니다. What은 뒤에 오는 명사(구)와 그 명사가 속한 감탄 상황 전체를 가리킵니다.',
      },
      {
        type: 'transform',
        from: { label: '3단계 · What 감탄문(완전형)', text: 'What a nice car it is!' },
        to: { label: '4단계 · 주어-동사 생략', text: 'What a nice car!' },
        note: '말하는 사람과 듣는 사람이 it is가 가리키는 대상(자동차)을 이미 공유하고 있다면, 문맥상 필요 없는 it is를 생략할 수 있습니다.',
      },
      {
        type: 'p',
        text: '이 네 단계를 정리하면, ① 문장을 그대로 크게 말해서 감탄을 표현할 수도 있고(예: "It is a nice car!"), ② 강조하려는 명사구를 문장 앞으로 옮기고, ③ 그 앞에 What을 붙여 감탄사로 명시하고, ④ 상황이 공유되어 있다면 주어-동사를 지우는 순서로 감탄문이 다듬어집니다.',
      },
      {
        type: 'note',
        text: '감탄문은 반드시 말하는 사람과 듣는 사람이 상황을 공유하는 맥락 안에서 쓰입니다. What은 단순한 감탄사가 아니라 그 공유된 상황 전체를 받는 역할을 합니다. 상대방이 나의 상황을 모르는데 나 혼자 "What a nice car it is!"를 말하면 상대방은 "갑자기 저 사람이 왜 저러지?"라고 밖에 생각하지 못합니다.',
      },

      { type: 'heading', text: 'How 감탄문이 만들어지는 과정' },
      {
        type: 'p',
        text: 'How는 형용사나 부사를 꾸며주는 감탄사로 쓰여 "정말로"라는 뜻을 더합니다. "그녀는 아름답다"는 평서문을 통해 How 감탄문이 만들어지는 과정을 같은 방식으로 살펴봅시다.',
      },
      {
        type: 'transform',
        from: { label: '1단계 · 평서문', text: 'She is beautiful!' },
        to: { label: '2단계 · 강조어 이동', text: 'Beautiful, she is!' },
        note: '강조하고 싶은 형용사 beautiful을 문장 맨 앞으로 옮깁니다. What 감탄문과 달리 여기서는 명사(she)가 아니라 형용사만 이동합니다.',
      },
      {
        type: 'transform',
        from: { label: '2단계 · 강조어 이동', text: 'Beautiful, she is!' },
        to: { label: '3단계 · How 추가', text: 'How beautiful she is!' },
        note: '앞으로 옮겨진 형용사 바로 앞에 감탄사 How를 붙입니다.',
      },
      {
        type: 'transform',
        from: { label: '3단계 · How 감탄문(완전형)', text: 'How beautiful she is!' },
        to: { label: '4단계 · 주어-동사 생략', text: 'How beautiful!' },
        note: '말하는 사람과 듣는 사람이 she가 누구인지 이미 알고 있다면, 문맥상 필요 없는 she is를 생략할 수 있습니다.',
      },
      {
        type: 'p',
        text: '주어-동사(she is)는 감탄문의 핵심이 아니라 "누가 그런지"를 알려주는 부가 정보에 가깝습니다. **감탄의 핵심은 how 뒤에 오는 형용사·부사**이므로, 그 대상이 문맥에서 충분히 유추되면 주어-동사는 자연스럽게 생략됩니다.',
      },

      { type: 'heading', text: 'What과 How, 왜 다른 것을 강조할까' },
      {
        type: 'p',
        text: '**What 감탄문과 How 감탄문의 근본적인 차이는 "무엇을 강조하는가"에 있습니다.** What은 명사(구)를 강조하는 감탄사이므로 명사가 반드시 문장에 남아 있어야 합니다. 반면 How는 형용사나 부사만을 강조하는 감탄사이므로, 그 형용사가 원래 꾸며주던 명사는 통째로 함께 이동하지 않고 문장 뒤(주어 자리)에 남거나 생략됩니다.',
      },
      {
        type: 'icon-row',
        caption: 'What 감탄문 vs How 감탄문, 강조하는 대상',
        items: [
          { icon: '📦', label: 'What 감탄문', sub: '명사(구) 강조' },
          { icon: '✨', label: 'How 감탄문', sub: '형용사·부사 강조' },
        ],
      },
      {
        type: 'table',
        caption: 'What 감탄문과 How 감탄문의 구조 비교',
        headers: ['구분', '형태', '강조 대상', '명사의 위치', '예문'],
        rows: [
          ['What 감탄문', 'What (+a/an)+형용사+명사(+주어+동사)!', '명사(구) 전체', '감탄사 바로 뒤에 명사가 포함되어 이동', 'What a nice car (it is)!'],
          ['How 감탄문', 'How+형용사/부사(+주어+동사)!', '형용사·부사만', '명사는 이동하지 않고 뒤의 주어로 남음', 'How nice the car is!'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'What a nice car it is!', ko: '정말 멋진 자동차야!', note: '명사 car가 감탄사 What과 함께 앞으로 이동' },
          { en: 'How nice the car is!', ko: '그 자동차는 정말 멋지구나!', note: '명사 car는 이동하지 않고 뒤에서 주어로 남음(형용사 nice만 이동)' },
        ],
      },
      {
        type: 'note',
        text: '같은 상황("그 자동차가 멋지다")도 강조하려는 대상에 따라 What 감탄문 또는 How 감탄문으로 서로 다르게 표현할 수 있습니다. 명사구 전체("a nice car")를 감탄의 대상으로 삼으면 What, 형용사("nice")만을 감탄의 대상으로 삼으면 How를 씁니다.',
      },

      { type: 'heading', text: '문맥 속에서 감탄문 익히기' },
      {
        type: 'p',
        text: '감탄문은 항상 구체적인 상황 속에서 튀어나오는 말입니다. 아래 예문들을 상황과 함께 읽어봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'What a beautiful day it is!', ko: '(맑게 갠 하늘을 올려다보며) 정말 아름다운 날이야!' },
          { en: 'What an interesting story!', ko: '(친구의 여행 이야기를 듣고) 정말 재미있는 이야기다!' },
          { en: 'What tall buildings they are!', ko: '(도심의 고층 빌딩들을 보며) 정말 높은 건물들이네!' },
          { en: 'What nice weather we are having!', ko: '(소풍날 날씨를 보며) 우리 정말 날씨 좋다!' },
          { en: 'What a mess this room is!', ko: '(어질러진 방문을 열며) 이 방 정말 엉망이네!' },
          { en: 'How fast he runs!', ko: '(달리기 시합을 보며) 그는 정말 빨리 달려!' },
          { en: 'How kind you are!', ko: '(도움을 받고서) 너는 정말 착하구나!' },
          { en: 'How cold it is today!', ko: '(밖에 나갔다가 들어와서) 오늘 정말 춥다!' },
          { en: 'How quickly time flies!', ko: '(옛 사진을 보며) 시간이 정말 빠르게 흐르는구나!' },
          { en: 'How well she sings!', ko: '(공연을 보고 나서) 그녀는 노래를 정말 잘하는구나!' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'What 감탄문 — 완전형',
        parts: [
          { tag: 'Exc', text: 'What a beautiful day' },
          { tag: 'S', text: 'it' },
          { tag: 'V', text: 'is' },
        ],
        translation: 'What a beautiful day it is! (감탄의 대상인 명사구 a beautiful day가 What과 함께 문장 맨 앞으로 이동)',
      },
      {
        type: 'sentence-diagram',
        label: 'How 감탄문 — 일반동사와 함께',
        parts: [
          { tag: 'Exc', text: 'How fast' },
          { tag: 'S', text: 'he' },
          { tag: 'V', text: 'runs' },
        ],
        translation: 'How fast he runs! (be동사가 아닌 일반동사 runs 앞에서도 형용사·부사만 How와 함께 이동)',
      },

      { type: 'heading', text: '주어-동사가 통째로 사라지는 구어체 표현' },
      {
        type: 'p',
        text: '실제 대화에서는 감탄문의 주어-동사뿐 아니라, 아예 처음부터 주어-동사 없이 짧게 던지는 표현이 훨씬 자주 쓰입니다. 상황이 눈앞에 있어 주어와 동사를 말할 필요조차 없기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'What a nice day!', ko: '날씨 정말 좋다!', note: '날씨를 보며 던지는 짧은 감탄, it is 없이도 자연스러움' },
          { en: 'What a surprise!', ko: '정말 놀랍다!', note: '예상 못한 소식을 듣고 즉각 반응할 때' },
          { en: 'What a shame!', ko: '정말 안타깝다!', note: '안타까운 소식에 대한 반응, 완전한 문장 없이도 통용되는 관용 표현' },
          { en: 'How nice!', ko: '정말 좋다!', note: '상대의 말에 짧게 맞장구칠 때' },
          { en: 'How awful!', ko: '정말 끔찍하다!', note: '나쁜 소식에 대한 짧은 반응' },
        ],
      },
      {
        type: 'note',
        text: '"What a nice day!", "How nice!"처럼 **주어-동사가 전혀 없는 짧은 감탄사는 대화에서 매우 흔히 쓰이는 구어체 표현**입니다. 이런 표현들은 굳이 "it is"나 "that is"를 채워 넣지 않아도 관용적으로 통용되며, 오히려 완전한 문장을 매번 쓰면 부자연스럽게 들릴 수 있습니다.',
      },

      { type: 'heading', text: 'What 감탄문 vs How 감탄문 정리' },
      {
        type: 'table',
        caption: 'What 감탄문과 How 감탄문의 구조 비교',
        headers: ['구분', '형태', '꾸며주는 대상', '예문'],
        rows: [
          ['What 감탄문', 'What (+a/an)+형용사+명사(+주어+동사)!', '명사(구)', 'What a nice car (it is)!'],
          ['How 감탄문', 'How+형용사/부사(+주어+동사)!', '형용사·부사', 'How beautiful (she is)!'],
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'What 감탄문',
        parts: [
          { tag: 'Exc', text: 'What a nice car' },
          { tag: 'S', text: 'it' },
          { tag: 'V', text: 'is' },
        ],
        translation: 'What a nice car it is! (감탄의 대상인 명사구가 문장 맨 앞으로 이동)',
      },
      {
        type: 'sentence-diagram',
        label: 'How 감탄문',
        parts: [
          { tag: 'Exc', text: 'How beautiful' },
          { tag: 'S', text: 'she' },
          { tag: 'V', text: 'is' },
        ],
        translation: 'How beautiful she is! (감탄의 대상인 형용사가 문장 맨 앞으로 이동)',
      },
      {
        type: 'note',
        text: 'What 뒤에는 명사가 오므로 명사가 단수 가산명사이면 a/an을 반드시 붙입니다(What a nice car!). 명사가 복수이거나 불가산명사이면 a/an을 붙이지 않습니다(What tall buildings!, What nice weather!). How 뒤에는 명사 없이 형용사나 부사만 옵니다.',
      },

      { type: 'heading', text: '학습자가 자주 틀리는 지점' },
      {
        type: 'p',
        text: 'What 감탄문과 How 감탄문을 헷갈려서 생기는 실수는 대부분 두 가지 유형으로 나뉩니다. 아래에서 틀린 문장과 올바른 문장을 나란히 비교해봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: '✗ What car nice it is!', ko: '단수 가산명사 car 앞에 a를 빠뜨림', note: '올바른 문장: What a nice car it is! — 명사가 단수 가산명사이면 반드시 a/an을 붙입니다.' },
          { en: '✗ What interesting story!', ko: '단수 가산명사 story 앞에 an을 빠뜨림', note: '올바른 문장: What an interesting story! — story는 모음 소리로 시작하는 형용사(interesting) 뒤에 오므로 an을 씁니다.' },
          { en: '✗ How a beautiful car it is!', ko: 'How 감탄문에 a/an을 잘못 붙임', note: '올바른 문장: How beautiful the car is! — How 뒤에는 관사가 올 수 없고 형용사/부사만 옵니다.' },
          { en: '✗ How beautiful car it is!', ko: 'How 감탄문에 명사를 남겨 형용사 뒤에 붙여버림', note: '올바른 문장: How beautiful the car is! — How 감탄문에서 명사(car)는 형용사와 함께 앞으로 이동하지 않고 뒤의 주어 자리에 남아야 합니다.' },
        ],
      },
      {
        type: 'note',
        text: '정리하면 두 가지 실수가 대표적입니다. (1) What 감탄문에서 단수 가산명사 앞에 a/an을 빠뜨리는 것, (2) How 감탄문에서 명사를 형용사와 함께 앞으로 끌고 가버려 "How + 형용사 + 명사" 형태로 잘못 만드는 것입니다. **How는 형용사·부사만 강조하므로 명사는 절대 How 바로 뒤에 붙을 수 없다**는 점을 기억하세요.',
      },

      {
        type: 'callout',
        title: '12장 핵심 정리',
        items: [
          '감탄문은 놀람·감탄을 나타내며, What과 How 두 가지 방식으로 만든다.',
          'What 감탄문: What (+a/an)+형용사+명사(+주어+동사)! — 명사(구) 전체를 강조하며, 명사가 감탄사와 함께 앞으로 이동한다.',
          'How 감탄문: How+형용사/부사(+주어+동사)! — 형용사나 부사만 강조하며, 명사는 이동하지 않고 뒤에 주어로 남는다(How beautiful the car is!).',
          '만드는 순서: ① 강조하고 싶은 요소를 문장 맨 앞으로 옮긴다 → ② 그 앞에 What 또는 How를 붙인다 → ③ 상황이 공유되어 있으면 문장 끝의 주어-동사를 생략한다.',
          '자주 하는 실수: What 감탄문에서 단수 가산명사 앞 a/an 빠뜨리기, How 감탄문에 명사를 남겨두어 "How + 형용사 + 명사" 형태로 잘못 만들기.',
          '구어체에서는 "What a nice day!", "How nice!"처럼 주어-동사 없이 짧게 쓰는 표현도 매우 흔하다.',
        ],
      },
    ],
  },
}
