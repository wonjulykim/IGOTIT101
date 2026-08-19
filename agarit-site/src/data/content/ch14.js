export const ch14 = {
  'ch14-1': {
    title: '동명사의 형태와 명사 역할',
    blocks: [
      { type: 'heading', text: '동명사란 무엇인가: 동사를 명사로 바꾸는 장치' },
      {
        type: 'p',
        text: '동명사는 말 그대로 **동사가 명사화된 것**입니다. 동사원형에 to를 붙여 만든 to부정사가 "동사의 움직임 + 명사·형용사·부사의 역할"을 할 수 있었던 것처럼, 동명사도 "동사의 움직임 + 명사의 역할"을 할 수 있습니다. 동사를 명사화시켜 활용도를 높인 것입니다. to부정사와 동명사는 모두 문장에서 **명사의 역할, 즉 주어·목적어·보어로 쓰일 수 있습니다**.',
      },
      {
        type: 'example',
        items: [
          { en: 'To study English is hard.', ko: '영어를 공부하는 것은 어렵다.' },
          { en: 'Studying English is hard.', ko: '영어를 공부하는 것은 어렵다.' },
        ],
      },
      {
        type: 'p',
        text: '위 두 문장은 모두 같은 의미이지만, 1번보다는 2번 문장이 더 선호됩니다. "길고 복잡한 구조는 문장 뒤로 보낸다"는 원칙 기억하시나요? **to부정사보다 동명사가 상대적으로 짧기 때문에 2번 문장처럼 동명사를 주어로 쓰는 것이 더 자연스럽습니다.** 그렇다고 1번 문장을 쓸 수 없는 것은 아니지만, 주어가 길어지는 만큼 실제로는 잘 쓰이지 않습니다.',
      },
      {
        type: 'note',
        text: 'to부정사 주어가 길어질 때는 그것을 문장 끝으로 보내고 비어 있는 주어 자리에 It을 채워 넣습니다. 이것이 "**가주어-진주어**" 구문으로, "It is hard to study English."처럼 씁니다. (4장 참고)',
      },
      { type: 'heading', text: '동명사와 to부정사의 어감 차이: "하고 있는 일" vs "할 일"' },
      {
        type: 'p',
        text: '동명사와 to부정사는 둘 다 동사를 명사처럼 쓰게 해주지만, 두 형태가 완전히 같은 어감을 가지는 것은 아닙니다. to부정사의 to는 원래 전치사 to에서 기원한 것으로, 기본적인 뜻은 이동과 방향입니다. 이 뜻은 "이동 → 방향 → 접촉·만남 → 결합 → 결과"의 흐름으로 의미가 확장되기 때문에, to부정사로 표현된 동작은 **"아직 도달하지 않은, 앞으로 일어날 일"의 느낌을 강하게 띱니다**. 반대로 동명사는 to부정사가 다루지 못하는 과거·현재의 영역, 즉 **"이미 경험했거나 지금 하고 있는 일"을 담당합니다**.',
      },
      {
        type: 'example',
        items: [
          { en: 'I want to learn Spanish.', ko: '나는 스페인어를 배우고 싶다.', note: 'to부정사: 아직 배우지 않았고, 앞으로 배우고 싶다는 희망' },
          { en: 'I enjoy learning Spanish.', ko: '나는 스페인어 배우는 것을 즐긴다.', note: '동명사: 이미 경험해봤거나 지금 하고 있는 일이며 그 과정을 즐긴다' },
        ],
      },
      {
        type: 'icon-row',
        caption: '동명사 vs to부정사: 시제 감각 차이',
        items: [
          { icon: '⏪', label: '동명사 (-ing)', sub: '이미 하고 있는 / 해본 일' },
          { icon: '⏩', label: 'to부정사 (to+동사)', sub: '앞으로 할 일' },
        ],
      },
      {
        type: 'note',
        text: '**이 어감의 차이는 절대적인 규칙이 아니라 경향입니다.** 다만 이 경향을 이해하고 있으면, 왜 특정 동사가 동명사만/to부정사만 목적어로 취하는지, 그리고 둘 다 취할 수 있는 동사는 왜 의미가 달라지는지를 스스로 추론할 수 있게 됩니다. 이 내용은 다음 레슨에서 자세히 다룹니다.',
      },
      { type: 'heading', text: '동명사 만드는 법' },
      {
        type: 'p',
        text: '동명사는 기본적으로 동사원형에 -ing를 붙여 만듭니다. 다만 발음을 편리하게 하기 위한 몇 가지 예외 규칙이 있습니다.',
      },
      {
        type: 'table',
        caption: '동명사 만드는 규칙',
        headers: ['규칙', '설명', '예시'],
        rows: [
          ['일반적인 경우', '동사원형 + -ing', 'study → studying, play → playing'],
          ['단모음 + 단자음으로 끝나는 동사', '마지막 자음을 한 번 더 쓰고 + -ing', 'stop → stopping, run → running'],
          ['-e로 끝나는 동사', '-e를 삭제하고 + -ing (발음되지 않는 -e를 없애야 함)', 'make → making, write → writing'],
          ['-ie로 끝나는 동사', '-ie를 y로 바꾸고 + -ing', 'lie → lying, die → dying'],
        ],
      },
      {
        type: 'note',
        text: '① stop처럼 모음이 하나(단모음)이고 그 뒤에 자음이 하나(단자음)인 동사는 마지막 자음을 한 번 더 써야 모음과 자음의 발음 균형이 맞습니다. ② make의 -e는 발음이 되지 않는 표기용 기호이므로 -ing를 붙일 때 삭제합니다. ③ lie에 그냥 -ing를 붙이면 lieing이 되어 표기와 발음이 모두 어색해지므로, -ie를 발음이 같은 y로 바꾸어 lying으로 씁니다.',
      },
      {
        type: 'icon-row',
        caption: '동명사 만드는 법 한눈에 보기',
        items: [
          { icon: '➕', label: '일반적인 경우', sub: 'study → studying' },
          { icon: '🔁', label: '자음 한 번 더', sub: 'stop → stopping' },
          { icon: '✂️', label: '-e 삭제', sub: 'make → making' },
          { icon: '🔄', label: '-ie → y', sub: 'lie → lying' },
        ],
      },
      { type: 'heading', text: '동명사의 역할 ① 주어' },
      {
        type: 'p',
        text: '동명사가 주어로 사용될 때는 **문장의 주제나 중심 내용을 나타냅니다**.',
      },
      {
        type: 'example',
        items: [
          { en: 'Swimming is a good exercise.', ko: '수영은 좋은 운동이다.' },
          { en: 'Learning a new language takes time.', ko: '새로운 언어를 배우는 것은 시간이 걸린다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '동명사 — 주어 역할',
        parts: [
          { tag: 'S', text: 'Learning a new language' },
          { tag: 'V', text: 'takes' },
          { tag: 'O', text: 'time.' },
        ],
        translation: 'Learning a new language takes time. (동명사구 전체가 문장의 주어 자리에 놓임)',
      },
      {
        type: 'p',
        text: '이 문장에서 Swimming, Learning a new language는 주어로 사용되어 각각 "수영"과 "언어를 배우는 것"이라는 동작을 명사화하면서 문장의 주제로 제시합니다.',
      },
      { type: 'heading', text: '동명사의 역할 ② 목적어' },
      {
        type: 'p',
        text: '동명사가 목적어로 사용될 때는 동사 뒤에 위치하여 **그 동작의 내용을 구체적으로 설명해줍니다**.',
      },
      {
        type: 'example',
        items: [
          { en: 'She enjoys reading books.', ko: '그녀는 책 읽는 것을 즐긴다.' },
          { en: 'He avoided answering the question.', ko: '그는 그 질문에 답하는 것을 피했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '동명사 — 목적어 역할',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'enjoys' },
          { tag: 'O', text: 'reading books.' },
        ],
        translation: 'She enjoys reading books. (동명사구 reading books가 동사 enjoys의 목적어 자리에 놓임)',
      },
      {
        type: 'p',
        text: '이 문장에서 reading books, answering the question은 각각 enjoys, avoided의 목적어로 사용되어 그 동사가 나타내는 행동의 구체적인 내용을 나타냅니다.',
      },
      { type: 'heading', text: '동명사의 역할 ③ 보어' },
      {
        type: 'p',
        text: '동명사가 보어로 사용될 때는 **주어를 보충 설명합니다**. 주로 be동사와 함께 쓰이며, 주어가 어떤 성격이나 상태를 가지는지 더 명확히 해주는 역할을 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'My favorite hobby is painting.', ko: '내가 가장 좋아하는 취미는 그림 그리기다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '동명사 보어',
        parts: [
          { tag: 'S', text: 'My favorite hobby' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'painting' },
        ],
        translation: 'My favorite hobby is painting. (동명사 painting이 주어를 보충 설명하는 보어)',
      },
      {
        type: 'callout',
        title: '14장 핵심 정리 (1)',
        items: [
          '동명사는 "동사원형 + -ing" 형태로, 문장에서 명사처럼 주어·목적어·보어 역할을 한다.',
          '동명사 주어는 to부정사 주어보다 짧기 때문에 가주어-진주어 구문을 잘 쓰지 않는다.',
          'to부정사는 방향성을 가진 to에서 왔기 때문에 "앞으로 할 일"의 느낌이, 동명사는 -ing의 진행·경험 느낌 때문에 "이미 하고 있는/해본 일"의 느낌이 강하다.',
          '동명사를 만들 때 단모음+단자음(stop→stopping), -e(make→making), -ie(lie→lying) 같은 예외 규칙에 주의한다.',
        ],
      },
    ],
  },

  'ch14-2': {
    title: '동명사와 to부정사: 목적어 자리의 의미 차이',
    blocks: [
      { type: 'heading', text: '동명사만 목적어로 취하는 동사' },
      {
        type: 'p',
        text: '오늘 살펴볼 동명사의 쓰임은 동사 뒤에서 목적어 역할을 하는 동명사입니다. 아래 문장에서 동명사는 모두 동사의 목적어 역할을 하고 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She enjoyed jumping.', ko: '그녀는 뛰는 것을 좋아한다.' },
          { en: 'Keep swimming.', ko: '계속 수영해.' },
          { en: 'I practice dancing after school.', ko: '나는 학교가 끝나고 춤 연습을 한다.' },
          { en: 'He just finished cutting the paper.', ko: '그는 방금 종이 자르는 것을 끝냈다.' },
        ],
      },
      {
        type: 'p',
        text: 'to부정사도 명사 역할을 하니 위 문장들의 동명사를 to부정사로 바꿔 쓸 수 있을 것 같지만, **enjoy, keep, practice, finish는 항상 목적어로 동명사만 취하는 동사입니다.** 아래처럼 바꾸면 틀린 문장이 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She enjoyed to jump.', ko: '(틀린 문장)', note: 'enjoy는 동명사만 목적어로 취함' },
          { en: 'Keep to swim.', ko: '(틀린 문장)', note: 'keep은 동명사만 목적어로 취함' },
          { en: 'I practice to dance after school.', ko: '(틀린 문장)', note: 'practice는 동명사만 목적어로 취함' },
          { en: 'He just finished to cut the paper.', ko: '(틀린 문장)', note: 'finish는 동명사만 목적어로 취함' },
        ],
      },
      { type: 'heading', text: 'to부정사와 동명사의 의미 확장 원리' },
      {
        type: 'p',
        text: '왜 이 동사들은 목적어로 동명사만 취할까요? to부정사의 to는 전치사 to에서 기원했고, 기본 의미는 이동과 방향입니다. "이동 → 방향 → 접촉·만남 → 결합 → 결과"의 흐름을 가지기 때문에, to부정사를 목적어로 취하는 동사들은 **대체로 미래에 무엇인가가 일어나기를 희망하거나 계획하는 동사들입니다**. 반면 to부정사가 다루지 못하는 과거·현재의 영역, 즉 **"이미 경험했거나 지금 하고 있는 일"은 동명사가 담당합니다**.',
      },
      {
        type: 'table',
        caption: '동명사를 목적어로 취하는 동사 vs to부정사를 목적어로 취하는 동사',
        headers: ['동명사만 목적어로 취하는 동사', 'to부정사만 목적어로 취하는 동사'],
        rows: [
          ['mind 꺼리다', 'want 원하다'],
          ['enjoy 즐기다', 'need 필요하다'],
          ['give up 포기하다', 'hope 희망하다'],
          ['avoid 피하다', 'expect 기대하다'],
          ['finish 끝내다', 'decide 결정하다'],
          ['suggest 제안하다', 'plan 계획하다'],
        ],
      },
      {
        type: 'p',
        text: '위 표의 동사들을 하나씩 살펴보겠습니다. mind는 "무엇인가를 꺼려하다"라는 뜻으로, 아직 경험하지 못한 미래의 일을 미리 꺼려할 수는 없습니다. enjoy는 "무엇인가를 즐기다"라는 뜻으로, 경험하지 못한 것을 좋아하거나 즐길 수는 없습니다. give up은 "내가 해왔던 것을 모두 포기하다"라는 뜻으로 "과거~현재"의 영역을 담당하는 동명사를 목적어로 취합니다. avoid, finish, suggest 역시 해오던 것들을 각각 "피하다, 끝내다, 제안하다"는 뜻이므로, 경험하지 못했던 일을 피하거나 끝내거나 제안하는 것은 불가능합니다. 따라서 **동명사를 목적어로 취하는 동사들은 모두 "과거~현재"까지 주어가 해오던 행동을 이야기하는 동사들입니다**.',
      },
      {
        type: 'note',
        text: '동명사를 취하는 동사들은 **"과거~현재에 이미 해오던 일"**을 이야기하고, to부정사를 취하는 동사들은 **"아직 일어나지 않은 미래의 일"**을 이야기한다고 이해하면 두 그룹을 구분하기 쉬워집니다.',
      },
      {
        type: 'icon-row',
        caption: '목적어 자리로 보는 시점 감각',
        items: [
          { icon: '⏪', label: '동명사 목적어', sub: '이미 해오던 일 (mind, enjoy, finish...)' },
          { icon: '⏩', label: 'to부정사 목적어', sub: '앞으로 할 일 (want, hope, plan...)' },
        ],
      },
      { type: 'heading', text: '동명사만 목적어로 취하는 동사 더 알아보기' },
      {
        type: 'p',
        text: 'mind, enjoy, give up, avoid, finish, suggest 외에도 같은 원리로 동명사만 목적어로 취하는 동사가 많이 있습니다. **모두 "이미 존재하거나 이미 일어나고 있는 행동"을 인정하거나, 논의하거나, 미루거나, 계속하는 뜻을 가진 동사라는 공통점**이 있습니다. 아직 일어나지 않은 미래의 일을 인정할 수도, 논의할 수도, 미룰 수도 없기 때문입니다.',
      },
      {
        type: 'table',
        caption: '동명사만 목적어로 취하는 주요 동사',
        headers: ['동사', '의미'],
        rows: [
          ['admit', '인정하다'],
          ['deny', '부인하다'],
          ['consider', '고려하다'],
          ['discuss', '논의하다'],
          ['delay / postpone / put off', '미루다'],
          ['risk', '위험을 무릅쓰다'],
          ['keep (on)', '계속 ~하다'],
          ['dislike', '싫어하다'],
          ['miss', '그리워하다, 놓치다'],
          ['appreciate', '고마워하다'],
          ['allow (수동태로 자주 쓰임)', '허용하다'],
          ['quit', '그만두다'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'He admitted stealing the money.', ko: '그는 돈을 훔쳤다는 것을 인정했다.', note: '이미 일어난 과거 행동을 인정 — admit + 동명사' },
          { en: 'She denied breaking the vase.', ko: '그녀는 꽃병을 깼다는 것을 부인했다.', note: '이미 일어난 일에 대한 부인 — deny + 동명사' },
          { en: 'Would you consider moving to Seoul?', ko: '서울로 이사하는 것을 고려해보시겠어요?', note: '아직 하지 않았지만 "이미 존재하는 선택지"를 저울질하는 것 — consider + 동명사' },
          { en: "Let's discuss meeting next week instead.", ko: '대신 다음 주에 만나는 것에 대해 논의해보자.', note: 'discuss 뒤에는 전치사 about 없이 바로 동명사가 옴' },
          { en: 'They keep asking the same question.', ko: '그들은 계속 같은 질문을 한다.', note: '이미 반복되고 있는 행동의 지속 — keep + 동명사' },
          { en: 'I miss living in my hometown.', ko: '나는 고향에서 살던 것이 그립다.', note: '과거에 경험했던 일에 대한 그리움 — miss + 동명사' },
          { en: 'We really appreciate you helping us move.', ko: '우리를 이사하는 것을 도와줘서 정말 고마워.', note: '이미 해준 도움에 대한 감사 — appreciate + 동명사' },
          { en: 'Smoking is not allowed in this building.', ko: '이 건물에서는 흡연이 허용되지 않는다.', note: 'allow는 주로 수동태로 쓰여 뒤의 동명사가 주어 자리로 이동' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수: enjoy, mind, give up + to부정사' },
      {
        type: 'p',
        text: '학습자들이 자주 틀리는 지점은, "동사 + 목적어" 구조를 볼 때 **습관적으로 to부정사를 먼저 떠올리는 것입니다**. want to, need to, plan to처럼 to부정사를 취하는 동사를 먼저 배우기 때문에, enjoy나 mind, give up 뒤에도 반사적으로 to부정사를 쓰는 실수가 많습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I want to give up smoking.', ko: '나는 담배를 끊고 싶다.', note: '맞는 문장: want는 to부정사, give up은 그 뒤에서 동명사를 취함' },
          { en: 'I want to give up to smoke.', ko: '(틀린 문장)', note: 'give up 뒤에 to부정사를 쓴 실수' },
          { en: 'Would you mind opening the window?', ko: '창문을 좀 열어주시겠어요?', note: '맞는 문장: mind는 동명사만 목적어로 취함' },
          { en: 'Would you mind to open the window?', ko: '(틀린 문장)', note: 'mind 뒤에 to부정사를 쓴 실수' },
        ],
      },
      {
        type: 'note',
        text: '**enjoy, mind, give up, avoid, finish, suggest 뒤에 to부정사가 나오면 무조건 틀린 문장입니다.** "이미 하고 있거나 해온 일"을 즐기고, 꺼리고, 포기하고, 피하고, 끝내고, 제안하는 것이므로 항상 동명사가 옵니다. 반대로 want, need, hope, decide, plan 뒤에 동명사를 쓰는 것도 흔한 실수이니 함께 주의합니다.',
      },
      { type: 'heading', text: 'remember, forget, try, stop: 형태에 따라 의미가 달라지는 동사' },
      {
        type: 'p',
        text: 'to부정사의 미래 지향적 의미와 동명사의 과거·현재 지향적 의미는, 동명사와 to부정사를 모두 목적어로 취할 수 있는 동사에서 더 분명하게 드러납니다. 이런 동사들은 **목적어의 형태에 따라 의미가 완전히 달라지므로**, 같은 상황을 두 가지 방식으로 표현해보며 비교하는 것이 가장 좋은 학습 방법입니다.',
      },
      {
        type: 'table',
        caption: 'to부정사 목적어 vs 동명사 목적어: 의미 차이',
        headers: ['동사', 'to부정사 목적어 (미래, 아직 안 함)', '동명사 목적어 (과거, 이미 함)'],
        rows: [
          ['remember', 'remember to do: (앞으로) ~할 것을 기억하다', 'remember doing: (과거에) ~했던 것을 기억하다'],
          ['forget', 'forget to do: (앞으로) ~할 것을 잊다', 'forget doing: (과거에) ~했던 것을 잊다'],
          ['try', 'try to do: ~하려고 시도하다 (노력)', 'try doing: (시험적으로) 한번 ~해보다'],
          ['stop', 'stop to do: ~하기 위해 멈추다 (목적)', 'stop doing: ~하던 것을 멈추다 (중단)'],
        ],
      },
      {
        type: 'p',
        text: '먼저 remember의 경우를 상황과 함께 살펴보겠습니다. 두 문장은 같은 동사 remember를 쓰지만, **목적어의 형태가 다르기 때문에 시점이 정반대가 됩니다**.',
      },
      {
        type: 'example',
        items: [
          { en: 'Remember to lock the door before you leave.', ko: '나가기 전에 문을 잠글 것을 기억해라.', note: '아직 잠그지 않았음. 앞으로 해야 할 일을 상기시키는 것' },
          { en: 'I remember locking the door this morning.', ko: '나는 오늘 아침에 문을 잠갔던 것을 기억한다.', note: '이미 잠갔음. 그 행동을 했던 과거의 기억' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'remember + to부정사 — 앞으로 할 일을 기억',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: 'Remember' },
          { tag: 'O', text: 'to lock the door' },
          { tag: 'M', text: 'before you leave.' },
        ],
        translation: 'Remember to lock the door before you leave. (아직 잠그지 않았음 — 앞으로 해야 할 일을 상기시키는 to부정사 목적어)',
      },
      {
        type: 'sentence-diagram',
        label: 'remember + 동명사 — 이미 했던 일을 기억',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'remember' },
          { tag: 'O', text: 'locking the door' },
          { tag: 'M', text: 'this morning.' },
        ],
        translation: 'I remember locking the door this morning. (이미 잠갔음 — 과거에 했던 행동에 대한 기억을 나타내는 동명사 목적어)',
      },
      {
        type: 'p',
        text: 'forget도 같은 원리로 작동합니다. 아직 하지 않은 일을 잊으면 안 된다는 뜻일 때는 to부정사를, **이미 했던 일을 잊었다는 뜻일 때는 동명사를 씁니다**.',
      },
      {
        type: 'example',
        items: [
          { en: "Don't forget to buy milk on your way home.", ko: '집에 오는 길에 우유 사는 것 잊지 마.', note: '아직 사지 않았음. 앞으로 할 일' },
          { en: "I'll never forget meeting her for the first time.", ko: '나는 그녀를 처음 만났던 것을 절대 잊지 못할 것이다.', note: '이미 만났음. 과거의 경험' },
        ],
      },
      {
        type: 'p',
        text: 'try는 두 형태의 의미 차이가 조금 더 미묘합니다. try to do는 **"해내기 위해 노력하다"**라는 뜻으로, 시도 자체가 힘들거나 결과가 불확실한 상황에 쓰입니다. try doing은 **"시험적으로 한번 해보다"**라는 뜻으로, 문제를 해결하기 위한 여러 방법 중 하나를 가볍게 시도해보는 상황에 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I tried to open the jar, but it was too tight.', ko: '나는 병을 열려고 애썼지만, 너무 꽉 닫혀 있었다.', note: '열기 위해 노력함 (성공 여부가 불확실한 시도)' },
          { en: 'Try turning the lid the other way.', ko: '뚜껑을 반대 방향으로 한번 돌려봐.', note: '문제 해결을 위해 가볍게 한번 시도해보라는 제안' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'try + to부정사 — 해내기 위한 노력',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'tried' },
          { tag: 'O', text: 'to open the jar,' },
          { tag: 'M', text: 'but it was too tight.' },
        ],
        translation: 'I tried to open the jar, but it was too tight. (병을 열어내기 위해 노력했다는 뜻 — to부정사 목적어)',
      },
      {
        type: 'sentence-diagram',
        label: 'try + 동명사 — 시험적으로 한번 해봄',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: 'Try' },
          { tag: 'O', text: 'turning the lid the other way.' },
        ],
        translation: 'Try turning the lid the other way. (해결책이 될지 가볍게 한번 시도해보라는 뜻 — 동명사 목적어)',
      },
      {
        type: 'p',
        text: 'stop은 두 형태의 의미가 완전히 다른 대표적인 동사입니다. stop to do는 **"~하기 위해 (하던 일을) 멈추다"**라는 뜻으로, to부정사가 멈추는 목적을 나타냅니다. stop doing은 **"~하던 것을 그만두다"**라는 뜻으로, 동명사가 멈춰지는 행동 그 자체를 나타냅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I stopped to smoke on my way to the meeting.', ko: '나는 회의에 가는 길에 담배를 피우기 위해 (걸음을) 멈췄다.', note: '멈춘 목적이 흡연 (걷기를 멈추고 담배를 피움)' },
          { en: 'I stopped smoking two years ago.', ko: '나는 2년 전에 담배를 끊었다.', note: '흡연이라는 행동 자체를 중단함 (금연)' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'stop + to부정사 — 멈추는 목적',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'stopped' },
          { tag: 'M', text: 'to smoke' },
          { tag: 'M', text: 'on my way to the meeting.' },
        ],
        translation: 'I stopped to smoke on my way to the meeting. (걷기를 멈춘 목적이 흡연 — to부정사가 멈춘 목적을 나타냄)',
      },
      {
        type: 'sentence-diagram',
        label: 'stop + 동명사 — 행동 자체를 중단',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'stopped' },
          { tag: 'O', text: 'smoking' },
          { tag: 'M', text: 'two years ago.' },
        ],
        translation: 'I stopped smoking two years ago. (흡연이라는 행동 자체를 중단 — 동명사가 멈춰지는 행동을 나타냄)',
      },
      {
        type: 'note',
        text: 'stop to do와 stop smoking을 혼동하면 "회의 가는 길에 담배를 끊었다"처럼 전혀 다른 뜻이 됩니다. **to부정사는 목적(~하기 위해), 동명사는 중단되는 행동(~하던 것을) 이라는 구조**를 기억하면 헷갈리지 않습니다.',
      },
      { type: 'heading', text: 'regret, go on: 의미가 달라지는 동사 두 가지 더' },
      {
        type: 'p',
        text: 'remember, forget, try, stop과 같은 원리로 작동하는 동사가 두 개 더 있습니다. **regret**은 to부정사가 오면 "지금 이 순간부터 말하려는 내용이 유감스럽다"는 뜻이 되고, 동명사가 오면 "과거에 했던 행동을 후회한다"는 뜻이 됩니다. **go on**은 to부정사가 오면 "하던 일을 마치고 다른 행동으로 넘어간다"는 뜻이 되고, 동명사가 오면 "하던 행동을 그대로 계속한다"는 뜻이 됩니다.',
      },
      {
        type: 'table',
        caption: 'regret, go on: to부정사 목적어 vs 동명사 목적어',
        headers: ['동사', 'to부정사 목적어', '동명사 목적어'],
        rows: [
          ['regret', 'regret to do: (지금부터) ~하게 되어 유감이다 (안 좋은 소식을 전할 때)', 'regret doing: (과거에) ~했던 것을 후회하다'],
          ['go on', 'go on to do: 하던 일을 마치고 (다른 행동으로) 이어서 ~하다', 'go on doing: 하던 행동을 그대로 계속 ~하다'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I regret to tell you that your flight has been delayed.', ko: '유감스럽지만 비행기가 지연되었다는 것을 알려드립니다.', note: '지금 전하는 소식이 유감스럽다는 뜻 — 아직 하지 않은 말을 꺼내는 시점' },
          { en: "I regret telling you the bad news; I can see it upset you.", ko: '너에게 그 나쁜 소식을 말한 것을 후회한다. 네가 속상해하는 게 보인다.', note: '이미 말했던 과거 행동을 후회함' },
          { en: 'He finished the introduction and went on to explain the results.', ko: '그는 서론을 마치고 이어서 결과를 설명했다.', note: '서론이라는 행동을 마치고 다른 행동(설명)으로 전환 — go on + to부정사' },
          { en: 'He went on talking for another hour without noticing anyone was bored.', ko: '그는 아무도 지루해하는 걸 눈치채지 못한 채 한 시간을 더 계속 말했다.', note: '말하기라는 같은 행동을 계속함 — go on + 동명사' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'regret + to부정사 — 지금부터 할 말이 유감스러움',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'regret' },
          { tag: 'O', text: 'to tell you' },
          { tag: 'M', text: 'that your flight has been delayed.' },
        ],
        translation: 'I regret to tell you that your flight has been delayed. (아직 하지 않은 말을 지금 꺼내는 시점 — to부정사 목적어)',
      },
      {
        type: 'sentence-diagram',
        label: 'regret + 동명사 — 과거의 행동을 후회',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'regret' },
          { tag: 'O', text: 'telling you the bad news;' },
          { tag: 'M', text: 'I can see it upset you.' },
        ],
        translation: 'I regret telling you the bad news; I can see it upset you. (이미 했던 말을 후회 — 동명사 목적어)',
      },
      { type: 'heading', text: '동명사와 to부정사 둘 다 가능하지만 의미 차이가 없는 동사' },
      {
        type: 'p',
        text: '지금까지 살펴본 remember, forget, try, stop, regret, go on은 형태에 따라 의미가 달라지는 동사였습니다. 하지만 **like, love, hate, prefer, begin, start, continue, propose, intend, neglect, can\'t bear, can\'t stand**처럼 동명사와 to부정사를 모두 목적어로 취하면서도 **의미 차이가 거의 없는 동사**들도 있습니다. 이 동사들은 좋아함·싫어함이나 시작·계속처럼 시점의 구분이 뚜렷하지 않은 감정·상태를 나타내기 때문에, 어떤 형태를 쓰든 큰 의미 차이 없이 자연스럽게 바꿔 쓸 수 있습니다.',
      },
      {
        type: 'table',
        caption: '동명사·to부정사 둘 다 가능 (의미 차이 거의 없음)',
        headers: ['동사', '의미'],
        rows: [
          ['like / love / hate', '좋아하다 / 사랑하다·매우 좋아하다 / 싫어하다'],
          ['prefer', '더 선호하다'],
          ["can't bear / can't stand", '참을 수 없다'],
          ['begin / start', '시작하다'],
          ['continue', '계속하다'],
          ['propose', '제안하다'],
          ['intend', '의도하다'],
          ['neglect', '소홀히 하다'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I like to work in an open-plan office with a team.', ko: '나는 개방형 사무실에서 팀과 일하는 것을 좋아한다.' },
          { en: 'I like working in an open-plan office with a team.', ko: '나는 개방형 사무실에서 팀과 일하는 것을 좋아한다.', note: '위 문장과 의미 차이가 거의 없음' },
          { en: 'Emails are really awkward. I prefer to meet in person.', ko: '이메일은 정말 어색하다. 나는 직접 만나는 것을 더 선호한다.' },
          { en: 'After a short stop, they continued to drive toward the campsite.', ko: '잠깐 멈춘 뒤, 그들은 야영지를 향해 계속 운전했다.' },
          { en: 'Once she had found a seat, she began writing her essay.', ko: '자리를 찾자마자, 그녀는 에세이를 쓰기 시작했다.' },
          { en: "Why isn't the bus here yet? I really can't stand waiting like this.", ko: '왜 버스가 아직 안 오지? 나는 이렇게 기다리는 것을 정말 참을 수가 없다.' },
        ],
      },
      {
        type: 'icon-row',
        caption: '왜 이 동사들은 의미 차이가 거의 없을까: 뚜렷한 시점 경계가 없음',
        items: [
          { icon: '❤️', label: '감정·선호', sub: 'like, love, hate, prefer — 좋고 싫은 마음에는 앞뒤 구분이 없음' },
          { icon: '🔄', label: '시작·계속', sub: 'begin, start, continue — 시작·지속에도 뚜렷한 전후 경계가 없음' },
        ],
      },
      {
        type: 'note',
        text: '단, begin, start처럼 이 그룹에 속한 동사가 **진행형(be + -ing)으로 쓰일 때는 동명사를 목적어로 쓸 수 없습니다.** 같은 동사가 -ing를 두 번 겹쳐 쓰는 것이 어색하기 때문입니다. "I am starting to learn Korean."은 자연스럽지만, "I am starting learning Korean."처럼 -ing가 중복되는 문장은 쓰지 않고 반드시 to부정사를 씁니다.',
      },
      { type: 'heading', text: '동명사를 포함한 관용표현' },
      {
        type: 'p',
        text: '동명사는 몇몇 고정된 표현 안에서 관용적으로 사용됩니다. 문맥과 함께 익혀두면 실제 문장에서 훨씬 빠르게 알아볼 수 있습니다.',
      },
      {
        type: 'table',
        caption: '동명사 관용표현',
        headers: ['표현', '의미', '문맥 예문'],
        rows: [
          ['cannot help ~ing', '~하지 않을 수 없다', 'The joke was so funny that I could not help laughing out loud.'],
          ['be used to ~ing', '~하는 데 익숙하다', 'After three years in Seoul, he is used to taking the subway every day.'],
          ['be busy ~ing', '~하느라 바쁘다', 'She is busy preparing for the exam this week.'],
          ['spend + 시간/돈 + ~ing', '~하는 데 시간·돈을 쓰다', 'He spends two hours reading every day after dinner.'],
          ['look forward to ~ing', '~하기를 기대하다', "I look forward to seeing you at the party next Friday."],
          ['feel like ~ing', '~하고 싶다', 'I feel like eating pizza tonight instead of cooking.'],
          ['on ~ing', '~하자마자', 'On arriving home, she took a shower and went straight to bed.'],
          ['end up ~ing', '결국 ~하게 되다', 'We planned to leave early, but we ended up staying until midnight.'],
        ],
      },
      {
        type: 'note',
        text: 'look forward to ~ing와 be used to ~ing의 to는 to부정사의 to가 아니라 전치사 to입니다. 전치사 뒤에는 동사원형이 올 수 없고 명사(동명사)가 와야 하므로 **이 표현들 뒤에는 항상 동명사가 옵니다**. "I look forward to see you."나 "He is used to take the subway."처럼 쓰면 틀린 문장이 되니 주의하세요.',
      },
      {
        type: 'sentence-diagram',
        label: 'look forward to + 동명사 — 전치사 to 뒤에는 동명사',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'look forward to' },
          { tag: 'O', text: 'seeing you at the party next Friday.' },
        ],
        translation: 'I look forward to seeing you at the party next Friday. (to는 전치사이므로 뒤에 동사원형이 아닌 동명사가 옴)',
      },
      {
        type: 'callout',
        title: '14장 핵심 정리 (2)',
        items: [
          'mind, enjoy, give up, avoid, finish, suggest 등은 동명사만 목적어로 취하고, want, need, hope, expect, decide, plan 등은 to부정사만 목적어로 취한다.',
          'to부정사는 미래·희망의 의미를, 동명사는 과거~현재에 실제로 있었던 일의 의미를 가지는 경향이 있다. 이 경향 때문에 enjoy/mind/give up 뒤에 to부정사를 쓰는 것은 흔한 실수이니 주의한다.',
          'remember/forget/try/stop처럼 둘 다 취할 수 있는 동사는 to부정사냐 동명사냐에 따라 의미가 달라진다: remember to do(할 것을 기억) vs remember doing(했던 것을 기억), stop to do(멈추는 목적) vs stop doing(행동 자체를 중단).',
          'look forward to ~ing, be used to ~ing, cannot help ~ing, be busy ~ing, end up ~ing 등 동명사 관용표현은 문맥과 함께 통째로 외워두는 것이 좋다.',
        ],
      },
    ],
  },
}
