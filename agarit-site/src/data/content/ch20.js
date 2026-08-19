export const ch20 = {
  'ch20-1': {
    title: '능동태와 수동태',
    blocks: [
      {
        type: 'p',
        text: '영어는 어순이 분명하게 정해진 언어이기 때문에, 단어의 순서(어순)가 달라지면 화자가 전달하고자 하는 의미도 달라집니다. 영어의 기본 어순은 「주어 + 동사 + 목적어」인데, 이 순서가 바뀌면 문장의 초점과 화자의 의도도 함께 달라집니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Do you want something?', ko: '무언가를 원하니?', note: '동사로 시작 — 의문문' },
          { en: 'Open the door!', ko: '문을 열어라!', note: '주어 생략, 동사원형으로 시작 — 명령문' },
          { en: 'Coffee, I like.', ko: '커피, 나는 좋아해.', note: '목적어를 문장 앞으로 이동 — 강조' },
        ],
      },
      {
        type: 'p',
        text: '이처럼 어순이 달라지면 의미도 달라진다는 것을 기억하면서, 「주어 + 동사 + 목적어」의 순서를 바꾸는 대표적인 방식인 수동태를 살펴보겠습니다. **수동태는 능동태 문장을 기계적으로 바꾸는 문법 규칙이 아니라, 화자가 어떤 문맥과 의도를 가지고 「목적어를 주어로」 끌어올리는 선택입니다.** 즉, 같은 사건이라도 화자가 능동태와 수동태 중 무엇을 고르느냐에 따라 듣는 사람이 받는 인상이 완전히 달라집니다.',
      },
      {
        type: 'icon-row',
        caption: '능동태 ↔ 수동태 — 초점이 이동한다',
        items: [
          { icon: '🏃', label: '행위자', sub: '능동태의 주어' },
          { icon: '🔄', label: '주어 ↔ 목적어 교체' },
          { icon: '🎯', label: '행위의 대상', sub: '수동태의 주어' },
        ],
      },
      { type: 'heading', text: '능동태와 수동태의 의미' },
      {
        type: 'example',
        items: [
          { en: 'The hunter hunted a rabbit.', ko: '사냥꾼이 토끼를 사냥했다.', note: '능동태' },
          { en: 'A rabbit was hunted (by the hunter).', ko: '토끼가 (사냥꾼에 의해) 사냥당했다.', note: '수동태' },
        ],
      },
      {
        type: 'p',
        text: '**주어와 동사의 관계로 보면, 능동태는 주어가 동사의 행위를 스스로 직접 하는 문장이고, 수동태는 주어가 동사의 행위에 영향을 받는 문장입니다.** 능동태 문장의 목적어(a rabbit)가 수동태 문장에서는 주어로 자리를 옮겼고, 동사 자리에는 was hunted라는 「be동사 + 과거분사」가 쓰였습니다. 그리고 원래 주어였던 The hunter는 by the hunter라는 전치사구로 바뀌어 문장 끝으로 이동했으며, 필요하지 않으면 생략할 수 있습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '능동태',
        parts: [
          { tag: 'S', text: 'The hunter' },
          { tag: 'V', text: 'hunted' },
          { tag: 'O', text: 'a rabbit' },
        ],
        translation: '사냥꾼이 토끼를 사냥했다. (행위자인 주어에 초점)',
      },
      {
        type: 'sentence-diagram',
        label: '수동태',
        parts: [
          { tag: 'S', text: 'A rabbit' },
          { tag: 'V', text: 'was hunted' },
          { tag: 'M', text: '(by the hunter)' },
        ],
        translation: '토끼가 (사냥꾼에 의해) 사냥당했다. (행위의 대상인 주어에 초점)',
      },
      {
        type: 'note',
        text: '능동태와 수동태는 의미상 비슷해 보이지만, 화자가 어디에 초점을 두고 있는지가 다릅니다. 능동태는 행위자(주어)의 행동에 초점이 있고, 수동태는 행위를 받는 대상(주어)에 초점이 있습니다. 같은 사건도 어떤 문맥에서 말하느냐에 따라 능동태로 서술될 수도, 수동태로 서술될 수도 있습니다.',
      },
      { type: 'heading', text: '같은 사건, 다른 문장 — 초점이 문장을 결정한다' },
      {
        type: 'p',
        text: '문법적으로는 The hunter hunted a rabbit.과 A rabbit was hunted by the hunter.가 「같은 사건」을 가리키지만, 실제 대화에서는 이 둘이 아무 때나 서로 바꿔 쓸 수 있는 문장이 아닙니다. 어떤 문맥이 그 문장을 감싸고 있는지에 따라 화자는 둘 중 하나를 선택합니다. 아래 두 상황을 비교해 보면, 같은 사건도 화자가 서 있는 자리에 따라 전혀 다르게 서술된다는 것을 확인할 수 있습니다.',
      },
      {
        type: 'note',
        text: '상황 A — 생존을 위해 사냥을 해야 하는 사냥꾼이 숲을 조심스럽게 걷다가 풀숲 사이로 움직이는 무언가를 발견하고, 순간을 놓치지 않고 활을 쏴 토끼를 사냥합니다. 이 장면을 서술하는 화자는 사냥꾼이 무엇을 어떻게 해냈는지에 관심이 있습니다. → The hunter hunted a rabbit. (능동태: 행위자의 행동에 초점)',
      },
      {
        type: 'note',
        text: '상황 B — 동물 권리에 관한 다큐멘터리에서 사냥이 생태계에 미치는 영향을 설명하며, 내레이션이 "숲 속에서 토끼가 사냥꾼에 의해 사냥당하는 장면이 포착되었습니다."라고 말합니다. 이 화자는 사냥꾼이 누구인지보다 토끼(약자, 피해자)에게 무슨 일이 일어났는지에 관심이 있습니다. → A rabbit was hunted by the hunter. (수동태: 행위의 대상에게 일어난 일에 초점)',
      },
      {
        type: 'p',
        text: '이렇게 화자가 「행위자의 행동」을 설명하고 싶은 문맥에서는 능동태가, 「대상이 겪은 일」을 설명하고 싶은 문맥에서는 수동태가 선택됩니다. 수동태를 단순히 「능동태의 목적어와 주어를 맞바꾼 문장」으로만 외우면, 왜 어떤 상황에서는 수동태가 훨씬 자연스럽고 다른 상황에서는 어색한지를 설명할 수 없습니다. 지금부터는 이 원리를 실제 상황 속에서 하나씩 확인해 보겠습니다.',
      },
      { type: 'heading', text: 'be동사 + 과거분사를 쓰는 이유' },
      {
        type: 'p',
        text: '수동태는 주어가 누군가에게 영향을 받았다는 결과·상태를 나타내야 하므로 과거분사(p.p.)를 사용합니다. **그런데 과거분사는 형용사이지 동사가 아니기 때문에, 이를 동사로 기능하게 해 주는 be동사가 반드시 함께 필요합니다.** 이때 능동태 동사의 시제는 be동사가 그대로 넘겨받아 표현합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The cake is baked by the chef.', ko: '케이크가 주방장에 의해 구워진다.', note: 'baked는 형용사이므로 be동사 is가 반드시 필요' },
          { en: 'The letter was written by her.', ko: '그 편지는 그녀에 의해 쓰였다.', note: '능동태 과거시제 → be동사도 과거(was)' },
          { en: 'The project will be finished by tomorrow.', ko: '그 프로젝트는 내일까지 끝날 것이다.', note: '능동태 미래시제 → be동사도 미래(will be)' },
        ],
      },
      { type: 'heading', text: '수동태가 쓰이는 상황: 문맥으로 이해하기' },
      {
        type: 'p',
        text: '수동태는 능동태를 문법적으로 바꾼 표현이 아니라, 화자가 어떤 상황·문맥에서 무엇을 강조하고 싶은지에 따라 능동태와 수동태 중 하나를 골라 쓰는 것입니다. 같은 사건이라도 화자가 서 있는 자리가 다르면 문장의 형태도 달라집니다. 아래 세 가지 대표적인 상황을 통해 수동태가 실제로 어떻게 선택되는지 살펴보겠습니다.',
      },
      { type: 'heading', text: '상황 ① 사건·사고 설명 — 행위자를 모르거나 밝히고 싶지 않을 때' },
      {
        type: 'p',
        text: '경찰 조서나 사건 설명에서는 누가 그 일을 했는지 아직 밝혀지지 않은 경우가 많습니다. 이럴 때 화자는 행위자 자리를 비워 둔 채, 무슨 일이 일어났는지(결과)만 전달하기 위해 수동태를 사용합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'A window was broken last night.', ko: '지난밤에 창문이 깨졌다.', note: '누가 깼는지 모름 — by 이하 생략' },
          { en: 'Two suspects were arrested near the station this morning.', ko: '오늘 아침 역 근처에서 용의자 두 명이 체포되었다.', note: '체포한 경찰보다 체포되었다는 사실 자체가 뉴스의 핵심' },
          { en: 'The car was stolen from the parking lot.', ko: '주차장에서 차가 도난당했다.', note: '도둑을 특정할 수 없는 사건 설명체' },
          { en: 'No cause of the fire has been identified yet.', ko: '아직 화재의 원인이 밝혀지지 않았다.', note: '원인(행위자)을 아직 모르는 조사 중인 사건 — 수동태가 아니면 주어를 채울 방법이 없음' },
          { en: 'My phone was stolen on the subway this morning!', ko: '오늘 아침 지하철에서 내 휴대폰을 도둑맞았어!', note: '도둑이 누구인지보다 「내가 당했다」는 사실 자체가 중요 — 일상 대화에서도 행위자를 모르면 수동태가 자연스럽다' },
        ],
      },
      { type: 'heading', text: '상황 ② 뉴스 기사 — 행위의 대상이 행위자보다 중요할 때' },
      {
        type: 'p',
        text: '뉴스에서는 사건을 일으킨 주체보다, 그 사건으로 인해 영향을 받은 대상(피해자, 결과물)이 독자에게 더 중요한 정보인 경우가 많습니다. 이때도 수동태가 자연스럽게 선택됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Three people were injured in the traffic accident.', ko: '그 교통사고로 세 명이 부상을 입었다.', note: '사고를 낸 사람보다 부상자 수가 기사의 초점' },
          { en: 'The bridge was damaged by the storm.', ko: '그 다리는 폭풍으로 파손되었다.', note: '행위자(the storm)가 자연현상이라 밝혀도 무방 — by 유지' },
          { en: 'A new vaccine was developed by researchers.', ko: '새로운 백신이 연구자들에 의해 개발되었다.', note: '백신(성과) 자체가 헤드라인의 주인공' },
        ],
      },
      { type: 'heading', text: '상황 ③ 공식·객관적 어조 — 보고서와 학술 글' },
      {
        type: 'p',
        text: '학술 논문이나 공식 보고서에서는 글쓴이 개인(주어)을 드러내지 않고 사실과 절차를 객관적으로 전달하는 것이 관례입니다. 그래서 「누가 했다」보다 「무엇이 어떻게 되었다」는 방식의 서술, 즉 수동태가 선호됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The data were collected over six months.', ko: '데이터는 6개월에 걸쳐 수집되었다.', note: '누가 수집했는지보다 절차 자체가 중요한 학술 서술' },
          { en: 'The results were analyzed carefully.', ko: '결과는 신중하게 분석되었다.', note: '보고서·논문에 어울리는 객관적 어조' },
          { en: 'The proposal was approved by the committee.', ko: '그 제안은 위원회에 의해 승인되었다.', note: '승인 주체(위원회)를 밝혀야 하는 공식 문서 — by 유지' },
        ],
      },
      {
        type: 'callout',
        title: '수동태를 쓰는 세 가지 이유',
        items: [
          '① 행위의 주체보다 대상(객체)을 강조할 때 — The book was published last year.',
          '② 행위의 주체를 모르거나 밝히고 싶지 않을 때 — The window was broken.',
          '③ 공식적이고 객관적인 어조가 필요할 때 — 학술 글, 보고서, 뉴스 기사 등',
        ],
      },
      {
        type: 'icon-row',
        caption: '수동태를 쓰는 이유, 한눈에 보기',
        items: [
          { icon: '📦', label: '대상(객체) 강조', sub: 'The book was published last year.' },
          { icon: '❓', label: '행위자를 모름·숨김', sub: 'The window was broken.' },
          { icon: '📰', label: '공식적·객관적 어조', sub: '학술 글, 보고서, 뉴스 기사 등' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수' },
      {
        type: 'p',
        text: '수동태를 처음 배울 때 특히 자주 나오는 실수 세 가지를 짚어 보겠습니다. by 뒤에 오는 대명사의 격을 잘못 쓰는 것, 목적어가 없는 문장을 억지로 수동태로 만들려는 것, 그리고 과거분사가 아닌 다른 형태를 be동사 뒤에 쓰는 것입니다.',
      },
      {
        type: 'table',
        caption: '자주 틀리는 표현과 올바른 표현',
        headers: ['실수 유형', '틀린 표현', '바른 표현', '설명'],
        rows: [
          [
            'by 뒤에 주격 사용',
            'The cake was baked by she.',
            'The cake was baked by her.',
            'by는 전치사이므로 뒤에는 반드시 목적격(her, him, them 등)이 와야 한다. 주격 she는 올 수 없다.',
          ],
          [
            '목적어 없는 문장(자동사)을 수동태로 전환',
            '*The party was arrived by him.',
            'He arrived at the party.',
            'arrive는 목적어를 취하지 않는 자동사이므로 수동태를 만들 수 없다. 목적어가 있는 3형식 이상의 문장만 수동태로 바꿀 수 있다.',
          ],
          [
            '자동사에 수동태를 적용',
            '*The accident was happened yesterday.',
            'The accident happened yesterday.',
            'happen도 목적어가 없는 자동사이다. 「사고가 발생했다」는 능동태로만 표현한다.',
          ],
          [
            '과거분사 대신 동사원형·현재분사 사용',
            '*The rabbit was hunt by the hunter.',
            'The rabbit was hunted by the hunter.',
            'be동사 뒤에는 반드시 과거분사(p.p.)가 와야 한다. hunt(원형)나 hunting(현재분사)을 쓰면 문법적으로 성립하지 않는다.',
          ],
        ],
      },
      {
        type: 'note',
        text: '**수동태를 만들 수 있으려면 능동태 문장에 반드시 목적어가 있어야 합니다.** 목적어가 없는 1형식·2형식 문장(자동사 문장)은 수동태로 바꿀 수 없다는 점을 항상 먼저 확인하세요. 그리고 「무엇을 목적어로 삼아야 할지 애매할 때」는 능동태 문장을 먼저 떠올려 목적어가 실제로 존재하는지 확인하는 습관이 실수를 줄이는 가장 확실한 방법입니다.',
      },
    ],
  },

  'ch20-2': {
    title: '수동태 만드는 방법과 형식별 전환',
    blocks: [
      { type: 'heading', text: '수동태 만드는 5단계' },
      {
        type: 'p',
        text: '**수동태의 기본 구조는 「주어 + be동사 + 과거분사 + (by + 행위자)」입니다.** 능동태 문장을 이 구조로 바꾸는 과정을 단계별로 살펴보겠습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '능동태 (원문)',
        parts: [
          { tag: 'S', text: 'The chef' },
          { tag: 'V', text: 'cooks' },
          { tag: 'O', text: 'the meal' },
        ],
        translation: '주방장이 음식을 요리한다.',
      },
      {
        type: 'table',
        caption: '능동태 → 수동태 전환 5단계',
        headers: ['단계', '내용', '결과'],
        rows: [
          ['1', '능동태 문장의 목적어를 수동태 문장의 주어로 이동', 'The meal'],
          ['2', '능동태의 시제·주어에 맞추어 be동사 추가', 'The meal is'],
          ['3', '능동태 동사를 과거분사로 변경', 'is cooked'],
          ['4', '행위자를 by + 목적격으로 만들어 필요에 따라 추가', 'by the chef'],
          ['5', '수동태 문장 완성', 'The meal is cooked (by the chef).'],
        ],
      },
      {
        type: 'sentence-diagram',
        label: '수동태 (완성)',
        parts: [
          { tag: 'S', text: 'The meal' },
          { tag: 'V', text: 'is cooked' },
          { tag: 'M', text: '(by the chef)' },
        ],
        translation: '음식이 (주방장에 의해) 요리된다.',
      },
      {
        type: 'note',
        text: '행위자(by + 목적격)는 그것이 중요하거나 문맥상 반드시 필요할 때만 남기고, 중요하지 않거나 문맥상 명백할 때는 생략하는 것이 일반적입니다. 「생략 가능」이라는 말이 「생략해야 한다」는 뜻은 아니라는 점도 함께 기억하세요 — 행위자를 밝히는 것이 문장의 핵심 정보라면 by는 반드시 남아야 합니다.',
      },
      {
        type: 'p',
        text: '원준이는 지평선중학교의 짱으로 학교를 재패하고 있었습니다. 전교생 누구도 나서지 못하던 어느 날, 전학생 한 명이 나타나 옥상에서 정정당당히 싸워보자고 했습니다. 자신만만했던 원준이는 이를 받아들였지만, 모두의 예상과 달리 전학생이 승리했고 이 소문은 빠르게 학교에 퍼졌습니다. 이 상황에서는 「누가 이겼는지」가 아니라 「원준이가 누구에게 패배했는지」가 핵심 정보이므로, by 이하를 반드시 남겨야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Wonjun was defeated by the transfer student!', ko: '원준이가 전학생에 의해 패배하였다고!', note: '누구에게 패배했는지가 핵심 정보이므로 by를 반드시 남김' },
        ],
      },
      { type: 'heading', text: '3형식 문장의 수동태 — 단계별 전환' },
      {
        type: 'p',
        text: '**3형식(S+V+O)은 목적어가 하나뿐이므로, 목적어를 그대로 주어로 옮기고 동사를 be+p.p.로 바꾸면 수동태가 완성됩니다.** 아래에서 세 가지 이동을 하나씩 나누어 보겠습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '3형식 능동태',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'wrote' },
          { tag: 'O', text: 'the letter' },
        ],
        translation: '그녀는 그 편지를 썼다.',
      },
      {
        type: 'transform',
        from: [{ label: '능동태의 목적어', text: 'the letter' }],
        to: { label: '수동태의 주어', text: 'The letter' },
        note: '목적어가 문장 맨 앞으로 이동해 주어가 된다.',
      },
      {
        type: 'transform',
        from: [{ label: '능동태의 동사', text: 'wrote' }],
        to: { label: 'be동사 + 과거분사', text: 'was written' },
        note: '동사는 주어(단수)와 시제(과거)에 맞춘 be동사 + 과거분사가 된다.',
      },
      {
        type: 'transform',
        from: [{ label: '능동태의 주어', text: 'She' }],
        to: { label: 'by + 목적격', text: 'by her' },
        note: '원래 주어는 by + 목적격이 되어 문장 끝으로 이동하며, 문맥상 불필요하면 생략할 수 있다.',
      },
      {
        type: 'sentence-diagram',
        label: '3형식 수동태 (완성)',
        parts: [
          { tag: 'S', text: 'The letter' },
          { tag: 'V', text: 'was written' },
          { tag: 'M', text: '(by her)' },
        ],
        translation: '그 편지는 (그녀에 의해) 쓰였다.',
      },
      { type: 'heading', text: '4형식 문장의 수동태 — 어느 목적어가 주어가 되는가' },
      {
        type: 'p',
        text: '앞서 살펴본 「주어 + 동사 + 목적어」의 순서가 바뀌면 화자가 전달하려는 의미도 달라진다는 원리는, 수여동사가 쓰인 4형식 문장에도 그대로 적용됩니다. **4형식(S+V+O1+O2)은 목적어가 두 개(사람 목적어, 사물 목적어)이므로 수동태로 바꿀 때 둘 중 어느 것을 주어로 삼을지 선택할 수 있고, 어느 쪽을 주어로 세우느냐에 따라 문장이 강조하는 대상도 달라집니다.** 일반적으로 사람 목적어를 주어로 세우는 것이 더 자연스럽고, 사물 목적어를 주어로 세우면 남은 사람 목적어 앞에 전치사(to, for 등)를 붙여야 합니다.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식 능동태',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'gave' },
          { tag: 'O1', text: 'her' },
          { tag: 'O2', text: 'the ring' },
        ],
        translation: '그는 그녀에게 반지를 주었다.',
      },
      { type: 'heading', text: '(1) 사람 목적어를 주어로 세우는 경우' },
      {
        type: 'transform',
        from: [{ label: '사람 목적어(O1)', text: 'her' }],
        to: { label: '수동태의 주어', text: 'She' },
        note: '사람 목적어가 주어로 이동한다. 남은 사물 목적어(the ring)는 동사 뒤에 그대로 남는다.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식 수동태 (사람 목적어 → 주어)',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'was given' },
          { tag: 'O', text: 'the ring' },
          { tag: 'M', text: '(by him)' },
        ],
        translation: '그녀는 (그에 의해) 반지를 받았다.',
      },
      { type: 'heading', text: '(2) 사물 목적어를 주어로 세우는 경우' },
      {
        type: 'transform',
        from: [{ label: '사물 목적어(O2)', text: 'the ring' }],
        to: { label: '수동태의 주어', text: 'The ring' },
        note: '사물 목적어가 주어로 이동하면, 남은 사람 목적어(her) 앞에는 전치사 to를 붙여야 한다 (to her).',
      },
      {
        type: 'sentence-diagram',
        label: '4형식 수동태 (사물 목적어 → 주어)',
        parts: [
          { tag: 'S', text: 'The ring' },
          { tag: 'V', text: 'was given' },
          { tag: 'M', text: 'to her (by him)' },
        ],
        translation: '반지는 그녀에게 (그에 의해) 주어졌다.',
      },
      { type: 'heading', text: '(3) 전치사가 to가 아니라 for로 바뀌는 동사들' },
      {
        type: 'p',
        text: 'give형 동사(give, tell, teach, show, send 등)는 사물 목적어를 주어로 세울 때 to를 쓰지만, buy·make·cook·build·get형 동사는 「상대를 위해 무언가를 만들어 준다」는 의미가 강해 for를 씁니다. 아래 예문으로 확인해 보겠습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식 능동태 (buy)',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'bought' },
          { tag: 'O1', text: 'her' },
          { tag: 'O2', text: 'a bracelet' },
        ],
        translation: '그는 그녀에게 팔찌를 사 주었다.',
      },
      {
        type: 'transform',
        from: [{ label: '사물 목적어(O2)', text: 'a bracelet' }],
        to: { label: '수동태의 주어', text: 'A bracelet' },
        note: '사물 목적어가 주어로 이동하면, 남은 사람 목적어(her) 앞에는 전치사 for를 붙인다 (for her) — buy형 동사는 to가 아니라 for.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식 수동태 (buy → for)',
        parts: [
          { tag: 'S', text: 'A bracelet' },
          { tag: 'V', text: 'was bought' },
          { tag: 'M', text: 'for her (by him)' },
        ],
        translation: '팔찌는 그녀를 위해 (그에 의해) 사졌다.',
      },
      {
        type: 'icon-row',
        caption: '사물 목적어가 주어가 될 때, 남는 전치사는?',
        items: [
          { icon: '🎁', label: 'give형 동사', sub: 'to — give, tell, teach, show, send' },
          { icon: '🛍️', label: 'buy형 동사', sub: 'for — buy, make, cook, build, get' },
        ],
      },
      {
        type: 'note',
        text: '모든 4형식 동사가 두 가지 수동태를 다 허용하는 것은 아닙니다. explain·say·suggest·describe처럼 애초에 「사람 목적어 + 사물 목적어」의 4형식을 만들지 못하는 동사도 있습니다. 이런 동사는 항상 3형식(explain + 사물 + to + 사람)으로만 쓰이므로, He was explained the rule.처럼 사람을 주어로 세운 수동태는 성립하지 않습니다 — The rule was explained to him.처럼 사물만 주어가 될 수 있습니다.',
      },
      { type: 'heading', text: '5형식 문장의 수동태 — 목적격 보어는 그대로' },
      {
        type: 'p',
        text: '**5형식(S+V+O+O.C)은 목적어만 주어로 옮기고, 목적격 보어는 그대로 동사 뒤에 남겨둡니다.** 목적격 보어가 동사원형(원형부정사)이었던 경우, 수동태에서는 to부정사로 바뀌는 경우가 많다는 점에 주의해야 합니다.',
      },
      {
        type: 'sentence-diagram',
        label: '5형식 능동태',
        parts: [
          { tag: 'S', text: 'We' },
          { tag: 'V', text: 'call' },
          { tag: 'O', text: 'him' },
          { tag: 'OC', text: 'Tom' },
        ],
        translation: '우리는 그를 Tom이라고 부른다.',
      },
      {
        type: 'transform',
        from: [{ label: '목적어(O)', text: 'him' }],
        to: { label: '수동태의 주어', text: 'He' },
        note: '목적어만 주어로 이동한다. 목적격 보어(Tom)는 이동하지 않고 동사 뒤에 그대로 남는다.',
      },
      {
        type: 'sentence-diagram',
        label: '5형식 수동태',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'is called' },
          { tag: 'OC', text: 'Tom' },
          { tag: 'M', text: '(by us)' },
        ],
        translation: '그는 (우리에 의해) Tom이라고 불린다.',
      },
      {
        type: 'p',
        text: '목적격 보어의 종류에 따라 수동태로 바뀔 때 형태가 달라지는지 여부도 다릅니다. 명사·형용사 보어는 형태가 그대로 유지되지만, 사역동사(make, have, let)의 목적격 보어로 쓰인 원형부정사는 수동태에서 to부정사로 바뀝니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The news made her happy.', ko: '그 소식은 그녀를 행복하게 만들었다.', note: '목적격 보어가 형용사(happy)' },
          { en: 'She was made happy by the news.', ko: '그녀는 그 소식으로 행복해졌다.', note: '형용사 보어는 수동태에서도 형태가 그대로 유지됨 (to happy가 아님)' },
          { en: 'They made him clean the room.', ko: '그들은 그가 방을 청소하게 시켰다.', note: '목적격 보어가 동사원형(clean)' },
          { en: 'He was made to clean the room (by them).', ko: '그는 (그들에 의해) 방을 청소하도록 시킴을 당했다.', note: '수동태에서는 원형부정사가 to부정사로 바뀜' },
        ],
      },
      { type: 'heading', text: 'by가 아닌 전치사를 쓰는 수동태 관용표현' },
      {
        type: 'p',
        text: '수동태 뒤에 항상 by가 오는 것은 아닙니다. 감정·상태를 나타내는 몇몇 표현은 by 대신 특정 전치사와 짝을 이루어 관용적으로 쓰이며, 이때 뒤에 오는 것은 「행위자」가 아니라 감정의 「원인·대상」인 경우가 많습니다.',
      },
      {
        type: 'table',
        caption: 'by 이외의 전치사를 쓰는 수동태 표현',
        headers: ['표현', '의미', '예문', '해석'],
        rows: [
          ['be interested in', '~에 관심이 있다', 'She has been interested in astronomy since she was a child.', '그녀는 어릴 때부터 천문학에 관심이 있었다.'],
          ['be surprised at', '~에 놀라다', 'We were all surprised at the sudden announcement.', '우리는 그 갑작스러운 발표에 모두 놀랐다.'],
          ['be pleased with', '~에 만족하다/기뻐하다', 'The coach was pleased with the team’s performance.', '감독은 팀의 경기력에 만족했다.'],
          ['be disappointed with/at', '~에 실망하다', 'He was disappointed with the final result.', '그는 최종 결과에 실망했다.'],
          ['be covered with', '~로 덮여 있다', 'The mountain top was covered with snow all winter.', '산 정상은 겨울 내내 눈으로 덮여 있었다.'],
          ['be filled with', '~로 가득 차 있다', 'The stadium was filled with excited fans before the match.', '경기 전 경기장은 흥분한 팬들로 가득했다.'],
          ['be known for', '~로 알려져 있다', 'This town is known for its ancient ruins.', '이 마을은 고대 유적으로 알려져 있다.'],
          ['be worried about', '~에 대해 걱정하다', 'The parents were worried about the exam results.', '부모님은 시험 결과에 대해 걱정했다.'],
          ['be satisfied with', '~에 만족하다', 'The customer was satisfied with the service.', '그 고객은 서비스에 만족했다.'],
          ['be married to', '~와 결혼한 상태이다', 'My aunt has been married to a doctor for ten years.', '나의 이모는 10년째 한 의사와 결혼한 상태이다.'],
          ['be composed of', '~로 구성되어 있다', 'The committee is composed of five experts from different fields.', '그 위원회는 다양한 분야의 전문가 다섯 명으로 구성되어 있다.'],
        ],
      },
      {
        type: 'note',
        text: '이러한 표현은 「be + 과거분사 + 전치사」가 하나의 세트로 굳어진 관용구입니다. 전치사를 by로 바꾸면 의미가 어색해지거나 완전히 달라지므로, 동사(형용사화된 과거분사)마다 짝이 되는 전치사를 따로 외워두어야 합니다. 예를 들어 be interested by라고 쓰면 어색하고, 반드시 be interested in이어야 자연스러운 것처럼, 각 표현은 by가 아닌 고유한 전치사와 통째로 기억하는 것이 안전합니다.',
      },
      { type: 'heading', text: '시제 확장 — 진행형과 완료형의 수동태' },
      {
        type: 'p',
        text: '지금까지 살펴본 수동태 문장은 대부분 단순시제(현재·과거·미래)였습니다. 그런데 능동태에 진행형(be + -ing)이나 완료형(have + p.p.)이 쓰인 문장도 얼마든지 수동태로 바꿀 수 있습니다. **원리는 지금까지와 똑같습니다 — 능동태 동사의 시제·형태를 be동사가 그대로 넘겨받고, 본동사 자리에는 과거분사가 옵니다.** 다만 진행형·완료형이 수동태와 만나면 be동사 자리에 단어가 여러 개 겹쳐 나타나므로, 그 순서를 정확히 익혀두어야 합니다.',
      },
      {
        type: 'table',
        caption: '진행형·완료형 수동태의 형태',
        headers: ['능동태 형태', '수동태 형태', '예시'],
        rows: [
          ['현재진행 (is/am/are + -ing)', 'is/am/are + being + p.p.', 'They are watching the movie. → The movie is being watched.'],
          ['과거진행 (was/were + -ing)', 'was/were + being + p.p.', 'Secret agents were watching him. → He was being watched.'],
          ['현재완료 (has/have + p.p.)', 'has/have + been + p.p.', 'She has fed the cats. → The cats have been fed.'],
          ['과거완료 (had + p.p.)', 'had + been + p.p.', 'The organizer had canceled the party. → The party had been canceled.'],
          ['미래완료 (will have + p.p.)', 'will have + been + p.p.', 'The mechanic will have fixed the car. → The car will have been fixed by 5pm.'],
        ],
      },
      {
        type: 'icon-row',
        caption: 'being vs been — 진행 중인가, 이미 끝났는가',
        items: [
          { icon: '⏳', label: 'being + p.p.', sub: '~되고 있는 중 (진행)' },
          { icon: '✅', label: 'been + p.p.', sub: '~된 상태 (완료)' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'He was being watched by secret agents.', ko: '그는 비밀 요원들에게 감시당하고 있었다.', note: '과거진행 수동태 — was being + p.p.' },
          { en: 'The students were being taught how to write good essays.', ko: '학생들은 좋은 에세이를 쓰는 법을 배우고 있었다.' },
          { en: 'The cats have already been fed.', ko: '고양이들은 이미 밥을 먹었다.', note: '현재완료 수동태 — 과거의 행동이 현재까지 영향을 미침' },
          { en: 'All the smoke detectors have been replaced.', ko: '모든 화재경보기가 교체되었다.' },
          { en: 'The party had already been canceled when we arrived.', ko: '우리가 도착했을 때 파티는 이미 취소되어 있었다.', note: '과거완료 수동태 — 과거의 한 시점보다 더 이전에 일어난 일' },
          { en: 'The car will have been fixed by 5pm.', ko: '그 차는 5시까지는 수리가 완료되어 있을 것이다.', note: '미래완료 수동태 — will have been + p.p.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '진행형 수동태',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'was being watched' },
          { tag: 'M', text: 'by secret agents' },
        ],
        translation: '그는 비밀 요원들에게 감시당하고 있었다. (진행형 수동태: be + being + p.p.)',
      },
      {
        type: 'note',
        text: '진행형 수동태와 완료형 수동태를 구분하는 열쇠는 being과 been입니다. **진행 중임을 강조할 때는 being(~되고 있는 중), 이미 끝나 그 결과가 남아 있음을 강조할 때는 been(~된 상태)을 씁니다.** 두 단어의 형태가 비슷해 혼동하기 쉬우므로 뜻으로 구분하는 습관을 들이는 것이 좋습니다. 또한 know, belong, resemble처럼 상태를 나타내는 동사는 애초에 진행형을 만들지 않으므로 진행형 수동태로도 쓰이지 않습니다.',
      },
      { type: 'heading', text: '조동사와 함께 쓰는 수동태' },
      {
        type: 'p',
        text: '조동사(can, should, must, may, will 등)가 있는 문장도 수동태로 만들 수 있습니다. **조동사 뒤에는 항상 동사원형이 온다는 원칙이 수동태에서도 그대로 유지되므로, 조동사 다음에는 be동사의 원형인 be가 오고 그 뒤에 과거분사가 이어집니다.** 즉 조동사 수동태의 형태는 「조동사 + be + p.p.」로 고정되며, 주어의 인칭이나 수와 관계없이 be의 형태가 절대 변하지 않는다는 점이 일반 수동태와 다릅니다.',
      },
      {
        type: 'table',
        caption: '조동사 수동태의 형태',
        headers: ['능동태', '수동태', '의미'],
        rows: [
          ['You should tell Barbara.', 'Barbara should be told.', '~되어야 한다'],
          ['You can open the chest with a key.', 'The chest can be opened with a key.', '~될 수 있다'],
          ['You must show new employees what to do.', 'New employees must be shown what to do.', '~되어야만 한다'],
          ['The managers should have given Daniel more time.', 'Daniel should have been given more time.', '완료형 조동사 수동태 — ~되었어야 했다(그러나 안 됨)'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'The package should be delivered to your office.', ko: '그 소포는 당신의 사무실로 배달되어야 한다.' },
          { en: 'The treasure chest can only be opened with a special key.', ko: '그 보물 상자는 특별한 열쇠로만 열릴 수 있다.' },
          { en: 'All new employees must be shown what to do in a fire.', ko: '모든 신입 직원들은 화재 시 무엇을 해야 하는지 안내받아야 한다.' },
          { en: 'We should have been told that the concert was canceled!', ko: '우리는 콘서트가 취소되었다는 것을 통보받았어야 했다!', note: '조동사 + have been + p.p. — 과거에 실현되지 않은 일에 대한 아쉬움' },
          { en: 'The robber would have been arrested if he hadn’t been so quick.', ko: '그 강도는 그렇게 빠르지 않았다면 체포되었을 것이다.' },
          { en: 'Lots of people think the fire could have been prevented.', ko: '많은 사람들은 그 화재가 예방될 수 있었다고 생각한다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '조동사 수동태',
        parts: [
          { tag: 'S', text: 'Barbara' },
          { tag: 'V', text: 'should be told' },
          { tag: 'O', text: 'the exciting news' },
        ],
        translation: 'Barbara should be told the exciting news. (조동사+be+p.p. — be는 항상 원형)',
      },
      {
        type: 'note',
        text: '완료형 조동사 수동태(조동사+have been+p.p.)는 「~되었어야 했는데 (실제로는 안 되었다)」처럼 과거 사실과 반대되는 아쉬움·후회·추측을 나타낼 때 특히 자주 쓰입니다. should have been + p.p.(되었어야 했다), could have been + p.p.(될 수도 있었다), must have been + p.p.(분명 되었을 것이다) 등이 대표적입니다.',
      },
      {
        type: 'table',
        caption: '조동사 수동태에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*Barbara should told the news.', 'Barbara should be told the news.', '조동사 다음에는 반드시 be가 와야 한다. 조동사 뒤에 be를 빠뜨리는 것은 매우 흔한 실수이다.'],
          ['*He should has been told.', 'He should have been told.', '완료형 조동사 수동태는 have been이며 has been이 아니다 — 조동사 뒤에는 항상 원형(have)이 온다.'],
        ],
      },
      { type: 'heading', text: '보고동사를 이용한 수동태 관용구문' },
      {
        type: 'p',
        text: 'say, believe, think, know, report, consider, expect처럼 소문·의견·추측을 나타내는 동사(보고동사)는 능동태로 쓰면 「People say that ~」처럼 막연한 주어(people, they, someone)를 써야 해서 어색한 경우가 많습니다. 이때 영어는 수동태를 이용해 막연한 행위자를 아예 지우고, 사실이나 의견 자체를 문장의 중심에 놓는 세 가지 관용적인 구문을 사용합니다.',
      },
      {
        type: 'table',
        caption: '보고동사 수동태 구문 세 가지',
        headers: ['구문', '형태', '예문'],
        rows: [
          ['가주어 It', 'It is/was + p.p. + that절', 'It is said that three sailors have disappeared. (선원 세 명이 실종되었다고 한다.)'],
          ['주어 + be + p.p. + to부정사', 'S + is/was + p.p. + to부정사', 'The race is known to be extremely dangerous. (그 경주는 매우 위험한 것으로 알려져 있다.)'],
          ['There + be + p.p. + to be', 'There is/are + p.p. + to be ~', 'There are said to be at least 20 boats in the search party. (수색대에 최소 20척의 배가 있다고 한다.)'],
        ],
      },
      {
        type: 'transform',
        from: [{ label: 'It + 수동태 + that절', text: 'It is said that the race is dangerous.' }],
        to: { label: 'that절의 주어 → 문장의 주어', text: 'The race is said to be dangerous.' },
        note: 'that절의 주어(The race)를 문장 전체의 주어 자리로 끌어올리고, that절의 동사는 to부정사(to be dangerous)로 바꾼다.',
      },
      {
        type: 'note',
        text: '세 구문 모두 「사람들이 ~라고 말한다/생각한다/안다」는 의미를 문장 앞에 명시하지 않고 표현하는 방법입니다. that절을 쓰는 첫 번째 구문이 가장 기본이며, that절의 주어를 문장 전체의 주어 자리로 끌어올리면 두 번째(to부정사) 구문이 됩니다. that절이 「there is/are ~」 구문이었을 경우에는 there를 그대로 주어 자리로 끌어올려 세 번째 구문이 만들어집니다. 즉 두 번째·세 번째 구문은 첫 번째 구문에서 that절의 주어를 문장 앞으로 옮긴 결과이므로, 세 형태를 뿔뿔이 흩어진 표현으로 외우기보다 하나의 원리에서 나온 변형으로 이해하면 기억하기 쉽습니다. 참고로 that절이 문장의 시제보다 더 이전 시점을 나타낼 때는 to부정사 대신 「to have + p.p.」를 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It has been reported that three sailors have disappeared.', ko: '선원 세 명이 실종되었다고 보도되었다.' },
          { en: 'It is rumored that wolves live in these woods.', ko: '이 숲에 늑대가 산다는 소문이 있다.' },
          { en: 'The worksite is said to be unsafe for workers.', ko: '그 작업 현장은 근로자들에게 안전하지 않다고 한다.' },
          { en: 'The new school is thought to have the best teachers in the country.', ko: '그 신설 학교는 전국에서 가장 훌륭한 교사진을 갖추고 있다고 여겨진다.', note: 'to have + p.p. — that절이 문장보다 더 이전 시점을 나타낼 때' },
          { en: 'There is thought to be a problem with crime here.', ko: '이곳에는 범죄 문제가 있다고 여겨진다.' },
          { en: 'There are said to be pros and cons to moving abroad.', ko: '해외 이주에는 장단점이 있다고들 한다.' },
        ],
      },
      { type: 'heading', text: 'get 수동태 — 구어체의 수동태' },
      {
        type: 'p',
        text: 'be동사 대신 get을 사용해도 수동태를 만들 수 있습니다. **get 수동태는 be 수동태보다 더 격식 없고 구어적인 표현으로, 특히 사고·변화처럼 갑작스럽거나 예상치 못한 일이 벌어졌음을 나타낼 때 즐겨 쓰입니다.** 원리는 be 수동태와 같아서, get 뒤에는 반드시 과거분사가 옵니다.',
      },
      {
        type: 'table',
        caption: 'get 수동태와 be 수동태 비교',
        headers: ['형태', '예문', '뉘앙스'],
        rows: [
          ['be + p.p.', 'My bike was stolen.', '중립적 — 격식체에도 어울림'],
          ['get + p.p.', 'My bike got stolen.', '구어체 — 갑작스러운 사건·변화의 느낌이 강함'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Bikes get stolen in this town every day.', ko: '이 동네에서는 매일 자전거를 도둑맞는다.' },
          { en: 'My laptop gets updated every week by the IT team.', ko: '내 노트북은 매주 IT팀에 의해 업데이트된다.' },
          { en: 'Did you know that the company was getting sold?', ko: '그 회사가 매각되고 있었다는 것을 알고 있었니?', note: 'get의 진행형(was getting)도 가능' },
          { en: 'I hope the air conditioning will get fixed soon.', ko: '에어컨이 곧 고쳐지길 바란다.' },
        ],
      },
      {
        type: 'note',
        text: 'get 수동태는 get married(결혼하다), get hurt(다치다), get lost(길을 잃다), get stuck(꼼짝 못하게 되다)처럼 이미 굳어진 관용구로도 자주 쓰입니다. 다만 get 수동태는 회화체에 훨씬 잘 어울리므로, 학술문·공식 문서에서는 be 수동태를 쓰는 것이 안전합니다.',
      },
      {
        type: 'table',
        caption: '확장된 수동태 형태에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*He was being watch by them.', 'He was being watched by them.', '진행형 수동태에서도 동사는 반드시 과거분사여야 한다. 원형(watch)을 쓰면 안 된다.'],
          ['*The cats has been fed.', 'The cats have been fed.', '완료형 수동태의 have/has는 주어의 인칭·수에 맞춘다. 복수 주어(the cats)에는 have.'],
          ['*My bike got stole yesterday.', 'My bike got stolen yesterday.', 'get 수동태도 be 수동태와 마찬가지로 get 뒤에는 과거분사가 와야 한다.'],
        ],
      },
      { type: 'heading', text: '형식 전환에서 흔히 하는 실수' },
      {
        type: 'p',
        text: '3·4·5형식을 수동태로 바꿀 때 특히 자주 나오는 실수들을 짚어 보겠습니다.',
      },
      {
        type: 'table',
        caption: '형식별 전환에서 자주 틀리는 표현',
        headers: ['실수 유형', '틀린 표현', '바른 표현', '설명'],
        rows: [
          [
            '4형식에서 전치사 누락',
            'The ring was given her by him.',
            'The ring was given to her by him.',
            '사물 목적어를 주어로 세우면 남은 사람 목적어 앞에 전치사(to)를 반드시 붙여야 한다. give형 동사는 to, buy·make형 동사는 for를 쓴다.',
          ],
          [
            '4형식에서 전치사를 잘못 선택',
            'A bracelet was bought to her by him.',
            'A bracelet was bought for her by him.',
            'buy, make, cook, build처럼 「~을 위해 만들어 준다」는 의미의 동사는 to가 아니라 for를 쓴다. 동사마다 짝이 되는 전치사가 다르므로 확인이 필요하다.',
          ],
          [
            '5형식에서 to부정사 누락',
            'He was made clean the room by them.',
            'He was made to clean the room by them.',
            '목적격 보어가 원형부정사였던 문장을 수동태로 바꾸면, make·have·let 등 사역동사의 원형부정사는 to부정사로 바뀐다.',
          ],
          [
            '4형식이 성립하지 않는 동사를 사람 주어로 전환',
            '*He was explained the rule.',
            'The rule was explained to him.',
            'explain, say, suggest, describe는 4형식(사람+사물)을 만들 수 없는 동사이다. 항상 사물만 주어로 삼을 수 있고, 사람은 to로 연결한다.',
          ],
        ],
      },
      {
        type: 'callout',
        title: '20장 핵심 정리',
        items: [
          '수동태 = 주어 + be동사 + 과거분사 + (by + 목적격). 과거분사는 형용사이므로 be동사가 반드시 필요하다.',
          '능동태의 목적어 → 수동태의 주어, 능동태의 주어 → by + 목적격(생략 가능). by 뒤에는 반드시 목적격이 온다.',
          '수동태는 행위자보다 행위의 대상·결과를 강조할 때, 행위자를 모르거나 밝히고 싶지 않을 때, 공식적·객관적 어조가 필요할 때 쓰인다.',
          '목적어가 없는 자동사 문장(1·2형식)은 수동태로 바꿀 수 없다.',
          '4형식은 사람·사물 목적어 중 하나를 주어로 선택할 수 있고, 사물을 주어로 세울 때는 남은 목적어 앞에 give형은 to, buy형은 for를 붙여야 한다. explain·say형 동사는 애초에 4형식이 성립하지 않아 사람을 주어로 세울 수 없다.',
          '5형식은 목적어만 주어로 옮기고 목적격 보어는 그대로 남기며, 목적격 보어가 동사원형이면 수동태에서 to부정사로 바뀌지만 형용사·명사 보어는 형태가 유지된다.',
          'be interested in, be surprised at처럼 by가 아닌 전치사와 짝을 이루는 수동태 관용표현은 세트로 외워야 한다.',
          '진행형 수동태는 be+being+p.p., 완료형 수동태는 be+been+p.p.로 만든다 — being은 진행 중임을, been은 이미 끝난 상태임을 나타낸다.',
          '조동사가 있는 문장의 수동태는 「조동사+be+p.p.」이며, 완료형이면 「조동사+have been+p.p.」이다. 조동사 뒤에는 항상 원형이 온다는 원칙이 수동태에도 그대로 적용된다.',
          'It is said that ~, S+be known/said+to부정사, There is/are said+to be~는 소문·의견을 나타내는 보고동사의 대표적인 수동태 관용구문이며, 셋 다 같은 원리(that절 주어를 문장 주어로 끌어올림)에서 나온 변형이다.',
          'get+p.p.는 be+p.p.보다 구어적이며, 갑작스러운 사고·변화를 나타낼 때 자주 쓰인다.',
        ],
      },
    ],
  },
}
