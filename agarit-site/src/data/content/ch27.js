export const ch27 = {
  'ch27-1': {
    title: '직설법 조건문 (실현 가능성이 있는 if)',
    blocks: [
      { type: 'heading', text: '조건문과 가정법을 가르는 기준' },
      {
        type: 'p',
        text: '영어의 조건문과 가정법을 나누는 기준은 헷갈리기 쉽습니다. 영미권에서도 이 둘을 한꺼번에 conditional sentence(조건문)라고 부르기도 하고, 가정법만 따로 떼어 hypothetical mood(가정법)라고 부르기도 하기 때문입니다. 그래서 이 책에서는 조건문과 가정법을 "그 일이 실제로 일어날 가능성이 얼마나 되는가"를 기준으로 나누어 설명합니다. 발생 가능성이 100%에 가까운 사실부터, 매우 낮거나 이미 결과가 정해져 0%인 상상까지 하나의 스펙트럼으로 이어져 있다고 생각하면 전체 구조가 훨씬 쉽게 잡힙니다.',
      },
      {
        type: 'note',
        text: '핵심 질문은 하나입니다. "이 조건이 현실적으로 이루어질 수 있는가, 아니면 현실과 다르거나 이미 지나가 버린 일을 상상하는 것인가?" 이 질문에 대한 답에 따라 시제가 달라집니다. 이번 장에서는 먼저 "이루어질 수 있는" 쪽, 즉 직설법 조건문부터 살펴봅니다.',
      },
      {
        type: 'icon-row',
        caption: '직설법 조건문 vs 가정법 — 현실과의 거리감',
        items: [
          { icon: '✅', label: '직설법 조건문', sub: '실현 가능성이 있는 일 — 현재형/will' },
          { icon: '🔙', label: '가정법 과거', sub: '현재 사실과 반대되는 상상 — 과거형' },
          { icon: '⏪⏪', label: '가정법 과거완료', sub: '과거 사실과 반대되는 상상 — 과거완료' },
        ],
      },
      { type: 'heading', text: '왜 "직설법"이라고 부를까' },
      {
        type: 'p',
        text: '직설법(indicative mood)은 화자가 실제로 일어나는 일, 혹은 앞으로 실제로 일어날 수 있다고 믿는 일을 그대로 진술하는 방식입니다. 조건문에서 "직설법"이라는 이름이 붙은 것은, 조건절과 결과절 모두가 화자가 상상이 아니라 현실의 일부로 받아들이고 있는 시제(현재형, will)를 그대로 사용하기 때문입니다. 반대로 가정법은 형태를 일부러 한 단계 어긋나게 써서 "이것은 지금 사실이 아니다"라는 신호를 문장 안에 심어 놓습니다. 이 대비를 미리 알아두면 다음 장의 가정법이 왜 그런 시제를 쓰는지 훨씬 쉽게 이해됩니다.',
      },
      { type: 'heading', text: '① 발생 가능성 100% — 항상 성립하는 사실' },
      {
        type: 'p',
        text: '보편적 진리, 자연 현상, 과학적 사실, 습관처럼 조건이 충족되면 예외 없이 결과가 따라오는 문장입니다. 이런 문장은 조건절(if로 시작하는 절)과 결과절 모두 현재형 시제를 사용합니다. 이때 if를 when으로 바꾸어도 의미가 거의 달라지지 않는데, 이는 조건이라기보다 "~할 때는 항상"이라는 사실을 말하고 있기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If you heat water to 100 degrees Celsius, it boils.', ko: '물을 100도까지 가열하면 끓는다.', note: '과학적 사실 — if를 when으로 바꿔도 의미가 같음' },
          { en: 'If the sun sets, the sky gets dark.', ko: '해가 지면 하늘이 어두워진다.', note: '자연 현상' },
          { en: 'If it rains, I take an umbrella.', ko: '비가 오면 나는 우산을 챙긴다.', note: '항상 그렇게 하는 습관을 나타냄' },
          { en: 'If mixed with acid, this metal corrodes quickly.', ko: '이 금속은 산과 섞이면 빠르게 부식된다.', note: '조건절이 분사구문처럼 축약된 과학적 사실' },
          { en: 'If plants do not get sunlight, they die.', ko: '식물은 햇빛을 받지 못하면 죽는다.', note: '생물학적으로 늘 성립하는 인과관계' },
          { en: 'If prices rise, demand usually falls.', ko: '가격이 오르면 대개 수요가 떨어진다.', note: '경제학의 일반 법칙처럼 다루어지는 사실' },
        ],
      },
      { type: 'heading', text: '② 발생 가능성이 아주 높은 미래의 일' },
      {
        type: 'p',
        text: '미래에 실제로 일어날 가능성이 높다고 생각하며 조건과 결과를 말하는 문장입니다. 조건절에는 현재형 동사를 쓰고, 결과절에는 「will + 동사원형」을 씁니다. 조건절이 이미 미래의 의미를 담고 있기 때문에 조건절 안에서는 will을 다시 쓰지 않는다는 점에 주의해야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If you study hard, you will pass the exam.', ko: '열심히 공부하면 너는 시험을 통과할 것이다.' },
          { en: 'If it rains tomorrow, we will cancel the picnic.', ko: '내일 비가 오면 우리는 소풍을 취소할 것이다.' },
          { en: 'If she calls me, I will let you know.', ko: '그녀가 나에게 전화하면 너에게 알려줄게.' },
          { en: 'If the manager approves the plan, we will start the project next week.', ko: '매니저가 계획을 승인하면 우리는 다음 주에 프로젝트를 시작할 것이다.', note: '실제 회의·업무 상황에서 실현 가능성이 높다고 판단할 때 사용' },
          { en: 'If the flight is delayed, I will just wait at the gate.', ko: '비행기가 연착되면 그냥 탑승구에서 기다릴 것이다.', note: '실제로 있을 법한 상황에 대한 실질적인 대응 계획' },
          { en: 'If you send the file by noon, we will review it today.', ko: '정오까지 파일을 보내주면 오늘 검토하겠다.', note: '업무 이메일에서 흔히 쓰이는 실현 가능한 조건' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '실현 가능성이 있는 조건문',
        parts: [
          { tag: 'IF', text: 'If you study hard' },
          { tag: 'S', text: 'you' },
          { tag: 'V', text: 'will pass' },
          { tag: 'O', text: 'the exam' },
        ],
        translation: 'If you study hard, you will pass the exam. (조건절: 현재형 / 결과절: will+동사원형)',
      },
      { type: 'heading', text: '③ 결과절에 will 대신 다른 조동사·명령문이 오는 경우' },
      {
        type: 'p',
        text: '실현 가능성이 높은 조건문이라고 해서 결과절이 항상 will로 끝나는 것은 아닙니다. 조건이 충족되었을 때의 결과가 단순한 미래의 사실이 아니라 허락(can), 의무(must/should), 조언이나 지시(명령문)일 때는 결과절의 형태가 그에 맞게 바뀝니다. 이때도 조건절에는 여전히 현재형 동사를 쓴다는 원칙은 그대로 유지됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If you finish your homework, you can watch TV.', ko: '숙제를 끝내면 텔레비전을 볼 수 있다.', note: '결과절에 허락을 나타내는 can' },
          { en: 'If you want to lose weight, you should exercise regularly.', ko: '체중을 줄이고 싶다면 규칙적으로 운동해야 한다.', note: '결과절에 조언을 나타내는 should' },
          { en: 'If the alarm goes off, leave the building immediately.', ko: '경보가 울리면 즉시 건물을 나가라.', note: '결과절이 명령문 — 안전 수칙 같은 문맥' },
          { en: 'If you are not sure, ask your teacher.', ko: '확실하지 않다면 선생님께 물어보아라.', note: '결과절이 명령문' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 — 조건절에 will을 또 쓰는 경우' },
      {
        type: 'note',
        text: '"If you will study hard, you will pass the exam."처럼 조건절에도 will을 넣는 것은 대표적인 실수입니다. if가 이끄는 조건절은 이미 미래의 일을 조건으로 걸고 있으므로, 그 안에서는 현재형 동사만 쓰고 will은 결과절에서만 씁니다. 다만 "의지·요청"의 의미로 쓰이는 will(예: If you will just wait a moment — 잠깐만 기다려 주시겠다면)은 예외적으로 조건절에도 등장하지만, 이는 일반적인 조건의 will과는 다른 용법입니다.',
      },
      { type: 'heading', text: '흔히 하는 실수 — unless와 if not을 잘못 바꿔 쓰는 경우' },
      {
        type: 'p',
        text: 'unless는 "만약 ~하지 않는다면"이라는 뜻으로, if...not과 의미가 비슷하지만 문장 전체의 어감이 다릅니다. unless는 "그 조건이 성립하지 않는 한"이라는 강한 부정적 전제를 담고 있어서, 이미 부정어가 들어간 절 앞에 다시 not을 넣거나 unless와 if not을 동시에 쓰는 실수를 저지르기 쉽습니다. 또한 unless가 이끄는 절도 직설법 조건문과 마찬가지로 현재형 동사를 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Unless you hurry, you will miss the bus.', ko: '서두르지 않으면 버스를 놓칠 것이다.', note: '= If you do not hurry, you will miss the bus.' },
          { en: 'You cannot enter unless you have a ticket.', ko: '표가 없으면 들어갈 수 없다.', note: 'unless 뒤에는 이미 부정의 의미가 있으므로 don\'t have를 다시 쓰지 않음' },
        ],
      },
      {
        type: 'p',
        text: '①②③은 모두 "직설법 조건문"이라고 부를 수 있습니다. 직설법이란 실제로 일어날 수 있는 일, 혹은 실제로 늘 일어나는 일을 그대로 말하는 방식입니다. 이 점이 다음 장에서 배울 가정법과 가장 크게 다른 부분입니다. 가정법은 실제로 일어날 가능성이 거의 없거나 이미 정해진 결과를 알면서도, 그와 다른 상황을 상상하며 아쉬움·후회·소망을 표현하는 방식이기 때문입니다.',
      },
      {
        type: 'table',
        caption: '직설법 조건문 정리',
        headers: ['발생 가능성', '조건절(if~)', '결과절', '의미'],
        rows: [
          ['100% (불변의 사실)', '현재형', '현재형', '과학적 사실, 습관, 진리'],
          ['매우 높음 (미래의 일)', '현재형', 'will + 동사원형', '앞으로 실제로 일어날 가능성이 높은 일'],
          ['매우 높음 (허락·의무·지시)', '현재형', 'can/should/must + 동사원형, 또는 명령문', '조건이 충족되었을 때의 허락·조언·지시'],
        ],
      },
      {
        type: 'callout',
        title: '27장 핵심 정리 (1) — 직설법 조건문',
        items: [
          '직설법 조건문은 실제로 일어날 가능성이 있는 일을 그대로 말하는 문장이다.',
          '불변의 사실·진리·습관: If + 현재형, 결과절도 현재형 (if 대신 when으로 바꿔도 의미가 비슷하다).',
          '실현 가능성이 높은 미래의 일: If + 현재형, 결과절은 will + 동사원형.',
          '결과절이 허락·조언·지시를 나타낼 때는 can/should/must나 명령문으로 바뀔 수 있지만, 조건절은 여전히 현재형이다.',
          '조건절 안에서는 미래를 나타내더라도 will을 다시 쓰지 않는다 (의지를 나타내는 will은 예외).',
          'unless는 if...not과 의미가 비슷하지만 이미 부정의 의미를 담고 있으므로 이중 부정을 만들지 않도록 주의한다.',
          '직설법 조건문과 가정법을 가르는 기준은 "그 일이 실제로 일어날 수 있는가"이다.',
        ],
      },
    ],
  },

  'ch27-2': {
    title: '가정법 과거·과거완료 (현실과 반대되는 if)',
    blocks: [
      { type: 'heading', text: '가정법의 핵심 원리 — 왜 시제를 한 단계 뒤로 물릴까' },
      {
        type: 'p',
        text: '가정법은 실제로 일어날 가능성이 거의 없거나(0%에 가까운 경우), 혹은 이미 결과가 정해져 절대 바꿀 수 없는 과거의 일(0%)을 상상하며 말하는 문장입니다. 화자는 이미 결과를 알고 있지만, 그 결과와 다른 상황을 가정하여 아쉬움, 후회, 소망, 바람을 표현합니다.',
      },
      {
        type: 'note',
        text: '이 장에서 가장 중요한 원리는 이것입니다 — "현실과 멀리 떨어진 이야기일수록 시제를 한 단계 과거로 밀어서 그 거리감을 문법적으로 표현한다." 실제로 일어나는 시점은 여전히 현재이거나 과거이지만, 화자는 형태(form)만 한 칸 물러난 시제를 빌려와 "이것은 현실이 아니다"라는 신호를 문장에 심어 놓는 것입니다. 즉 가정법 과거는 현재의 일을 말하면서도 과거형을 쓰고, 가정법 과거완료는 과거의 일을 말하면서도 그보다 한 단계 더 물러난 과거완료를 씁니다. 시제가 뒤로 밀려날수록 "이 이야기는 현실과 멀다"는 신호가 강해진다고 이해하면 전체 체계가 하나로 연결됩니다.',
      },
      { type: 'heading', text: '시제와 시점이 어긋나는 것이 "오류"가 아니라 "신호"인 이유' },
      {
        type: 'p',
        text: '한국어 화자에게는 "과거형인데 왜 지금 일을 말하지?"라는 질문이 자연스럽게 떠오릅니다. 하지만 영어에서 시제(tense)는 반드시 시간(time)과 일대일로 대응하지 않습니다. 가정법에서 과거형은 "심리적 거리(distance)"를 나타내는 장치로 쓰입니다. 즉 시간상의 과거가 아니라, 화자의 마음속에서 그 일이 현실로부터 얼마나 멀리 떨어져 있는지를 나타냅니다. 이 원리를 알면 "If I were a bird, I would fly to you."처럼 애초에 절대 일어날 수 없는 상상(사람이 새가 되는 일)에도 왜 과거형을 쓰는지 자연스럽게 설명됩니다 — 현실과의 거리가 가장 먼 상상이기 때문에, 가장 멀리 물러난 시제를 빌려오는 것입니다.',
      },
      {
        type: 'icon-row',
        caption: '가정법 과거 vs 가정법 과거완료 — 거리감 비교',
        items: [
          { icon: '🔙', label: '가정법 과거', sub: '현재 사실과 반대 (지금 그렇지 않은 일)' },
          { icon: '⏪⏪', label: '가정법 과거완료', sub: '과거 사실과 반대 (이미 지나간 일)' },
        ],
      },
      { type: 'heading', text: '같은 상황, 세 가지 버전으로 — 직설법과 가정법 비교' },
      {
        type: 'p',
        text: '아래 세 문장은 모두 "비가 오는 것"과 "집에 머무는 것"이라는 같은 소재를 다루지만, 화자가 그 일이 일어날 가능성을 어떻게 판단하는지에 따라 시제가 완전히 달라집니다. 직설법 조건문은 조건이 충족되면 실제로 그렇게 하겠다는 뜻이고, 가정법 과거는 비가 올 가능성이 낮다고 생각하며(혹은 비가 오지 않는 현재를 상상하며) 말하는 것이고, 가정법 과거완료는 이미 지나간 과거의 날씨를 놓고 그때 그렇게 하지 않았음을 되짚어보는 것입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If it rains, I will stay home.', ko: '비가 오면 집에 있을 것이다.', note: '직설법 조건문 — 비가 올 가능성을 실제로 염두에 두고 하는 말' },
          { en: 'If it rained, I would stay home.', ko: '비가 온다면 집에 있을 텐데.', note: '가정법 과거 — 지금 날씨가 맑아서 비가 올 가능성이 낮음을 암시(현재 사실과 반대)' },
          { en: 'If it had rained, I would have stayed home.', ko: '비가 왔더라면 집에 있었을 텐데.', note: '가정법 과거완료 — 그날 실제로는 비가 오지 않아 집에 있지 않았음(과거 사실과 반대)' },
        ],
      },
      {
        type: 'p',
        text: '같은 원리를 다른 상황에도 적용해 보면 이 세 단계가 하나의 스펙트럼이라는 것이 더 분명해집니다. 아래 예시에서도 동일한 소재(늦잠을 자는 것과 회의에 늦는 것)가 실현 가능성이 높은 이야기에서 현재와 반대되는 상상으로, 그리고 다시 과거와 반대되는 후회로 옮겨가는 것을 확인할 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If I oversleep tomorrow, I will be late for the meeting.', ko: '내일 늦잠을 자면 회의에 늦을 것이다.', note: '직설법 조건문 — 내일 실제로 일어날 수 있는 일' },
          { en: 'If I overslept every day, I would lose my job.', ko: '매일 늦잠을 잔다면 직장을 잃을 텐데.', note: '가정법 과거 — 실제로 매일 늦잠을 자지는 않는다는 것을 전제로 한 상상' },
          { en: 'If I had overslept yesterday, I would have missed the meeting.', ko: '어제 늦잠을 잤더라면 회의를 놓쳤을 텐데.', note: '가정법 과거완료 — 실제로는 어제 늦잠을 자지 않아서 회의에 늦지 않았음' },
        ],
      },
      {
        type: 'table',
        caption: '같은 상황을 나타내는 세 가지 시제 형태',
        headers: ['형태', '조건절', '결과절', '화자가 전제하는 것'],
        rows: [
          ['직설법 조건문', '현재형 (rains)', 'will + 동사원형', '앞으로 실제로 일어날 수 있는 일로 봄'],
          ['가정법 과거', '과거형 (rained)', '조동사 과거형 + 동사원형', '현재는 비가 오지 않음 — 반대되는 상상'],
          ['가정법 과거완료', '과거완료 (had rained)', '조동사 과거형 + have + p.p.', '과거에 비가 오지 않았음 — 이미 끝난 사실을 되돌아봄'],
        ],
      },
      { type: 'heading', text: '가정법 과거 — 현재 사실과 반대되는 상상' },
      {
        type: 'p',
        text: '현재 상황이 그렇지 않다는 것을 알면서도 반대로 상상해 보는 문장입니다. 조건절에는 과거형 동사를, 결과절에는 「조동사 과거형(would/could/might) + 동사원형」을 씁니다. 여기서 중요한 것은, 과거 시제를 썼지만 의미는 어디까지나 "지금 이 순간"이라는 점입니다. 화자가 상상하는 상황이 현실과는 거리가 먼, 가능성이 매우 낮은 일이라는 것을 시제를 한 단계 물러나게 함으로써 나타내는 것이며, 듣는 사람 역시 과거형이라는 형태만으로 "이것은 지금 사실이 아니구나"라고 즉시 알아차릴 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If I were rich, I would travel around the world.', ko: '내가 부자였다면, 전 세계를 여행했을 텐데.', note: '실제로는 부자가 아니어서 여행하지 못함을 아쉬워함' },
          { en: 'If I had more time, I could help you.', ko: '시간이 더 있다면, 너를 도와줄 수 있을 텐데.', note: '지금 시간이 없어서 도와주지 못하는 상황' },
          { en: 'If she knew the truth, she would be shocked.', ko: '그녀가 진실을 안다면, 충격을 받을 텐데.', note: '그녀는 지금 진실을 모르고 있음' },
          { en: 'If he were here right now, he would know what to do.', ko: '그가 지금 여기 있다면, 어떻게 해야 할지 알 텐데.', note: '지금 그가 자리에 없는 상황을 아쉬워함' },
          { en: 'If we lived closer to the station, we would not need a car.', ko: '역에서 더 가까운 곳에 산다면, 차가 필요 없을 텐데.', note: '현재 실제로는 역에서 멀리 살고 있음' },
          { en: 'If I spoke Japanese, I could talk to my grandmother more easily.', ko: '내가 일본어를 할 수 있다면, 할머니와 더 쉽게 대화할 수 있을 텐데.', note: '실제로는 일본어를 못해서 대화가 어려움을 아쉬워함' },
          { en: 'If this company paid better, more people would apply.', ko: '이 회사가 임금을 더 잘 준다면, 더 많은 사람이 지원할 텐데.', note: '현재 임금 수준이 낮은 현실을 비판적으로 언급' },
        ],
      },
      {
        type: 'note',
        text: '가정법 과거에서는 주어가 무엇이든 be동사는 항상 were를 씁니다(was는 쓰지 않습니다). "If I were you"처럼 일부러 문법적으로 틀린 것처럼 보이는 형태를 씀으로써 "이것은 현실이 아니다"라는 신호를 더 강하게 주는 것이라고 생각하면 기억하기 쉽습니다. 다만 일상 회화체 영어에서는 was를 쓰는 경우도 실제로 존재하지만, 격식을 지키는 글쓰기나 시험에서는 were가 원칙입니다.',
      },
      { type: 'heading', text: '흔히 하는 실수 — 가정법 과거의 if절에 would를 쓰는 경우' },
      {
        type: 'note',
        text: '"If I would be rich, I would travel around the world."처럼 조건절(if절) 안에 would를 넣는 것은 학습자들이 가장 자주 저지르는 실수입니다. would/could/might 같은 조동사 과거형은 결과절에만 오고, 조건절에는 단순 과거형 동사(were, had, knew, lived 등)만 옵니다. "If I were rich, I would travel..."처럼 조건절과 결과절의 역할을 분명히 나누어 기억해야 합니다.',
      },
      { type: 'heading', text: '흔히 하는 실수 — was와 were를 혼동하는 경우' },
      {
        type: 'note',
        text: '"If I was you, I would apologize."처럼 1인칭·3인칭 단수 주어 뒤에 was를 쓰는 것도 매우 흔한 실수입니다. 가정법 과거는 be동사의 인칭 변화 규칙을 따르지 않고 주어와 상관없이 were로 통일한다는 점을 기억해야 합니다. 헷갈릴 때는 "가정법 과거의 be동사는 항상 were"라는 한 문장만 떠올리면 됩니다. 단, 뒤에서 배울 「Were it not for + 명사」와 같은 도치 구문에서도 마찬가지로 were가 쓰입니다.',
      },
      { type: 'heading', text: 'I wish / as if 구문에서도 같은 원리가 적용된다' },
      {
        type: 'p',
        text: '가정법의 "시제를 한 단계 물러나게 한다"는 원리는 if 조건문에만 국한되지 않습니다. I wish(~하면 좋을 텐데)나 as if / as though(마치 ~인 것처럼) 뒤에 오는 절도 똑같은 논리로 시제가 결정됩니다. 지금 그렇지 않은 일을 바라거나 상상할 때는 과거형을, 과거에 그렇지 않았던 일을 아쉬워하거나 상상할 때는 과거완료를 씁니다. if가 보이지 않는다고 해서 다른 문법이 아니라, 같은 원리가 다른 접속사에 적용된 것뿐입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I wish I were taller.', ko: '내가 키가 더 크면 좋을 텐데.', note: '지금 키가 크지 않은 것에 대한 소망 — wish 뒤에도 were' },
          { en: 'I wish I had studied harder in college.', ko: '대학 때 더 열심히 공부했더라면 좋았을 텐데.', note: '과거에 하지 않은 일에 대한 후회 — wish 뒤에 과거완료' },
          { en: 'He talks as if he knew everything.', ko: '그는 마치 모든 것을 아는 것처럼 말한다.', note: '실제로는 다 알지 못하면서 그런 것처럼 말함' },
        ],
      },
      { type: 'heading', text: '가정법 과거완료 — 과거 사실과 반대되는 상상' },
      {
        type: 'p',
        text: '이미 지나가 버려서 절대로 바꿀 수 없는 과거의 일을 후회하거나 아쉬워하며 말하는 문장입니다. 조건절에는 과거완료(had + p.p.)를, 결과절에는 「would/could/might + have + p.p.」를 씁니다. 가정법 과거보다 시제를 한 단계 더 물러나게 하여, "현재의 일을 과거처럼" 말하는 가정법 과거보다도 더 멀리 떨어진 "과거의 일을 그보다 더 과거처럼" 말하는 것이라고 이해하면 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If I had known about the meeting, I would have attended.', ko: '회의에 대해 알았더라면, 참석했을 텐데.', note: '실제로는 몰라서 참석하지 못했음' },
          { en: 'If she had studied harder, she could have passed the exam.', ko: '그녀가 더 열심히 공부했더라면, 시험에 합격할 수 있었을 텐데.', note: '실제로는 충분히 공부하지 않아 불합격했음' },
          { en: 'If we had left earlier, we would not have missed the train.', ko: '우리가 더 일찍 출발했더라면, 기차를 놓치지 않았을 텐데.', note: '실제로는 늦게 출발해서 기차를 놓쳤음' },
          { en: 'If he had listened to the doctor, he might not have gotten so sick.', ko: '그가 의사의 말을 들었더라면, 그렇게 심하게 아프지 않았을 텐데.', note: '실제로는 의사의 말을 듣지 않아 심하게 아팠음' },
          { en: 'If they had checked the weather forecast, they would not have gone hiking.', ko: '그들이 일기예보를 확인했더라면, 등산을 가지 않았을 텐데.', note: '실제로는 확인하지 않고 등산을 가서 곤란을 겪었음을 암시' },
          { en: 'If the company had listened to its customers earlier, it would not have lost so much market share.', ko: '그 회사가 더 일찍 고객의 말을 들었더라면, 그렇게 많은 시장 점유율을 잃지 않았을 텐데.', note: '기업 사례처럼 조금 더 긴 문맥에서도 동일한 구조가 쓰임' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '가정법 과거완료',
        parts: [
          { tag: 'IF', text: 'If I had known about the meeting' },
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'would have attended' },
        ],
        translation: 'If I had known about the meeting, I would have attended. (조건절: had+p.p. / 결과절: would have+p.p.)',
      },
      { type: 'heading', text: '흔히 하는 실수 — 과거완료 자리에 단순 과거를 쓰는 경우' },
      {
        type: 'note',
        text: '"If I knew about the meeting, I would have attended."처럼 조건절에 과거완료(had known) 대신 단순 과거(knew)를 쓰는 것도 자주 나타나는 실수입니다. 결과절이 「would have + p.p.」로 과거의 일을 가리키고 있다면, 조건절도 그에 맞추어 had + p.p.여야 시점이 일치합니다. 조건절과 결과절 중 한쪽만 보고 시제를 정하지 말고, 두 절이 같은 과거 시점을 가리키고 있는지 항상 함께 확인해야 합니다.',
      },
      { type: 'heading', text: '섞어서 쓰는 경우 — 혼합 가정법' },
      {
        type: 'p',
        text: '과거의 일이 지금까지 영향을 미치고 있을 때는 조건절과 결과절의 시제를 섞어서 쓰기도 합니다. 예를 들어 "If I had studied medicine, I would be a doctor now."는 조건절은 과거완료(과거 사실과 반대)이지만 결과절은 가정법 과거(지금의 상태와 반대)로, 과거에 다른 선택을 했다면 지금 어떤 상태일지를 말합니다. 기본 원리는 같습니다 — 조건절의 시점이 과거이면 과거완료, 결과절의 시점이 지금이면 조동사 과거형 + 동사원형을 쓰는 것뿐입니다. 문장 안에 now, today처럼 현재를 가리키는 표현이 있으면 혼합 가정법일 가능성을 먼저 의심해 보는 것이 좋습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'If I had studied medicine, I would be a doctor now.', ko: '내가 의학을 공부했더라면, 지금 의사였을 텐데.', note: '조건절(과거 사실과 반대) + 결과절(현재 상태와 반대)' },
          { en: 'If she had taken that job offer, she would be living in New York now.', ko: '그녀가 그 일자리 제안을 받았더라면, 지금 뉴욕에 살고 있을 텐데.' },
          { en: 'If he had saved money when he was young, he would not be struggling financially today.', ko: '그가 젊었을 때 돈을 모아두었더라면, 오늘날 재정적으로 어려움을 겪지 않을 텐데.', note: '과거의 선택이 현재까지 이어지는 대표적인 혼합 가정법' },
        ],
      },
      { type: 'heading', text: 'if를 생략하고 도치하는 경우' },
      {
        type: 'p',
        text: '조건절의 동사가 were, had, should일 때는 if를 생략하고 주어와 동사의 자리를 바꾸어(도치) 표현할 수 있습니다. 이는 문어체나 격식 있는 문장에서 자주 쓰이며, 의미는 if를 쓴 문장과 동일합니다. "Were it not for", "Had it not been for"처럼 앞에 나오는 부정 형태는 세트로 외워두면 독해에서 훨씬 빠르게 알아볼 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Were I you, I would apologize first.', ko: '내가 너라면, 먼저 사과할 텐데.', note: '= If I were you, I would apologize first.' },
          { en: 'Had I known the truth, I would have acted differently.', ko: '내가 진실을 알았더라면, 다르게 행동했을 텐데.', note: '= If I had known the truth, I would have acted differently.' },
          { en: 'Were it not for your help, I would have failed the project.', ko: '너의 도움이 없었다면, 나는 그 프로젝트에서 실패했을 것이다.', note: '가정법 과거 형태의 관용 표현 — 현재 시점에서 도움이 없다고 상상' },
        ],
      },
      {
        type: 'table',
        caption: '가정법 과거 vs 가정법 과거완료',
        headers: ['구분', '발생 가능성', '조건절(if~)', '결과절', '의미'],
        rows: [
          ['가정법 과거', '0%에 가까움 (현재 사실과 반대)', '과거형 (be동사는 were)', '조동사 과거형 + 동사원형', '지금 그렇지 않은 일을 반대로 상상 (아쉬움·소망)'],
          ['가정법 과거완료', '항상 0% (과거 사실과 반대)', 'had + p.p.', '조동사 과거형 + have + p.p.', '이미 지나간 일을 반대로 상상 (후회)'],
        ],
      },
      {
        type: 'p',
        text: '결국 직설법 조건문과 가정법의 차이는 "그 일이 실제로 일어날 수 있는가"에 있습니다. 직설법 조건문은 조건이 충족되면 결과가 실제로 일어날 수 있는 문장이고, 가정법은 화자가 이미 결과를 알고 있으면서도(혹은 결과를 거의 확신하면서도) 그와 다른 상황을 상상하여 감정을 표현하는 문장입니다. 그리고 그 "다른 정도"가 클수록(현재와 다름 vs 과거와 다름) 시제를 더 멀리 물러나게 사용합니다. 이 원리 하나만 기억하면, 가정법의 형태를 외우지 않고도 왜 그런 시제가 쓰이는지 스스로 추론할 수 있습니다.',
      },
      {
        type: 'callout',
        title: '27장 핵심 정리 (2) — 가정법 과거·과거완료',
        items: [
          '가정법의 핵심 원리: 현실과 멀리 떨어진 이야기일수록 시제를 한 단계 과거로 밀어서 그 거리감을 표현한다. 과거형은 시간이 아니라 "현실과의 심리적 거리"를 나타낸다.',
          '가정법 과거: If + 과거형(be동사는 were), 결과절은 조동사 과거형 + 동사원형 → 현재 사실과 반대되는 상상.',
          '가정법 과거완료: If + had + p.p., 결과절은 조동사 과거형 + have + p.p. → 과거 사실과 반대되는 상상.',
          '같은 원리가 I wish, as if/as though 뒤의 절에도 그대로 적용된다.',
          '흔한 실수 ① 가정법 과거의 if절에 would를 넣지 않는다 (would는 결과절에만).',
          '흔한 실수 ② 가정법 과거에서 be동사는 인칭과 상관없이 were를 쓴다 (was는 회화체에서만 허용).',
          '흔한 실수 ③ 결과절이 would have + p.p.인데 조건절에 단순 과거를 쓰지 않도록, 두 절의 시점을 항상 맞춘다.',
          '혼합 가정법: 조건절(과거완료)과 결과절(조동사 과거형+동사원형)의 시점이 다를 수도 있다 — now, today 같은 표현이 신호가 된다.',
          'were/had/should로 시작하는 조건절은 if를 생략하고 도치할 수 있다 (Were it not for / Had it not been for).',
          '직설법 조건문(실현 가능)과 가정법(현실과 반대)의 구분은 "일이 실제로 일어날 수 있는가"를 기준으로 한다.',
        ],
      },
    ],
  },
}
