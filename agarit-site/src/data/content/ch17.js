export const ch17 = {
  'ch17-1': {
    title: '사역동사 make, have, let',
    blocks: [
      {
        type: 'p',
        text: '사역(使役)의 사전적 의미는 ‘목적어(사람 또는 사물)에게 무엇인가를 시킨다’는 뜻입니다. 어떤 일의 원인이 되게 하는 행위를 나타내는 동사는 넓게 보면 모두 사역동사로 볼 수 있지만, 여기서는 make, have, let, help처럼 좁은 범주의 대표적인 사역동사만 살펴봅니다.',
      },
      {
        type: 'note',
        text: '한국어의 ‘시키다’는 보통 나이가 많은 사람이 나이가 적은 사람에게 무엇인가를 하게 하는 수직적인 느낌이 강합니다. 반면 영어의 사역동사는 가족관계, 고용관계, 수직관계 등에서 ‘말하는 대상이 그 행위를 해줄 것이라는 기대’가 있을 때 폭넓게 사용됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I had my husband wash the car.', ko: '나는 내 남편에게 세차를 하라고 했다.', note: '남편이 해줄 것으로 기대하여' },
          { en: 'I had John finish the report.', ko: '나는 John에게 리포트를 끝내라고 했다.', note: '할 것으로 생각하여' },
          { en: 'I had my mom babysit my son.', ko: '나는 엄마에게 내 아들을 돌봐주라고 했다.', note: '해주겠다고 생각하여' },
        ],
      },
      { type: 'heading', text: '사역동사를 쓰는 이유: 내가 하는 것과 시켜서 되는 것' },
      {
        type: 'p',
        text: '사역동사는 주어가 동사의 행위를 직접 한 것이 아니라, 목적어에게 어떠한 행위를 하도록 시켜서 그 행위가 일어나게 한 경우에 사용합니다. 즉 문장 안에 ‘행위를 하는 사람(목적어)’과 ‘그 행위가 일어나게 만든 사람(주어)’이 분리되어 있다는 점이 사역동사 구문의 핵심입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I cut my hair.', ko: '나는 (내가 직접) 머리를 잘랐다.', note: '주어=행위자' },
          { en: 'I had my wife cut my hair.', ko: '나는 나의 아내에게 내 머리를 자르도록 했다.', note: '주어≠행위자: 아내가 자름' },
        ],
      },
      { type: 'heading', text: '기본 구조: 주어 + 사역동사 + 목적어 + 동사원형' },
      {
        type: 'p',
        text: 'make, have, let은 목적어 뒤에 목적격 보어로 동사원형을 취해 5형식 문장을 만듭니다. 이때 목적어와 목적격 보어는 능동 관계(목적어가 그 행위를 직접 하는 관계)에 있습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '5형식',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'had' },
          { tag: 'O', text: 'my wife' },
          { tag: 'OC', text: 'cut my hair' },
        ],
        translation: '나는 아내에게 내 머리를 자르도록 했다. (my wife가 직접 자르는 능동 관계)',
      },
      {
        type: 'example',
        items: [
          { en: 'The book will help you improve your English skills.', ko: '그 책은 네가 영어를 잘할 수 있게 도와줄 거야.' },
          { en: 'I had my lawyer check the case.', ko: '나는 내 변호사에게 그 사건을 검토해달라고 했다.' },
        ],
      },
      {
        type: 'p',
        text: '그런데 목적어 뒤에 항상 동사원형이 오는 것은 아닙니다. 위 문장들과 똑같이 목적어 + 목적격 보어 구조를 가지지만, want나 think 같은 동사는 목적격 보어로 to부정사를 취합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I want you to have a good time.', ko: '나는 네가 좋은 시간을 보내길 바라.', note: 'want + 목적어 + to have' },
          { en: 'I think him to be a good singer.', ko: '나는 그가 좋은 가수라고 생각해.', note: 'think + 목적어 + to be' },
        ],
      },
      {
        type: 'note',
        text: '앞의 improve, check는 동사원형인데, 방금 본 to have, to be는 to부정사입니다. 우리가 알아야 할 것은 바로 이 지점, ‘왜 사역동사가 쓰인 문장에는 목적어 뒤에 동사원형이 오는가’입니다. 이 답을 찾으려면 먼저 명령문에서 동사원형이 쓰이는 이유를 다시 떠올려야 합니다.',
      },
      { type: 'heading', text: '왜 목적격 보어에 동사원형이 오는가: 명령문과 같은 원리' },
      {
        type: 'p',
        text: '동사의 시제는 그 행위가 언제 일어났는지를 나타내는 표시입니다. 그런데 명령문은 동사에 시제가 없습니다. 그 이유는 ‘문을 열어!’처럼 명령문이 지시하는 행동이 말하는 즉시 일어나기를 바라며 하는 말이기 때문에, 굳이 시제를 붙이지 않아도 문맥으로 그 행위의 시점을 알 수 있기 때문입니다.',
      },
      {
        type: 'p',
        text: '사역동사의 목적격 보어도 마찬가지입니다. to부정사의 to는 원래 방향이나 목표를 향해 ‘나아가는’ 이미지를 가지고 있어서, 동사와 그 행위 사이에 시간적·논리적 거리를 만듭니다. 반면 사역동사 뒤에서는 주어가 시킨 순간과 그 행위가 일어나는 순간이 거의 겹쳐지기를 바라는 느낌이 강하기 때문에, 그 거리감을 나타내는 to조차 필요 없어져 동사원형만 남는 것입니다.',
      },
      {
        type: 'sentence-diagram',
        label: '거리감 비교',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'want' },
          { tag: 'O', text: 'you' },
          { tag: 'OC', text: 'to have a good time' },
        ],
        translation: 'want + to have: 말하는 시점과 좋은 시간을 보내는 시점 사이에 시간적 거리감이 있음(지금 당장이 아니어도 됨)',
      },
      {
        type: 'sentence-diagram',
        label: '거리감 비교',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'had' },
          { tag: 'O', text: 'my wife' },
          { tag: 'OC', text: 'cut my hair' },
        ],
        translation: 'had + cut: 시킨 시점과 자르는 행위가 거의 동시에 일어나길 바라는 느낌이라 to 없이 동사원형만 씀',
      },
      {
        type: 'note',
        text: '즉, 영어의 동사원형은 ‘말하는 행위와 일어나야 하는 행위가 거의 동시에 이루어지길 바라는 상황’에서 쓰인다는 공통된 느낌을 가지고 있습니다. 이러한 동사원형의 느낌은 다음 장의 지각동사에서도 다시 확인할 수 있습니다.',
      },
      { type: 'heading', text: '같은 상황, 다른 동사: make / have / let의 어감 차이' },
      {
        type: 'p',
        text: 'make, have, let은 모두 ‘목적어 + 동사원형’ 구조를 취하지만, 주어와 목적어 사이의 관계와 힘의 방향이 다릅니다. 같은 상황(아이가 방을 치우게 하는 상황)을 세 동사로 바꿔 말하면 그 차이가 분명해집니다.',
      },
      {
        type: 'table',
        caption: '같은 상황, 다른 동사가 만드는 어감',
        headers: ['동사', '상황 속 화자의 태도', '예문'],
        rows: [
          ['make', '아이가 하기 싫어해도 강제로 시킨다(강제성).', 'I made my son clean his room. (하기 싫어했지만 억지로 치우게 했다)'],
          ['have', '아이가 해줄 것이라 기대하며 부탁·요청한다.', 'I had my son clean his room. (해줄 것으로 기대하고 부탁했다)'],
          ['let', '아이가 치우고 싶어 해서 허락해준다.', 'I let my son clean his room. (치우고 싶어 해서 허락해주었다)'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I make my wife cut my hair.', ko: '나는 아내에게 (강제로) 내 머리를 자르게 한다.', note: 'make: 강제성 — 아내의 의사와 무관하게 시킴' },
          { en: 'I have my wife cut my hair.', ko: '나는 (능력 있는) 아내에게 내 머리를 잘라달라고 부탁한다.', note: 'have: 부탁·요청 — 해줄 것이라는 기대' },
          { en: 'I let my wife cut my hair.', ko: '나는 아내가 내 머리를 잘라도 된다고 허락한다.', note: 'let: 허락 — 아내가 하고 싶어 하는 것을 막지 않음' },
        ],
      },
      {
        type: 'callout',
        title: '어감 구분 요령',
        items: [
          'make = 강제(억지로 시킴, 목적어의 의사와 무관)',
          'have = 요청·부탁(해줄 것이라는 자연스러운 기대)',
          'let = 허락(목적어가 원하는 것을 하도록 허용)',
          'help = 조력(목적어가 스스로 할 수 있도록 도움)',
        ],
      },
      {
        type: 'icon-row',
        caption: 'make · have · let · help의 어감 한눈에 보기',
        items: [
          { icon: '💪', label: 'make', sub: '강제로 시킴' },
          { icon: '🙋', label: 'have', sub: '부탁·요청' },
          { icon: '✅', label: 'let', sub: '허락' },
          { icon: '🤝', label: 'help', sub: '조력' },
        ],
      },
      { type: 'heading', text: 'help의 어감: 강제도 허락도 아닌 조력' },
      {
        type: 'p',
        text: 'help는 make, have, let과 달리 주어가 목적어의 행위를 대신 시키는 것이 아니라, 목적어가 스스로 그 행위를 하도록 곁에서 돕는다는 느낌입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I help my wife cut my hair.', ko: '나는 아내가 내 머리를 자를 수 있도록 도와준다.', note: 'help: 조력 — 아내가 직접 하도록 거들어줌' },
        ],
      },
      {
        type: 'table',
        caption: '사역동사별 어감 요약',
        headers: ['동사', '어감'],
        rows: [
          ['make', '다른 사람에게 강제로 시켜서 하게 하는 경우'],
          ['have', '능력을 갖춘 다른 사람에게 부탁하는 경우'],
          ['let', '다른 사람에게 해도 된다고 허락하여 다른 사람이 하는 경우'],
          ['help', '다른 사람을 도와 다른 사람이 직접 할 수 있게 하는 경우'],
        ],
      },
      { type: 'heading', text: '흔히 하는 실수: 사역동사 뒤에 to부정사를 쓰는 오류' },
      {
        type: 'note',
        text: 'make, have, let은 반드시 동사원형을 목적격 보어로 취합니다. 다른 5형식 동사(want, tell, ask 등)가 목적격 보어로 to부정사를 취하는 경우가 많다 보니, make/have/let 뒤에도 습관적으로 to를 붙이는 실수가 매우 흔합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*I made him to go.', ko: '(오류) 나는 그를 가게 만들었다.', note: 'make 뒤에는 to 없이 go만 와야 함' },
          { en: 'I made him go.', ko: '나는 그를 가게 만들었다.', note: '올바른 표현' },
          { en: '*She had me to wait outside.', ko: '(오류) 그녀는 내가 밖에서 기다리게 했다.', note: 'have 뒤에도 to는 오지 않음' },
          { en: 'She had me wait outside.', ko: '그녀는 내가 밖에서 기다리게 했다.', note: '올바른 표현' },
          { en: '*They let him to enter.', ko: '(오류) 그들은 그가 들어가는 것을 허락했다.', note: 'let 뒤에도 to는 오지 않음' },
          { en: 'They let him enter.', ko: '그들은 그가 들어가는 것을 허락했다.', note: '올바른 표현' },
        ],
      },
    ],
  },

  'ch17-2': {
    title: 'help, get + to부정사와 수동 관계의 목적격 보어',
    blocks: [
      { type: 'heading', text: '사역동사 help의 두 가지 구조' },
      {
        type: 'p',
        text: 'help는 누군가가 어떤 일을 하도록 도와주는 행위를 나타낼 때 쓰이는 사역동사입니다. 사역의 의미는 있지만 make, have, let보다는 그 강제성이 약합니다. help는 목적격 보어로 동사원형과 to부정사를 모두 취할 수 있습니다.',
      },
      {
        type: 'table',
        caption: 'help의 두 가지 구조',
        headers: ['구조', '예문', '느낌'],
        rows: [
          ['help + 목적어 + 동사원형', 'She helped me organize the party.', '직접적인 도움, 간결한 느낌'],
          ['help + 목적어 + to부정사', 'Can you help me to carry this box?', '조금 더 공손하거나 공식적인 느낌'],
        ],
      },
      {
        type: 'note',
        text: '두 구조는 의미 차이보다는 문법적인 차이와 뉘앙스 차이로 이해하면 됩니다. to를 생략한 동사원형 구조가 더 간결하고 직접적으로 느껴지는 이유도, 앞서 살펴본 것처럼 to가 만드는 거리감이 사라지기 때문입니다.',
      },
      { type: 'heading', text: 'get + 목적어 + to부정사: 사역의 의미, 다른 문법' },
      {
        type: 'p',
        text: 'get은 make, have, let과 의미상 비슷하게 ‘~하게 시키다’라는 뜻으로 쓰이지만, 목적격 보어로 동사원형이 아니라 to부정사를 취한다는 문법적인 차이가 있습니다. get은 상대를 직접적으로 강제하기보다 ‘설득해서, 애써서 하게 만든다’는 노력의 과정이 느껴지는 동사이고, 그 과정에서 생기는 시간적 거리감이 to로 나타난다고 이해하면 자연스럽습니다.',
      },
      {
        type: 'table',
        caption: 'get + to부정사 vs make/have/let + 동사원형',
        headers: ['구조', '어감', '예문'],
        rows: [
          ['make/have/let + 목적어 + 동사원형', '지시·요청·허락의 즉각성. 시킨 것과 행위가 거의 동시에 일어난다는 느낌.', 'I had him fix the printer.'],
          ['get + 목적어 + to부정사', '설득·유도의 과정. 목적어가 그 행위를 하게 되기까지 시간·노력이 개입된다는 느낌.', 'I got him to fix the printer.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I had him fix the printer.', ko: '나는 그에게 프린터를 고치게 했다.', note: '요청하면 곧바로 고치는 느낌' },
          { en: 'I got him to fix the printer.', ko: '나는 그를 설득해서 프린터를 고치게 했다.', note: 'get은 to부정사를 취하며, 설득·유도의 과정이 느껴짐' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (get)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'got' },
          { tag: 'O', text: 'him' },
          { tag: 'OC', text: 'to fix the printer' },
        ],
        translation: '나는 그를 설득해서 프린터를 고치게 했다.',
      },
      { type: 'heading', text: '사역의 의미를 가진 동사들의 목적격 보어 형태 정리' },
      {
        type: 'table',
        caption: '사역의 의미를 가진 동사의 목적격 보어 형태',
        headers: ['동사', '목적격 보어 형태', '예문'],
        rows: [
          ['make / have / let', '동사원형', 'I had him fix the printer.'],
          ['get', 'to부정사', 'I got him to fix the printer.'],
          ['help', '동사원형 또는 to부정사', 'I helped him (to) fix the printer.'],
        ],
      },
      { type: 'heading', text: '목적어와 목적격 보어의 능동 관계: 목적어가 직접 한다' },
      {
        type: 'p',
        text: '지금까지 살펴본 예문에서는 목적어가 목적격 보어가 나타내는 행위를 직접 하는 능동 관계였습니다. my wife가 자르고, him이 고치는 것처럼, 목적어는 그 행위의 주체입니다.',
      },
      { type: 'heading', text: '목적어와 목적격 보어의 수동 관계: 목적어가 당한다 → p.p.' },
      {
        type: 'p',
        text: '그런데 목적어가 그 행위를 직접 하는 것이 아니라 그 행위를 당하는 수동 관계라면 어떨까요? ‘머리를 자르다’라는 상황에서 my hair는 스스로 자를 수 없는 대상입니다. my hair의 입장에서는 ‘(누군가에 의해) 잘리는’ 것이므로, 목적어와 목적격 보어의 관계는 수동입니다. 이렇게 목적어가 행위를 당하는 입장일 때는 목적격 보어에 동사원형이나 to부정사가 올 수 없고, 반드시 과거분사(p.p.)가 와야 합니다. p.p.는 ‘당하는 대상’을 나타내는 형태이기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I had my hair cut.', ko: '나는 머리가 잘리도록 했다. (미용실에서 머리를 잘랐다)', note: 'my hair는 자르는 행위를 당하는 대상 → cut(p.p.)' },
          { en: 'I had my car repaired.', ko: '나는 내 차가 수리되도록 했다.', note: 'my car는 수리를 당하는 대상 → repaired(p.p.)' },
          { en: 'She got her essay checked by her teacher.', ko: '그녀는 자신의 에세이가 선생님께 검토되도록 했다.', note: 'her essay는 검토를 당하는 대상 → checked(p.p.)' },
          { en: 'I want to get this problem solved.', ko: '나는 이 문제가 해결되기를 원한다.', note: 'this problem은 해결되는(당하는) 대상 → solved(p.p.)' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (능동 관계 → 동사원형)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'had' },
          { tag: 'O', text: 'my wife' },
          { tag: 'OC', text: 'cut my hair' },
        ],
        translation: 'my wife가 직접 자르는 능동 관계 → 동사원형(cut)',
      },
      {
        type: 'sentence-diagram',
        label: '5형식 (수동 관계 → p.p.)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'had' },
          { tag: 'O', text: 'my hair' },
          { tag: 'OC', text: 'cut' },
        ],
        translation: 'my hair가 cut을 당하는 수동 관계 → 과거분사(cut)',
      },
      {
        type: 'note',
        text: '두 문장 모두 동사는 had이고 목적격 보어의 형태(cut)도 똑같이 보이지만, my wife는 능동(자르는 사람)이고 my hair는 수동(잘리는 대상)이라는 점이 다릅니다. cut처럼 동사원형과 과거분사의 형태가 같은 동사는 문맥으로 구분해야 하며, repair처럼 형태가 다른 동사(repaired)에서는 이 구분이 표면적으로도 드러납니다.',
      },
      { type: 'heading', text: '판단 기준: 목적어가 그 행위를 “할 수 있는가”' },
      {
        type: 'p',
        text: '능동인지 수동인지 헷갈릴 때는 ‘목적어가 그 행위를 스스로 할 수 있는가’를 따져보면 됩니다. my wife는 머리를 자를 수 있는 주체이므로 능동(cut), my hair는 스스로 잘릴 수 없는 대상이므로 수동(cut = p.p.)입니다. 마찬가지로 my car는 스스로 수리할 수 없으므로 repaired, this problem은 스스로 해결될 수 없으므로 solved가 쓰입니다.',
      },
      {
        type: 'note',
        text: '동사원형은 목적어가 그 행위를 직접 하는 능동 관계에서, 과거분사(p.p.)는 목적어가 그 행위를 당하는 수동 관계에서 쓰입니다. 즉 목적격 보어의 형태는 동사의 종류보다, 목적어와 목적격 보어 사이의 능동·수동 관계에 따라 결정된다는 점이 중요합니다.',
      },
      {
        type: 'callout',
        title: '17장 핵심 정리',
        items: [
          'make, have, let + 목적어 + 동사원형: 목적어가 그 행위를 직접 하도록(능동) 시키는 구조. 시킨 순간과 행위가 일어나는 순간이 거의 동시라는 느낌이 있어 to부정사의 to가 빠진다.',
          'make(강제) / have(부탁·요청) / let(허락) / help(조력)로 사역의 어감이 다르다 — 같은 상황도 동사에 따라 화자의 태도가 달라진다.',
          '*make him to go처럼 사역동사 뒤에 to부정사를 쓰는 것은 대표적인 오류이다. make/have/let 뒤에는 반드시 동사원형만 온다.',
          'get은 사역의 의미가 있지만 목적격 보어로 동사원형이 아닌 to부정사를 취하며, 설득·유도의 과정이 느껴진다.',
          'help는 목적격 보어로 동사원형과 to부정사를 모두 취할 수 있다.',
          '목적어와 목적격 보어가 수동 관계(목적어가 행위를 당함)이면 목적격 보어는 과거분사(p.p.)가 된다 — 목적어가 그 행위를 스스로 할 수 있는지로 판단한다.',
          '동사원형은 말하는 행위와 일어나야 하는 행위가 거의 동시에 이루어지길 바랄 때 쓰인다는 느낌을 사역동사 구문에서도 확인할 수 있다.',
        ],
      },
    ],
  },
}
