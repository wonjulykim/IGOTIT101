export const ch28 = {
  'ch28-1': {
    title: 'too ~ to와 so ~ that',
    blocks: [
      { type: 'heading', text: 'too ~ to: 왜 부정적인 결과를 나타내는가' },
      {
        type: 'p',
        text: '「too ~ to」 구문은 \'너무 ~해서 …할 수 없다\'는 의미를 나타냅니다. 여기서 핵심은 too라는 부사 자체의 성격입니다. too는 단순히 정도가 크다는 뜻이 아니라, 어떤 기준선을 \'넘어서 버렸다\'는 초과·과잉의 의미를 갖습니다. 기준을 넘어섰다는 것은 필연적으로 무언가가 잘못되었다는 뉘앙스를 동반하므로, **too가 만들어내는 결과(to부정사)는 거의 항상 부정적이거나 원치 않는 결과입니다.** 그래서 「too ~ to」는 형태상 부정어(not)가 없어도 의미상 언제나 \'불가능·부적합\'을 가리킵니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It is too hot today.', ko: '오늘은 너무 덥다.' },
          { en: 'This dress is too expensive.', ko: '이 드레스는 너무 비싸다.' },
          { en: 'The shirt is too large to wear.', ko: '그 셔츠는 너무 커서 입을 수 없다.', note: 'too large가 원인, to wear가 그 결과' },
          { en: 'I was too young to watch the movie.', ko: '나는 그 영화를 보기에는 너무 어렸다.', note: 'too young이 원인, to watch가 그 결과' },
          { en: 'The coffee was too hot to drink right away.', ko: '그 커피는 너무 뜨거워서 바로 마실 수 없었다.', note: '기준(적정 온도)을 넘어선 결과 — 마실 수 없음' },
          { en: 'He spoke too quickly for me to understand.', ko: '그는 너무 빠르게 말해서 내가 이해할 수 없었다.', note: 'to부정사의 행위자가 문장 주어와 다르면 for + 목적격으로 표시' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'too ~ to - 부정적 결과',
        parts: [
          { tag: 'S', text: 'The shirt' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'too large' },
          { tag: 'M', text: 'to wear' },
        ],
        translation: 'The shirt is too large to wear. (너무 커서 입을 수 없다 — too는 기준 초과를 뜻해 결과가 부정적)',
      },
      { type: 'heading', text: 'so ~ that: 왜 중립적이거나 긍정적인 결과도 가능한가' },
      {
        type: 'p',
        text: '「so ~ that」 구문은 어떤 상태나 상황이 매우 심해서 그 결과로 어떤 일이 일어났는지를 나타냅니다. so는 too와 달리 \'기준을 넘어섰다\'는 초과의 의미가 아니라, 상대방의 공감을 구하는 강조 부사입니다. \'그렇게까지 ~했다니까, 그러니 …한 거지\'라는 어감으로, so 자체에는 부정적 함의가 없습니다. **그래서 that 이하의 결과는 부정적일 수도, 중립적일 수도, 긍정적일 수도 있습니다.** so 뒤에 형용사·부사를 두어 원인의 정도를 강조하고, that 이하에 결과를 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She was so angry that her face turned red.', ko: '그녀는 너무 화가 나서 얼굴이 빨개졌다.' },
          { en: 'The runner ran so fast that nobody could catch up with him.', ko: '그 달리기 선수는 너무 빨리 달려서 아무도 그를 따라잡을 수 없었다.' },
          { en: 'This book is so hard that I can\'t read it.', ko: '이 책은 너무 어려워서 나는 읽을 수 없다.' },
          { en: 'It was so lovely that he took a walk.', ko: '날이 너무 좋아 그는 산책을 했다.', note: '결과가 부정적이지 않은데도 so ~ that을 사용 — too로는 바꿀 수 없음' },
          { en: 'The concert was so amazing that the audience gave a standing ovation.', ko: '그 콘서트는 너무 놀라워서 관객들이 기립 박수를 보냈다.', note: '긍정적 결과 — too는 이 문맥에 어울리지 않음' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'so ~ that - 부정적 결과',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'was' },
          { tag: 'C', text: 'so angry' },
          { tag: 'M', text: 'that her face turned red' },
        ],
        translation: 'She was so angry that her face turned red. (so는 부정적 함의가 없지만 결과절이 우연히 부정적)',
      },
      {
        type: 'sentence-diagram',
        label: 'so ~ that - 긍정적 결과 (too로 바꿀 수 없음)',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'was' },
          { tag: 'C', text: 'so lovely' },
          { tag: 'M', text: 'that he took a walk' },
        ],
        translation: 'It was so lovely that he took a walk. (결과가 긍정적 — too ~ to로는 바꿀 수 없음)',
      },
      {
        type: 'note',
        text: '「so ~ that ... can\'t」은 흔히 「too ~ to」로 바꾸어 쓸 수 있다고 배웁니다. 예: I\'m so tired that I can\'t go for a run. = I\'m too tired to go for a run. 하지만 이 등식은 that절의 결과가 부정문(can\'t, couldn\'t)일 때만 성립합니다. 결과가 긍정적이라면(예: so lovely that he took a walk) too ~ to로 바꿀 수 없습니다. too는 애초에 부정적 결과만 함의하기 때문입니다.',
      },
      {
        type: 'icon-row',
        caption: 'too ~ to vs so ~ that',
        items: [
          { icon: '🚫', label: 'too ~ to', sub: '너무 ~해서 못함 (부정적 결과만)' },
          { icon: '➡️', label: 'so ~ that', sub: '그래서 ~함 (결과는 자유)' },
        ],
      },
      { type: 'heading', text: 'very / so / too의 뉘앙스 차이' },
      {
        type: 'p',
        text: 'very, so, too는 모두 정도를 강조하지만 뉘앙스가 다릅니다. very는 \'단순히 매우 그렇다\'는 사실을 전달합니다. so는 상대방의 공감을 바라는 부사로, \'그렇지 않아?\'라는 느낌을 담고 있습니다. too는 일정한 기준을 넘어섰다는 부정적 느낌을 담고 있습니다.',
      },
      {
        type: 'table',
        caption: 'very / so / too의 뉘앙스 비교',
        headers: ['표현', '예문', '뉘앙스'],
        rows: [
          ['very', 'This coffee is very hot.', '단순히 매우 뜨겁다는 사실 전달'],
          ['so', 'This coffee is so hot.', '공감을 바람 (뜨겁네, 그렇지 않아?)'],
          ['too', 'This coffee is too hot.', '기준을 넘어선 과도함 (너무 뜨거운데?)'],
        ],
      },
      {
        type: 'icon-row',
        caption: 'very vs so vs too — 강조의 뉘앙스',
        items: [
          { icon: '📏', label: 'very', sub: '단순히 매우' },
          { icon: '🤝', label: 'so', sub: '공감을 구함' },
          { icon: '⚠️', label: 'too', sub: '기준 초과 (부정적)' },
        ],
      },
      {
        type: 'p',
        text: '이 뉘앙스를 바탕으로 다시 보면 「so ~ that」 구문은 단순한 원인-결과 문장이 아닙니다. "She was so angry that her face turned red."는 \'그녀가 화가 날 수밖에 없었어. 그러니까 얼굴이 빨개졌지\'처럼, 상대방의 공감을 유도하는 뉘앙스를 담고 있습니다. 반면 "I was too young to watch the movie."는 \'너무 어렸다\'는 부정적 뉘앙스가 있고, "I was so young that I couldn\'t watch the movie."는 부정적 뉘앙스 없이 \'나이가 어려서 어쩔 수 없었다\'는 느낌을 전달합니다.',
      },
      { type: 'heading', text: 'such + (a/an) + (형용사) + 명사: so와 무엇이 다른가' },
      {
        type: 'p',
        text: 'so와 마찬가지로 such도 정도를 강조하는 말이지만, **so는 형용사·부사를 직접 꾸미는 반면 such는 반드시 명사(구) 앞에 옵니다.** 명사가 단수 가산명사이면 such 뒤에 a/an이 들어가고, 그 사이에 형용사가 끼어들 수도 있습니다(such + a/an + (형용사) + 명사). "so + 형용사"로 표현하고 싶은 문장에 명사를 함께 넣고 싶다면 so가 아니라 such를 골라야 한다는 점이 핵심입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The trial was such a success.', ko: '그 재판은 대단한 성공이었다.', note: 'such + a + 명사 (형용사 없이 명사만 강조)' },
          { en: 'It was such an important experiment.', ko: '그것은 아주 중요한 실험이었다.', note: 'such + an + 형용사 + 명사' },
          { en: 'The disease is such a mystery that it doesn\'t even have a name yet.', ko: '그 질병은 너무 미스터리해서 아직 이름조차 없다.', note: 'such + a + 명사 + that — such도 that과 함께 결과를 나타낼 수 있음' },
          { en: 'This is such a strange injury that it is hard to diagnose.', ko: '이것은 너무 이상한 부상이라서 진단하기가 어렵다.', note: 'such + a + 형용사 + 명사 + that' },
        ],
      },
      {
        type: 'table',
        caption: 'so ~ that vs such ~ that',
        headers: ['구문', '뒤에 오는 것', '예문'],
        rows: [
          ['so + 형용사/부사 + that', '형용사·부사만 (명사 불가)', 'Medical research is so expensive that drugs are often costly.'],
          ['such + (a/an) + (형용사) + 명사 + that', '명사(구) — 형용사는 선택', 'This is such a strange injury that it is hard to diagnose.'],
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'such + a + 명사 + that',
        parts: [
          { tag: 'S', text: 'The disease' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'such a mystery' },
          { tag: 'M', text: "that it doesn't even have a name yet" },
        ],
        translation: '그 질병은 너무 미스터리해서 아직 이름조차 없다. (such + a + 명사가 that 이하의 결과를 이끎)',
      },
      {
        type: 'note',
        text: '학습자들이 자주 저지르는 실수는 명사 앞에 so를 쓰는 것입니다("*It was so a mystery that..."는 틀린 문장입니다). 명사(구)를 강조하고 싶다면 반드시 such를 써야 하고, such a/an은 neutral한 명사보다 success, mystery, disaster처럼 정도가 극단적인 명사와 더 자연스럽게 어울립니다.',
      },
      { type: 'heading', text: 'too ~ to와 so ~ that의 관계: 같은 사건, 다른 표현' },
      {
        type: 'p',
        text: 'too ~ to와 so ~ that(can\'t)이 가리키는 사건 자체는 같을 수 있지만, 화자가 그 사건을 \'과도함의 문제\'로 볼지 \'정도가 심해서 생긴 자연스러운 결과\'로 볼지에 따라 형태를 다르게 선택합니다. 아래 두 쌍은 같은 상황을 too ~ to와 so ~ that으로 각각 표현한 것입니다.',
      },
      {
        type: 'transform',
        from: { label: 'too ~ to (과도함 강조)', text: 'I was too young to watch the movie.' },
        to: { label: 'so ~ that (공감·정도 강조)', text: 'I was so young that I couldn\'t watch the movie.' },
        note: '의미는 거의 같지만, too 문장은 \'너무 어렸다\'는 부정적 뉘앙스가, so 문장은 \'그럴 수밖에 없었다\'는 공감의 뉘앙스가 강합니다.',
      },
      {
        type: 'transform',
        from: { label: 'so ~ that (결과: 불가능)', text: 'I\'m so tired that I can\'t go for a run.' },
        to: { label: 'too ~ to (원인의 과도함 강조)', text: 'I\'m too tired to go for a run.' },
        note: 'that절의 결과가 can\'t/couldn\'t일 때만 too ~ to로 자연스럽게 바꿀 수 있습니다.',
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'note',
        text: '학습자들이 자주 저지르는 실수는 too ~ to 뒤에 주어와 같은 대상을 가리키는 목적어를 다시 넣는 것입니다. "This shirt is too small for me to wear it."처럼 wear 뒤에 it을 또 쓰면 안 됩니다. to부정사의 목적어가 문장의 주어(This shirt)와 같은 대상을 가리키므로, "This shirt is too small for me to wear."처럼 목적어를 생략해야 합니다. 또한 too는 부정적 함의를 갖기 때문에, 순수한 칭찬을 하고 싶을 때 "You\'re too beautiful."이라고 하면 비꼬는 느낌을 줄 수 있습니다. 이때는 "You\'re so beautiful."이 더 자연스럽습니다.',
      },
      {
        type: 'callout',
        title: '28-1 핵심 정리',
        items: [
          '「too + 형용사/부사 + to부정사」 = 너무 ~해서 …할 수 없다 — too는 기준을 넘어선 초과·과잉을 뜻하므로 결과가 항상 부정적이다.',
          '「so + 형용사/부사 + that + 주어 + 동사」 = 매우 ~해서 …하다 — so는 공감·강조의 부사일 뿐 부정적 함의가 없으므로 결과가 긍정적일 수도 있다.',
          'so~that can\'t 구문은 too~to로 바꿔 쓸 수 있지만, 결과가 긍정적인 so~that 문장은 too~to로 바꿀 수 없다.',
          'too ~ to 뒤에서 to부정사의 목적어가 문장의 주어와 같으면 반복해서 쓰지 않는다.',
        ],
      },
    ],
  },

  'ch28-2': {
    title: '형용사/부사+enough+to부정사, so that, 의문사+to부정사',
    blocks: [
      { type: 'heading', text: '형용사/부사 + enough + to부정사: 왜 enough가 뒤에 오는가' },
      {
        type: 'p',
        text: '「형용사/부사 + enough + to부정사」 구문은 \'~할 만큼 충분히 …하다\'라는 뜻으로, 어떤 것이 충분한 상태에 있어서 어떤 행위를 할 수 있음을 나타냅니다. **enough는 명사를 꾸밀 때는 명사 앞에 오지만(enough money), 형용사·부사를 꾸밀 때는 그 뒤에 옵니다.** 이는 형용사·부사가 나타내는 정도의 \'충분함\' 여부를 사후적으로 평가하는 어순이기 때문입니다 — 먼저 어떤 성질(honest, early)을 제시한 뒤, 그 정도가 목적을 이루기에 충분했는지를 enough로 판정하는 구조입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He is honest enough to tell the truth.', ko: '그는 사실을 말할 만큼 충분히 정직하다.' },
          { en: 'She got up early enough to catch the first train.', ko: '그녀는 첫 기차를 탈 만큼 충분히 일찍 일어났다.' },
          { en: 'The soup was warm enough to serve.', ko: '그 수프는 낼 수 있을 만큼 충분히 따뜻했다.' },
          { en: 'He wasn\'t strong enough to lift the box alone.', ko: '그는 혼자 그 상자를 들 만큼 충분히 힘이 세지 않았다.', note: '부정문에서는 enough의 기준에 미달했음을 나타낸다' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '형용사 + enough + to부정사',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'honest enough' },
          { tag: 'M', text: 'to tell the truth' },
        ],
        translation: 'He is honest enough to tell the truth. (enough가 형용사 honest 뒤에 위치)',
      },
      { type: 'heading', text: '명사를 꾸미는 enough — 이때는 명사 앞으로' },
      {
        type: 'p',
        text: '**enough가 형용사·부사가 아니라 명사를 꾸밀 때는 반대로 명사 앞에 옵니다(enough + 명사).** 가산명사·불가산명사 모두와 함께 쓸 수 있으며, 앞에 나온 명사를 반복하지 않고 enough만 단독으로 써서 "그거면 충분하다"는 뜻을 나타낼 수도 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Do we have enough balloons?', ko: '풍선이 충분히 있나요?', note: 'enough + 가산명사(복수)' },
          { en: 'Do we have enough food?', ko: '음식이 충분히 있나요?', note: 'enough + 불가산명사' },
          { en: "We only have two. That's not enough.", ko: '두 개밖에 없어. 그건 충분하지 않아.', note: 'enough가 명사 없이 단독으로 쓰임' },
          { en: "We have these snacks. That'll be enough.", ko: '이 간식들이 있어. 그거면 충분할 거야.' },
        ],
      },
      {
        type: 'icon-row',
        caption: 'enough의 위치 — 무엇을 꾸미는가',
        items: [
          { icon: '➡️', label: '형용사/부사 + enough', sub: 'honest enough (뒤)' },
          { icon: '⬅️', label: 'enough + 명사', sub: 'enough money (앞)' },
        ],
      },
      {
        type: 'note',
        text: '결국 enough는 꾸미는 대상이 무엇이냐에 따라 위치가 정반대로 바뀝니다 — 형용사·부사를 꾸밀 때는 뒤(honest enough), 명사를 꾸밀 때는 앞(enough money)입니다. "enough to부정사"·"not enough to부정사"·"too ~ to부정사" 세 가지를 나란히 놓고 비교하면 정도의 차이를 한눈에 볼 수 있습니다: Yes, it\'s ripe enough to eat. / No, it\'s not ripe enough to eat. / No, it\'s too ripe to eat.',
      },
      {
        type: 'note',
        text: '「형용사/부사 + enough + to부정사」는 「so + 형용사/부사 + that + 주어 + can(could) + 동사원형」으로 바꾸어 쓸 수 있습니다. 다만 enough는 필요조건을 충족했다는 점을, so는 정도가 심해서 그 결과가 나타났다는 점을 강조하므로 뉘앙스가 다릅니다.',
      },
      {
        type: 'transform',
        from: { label: 'enough (필요조건 충족)', text: 'She is smart enough to solve the problem.' },
        to: { label: 'so ~ that (정도와 결과 강조)', text: 'She is so smart that she can solve the problem.' },
        note: 'enough 문장은 문제 해결에 필요한 지능 수준에 \'도달했음\'을 강조하고, so 문장은 똑똑함의 \'정도\'와 그로 인한 결과를 강조합니다.',
      },
      { type: 'heading', text: 'so that: 목적을 나타내는 구문' },
      {
        type: 'p',
        text: '「so that」 구문은 어떤 일에 대한 목적을 나타냅니다. 앞서 배운 「so ~ that」 구문과 달리 so와 that이 붙어 있다는 점에 주의해야 합니다. 두 구문은 겉으로 비슷해 보이지만 기능이 다릅니다. **「so ~ that」은 \'정도가 심해서 이런 결과가 나왔다\'는 결과 진술이고, 「so that」은 \'이런 목적을 위해서\'라는 의도 진술입니다.** 그래서 목적을 나타내는 so that절에는 아직 실현되지 않은 미래의 가능성을 표현하는 조동사 can, could, may, might가 함께 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He worked hard so that he could pass the exam.', ko: '그는 시험에 합격할 수 있도록 열심히 일했다.' },
          { en: 'She saved money so that she could buy a car.', ko: '그녀는 차를 살 수 있도록 돈을 모았다.' },
          { en: 'I study hard so that I can get good grades.', ko: '나는 좋은 성적을 받을 수 있도록 열심히 공부한다.' },
          { en: 'She left early so that she might catch the train.', ko: '그녀는 기차를 탈 수 있도록 일찍 떠났다.' },
          { en: 'We moved to the city so that our children could go to better schools.', ko: '우리는 아이들이 더 좋은 학교에 다닐 수 있도록 도시로 이사했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'so that - 목적을 나타내는 절',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'worked' },
          { tag: 'M', text: 'hard' },
          { tag: 'M', text: 'so that he could pass the exam' },
        ],
        translation: 'He worked hard so that he could pass the exam. (so that절 = 목적: ~할 수 있도록)',
      },
      {
        type: 'p',
        text: '「so that」 구문은 목적을 나타내기 때문에 to부정사와 의미가 비슷하다고 배우기도 합니다. 그러나 두 표현이 전달하는 뉘앙스에는 차이가 있습니다.',
      },
      {
        type: 'table',
        caption: 'so that vs to부정사(목적)',
        headers: ['표현', '예문', '뉘앙스'],
        rows: [
          ['so that + 조동사', 'I study hard so that I can get good grades.', '주어를 다시 밝히고 조동사로 가능성을 표현 — 목적을 이루는 주체가 분명함'],
          ['to부정사', 'I study hard to get good grades.', '조동사 없이 목적을 간결하게 표현 — 미래에 자연히 일어날 일처럼 느껴짐'],
        ],
      },
      { type: 'heading', text: '의문사 + to부정사' },
      {
        type: 'p',
        text: '**「의문사 + to부정사」는 의문사가 to부정사와 결합하여 동사의 목적어 역할을 하는 구조입니다.** what to(무엇을 ~할지), where to(어디로 ~할지), when to(언제 ~할지), who to(누구에게 ~할지), how to(어떻게 ~할지)의 형태로 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I don\'t know what to do.', ko: '나는 무엇을 해야 할지 모르겠다.' },
          { en: 'Can you tell me where to go?', ko: '어디로 가야 할지 말해 줄 수 있나요?' },
          { en: 'Do you know when to start?', ko: '언제 시작해야 할지 알고 있나요?' },
          { en: 'I\'m not sure who to ask for help.', ko: '나는 누구에게 도움을 청해야 할지 확실하지 않다.' },
          { en: 'He explained how to solve the problem.', ko: '그는 그 문제를 어떻게 해결할지 설명했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '의문사 + to부정사 - 목적어 역할',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: "don't know" },
          { tag: 'O', text: 'what to do' },
        ],
        translation: "I don't know what to do. (what to do 전체가 know의 목적어)",
      },
      {
        type: 'note',
        text: '「의문사 + to부정사」는 「의문사 + 주어 + should + 동사원형」에서 주어가 반복될 때, 주어를 지우고 남은 동사를 to부정사로 바꾼 형태입니다. I don\'t know what to do. = I don\'t know what I should do. 전자가 일상적이고 간결한 표현이라면, 후자는 should를 통해 해야 할 행동을 더 명확하게 드러냅니다.',
      },
      {
        type: 'icon-row',
        caption: '28-2 핵심 구문 한눈에 보기',
        items: [
          { icon: '✅', label: 'enough to', sub: '~할 만큼 충분히' },
          { icon: '🎯', label: 'so that', sub: '~하기 위해 (목적)' },
          { icon: '❓', label: '의문사+to부정사', sub: '무엇을/어떻게 ~할지' },
        ],
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'note',
        text: '가장 흔한 실수 두 가지가 있습니다. 첫째, enough의 위치를 잘못 두어 "He is enough honest to tell the truth."처럼 형용사 앞에 쓰는 경우입니다. 형용사·부사를 꾸미는 enough는 반드시 뒤에 와야 합니다(honest enough). 둘째, 목적을 나타내는 「so that」과 결과를 나타내는 「so ~ that」을 혼동하는 경우입니다. "He worked so that hard he could pass the exam."처럼 형용사/부사 없이 so that 사이에 다른 말을 끼워 넣지 않도록 주의해야 합니다. so that은 항상 붙어서 하나의 접속사처럼 쓰입니다.',
      },
      {
        type: 'callout',
        title: '28-2 핵심 정리',
        items: [
          '「형용사/부사 + enough + to부정사」 = ~할 만큼 충분히 …하다. enough는 형용사/부사 뒤에 위치한다.',
          '「so that + 조동사(can/could/may/might)」 = ~할 수 있도록 (목적) — 「so ~ that」(결과)과 혼동하지 않는다.',
          '「의문사 + to부정사」 = 의문사절에서 반복되는 주어를 지우고 동사를 to부정사로 바꾼 축약 형태.',
        ],
      },
    ],
  },

  'ch28-3': {
    title: '병렬 구조',
    blocks: [
      {
        type: 'p',
        text: '두 가지 이상의 대상을 나열하거나 대조할 때 쓰는 구문들을 병렬 구조라고 합니다. **병렬 구조에서는 비교되는 A와 B가 품사(명사, 형용사, 부사, 전치사 등)나 문장에서의 역할(주어, 목적어, 보어 등)이 서로 같아야 한다는 공통 원칙이 있습니다.** 이는 A와 B가 같은 문법적 슬롯을 채우는 대등한 항목이기 때문입니다 — 형태가 다르면 독자는 두 항목이 정말 대등한 것인지 판단하기 어려워집니다. 이 원칙은 not only A but also B 같은 구문뿐만 아니라, 원급·비교급·최상급으로 두 대상을 비교할 때도 똑같이 적용됩니다.',
      },
      { type: 'heading', text: 'not only A but also B: A뿐만 아니라 B도' },
      {
        type: 'example',
        items: [
          { en: 'Amy is not only smart but also friendly.', ko: 'Amy는 똑똑할 뿐만 아니라 다정하다.' },
          { en: 'I like not only English but also math.', ko: '나는 영어뿐 아니라 수학도 좋아한다.' },
          { en: 'Sam not only reads German but also writes it.', ko: 'Sam은 독일어를 읽을 뿐 아니라 쓰기도 한다.' },
          { en: 'The plan is not only expensive but also risky.', ko: '그 계획은 비용이 많이 들 뿐만 아니라 위험하기도 하다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'not only A but also B - 병렬 보어',
        parts: [
          { tag: 'S', text: 'Amy' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'not only smart but also friendly' },
        ],
        translation: 'Amy is not only smart but also friendly. (smart와 friendly 모두 형용사로 형태가 같음)',
      },
      {
        type: 'note',
        text: 'also는 생략할 수 있습니다. 예를 들어 "Jihyo is good at not only singing but she is also good at dancing."에서 의미상 불필요한 부분(she is also good at)을 지우면 "Jihyo is good at not only singing but dancing."처럼 간결해집니다.',
      },
      {
        type: 'p',
        text: '**not only A but also B가 주어 자리에 오면, 동사의 수는 B(동사에 더 가까운 쪽)에 일치시킵니다.** 의미상으로도 also로 강조되는 대상이 B이기 때문에, 형태(근접성)와 의미(강조 대상)가 모두 B를 가리키는 셈입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Not only I but also my sister likes skating.', ko: '나뿐만 아니라 내 여동생도 스케이트 타는 것을 좋아한다.', note: '의미상 강조되는 my sister(단수)에 동사 likes를 일치' },
        ],
      },
      { type: 'heading', text: 'as well as: A뿐만 아니라 B도' },
      {
        type: 'example',
        items: [
          { en: 'She speaks Spanish as well as English.', ko: '그녀는 영어뿐만 아니라 스페인어도 말한다.' },
          { en: 'He enjoys hiking as well as biking.', ko: '그는 자전거 타기뿐만 아니라 하이킹도 즐긴다.' },
          { en: 'The movie was entertaining as well as educational.', ko: '그 영화는 재미있을 뿐만 아니라 교육적이었다.' },
          { en: 'The report was thorough as well as concise.', ko: '그 보고서는 꼼꼼할 뿐만 아니라 간결했다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'A as well as B - 병렬 목적어',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'speaks' },
          { tag: 'O', text: 'Spanish' },
          { tag: 'M', text: 'as well as English' },
        ],
        translation: 'She speaks Spanish as well as English. (Spanish와 English 모두 명사로 형태가 같음)',
      },
      {
        type: 'note',
        text: '「A as well as B」가 주어로 쓰이면 not only A but also B와 반대로, 앞에 있는 A에 동사의 수를 일치시킵니다. 예: The teacher as well as the students is excited about the trip. (학생들처럼 그 선생님도 그 여행을 재미있어한다 — 강조 대상인 The teacher가 단수이므로 is). as well as는 형태상 A가 문장의 진짜 주어이고 as well as B는 덧붙는 부가어이기 때문에, 핵심 주어인 A에 수를 맞춘다고 이해하면 됩니다.',
      },
      {
        type: 'icon-row',
        caption: '주어 자리의 수 일치 — 동사에 가까운 쪽',
        items: [
          { icon: '👈', label: 'not only A but also B', sub: 'B에 수 일치' },
          { icon: '👉', label: 'A as well as B', sub: 'A에 수 일치' },
        ],
      },
      { type: 'heading', text: '기타 병렬 구조: not A but B / both A and B / either A or B' },
      {
        type: 'table',
        caption: '병렬 구조 정리',
        headers: ['구문', '의미', '예문'],
        rows: [
          ['not A but B', 'A가 아니라 B', 'It is not a cat but a dog. (그것은 고양이가 아니라 개다.)'],
          ['both A and B', 'A, B 둘 다', 'Both apples and oranges are delicious. (사과와 오렌지 둘 다 맛있다.)'],
          ['either A or B', 'A 아니면 B', 'You can have either coffee or tea. (커피나 차 둘 중 하나를 마실 수 있다.)'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'He did not go to the party but stayed at home.', ko: '그는 파티에 가지 않고 집에 있었다.' },
          { en: 'The test was not difficult but easy.', ko: '시험은 어렵지 않고 쉬웠다.' },
          { en: 'She both dances and sings well.', ko: '그녀는 춤도 잘 추고 노래도 잘한다.' },
          { en: 'The movie was both exciting and educational.', ko: '그 영화는 흥미진진하고 교육적이었다.' },
          { en: 'Either stay here or go home.', ko: '여기 머물거나 집에 가라.' },
          { en: 'The book is either interesting or boring.', ko: '그 책은 흥미롭거나 지루하다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'both A and B - 병렬 주어',
        parts: [
          { tag: 'S', text: 'Both apples and oranges' },
          { tag: 'V', text: 'are' },
          { tag: 'C', text: 'delicious' },
        ],
        translation: 'Both apples and oranges are delicious. (apples와 oranges 모두 명사로 형태가 같고, 복수 취급하여 are)',
      },
      {
        type: 'icon-row',
        caption: '병렬 구조 한눈에 보기',
        items: [
          { icon: '➕', label: 'not only A but also B', sub: 'A뿐만 아니라 B도' },
          { icon: '🤝', label: 'A as well as B', sub: 'B뿐만 아니라 A도' },
          { icon: '🔀', label: 'not A but B', sub: 'A가 아니라 B' },
          { icon: '👯', label: 'both A and B', sub: 'A, B 둘 다' },
          { icon: '🎲', label: 'either A or B', sub: 'A 아니면 B' },
        ],
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'note',
        text: '가장 흔한 실수는 A와 B의 형태를 맞추지 않는 것입니다. "She likes not only to sing but also dancing."처럼 A는 to부정사(to sing), B는 동명사(dancing)로 형태가 다르면 병렬 구조가 깨집니다. "She likes not only to sing but also to dance." 또는 "She likes not only singing but also dancing."처럼 형태를 통일해야 합니다. 수 일치에서도 not only A but also B(→B에 일치)와 A as well as B(→A에 일치)의 규칙을 반대로 기억하는 경우가 많으니, \'동사에 더 가깝고 의미상 더 강조되는 쪽\'이라는 원리로 기억하는 것이 안전합니다.',
      },
      {
        type: 'callout',
        title: '28-3 핵심 정리',
        items: [
          '병렬 구조의 A와 B는 품사와 문장에서의 역할이 반드시 같아야 한다.',
          'not only A but also B / not A but B / both A and B / either A or B / A as well as B — 형태에 따라 의미와 수 일치 규칙이 다르다.',
          '주어 자리에서 수 일치: not only A but also B → B에 일치, A as well as B → A에 일치 (모두 동사에 의미상·형태상 더 가까운 요소에 일치).',
          '병렬 구조에서 A와 B의 품사·형태가 어긋나는 것이 가장 흔한 오류이므로, 항상 A와 B를 같은 형태로 맞췄는지 확인한다.',
        ],
      },
    ],
  },

  'ch28-4': {
    title: '불특정 대명사+형용사, 형용사+to부정사, worth+동명사',
    blocks: [
      { type: 'heading', text: 'some-/any-/no-/every- 계열, 언제 무엇을 쓰는가' },
      {
        type: 'p',
        text: '불특정 대명사(-thing/-one/-body)를 고를 때 가장 먼저 확인해야 할 것은 문장이 긍정문·부정문·의문문 중 무엇인가입니다. **some- 계열(something, someone, somebody)은 긍정문에서 쓰고, any- 계열(anything, anyone, anybody)은 의문문과 부정문에서 씁니다.** no- 계열(nothing, no one, nobody)은 그 자체로 이미 부정의 의미를 담고 있어 긍정문의 동사와 함께 쓰이며, every- 계열(everything, everyone, everybody)은 "전부 다"라는 뜻으로 긍정문에 씁니다. 이 대명사들은 모두 단수 취급하여 동사도 단수형을 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Did anyone call me this morning?', ko: '오늘 아침에 누가 나에게 전화했나요?', note: '의문문 — any 계열' },
          { en: 'Yes, someone called you at 11 o\'clock.', ko: '네, 누군가 11시에 전화했어요.', note: '긍정문 — some 계열' },
          { en: "I don't want to talk to anybody.", ko: '나는 아무와도 이야기하고 싶지 않다.', note: '부정문 — any 계열' },
          { en: "There's nobody here.", ko: '여기에는 아무도 없다.', note: 'no 계열 — 동사(is)는 긍정형' },
          { en: 'Everyone is at the big meeting.', ko: '모두 큰 회의에 참석 중이다.', note: 'every 계열 — 단수 동사 is' },
        ],
      },
      {
        type: 'note',
        text: '흔한 실수 중 하나는 부정문에서 no one/nobody를 다시 부정어와 함께 쓰는 것입니다. "*There isn\'t no one here."는 이중 부정이 되어 틀린 문장입니다. 부정문에서는 반드시 anyone/anybody를 써서 "There isn\'t anyone here."라고 해야 합니다. no one/nobody는 그 자체가 부정의 의미를 담고 있으므로 앞에 다시 not이나 isn\'t를 붙이지 않습니다.',
      },
      {
        type: 'icon-row',
        caption: 'some-/any-/no-/every- 계열 — 문장 종류에 따라',
        items: [
          { icon: '✅', label: 'some-', sub: '긍정문' },
          { icon: '❓', label: 'any-', sub: '의문문·부정문' },
          { icon: '🚫', label: 'no-', sub: '그 자체로 부정' },
          { icon: '🌐', label: 'every-', sub: '전부 (긍정문)' },
        ],
      },
      { type: 'heading', text: '-thing, -one, -body + 형용사: 왜 형용사가 뒤로 가는가' },
      {
        type: 'p',
        text: 'something, anything, nothing / someone, anyone, no one / somebody, anybody, nobody처럼 -thing, -one, -body로 끝나는 명사는 문장에서 불특정한 대상을 나타냅니다. **이런 불특정 대명사를 형용사가 꾸며줄 때는 일반적인 명사와 달리 형용사가 대명사 뒤에 위치합니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'I found something interesting in the book.', ko: '나는 그 책에서 흥미로운 무언가를 발견했다.' },
          { en: 'There is nothing new under the sun.', ko: '태양 아래 새로운 것은 아무것도 없다.' },
          { en: 'She is looking for someone special to share her life with.', ko: '그녀는 삶을 함께 나눌 특별한 누군가를 찾고 있다.' },
          { en: 'He wants to meet somebody famous.', ko: '그는 유명한 누군가를 만나고 싶어 한다.' },
          { en: 'There was nobody important at the meeting.', ko: '그 회의에는 중요한 사람이 아무도 없었다.' },
          { en: 'Is there anything possible we can do to help?', ko: '우리가 도울 수 있는 가능한 어떤 것이 있나요?' },
          { en: 'We need anyone capable of solving this problem.', ko: '우리는 이 문제를 해결할 수 있는 유능한 누구든지 필요하다.' },
          { en: 'There was no one available to take the call.', ko: '전화를 받을 수 있는 이용 가능한 사람이 아무도 없었다.' },
          { en: 'Is there anybody interested in joining the club?', ko: '그 클럽에 가입하는 데 관심 있는 누구든지 있나요?' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '불특정 대명사 + 형용사 (형용사가 뒤로)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'found' },
          { tag: 'O', text: 'something interesting' },
          { tag: 'M', text: 'in the book' },
        ],
        translation: 'I found something interesting in the book. (interesting이 something 뒤에 위치)',
      },
      {
        type: 'note',
        text: 'something은 some+thing, anything은 any+thing, nothing은 no+thing의 결합입니다. some, any, no와 같은 한정사는 명사와 의미적으로 매우 가까워 명사 바로 앞에 붙습니다. 그 결과 형용사는 한정사에게 자리를 내주고 명사(-thing/-one/-body) 뒤로 밀려나게 됩니다. 예: something new(새로운 무언가), someone kind(친절한 누군가)',
      },
      { type: 'heading', text: '감정·상태 형용사 + to부정사: 이유를 나타내는 to부정사' },
      {
        type: 'p',
        text: '**감정이나 상태를 나타내는 형용사 다음에 오는 to부정사는 그 감정·상태에 대한 근거나 이유를 나타내는 부사적 용법으로 쓰입니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'I am happy to meet you here.', ko: '나는 너를 여기서 만나서 기쁘다.', note: '= I am happy because I meet you here.' },
          { en: 'He was very surprised to hear the news.', ko: '그는 그 뉴스를 들어서 매우 놀랐었다.', note: '= He was very surprised because he heard the news.' },
          { en: 'We were relieved to find the lost dog safe.', ko: '우리는 잃어버린 개가 안전한 것을 발견해서 안심했다.', note: '= We were relieved because we found the lost dog safe.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '감정 형용사 + to부정사 (이유)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'happy' },
          { tag: 'M', text: 'to meet you here' },
        ],
        translation: 'I am happy to meet you here. (to meet you here = happy의 이유)',
      },
      { type: 'heading', text: '성질·평가 형용사 + to부정사: 난이도·평가를 나타내는 to부정사' },
      {
        type: 'p',
        text: '감정을 나타내는 형용사가 아닌 경우에는 to부정사를 \'~하기가, ~하기에\'로 해석합니다. 이때 형용사가 나타내는 성질이나 상태가 to부정사와 의미적으로 자연스럽게 연결되어야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She is not easy to persuade.', ko: '그녀는 설득하기 쉽지 않다.' },
          { en: 'This book is hard to understand.', ko: '이 책은 이해하기 어렵다.' },
          { en: 'These fruits are not fresh to eat.', ko: '이 과일들은 먹기에 신선하지 않다.' },
          { en: 'The exam is easy to pass.', ko: '그 시험은 합격하기 쉽다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '성질·평가 형용사 + to부정사',
        parts: [
          { tag: 'S', text: 'This book' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'hard' },
          { tag: 'M', text: 'to understand' },
        ],
        translation: 'This book is hard to understand. (의미상 book이 understand의 목적어 — 이해하기에 어렵다)',
      },
      { type: 'heading', text: 'be동사 + worth + 동사원형-ing' },
      {
        type: 'p',
        text: '어떤 사람이나 사물의 가치에 대해 말할 때 worth 다음에 동사원형-ing를 사용하여, 어떤 행동이나 활동이 시간과 노력을 들일 가치가 있음을 나타냅니다. **worth는 전치사에 가까운 성격을 가지고 있어서, 뒤에 동사가 올 때는 to부정사가 아니라 전치사의 목적어 형태인 동명사가 옵니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'The car isn\'t worth repairing.', ko: '그 차는 수리할 가치가 없다.' },
          { en: 'Joe is worth talking to.', ko: 'Joe는 대화할 가치가 있다.' },
          { en: 'This museum is worth visiting at least once.', ko: '이 박물관은 적어도 한 번은 방문할 가치가 있다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'worth + 동명사 (to부정사 아님)',
        parts: [
          { tag: 'S', text: 'The car' },
          { tag: 'V', text: "isn't" },
          { tag: 'C', text: 'worth repairing' },
        ],
        translation: "The car isn't worth repairing. (worth 뒤에는 동명사 — to repair가 아님)",
      },
      {
        type: 'transform',
        from: { label: '사람/사물 주어 + worth + Ving', text: 'Joe is worth talking to.' },
        to: { label: '가주어 it + worth + Ving + 목적어', text: 'It is worth talking to Joe.' },
        note: '두 문장은 같은 뜻이지만, 첫 문장은 Joe를 주어로 내세워 Joe라는 인물에 초점을 두고, 두 번째 문장은 talking to Joe라는 행위 자체에 초점을 둡니다.',
      },
      {
        type: 'icon-row',
        caption: '28-4 핵심 구문 한눈에 보기',
        items: [
          { icon: '🔄', label: 'something new', sub: '형용사는 뒤에서 꾸민다' },
          { icon: '😊', label: '감정 형용사+to부정사', sub: '~해서 (이유)' },
          { icon: '💎', label: 'worth+Ving', sub: '~할 가치가 있다' },
        ],
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'note',
        text: '가장 흔한 실수는 어순과 동사 형태 두 가지입니다. 첫째, "new something"처럼 형용사를 -thing/-one/-body 앞에 두는 것은 잘못된 어순입니다 — 반드시 "something new"처럼 뒤에 와야 합니다. 둘째, worth 뒤에 to부정사를 쓰는 "The car isn\'t worth to repair."도 흔한 오류입니다. worth는 전치사적 성격을 가지므로 뒤에는 동명사(worth repairing)가 와야 합니다.',
      },
      {
        type: 'callout',
        title: '28-4 핵심 정리',
        items: [
          '-thing/-one/-body를 꾸미는 형용사는 명사 뒤에 위치한다 (something new, anyone kind) — 한정사(some/any/no)가 명사에 더 가깝기 때문이다.',
          '감정·상태 형용사 + to부정사는 이유·근거를 나타내는 부사적 용법으로, 성질·평가 형용사 + to부정사는 난이도·평가를 나타낸다.',
          '「be동사 + worth + Ving」 = ~할 가치가 있다(to부정사 아님). 가주어 it을 사용해 「It + be동사 + worth + Ving + 목적어」로도 바꿀 수 있다.',
        ],
      },
    ],
  },

  'ch28-5': {
    title: '동사 강조 do/does/did와 it be ~ that 강조구문',
    blocks: [
      { type: 'heading', text: '동사를 강조하는 do/does/did: 왜 이미 완전한 문장에 do를 더하는가' },
      {
        type: 'p',
        text: '"I love you." / "I don\'t love you."처럼 don\'t는 이미 문법적으로 필요해서 들어가는 요소지만, 동시에 부정의 의미를 강하게 각인시키는 역할도 합니다. 이 원리를 긍정문에도 그대로 적용할 수 있습니다. 즉, 문법적으로는 do가 전혀 필요 없는 완전한 긍정문(He likes it.)에 do를 굳이 추가하면(He does like it.), 문장의 의미는 바뀌지 않지만 화자의 감정적 강조 — \'정말로, 확실히\'라는 태도 — 가 더해집니다. **이것이 강조의 do가 필요한 이유입니다: 문법이 아니라 화자의 태도를 전달하기 위한 장치입니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'John did finish this project by himself.', ko: 'John이 스스로 프로젝트를 끝내긴 했다.', note: '팀원들이 다른 업무로 바빠 도와주지 못했지만, John이 책임감을 갖고 혼자 끝냈다는 사실을 강조' },
          { en: 'I don\'t like reading books, but do like watching movies.', ko: '나는 책 읽기를 좋아하지 않지만, 영화 보는 것은 좋아한다.', note: '독서 모임 초대를 사양하면서, 대신 영화는 확실히 좋아한다는 점을 강조' },
          { en: 'She can\'t spend much time at home, but does enjoy playing board games with her family.', ko: '그녀는 집에서 많은 시간을 보내지 못하지만 가족들과 보드 게임 하는 것은 좋아한다.', note: '바쁘더라도 가족과 보드게임 하는 시간만큼은 확실히 즐긴다는 점을 강조' },
          { en: 'Now, I don\'t speak Chinese, but I do speak a little Polish, a little Korean.', ko: '나는 중국어는 못하지만, 폴란드어와 한국어는 정말로 조금 할 줄 안다.', note: '중국어는 못하지만 폴란드어·한국어는 조금이라도 확실히 할 수 있다는 점을 강조' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '동사 강조 - did + 동사원형',
        parts: [
          { tag: 'S', text: 'John' },
          { tag: 'V', text: 'did finish' },
          { tag: 'O', text: 'this project' },
          { tag: 'M', text: 'by himself' },
        ],
        translation: 'John did finish this project by himself. (did가 finish를 강조 — 정말로 끝냈다)',
      },
      {
        type: 'note',
        text: '강조의 do는 짧은 문장만으로는 의미가 잘 드러나지 않을 때가 많습니다. 예를 들어 친구들과 식사 중에 내가 매운 카레를 주문했는데, 친구가 계속 다른 메뉴를 추천한다고 해봅시다. 이때 "No, thanks. I do want the spicy curry. That\'s exactly what I\'m in the mood for."라고 말하면, do가 \'남이 뭐라 하든 내가 정말로 원하는 것\'이라는 의지와 선호를 강조합니다. 이처럼 강조의 do는 상대의 의심이나 반박에 맞서 자신의 생각을 재확인시키는 대화 맥락에서 특히 자연스럽습니다.',
      },
      { type: 'heading', text: 'it be ~ that 강조구문 (분열문): 왜 순서를 뒤바꾸는가' },
      {
        type: 'p',
        text: '"John bought the book."은 이미 문법적으로 완전한 문장입니다. 그런데 화자가 \'다른 사람이 아니라 바로 John이\'라는 점을 두드러지게 하고 싶다면 어떻게 해야 할까요? 어순을 그대로 두고서는 특정 성분만 강조할 방법이 마땅치 않습니다. **그래서 영어는 강조하고 싶은 요소를 It is/was와 that 사이라는 특별한 자리로 옮기는 방법을 사용합니다.** 이 자리는 문장에서 심리적으로 가장 눈에 띄는 위치이기 때문입니다. 이렇게 문장의 원래 순서를 일부러 바꾸어 놓은 구문을 분열문(cleft sentence)이라고 부릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'It was John that bought the book.', ko: '책을 산 사람은 바로 존이었다.', note: '원문: John bought the book. — 주어 John을 강조' },
          { en: 'It was the movie that Mary saw.', ko: '메리가 본 것은 바로 그 영화였다.', note: '원문: Mary saw the movie. — 목적어 the movie를 강조' },
          { en: 'It was in the park that he met her.', ko: '그가 그녀를 만난 곳은 바로 공원이었다.', note: '원문: He met her in the park. — 장소 부사구를 강조' },
          { en: 'It was at 5 PM that she left the office.', ko: '그녀가 사무실을 떠난 시간은 바로 오후 5시였다.', note: '원문: She left the office at 5 PM. — 시간 부사구를 강조' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'it be ~ that 강조구문',
        parts: [
          { tag: 'It is/was', text: 'It was' },
          { tag: '강조 요소', text: 'John' },
          { tag: 'that', text: 'that' },
          { tag: '나머지', text: 'bought the book' },
        ],
        translation: 'It was John that bought the book. (원문 John bought the book.에서 주어 John을 강조)',
      },
      { type: 'heading', text: '강조 대상에 따라 문장이 달라지는 방식' },
      {
        type: 'p',
        text: '분열문의 핵심은 강조하는 성분이 무엇이냐에 따라 It is/was와 that 사이에 들어가는 말과 나머지 부분이 달라진다는 점입니다. 같은 원문 "John bought the book at the store yesterday."에서도 무엇을 강조하느냐에 따라 전혀 다른 문장이 만들어집니다.',
      },
      {
        type: 'table',
        caption: '강조 대상에 따른 분열문의 변화',
        headers: ['강조 대상', '원문', '분열문'],
        rows: [
          ['주어', 'John bought the book at the store yesterday.', 'It was John that bought the book at the store yesterday.'],
          ['목적어', 'John bought the book at the store yesterday.', 'It was the book that John bought at the store yesterday.'],
          ['장소 부사구', 'John bought the book at the store yesterday.', 'It was at the store that John bought the book yesterday.'],
        ],
      },
      {
        type: 'p',
        text: 'that은 강조하는 대상의 종류에 따라 who(사람·주어), which(사물), where(장소), when(시간)으로 바꾸어 쓸 수 있습니다.',
      },
      {
        type: 'table',
        caption: 'that의 대체 표현',
        headers: ['강조 대상', '예문 (that)', '바꾼 표현'],
        rows: [
          ['사람(주어)', 'It was John that bought the book.', 'It was John who bought the book.'],
          ['사물(목적어)', 'It was the movie that Mary saw.', 'It was the movie which Mary saw.'],
          ['장소', 'It was in the park that he met her.', 'It was in the park where he met her.'],
          ['시간', 'It was at 5 PM that she left the office.', 'It was at 5 PM when she left the office.'],
        ],
      },
      {
        type: 'note',
        text: 'who/which/where/when으로 바꾼 문장은 관계대명사·관계부사를 쓴 문장과 겉모습이 비슷해 보이지만 목적이 다릅니다. 분열문(It was John who called me. — 전화한 사람은 바로 존이었다)은 특정 부분을 강조하는 것이 목적이고, 관계사 문장(The man who called me is John. — 나에게 전화한 사람은 존이다)은 명사에 대한 추가 정보를 설명하는 것이 목적입니다. 분열문의 It은 뒤에서 진짜 의미를 채워주는 가주어이지만, 관계사 문장의 The man은 그 자체로 문장의 실질적 주어입니다.',
      },
      { type: 'heading', text: '일반 명사로 초점 옮기기 — The place/The reason + is ~' },
      {
        type: 'p',
        text: 'What 유사분열문은 want, like, hate처럼 감정을 나타내는 동사와 잘 어울리지만, 강조하려는 대상이 사람·장소·시간·이유처럼 구체적인 개념일 때는 what 대신 그 의미를 담은 일반 명사(the place, the reason, the woman, the time 등)를 문장 맨 앞에 놓고 뒤에 관계절을 이어 강조할 수 있습니다. 형식은 What 유사분열문과 같지만 what 대신 더 구체적인 명사를 주어로 쓴다는 점이 다릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The place I most enjoyed visiting was Nepal.', ko: '내가 방문해서 가장 즐거웠던 곳은 네팔이었다.', note: 'The place가 what의 자리를 대신함' },
          { en: 'The woman I respect the most is Marie Curie.', ko: '내가 가장 존경하는 여성은 마리 퀴리이다.' },
          { en: 'The reason they gave was not good enough.', ko: '그들이 제시한 이유는 충분하지 않았다.' },
          { en: 'The evening I remember most is my first concert.', ko: '내가 가장 기억하는 저녁은 나의 첫 콘서트이다.' },
        ],
      },
      {
        type: 'icon-row',
        caption: '초점을 옮기는 주어 자리 — What 대신 구체적인 명사도 가능',
        items: [
          { icon: '❓', label: 'What', sub: '막연한 것을 강조' },
          { icon: '📍', label: 'The place', sub: '장소를 구체적으로 강조' },
          { icon: '💬', label: 'The reason', sub: '이유를 구체적으로 강조' },
        ],
      },
      { type: 'heading', text: '형용사·동사는 강조할 수 없다: What 유사분열문' },
      {
        type: 'p',
        text: '**분열문은 주어, 목적어, 시간, 장소 등의 명사(구)나 부사(구)는 강조할 수 있지만, 형용사나 동사는 강조할 수 없습니다.** "?It was happy that she was."(She was very happy.가 훨씬 자연스러움)나 "*It was runs that he."는 어색하거나 문법적으로 잘못된 문장입니다. It ~ that 구조는 that 뒤에 명사 상당의 빈자리가 남아야 성립하는데, 형용사나 동사는 그 자리를 메울 수 없기 때문입니다. 형용사나 동사를 강조하려면 What으로 시작하는 유사분열문을 사용합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'What we\'ve painted the kitchen is dark green.', ko: '우리가 부엌을 칠한 색은 바로 짙은 녹색이다.', note: '원문: We\'ve painted the kitchen dark green. — 형용사 강조' },
          { en: 'What they do every night is study hard.', ko: '그들이 매일 밤 하는 것은 바로 열심히 공부하는 것이다.', note: '원문: They study hard every night. — 동사 강조' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'What 유사분열문 - 동사 강조',
        parts: [
          { tag: 'S', text: 'What they do every night' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'study hard' },
        ],
        translation: 'What they do every night is study hard. (동사구 study hard를 강조 — It~that로는 불가능)',
      },
      {
        type: 'icon-row',
        caption: '강조 표현 한눈에 보기',
        items: [
          { icon: '💪', label: 'do/does/did 강조', sub: '정말로, 확실히' },
          { icon: '🎯', label: 'It ~ that 강조구문', sub: '바로 그것을 강조' },
        ],
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'note',
        text: '학습자들이 자주 하는 실수는 형용사나 동사를 억지로 It ~ that 분열문에 넣으려는 것입니다("It was tired that she felt."와 같은 문장은 부자연스럽습니다). 형용사·동사를 강조하고 싶다면 반드시 What 유사분열문을 사용해야 합니다. 또한 사람을 강조할 때 which를 쓰거나(It was John which bought the book. — 틀림), 사물을 강조할 때 who를 쓰는(It was the movie who Mary saw. — 틀림) 것도 흔한 오류입니다. that을 대체할 때는 강조하는 대상의 종류(사람/사물/장소/시간)에 맞는 관계사를 골라야 합니다.',
      },
      { type: 'heading', text: '도치를 이용한 강조 — 부정 부사가 문장 맨 앞에 오면' },
      {
        type: 'p',
        text: 'not only, not since, only when, only if, little, never, rarely, hardly, no sooner처럼 부정적이거나 제한적인 의미를 가진 부사(구)를 강조하기 위해 문장 맨 앞으로 옮기면, 그 뒤에서 주어와 (조)동사의 자리가 뒤바뀝니다. **이것이 도치(inversion)입니다 — 부정어가 문장의 가장 눈에 띄는 자리(맨 앞)를 차지한 대가로, 그 뒤에 있던 주어와 동사가 의문문과 같은 어순으로 바뀌는 것입니다.** 일반동사만 있는 문장에서는 의문문을 만들 때처럼 do/does/did를 끌어와 도치시킵니다. 격식체나 문어체, 연설문에서 극적인 효과를 주기 위해 자주 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Not only is she a famous singer, but she\'s also a very good actor.', ko: '그녀는 유명한 가수일 뿐만 아니라 훌륭한 배우이기도 하다.', note: '평서문: She is a famous singer. → be동사 is가 주어 she 앞으로 도치' },
          { en: 'Not since my childhood have I enjoyed a performance so much.', ko: '어린 시절 이후로 이렇게 공연을 즐긴 적이 없다.', note: '조동사 have가 주어 I 앞으로 도치' },
          { en: 'Not until the performance was over did he look up at the audience.', ko: '공연이 끝나고 나서야 그는 관객을 올려다보았다.', note: '일반동사 문장이라 do가 끌려와 도치됨' },
          { en: 'Only if it stops raining will the race go ahead this afternoon.', ko: '비가 그쳐야만 오늘 오후 경주가 진행될 것이다.' },
          { en: 'Little did they know how lucky they were to be successful.', ko: '그들은 자신이 성공하기까지 얼마나 운이 좋았는지 거의 알지 못했다.', note: 'little(거의 ~않다)도 부정적 의미의 부사' },
          { en: 'No sooner had Tina released an album than she starred in her first movie.', ko: 'Tina는 앨범을 발매하자마자 첫 영화에 출연했다.', note: 'no sooner ~ than — 시간 부사의 도치' },
          { en: 'Rarely do you meet a celebrity with such talent and style.', ko: '그런 재능과 스타일을 가진 유명인은 좀처럼 만나기 어렵다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부정 부사 도치',
        parts: [
          { tag: 'M', text: 'Not only' },
          { tag: 'V', text: 'is' },
          { tag: 'S', text: 'she' },
          { tag: 'C', text: 'a famous singer' },
        ],
        translation: 'Not only is she a famous singer... (원문: She is a famous singer. — is와 she의 순서가 바뀜)',
      },
      {
        type: 'table',
        caption: '도치를 유발하는 대표적인 부정·제한 부사(구)',
        headers: ['부사(구)', '의미', '함께 도치되는 것'],
        rows: [
          ['not only ~ (but also)', '~뿐만 아니라', 'be동사 또는 조동사'],
          ['not since / not until', '~ 이후로 처음 / ~하고 나서야', '조동사 (없으면 do/does/did)'],
          ['only if / only when / only after', '~해야만 / ~할 때만 / ~한 후에야', 'will, do/does/did 등'],
          ['little / rarely / hardly / never (before)', '거의 ~않다 / 좀처럼 ~않다', 'do/does/did 또는 조동사'],
          ['no sooner ~ than', '~하자마자', 'had (과거완료)'],
        ],
      },
      {
        type: 'icon-row',
        caption: '도치란 — 부정어가 맨 앞을 차지한 대가',
        items: [
          { icon: '🔤', label: 'She is a singer.', sub: '평서문 (주어 → 동사)' },
          { icon: '🔀', label: '어순 반전', sub: '부정어가 문장 맨 앞으로' },
          { icon: '🔡', label: 'Not only is she...', sub: '도치문 (동사 → 주어)' },
        ],
      },
      { type: 'heading', text: '도치를 이용한 강조 — so와 neither로 맞장구치기' },
      {
        type: 'p',
        text: '상대방의 말에 "나도 그래(긍정)" 또는 "나도 안 그래(부정)"라고 맞장구칠 때도 도치를 씁니다. **긍정문에 동의할 때는 「So + (조)동사 + 주어」, 부정문에 동의할 때는 「Neither/Nor + (조)동사 + 주어」의 어순을 씁니다.** 이때도 앞 문장에 조동사가 없으면 do/does/did를 끌어와 도치시킵니다.',
      },
      {
        type: 'example',
        items: [
          { en: "I'm excited for the party tonight. — So am I!", ko: '오늘 밤 파티가 기대돼. — 나도 그래!', note: 'be동사 am이 주어 I 앞으로 도치' },
          { en: "I need to get some new clothes. — So do I.", ko: '나는 새 옷이 좀 필요해. — 나도 그래.', note: '일반동사 문장이라 do가 도치됨' },
          { en: "I've never been to China. — Neither have I.", ko: '나는 중국에 가본 적이 없어. — 나도 없어.', note: '부정문에 동의 — Neither + have + I' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: 'Neither + 동사 + 주어 (부정문에 동의)',
        parts: [
          { tag: 'M', text: 'Neither' },
          { tag: 'V', text: 'have' },
          { tag: 'S', text: 'I' },
        ],
        translation: "Neither have I. (= I've never been to China, either. — 부정문에 맞장구칠 때도 도치)",
      },
      {
        type: 'callout',
        title: '28장 핵심 정리',
        items: [
          '문법적으로 완전한 문장에 do/does/did를 더하면 의미는 그대로지만 화자의 의지·확신 같은 감정적 강조가 더해진다.',
          '「It is/was ~ that ...」 분열문은 강조하려는 요소를 It is/was와 that 사이에 두어 주어·목적어·부사구를 강조한다. that은 대상에 맞게 who/which/where/when으로 바꿔 쓸 수 있다.',
          '형용사나 동사는 It ~ that 분열문으로 강조할 수 없다 — 이때는 What으로 시작하는 유사분열문을 사용한다.',
          'too~to, so~that, enough to, so that, 의문사+to부정사, 병렬 구조, 불특정 대명사+형용사, 형용사+to부정사, worth+Ving 등 이 장에서 다룬 구문들은 모두 하나의 규칙으로 묶이지 않는 실용적인 표현들이지만, 각각이 전달하는 미묘한 뉘앙스 차이를 이해하면 훨씬 정교하게 영어를 구사할 수 있다.',
        ],
      },
      {
        type: 'callout',
        title: '28장 보충 정리 — such, enough+명사, 대명사 기본 규칙, 도치',
        items: [
          'such + (a/an) + (형용사) + 명사(+ that)는 so와 달리 명사(구)를 직접 꾸민다 — so는 형용사·부사만 꾸밀 수 있다.',
          'enough가 명사를 꾸밀 때는 명사 앞에 온다(enough money) — 형용사·부사를 꾸밀 때(honest enough)와 위치가 정반대이다.',
          'some-은 긍정문, any-는 의문문·부정문, no-는 그 자체로 부정, every-는 "전부"를 나타내며 모두 단수 취급한다. no one/nobody가 있는 문장에 not을 또 넣는 이중 부정에 주의한다.',
          'The place/The reason처럼 구체적 의미를 가진 명사를 문장 앞에 두는 것도 what 유사분열문과 같은 방식의 초점 이동이다.',
          'not only, never, rarely, no sooner ~ than처럼 부정·제한 부사가 문장 맨 앞에 오면 주어와 (조)동사가 도치된다. So/Neither로 맞장구칠 때도 같은 원리로 도치가 일어난다.',
        ],
      },
      {
        type: 'note',
        text: '아가릿 101을 마치며 — 명사와 동사에서 시작해 도치, 강조, 병렬구조 같은 세밀한 표현까지, 긴 여정을 함께 해주어 고맙습니다. 문법은 외워야 할 규칙의 목록이 아니라, 말하는 사람의 의도와 뉘앙스를 정확히 전달하기 위한 도구입니다. 이 책에서 배운 내용을 바탕으로 앞으로도 꾸준히, 즐겁게 영어를 마주하길 바랍니다. 여러분의 영어 학습을 응원합니다.',
      },
    ],
  },
}
