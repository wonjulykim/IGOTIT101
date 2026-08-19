export const ch18 = {
  'ch18-1': {
    title: '지각동사',
    blocks: [
      { type: 'heading', text: '지각이란 무엇인가' },
      {
        type: 'p',
        text: '지각이란 우리의 감각기관을 통해 외부의 대상을 인식하는 활동을 말합니다. 길을 걷다가 친구가 무단횡단을 하는 것을 보았다고 가정해 봅시다. 우리가 친구를 눈으로 본 것은 단순한 시각적 활동이지만, 그 상황을 보고 "무단횡단을 하고 있다"고 판단한 것은 시각 정보를 바탕으로 한 인지 활동입니다. 이처럼 지각이란 외부의 상황을 감각기관을 통해 받아들여 판단하는 일련의 과정, 즉 보고, 듣고, 느끼며 인식하는 활동을 말합니다.',
      },
      {
        type: 'p',
        text: '영어에서 see, hear, feel, watch, notice, observe처럼 이러한 지각 활동을 표현하는 동사를 지각동사라고 합니다. **지각동사는 「지각동사 + 목적어 + 동사원형」의 5형식 구조**로 쓰이며, 목적격 보어 자리에는 동사원형이 옵니다.',
      },
      {
        type: 'note',
        text: '지각동사 뒤에는 분사(-ing)가 오는 구조도 있지만, 여기에서는 「지각동사 + 목적어 + 동사원형」 구조를 중심으로 다룹니다.',
      },
      {
        type: 'icon-row',
        caption: '목적격 보어 자리에 올 수 있는 세 가지 형태 — 무엇을 보았느냐에 따라 형태가 달라진다',
        items: [
          { icon: '🎬', label: '동사원형', sub: '시작~끝, 완결된 동작 전체' },
          { icon: '🔄', label: '현재분사(-ing)', sub: '진행 중인 한 순간' },
          { icon: '📦', label: '과거분사(p.p.)', sub: '목적어가 동작을 당하는 상황' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I saw you sing.', ko: '나 네가 노래하는 거 봤어.' },
          { en: 'I heard you sing.', ko: '나 네가 노래하는 거 들었어.' },
          { en: 'I felt something touch my back.', ko: '나 뭔가가 내 등을 만지는 것을 느꼈어.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (지각동사 + 목적어 + 동사원형)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'saw' },
          { tag: 'O', text: 'you' },
          { tag: 'OC', text: 'sing' },
        ],
        translation: '나 네가 노래하는 거 봤어. (sing이 you를 보충 설명)',
      },
      { type: 'heading', text: '목적격 보어에 동사원형이 오는 이유 — 17장 사역동사와의 연결' },
      {
        type: 'note',
        text: '17장에서 사역동사(make, have, let)가 목적격 보어로 동사원형을 취하는 이유는, 시키는 행위와 시킴을 받아 하는 행위가 동시에 일어나기 때문이었습니다. 지각동사도 원리는 같습니다. **지각한 행위와 목격된 행위가 동시에 일어나기 때문에, 목적격 보어에 별도의 시제를 표시할 필요가 없습니다.** 시제는 이미 앞의 지각동사(saw, heard, felt)에 표현되어 있습니다. 즉, 사역동사와 지각동사가 똑같이 「동사 + 목적어 + 동사원형」 구조를 쓰는 것은 우연이 아니라, 두 동사 모두 목적격 보어의 동작이 주어의 동사와 동시에 일어난다는 공통된 의미 원리를 공유하기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I saw you sing.', ko: '나 네가 노래하는 거 봤어.', note: '본 것과 노래한 행위가 동시에 이루어짐' },
          { en: 'We heard them sing.', ko: '우리는 그들이 노래하는 것을 들었다.', note: '들은 것과 노래한 행위가 동시에 이루어짐' },
          { en: 'I saw him leave the house.', ko: '나는 그가 집을 떠나는 것을 보았다.', note: '본 것과 떠난 행위가 동시에 이루어짐' },
          { en: 'She noticed the light flicker.', ko: '그녀는 불빛이 깜박거리는 것을 알아차렸다.', note: '알아차린 것과 깜박거린 행위가 동시에 이루어짐' },
          { en: 'They watched the plane take off.', ko: '그들은 비행기가 이륙하는 것을 지켜보았다.', note: '지켜본 것과 이륙한 행위가 동시에 이루어짐' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (지각동사 + 목적어 + 동사원형)',
        parts: [
          { tag: 'S', text: 'They' },
          { tag: 'V', text: 'watched' },
          { tag: 'O', text: 'the plane' },
          { tag: 'OC', text: 'take off' },
        ],
        translation: '그들은 비행기가 이륙하는 것을 지켜보았다. (take off가 the plane을 보충 설명)',
      },
      {
        type: 'icon-row',
        caption: '지각동사가 다루는 감각',
        items: [
          { icon: '👀', label: 'see / watch', sub: '시각으로 지각' },
          { icon: '👂', label: 'hear', sub: '청각으로 지각' },
          { icon: '🖐️', label: 'feel', sub: '촉각으로 지각' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 — 지각동사 뒤에 to부정사를 쓰는 오류' },
      {
        type: 'note',
        text: '**지각동사는 목적격 보어로 동사원형을 취하며, to부정사는 쓰지 않습니다.** 학습자들은 want, ask, tell처럼 to부정사를 목적격 보어로 취하는 동사들과 지각동사를 혼동하여 "I saw him to cross the street."처럼 잘못 쓰는 경우가 많습니다. 지각동사 뒤에는 반드시 동사원형이 와야 한다는 점을 기억해야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I saw him to cross the street.', ko: '(오류) 지각동사 뒤에 to부정사는 쓰지 않음', note: '올바른 표현: I saw him cross the street.' },
          { en: 'I saw him cross the street.', ko: '나는 그가 길을 건너는 것을 보았다.', note: '올바른 표현 (동사원형)' },
          { en: 'We heard him to shout.', ko: '(오류) 지각동사 뒤에 to부정사는 쓰지 않음', note: '올바른 표현: We heard him shout.' },
          { en: 'We heard him shout.', ko: '우리는 그가 소리치는 것을 들었다.', note: '올바른 표현 (동사원형)' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (지각동사 + 동사원형, to부정사 아님)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'saw' },
          { tag: 'O', text: 'him' },
          { tag: 'OC', text: 'cross the street' },
        ],
        translation: '나는 그가 길을 건너는 것을 보았다. (to cross가 아니라 동사원형 cross)',
      },
      { type: 'heading', text: '지각동사와 감각동사의 차이' },
      {
        type: 'p',
        text: '지각동사와 자주 혼동되는 것이 감각동사입니다. 감각이란 눈, 코, 귀, 혀, 살갗을 통하여 바깥의 어떤 자극을 알아차리는 행위이고, 지각은 그 감각을 통한 인지입니다. **감각동사(feel, taste, smell, sound, look 등)는 주어의 상태나 느낌을 표현하며 「감각동사 + 형용사」 구조**로 쓰입니다. 감각동사는 주어가 어떻게 느끼는지, 어떤 상태인지, 또는 어떻게 보이는지를 나타내며, 형용사를 사용해 주어를 보충 설명합니다. 반면 **지각동사(see, hear, watch, notice, observe 등)는 주어가 외부의 동작이나 상태를 감각을 통해 인식하는 것을 표현하며 「지각동사 + 목적어 + 동사원형」 구조**로 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The soup tastes delicious.', ko: '그 수프는 맛있다.', note: '감각동사 + 형용사 (수프의 상태를 설명)' },
          { en: 'The flowers smell nice.', ko: '그 꽃들은 좋은 냄새가 난다.', note: '감각동사 + 형용사' },
          { en: 'She feels tired.', ko: '그녀는 피곤함을 느낀다.', note: '감각동사 + 형용사 (주어 자신의 상태)' },
          { en: 'This music sounds wonderful.', ko: '이 음악은 훌륭하게 들린다.', note: '감각동사 + 형용사' },
          { en: 'He looks happy.', ko: '그는 행복해 보인다.', note: '감각동사 + 형용사' },
          { en: 'I felt something touch my back.', ko: '나는 뭔가가 내 등을 만지는 것을 느꼈다.', note: '지각동사 + 목적어 + 동사원형 (외부 대상의 동작을 인식)' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '2형식 (감각동사 + 형용사)',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'feels' },
          { tag: 'C', text: 'tired' },
        ],
        translation: '그녀는 피곤함을 느낀다. (감각동사 feel + 형용사 보어, 주어 자신의 상태)',
      },
      {
        type: 'p',
        text: '위에서 feel이 감각동사로 쓰이면 「feel + 형용사」로 주어 자신의 느낌을 나타내지만(She feels tired.), 지각동사로 쓰이면 「feel + 목적어 + 동사원형」으로 외부 대상의 동작을 감지했다는 뜻이 됩니다(I felt something touch my back.). **같은 동사라도 구조에 따라 의미가 달라진다는 점**에 주의해야 합니다.',
      },
      {
        type: 'table',
        caption: '감각동사 vs 지각동사',
        headers: ['구분', '감각동사', '지각동사'],
        rows: [
          ['의미', '주어의 상태나 감각을 표현. 주어가 어떻게 느끼는지, 어떻게 보이는지, 어떤 상태인지를 나타냄.', '주어가 외부의 동작이나 상태를 감각을 통해 인식하는 것을 표현. 주어가 무엇을 보고, 듣고, 지켜보고, 알아차리는지를 나타냄.'],
          ['구조', '감각동사 + 형용사', '지각동사 + 목적어 + 동사원형'],
          ['대표 동사', 'feel, taste, smell, sound, look', 'see, hear, watch, notice, observe'],
          ['예문', 'She feels tired.', 'I felt something touch my back.'],
        ],
      },
      { type: 'heading', text: '지각동사 + 목적어 + 동사원형 vs -ing — 전체를 보았는가, 진행 중인 장면을 보았는가' },
      {
        type: 'p',
        text: '지각동사의 목적격 보어 자리에는 동사원형뿐 아니라 현재분사(-ing)도 올 수 있습니다. 이 둘은 아무 때나 바꿔 쓸 수 있는 것이 아니라, **지각한 행위가 처음부터 끝까지 완결된 하나의 사건이었는지, 아니면 이미 진행되고 있던 도중의 한 장면이었는지**에 따라 갈립니다. 동사원형은 시작부터 끝까지 이어지는 사건 전체를 하나의 덩어리로 지각했다는 뜻이고, -ing는 그 사건이 이미 진행 중이던 순간을 목격했다는 뜻입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I saw him cross the street.', ko: '나는 그가 길을 건너는 것을 보았다.', note: '동사원형 — 그가 이쪽에서 저쪽까지 건너는 전체 과정을 처음부터 끝까지 지켜봄' },
          { en: 'I saw him crossing the street.', ko: '나는 그가 길을 건너고 있는 것을 보았다.', note: '-ing — 이미 건너고 있던 도중의 한 장면만 목격. 건너기 시작한 순간이나 다 건넌 순간은 보지 못했을 수도 있음' },
          { en: 'Hayley heard the boss interviewing the new secretary.', ko: 'Hayley는 상사가 새 비서를 면접하고 있는 것을 들었다.', note: '면접이 진행 중인 도중의 소리를 들은 것 — 면접 전체를 처음부터 끝까지 들었다는 뜻이 아님' },
          { en: 'I remember Arnold leaving the house at around 10 o\'clock.', ko: '나는 Arnold가 10시쯤 집을 나서던 것이 기억난다.', note: '나가는 도중의 한 장면이 기억 속 이미지로 남아 있다는 뉘앙스' },
        ],
      },
      {
        type: 'table',
        caption: '지각동사 + 목적어 + 동사원형 vs -ing',
        headers: ['형태', '의미', '초점'],
        rows: [
          ['지각동사 + 목적어 + 동사원형', '처음부터 끝까지 이어진 사건 전체를 지각', '사건의 시작과 끝을 모두 포함한 완결된 하나의 동작'],
          ['지각동사 + 목적어 + -ing', '이미 진행되고 있던 도중의 한 장면을 지각', '동작이 진행 중인 순간 — 시작이나 끝은 못 보았을 수도 있음'],
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (지각동사 + 목적어 + -ing)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'saw' },
          { tag: 'O', text: 'him' },
          { tag: 'OC', text: 'crossing the street' },
        ],
        translation: '나는 그가 길을 건너고 있는 것을 보았다. (진행 중이던 도중의 장면)',
      },
      {
        type: 'note',
        text: '실제로는 두 형태의 의미 차이가 크지 않아 바꿔 써도 자연스러운 경우가 많지만, 사건이 아주 짧고 순간적이라면(예: 문이 닫히는 소리를 듣는 것) 동사원형을, 사건이 상당한 시간 동안 진행되는 중이었다면(예: 누군가 일하고 있는 모습) -ing를 쓰는 편이 더 자연스럽습니다.',
      },
      {
        type: 'callout',
        title: '18장 핵심 정리',
        items: [
          '지각동사(see, hear, feel, watch, notice, observe 등)는 「지각동사 + 목적어 + 동사원형」의 5형식 구조로 쓰인다.',
          '목적격 보어에 동사원형이 오는 이유는 지각한 행위와 목격된 행위가 동시에 일어나기 때문이다. 17장의 사역동사(make, have, let)가 동사원형을 취하는 이유와 같은 원리다.',
          '지각동사 뒤에는 to부정사를 쓰지 않는다. "I saw him to cross the street."는 틀린 문장이며, cross로 써야 한다.',
          '감각동사(feel, taste, smell, sound, look)는 「감각동사 + 형용사」 구조로 주어 자신의 상태·느낌을 표현하며, 목적어와 목적격 보어를 취하는 지각동사와는 구조와 의미가 다르다.',
          '목적격 보어에 동사원형 대신 -ing를 쓰면, 사건 전체가 아니라 이미 진행 중이던 도중의 한 장면을 지각했다는 의미가 된다. (I saw him cross the street. vs I saw him crossing the street.)',
        ],
      },
    ],
  },
}
