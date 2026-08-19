export const ch25 = {
  'ch25-1': {
    title: '분사의 형용사 역할 (현재분사·과거분사)',
    blocks: [
      {
        type: 'p',
        text: '**분사는 동사가 형용사처럼 쓰일 수 있도록 형태를 바꾼 것입니다.** 분사(Participle)라는 말은 "나누어지다"라는 뜻을 가지고 있는데, 이는 분사가 동사의 형태를 그대로 가지고 있으면서도 형용사의 역할을 겸하기 때문입니다. 영어에는 현재분사와 과거분사라는 두 종류의 분사가 있으며, 둘은 의미가 서로 다릅니다.',
      },
      {
        type: 'table',
        caption: '현재분사 vs 과거분사',
        headers: ['구분', '형태', '의미', '예'],
        rows: [
          ['현재분사', '동사원형 + ing', '능동(스스로 하는), 진행(~하고 있는)', 'the running water (흐르는 물)'],
          ['과거분사', '동사원형 + ed (불규칙 있음)', '수동(~되는, ~당하는), 완료(이미 ~된)', 'a broken vase (깨진 꽃병)'],
        ],
      },
      {
        type: 'icon-row',
        caption: '현재분사 vs 과거분사 한눈에 보기',
        items: [
          { icon: '🏃', label: '현재분사 (-ing)', sub: '능동·진행' },
          { icon: '✅', label: '과거분사 (-ed/p.p.)', sub: '수동·완료' },
        ],
      },
      {
        type: 'note',
        text: '분사를 구분하는 가장 근본적인 질문은 하나입니다. "분사가 꾸며주는 명사가 그 동작을 직접 하는 쪽인가, 그 동작을 당하는(겪는) 쪽인가?" 동작을 하는 쪽이면 현재분사, 동작을 당하는 쪽이면 과거분사입니다. 이 원리 하나로 뒤에 나올 모든 분사 표현을 판단할 수 있습니다.',
      },
      { type: 'heading', text: '현재분사: 능동·진행' },
      {
        type: 'p',
        text: '현재분사(Present Participle)는 동사에 -ing를 붙여 만들며, 형용사처럼 명사를 꾸며줍니다. **현재분사가 꾸미는 명사는 동작을 스스로 하고 있거나(능동), 그 동작이 지금 진행 중이거나 반복되고 있는(진행) 대상입니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'The running water', ko: '흐르는 물', note: 'running이 water를 꾸며주며, 물이 스스로 흐르고 있는 진행의 상태를 나타냄' },
          { en: 'A barking dog', ko: '짖는 개', note: 'barking이 dog를 꾸며주며, 개가 스스로 짖고 있는 능동·진행의 상태를 나타냄' },
          { en: 'A working mother', ko: '일하고 있는 엄마', note: 'working이 mother를 꾸며주며, 엄마가 일을 하고 있는 진행의 상태를 나타냄' },
          { en: 'The crying baby', ko: '우는 아기', note: 'crying이 baby를 꾸며주며, 아기가 울고 있는 진행의 상태를 나타냄' },
          { en: 'A growing economy', ko: '성장하고 있는 경제', note: '경제가 스스로 성장이라는 동작을 하고 있는 진행의 상태' },
          { en: 'The rising sun', ko: '떠오르는 해', note: '해가 스스로 떠오르는 동작을 하고 있는 진행의 상태' },
          { en: 'A shining star', ko: '빛나고 있는 별', note: '별이 스스로 빛을 내는 능동의 상태' },
          { en: 'The falling leaves', ko: '떨어지고 있는 낙엽', note: '낙엽이 스스로 떨어지는 동작을 진행하는 상태' },
        ],
      },
      { type: 'heading', text: '현재분사가 명사를 뒤에서 수식할 때' },
      {
        type: 'p',
        text: '현재분사는 동사에서 만들어졌기 때문에 동사의 기본 의미를 그대로 유지하면서 명사를 수식합니다. 그런데 현재분사가 다른 단어와 결합하여 길어지면, 영어의 "길고 복잡한 구조는 뒤로 보낸다"는 원칙에 따라 명사 뒤에 위치하게 됩니다.',
      },
      {
        type: 'icon-row',
        caption: '분사의 위치 - 짧으면 앞, 길면 뒤',
        items: [
          { icon: '👈', label: '분사 한 단어', sub: '명사 앞 (the running water)' },
          { icon: '👉', label: '분사 + 다른 말', sub: '명사 뒤 (the man standing by the door)' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'The students studying in the library are very diligent.', ko: '도서관에서 공부하고 있는 학생들은 매우 성실하다.', note: 'studying in the library가 students를 뒤에서 꾸며줌' },
          { en: 'The man standing by the door is my uncle.', ko: '문 옆에 서 있는 남자는 나의 삼촌이다.', note: 'standing by the door가 man을 뒤에서 꾸며줌' },
          { en: 'The passengers waiting for the delayed flight grew impatient.', ko: '지연된 항공편을 기다리던 승객들은 점점 짜증이 났다.', note: 'waiting for the delayed flight가 passengers를 뒤에서 꾸며줌' },
          { en: 'The company developing this new vaccine received government funding.', ko: '이 새 백신을 개발하고 있는 회사는 정부 지원을 받았다.', note: 'developing this new vaccine이 company를 뒤에서 꾸며줌' },
          { en: 'The woman who is talking to John is my sister.', ko: '존과 이야기하고 있는 여자는 내 여동생이다.' },
          { en: '= The woman talking to John is my sister.', ko: '(위 문장을 줄인 표현)', note: '관계절 who is를 생략하고 현재분사 talking만 남기면 문장이 더 간결해짐' },
          { en: 'People living near the airport often complain about the noise.', ko: '공항 근처에 사는 사람들은 소음에 대해 자주 불평한다.', note: 'living near the airport가 people을 뒤에서 꾸며줌' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '현재분사구가 주어를 뒤에서 수식',
        parts: [
          { tag: 'S', text: 'The man' },
          { tag: 'M', text: 'standing by the door' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'my uncle' },
        ],
        translation: 'The man standing by the door is my uncle. (standing by the door가 주어 the man을 뒤에서 수식)',
      },
      {
        type: 'note',
        text: '관계절(who is, which is 등)에서 "관계대명사 + be동사"를 지우면 남는 것이 현재분사(-ing)나 과거분사(p.p.)입니다. 이렇게 현재분사는 문장을 간결하게 만들고 정보 전달을 효율적으로 할 수 있게 해줍니다. 이런 용법은 글을 쓰거나 말을 할 때 명확하고 간결하게 표현하고자 할 때 유용합니다. 문장의 흐름을 자연스럽게 이어주면서도 중요한 정보를 빠뜨리지 않고 전달할 수 있기 때문입니다.',
      },
      { type: 'heading', text: '과거분사: 수동·완료' },
      {
        type: 'p',
        text: '과거분사(Past Participle)는 동사에 -ed를 붙여 만들며(불규칙 변화도 있음), 형용사처럼 명사를 꾸며줍니다. **과거분사가 꾸미는 명사는 어떤 동작이 이미 끝난(완료) 상태이거나, 다른 누군가·무언가에 의해 영향을 받은(수동) 대상입니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'A broken vase', ko: '깨진 꽃병', note: 'broken이 vase를 수식하여 꽃병이 이미 깨져 있는 완료의 상태를 나타냄' },
          { en: 'A written agreement', ko: '서면 계약', note: 'written이 agreement를 수식하여 계약이 누군가에 의해 문서로 작성되었음을 나타냄(수동)' },
          { en: 'The book written by George Orwell is famous.', ko: '조지 오웰에 의해 쓰인 그 책은 유명하다.', note: 'written by George Orwell이 book을 뒤에서 꾸며줌' },
          { en: 'The car parked outside is mine.', ko: '밖에 주차된 그 차는 내 것이다.', note: 'parked outside가 car를 뒤에서 꾸며줌' },
          { en: 'The letter sent yesterday reached me today.', ko: '어제 발송된 편지가 오늘 나에게 도착했다.', note: 'sent yesterday가 letter를 뒤에서 꾸며줌' },
          { en: 'The documents required for the visa application must be original.', ko: '비자 신청에 요구되는 서류들은 원본이어야 한다.', note: 'required for the visa application이 documents를 뒤에서 꾸며주며, 서류가 요구를 "당하는" 대상임을 나타냄' },
          { en: 'The bridge damaged by the flood has been closed for repairs.', ko: '홍수로 손상된 그 다리는 수리를 위해 폐쇄되었다.', note: 'damaged by the flood가 bridge를 뒤에서 꾸며줌' },
          { en: 'The paintings displayed in the gallery attracted many visitors.', ko: '그 갤러리에 전시된 그림들이 많은 방문객을 끌었다.', note: 'displayed in the gallery가 paintings를 뒤에서 꾸며줌' },
        ],
      },
      {
        type: 'p',
        text: '과거분사 역시 다른 단어와 결합해 길어지면 명사 뒤에 위치합니다. 현재분사와 과거분사 모두 "짧으면 명사 앞, 길면 명사 뒤"라는 영어의 수식어 배치 원칙을 따릅니다.',
      },
      {
        type: 'sentence-diagram',
        label: '현재분사 vs 과거분사 (뒤에서 수식)',
        parts: [
          { tag: 'S', text: 'The book' },
          { tag: 'M', text: 'written by George Orwell' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'famous' },
        ],
        translation: 'The book written by George Orwell is famous. (written by ~가 book을 뒤에서 수식하는 과거분사구)',
      },
      { type: 'heading', text: '현재분사 vs 과거분사 판별 연습' },
      {
        type: 'p',
        text: '같은 동사라도 명사가 동작을 하는 쪽이냐 당하는 쪽이냐에 따라 분사의 형태가 달라집니다. 아래 쌍을 비교하며 "동작을 하는가, 당하는가"의 기준을 다시 확인해 봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The teacher explaining the lesson is very patient.', ko: '수업을 설명하고 있는 그 선생님은 매우 인내심이 있다.', note: '선생님이 설명하는 동작을 직접 함 → 현재분사' },
          { en: 'The lesson explained by the teacher was easy to understand.', ko: '그 선생님에 의해 설명된 수업은 이해하기 쉬웠다.', note: '수업은 설명을 "당하는" 대상 → 과거분사' },
          { en: 'The child feeding the ducks laughed happily.', ko: '오리에게 먹이를 주고 있는 아이는 즐겁게 웃었다.', note: '아이가 먹이를 주는 동작을 직접 함 → 현재분사' },
          { en: 'The ducks fed by the child gathered around her.', ko: '그 아이에게 먹이를 받은 오리들은 그녀 주위에 모였다.', note: '오리는 먹이를 "받는(당하는)" 대상 → 과거분사' },
        ],
      },
      { type: 'heading', text: '헷갈리는 지점: 감정을 나타내는 동사의 분사' },
      {
        type: 'p',
        text: 'bore(지루하게 하다), excite(흥미를 일으키다), interest(관심을 일으키다), surprise(놀라게 하다)처럼 "감정을 일으키는" 뜻을 가진 동사들은 학습자가 특히 자주 혼동하는 분사를 만들어냅니다. 이 동사들이 유독 헷갈리는 이유는 동사 자체의 의미 구조에 있습니다. run이나 read 같은 일반 동사는 주어가 "그 동작을 직접 수행"하지만, bore나 excite 같은 감정 유발 동사는 원래 뜻 자체가 "(누군가에게) 그 감정을 일으키다"입니다. **즉 이 동사의 주어는 애초에 "감정을 만들어내는 원인"이지, "그 감정을 느끼는 사람"이 아닙니다. 그래서 감정을 느끼는 사람을 주어로 말하려면 반드시 수동의 형태(과거분사)를 써야 합니다.**',
      },
      {
        type: 'note',
        text: '정리하면: 감정을 "일으키는 원인"(영화, 강의, 소식, 결과 등 대개 사물·상황)에는 현재분사(-ing), 그 감정을 "느끼게 된 대상"(대개 사람)에는 과거분사(-ed)를 씁니다. 판단 기준은 여전히 동일합니다 — 명사가 동작(감정을 일으키는 일)을 하는 쪽인가, 당하는 쪽인가.',
      },
      {
        type: 'icon-row',
        caption: '감정동사 분사: 원인 vs 결과',
        items: [
          { icon: '😐', label: 'boring', sub: '지루하게 하는 영화' },
          { icon: '😴', label: 'bored', sub: '지루해하는 사람' },
        ],
      },
      {
        type: 'table',
        caption: '자주 헷갈리는 감정동사 분사 쌍',
        headers: ['동사', '현재분사 (감정을 일으키는 대상)', '과거분사 (감정을 느끼는 사람)'],
        rows: [
          ['bore', 'boring lecture (지루하게 만드는 강의)', 'bored students (지루함을 느낀 학생들)'],
          ['interest', 'interesting book (흥미를 일으키는 책)', 'interested reader (흥미를 느낀 독자)'],
          ['excite', 'exciting movie (흥미진진한 영화)', 'excited audience (흥미를 느낀 관객)'],
          ['surprise', 'surprising result (놀라운 결과)', 'surprised scientists (놀라움을 느낀 과학자들)'],
          ['confuse', 'confusing instructions (혼란스럽게 만드는 설명)', 'confused customers (혼란을 느낀 고객들)'],
          ['annoy', 'annoying noise (짜증나게 만드는 소음)', 'annoyed neighbors (짜증을 느낀 이웃들)'],
          ['embarrass', 'embarrassing mistake (당황하게 만드는 실수)', 'embarrassed employee (당황함을 느낀 직원)'],
          ['satisfy', 'satisfying meal (만족을 주는 식사)', 'satisfied customer (만족을 느낀 고객)'],
          ['disappoint', 'disappointing ending (실망을 주는 결말)', 'disappointed fans (실망을 느낀 팬들)'],
          ['tire', 'tiring journey (피곤하게 만드는 여정)', 'tired travelers (피곤함을 느낀 여행객들)'],
          ['frighten', 'frightening noise (무섭게 만드는 소음)', 'frightened child (무서움을 느낀 아이)'],
          ['amaze', 'amazing performance (놀라움을 주는 공연)', 'amazed audience (놀라움을 느낀 관객)'],
          ['exhaust', 'exhausting work (기진맥진하게 만드는 일)', 'exhausted worker (기진맥진해진 직원)'],
          ['shock', 'shocking news (충격을 주는 소식)', 'shocked family (충격을 받은 가족)'],
          ['frustrate', 'frustrating delay (답답하게 만드는 지연)', 'frustrated driver (답답함을 느낀 운전자)'],
          ['please', 'pleasing outcome (만족스러운 결과)', 'pleased manager (만족한 관리자)'],
          ['fascinate', 'fascinating story (매혹적인 이야기)', 'fascinated listeners (매혹된 청취자들)'],
          ['depress', 'depressing weather (우울하게 만드는 날씨)', 'depressed mood (우울해진 기분)'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'This documentary is really interesting.', ko: '이 다큐멘터리는 정말 흥미롭다.', note: '다큐멘터리(사물)가 흥미를 일으키는 주체 → 현재분사' },
          { en: 'I am interested in this documentary.', ko: '나는 이 다큐멘터리에 흥미를 느낀다.', note: '나(사람)는 다큐멘터리에 의해 흥미를 느끼게 된 대상 → 과거분사' },
          { en: 'The meeting was so boring that half the team fell asleep.', ko: '회의가 너무 지루해서 팀의 절반이 잠들었다.', note: '회의(사물·상황)가 지루함을 일으키는 주체 → 현재분사' },
          { en: 'Everyone in the meeting looked bored.', ko: '회의에 있던 모든 사람이 지루해 보였다.', note: '사람들이 지루함을 느끼게 된 대상 → 과거분사' },
          { en: 'The news about the merger was shocking to investors.', ko: '합병에 대한 그 소식은 투자자들에게 충격적이었다.', note: '소식이 충격을 일으키는 원인 → 현재분사' },
          { en: 'Investors were shocked by the news about the merger.', ko: '투자자들은 합병 소식에 충격을 받았다.', note: '투자자들이 충격을 느끼게 된 대상 → 과거분사' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '감정 유발(현재분사) vs 감정을 느낌(과거분사)',
        parts: [
          { tag: 'S', text: 'This documentary' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'really interesting' },
        ],
        translation: 'This documentary is really interesting. (다큐멘터리가 흥미를 일으키는 원인 → 현재분사)',
      },
      {
        type: 'sentence-diagram',
        label: '감정 유발(현재분사) vs 감정을 느낌(과거분사)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'interested' },
          { tag: 'M', text: 'in this documentary' },
        ],
        translation: 'I am interested in this documentary. (나는 흥미를 느끼게 된 대상 → 과거분사)',
      },
      {
        type: 'note',
        text: '가장 흔한 실수: 자신이 느끼는 감정을 말하면서 현재분사를 쓰는 것입니다. "*I am boring."이라고 말하면 "나는 (다른 사람들을) 지루하게 만드는 사람이다"라는 뜻이 되어, 화자가 자신을 지루한 사람으로 깎아내리는 이상한 문장이 됩니다. "나는 지루함을 느낀다"라고 말하려면 반드시 과거분사를 써서 "I am bored."라고 해야 합니다. 마찬가지로 "*I am confusing."은 "내가 다른 사람을 혼란스럽게 만드는 존재"라는 뜻이 되므로, "나는 혼란스럽다"는 "I am confused."로 써야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*I am boring at this job.', ko: '(오류) 나는 이 일에서 (다른 사람을) 지루하게 만드는 사람이다.', note: '의도한 뜻과 반대로 전달됨' },
          { en: 'I am bored with this job.', ko: '(올바름) 나는 이 일이 지루하다.', note: '내가 지루함을 느끼는 대상 → 과거분사' },
          { en: '*The students were exciting about the field trip.', ko: '(오류) 학생들이 (다른 사람을) 신나게 만드는 사람들이었다.', note: '의도한 뜻과 반대로 전달됨' },
          { en: 'The students were excited about the field trip.', ko: '(올바름) 학생들은 현장학습에 대해 신이 났다.', note: '학생들이 신남을 느끼게 된 대상 → 과거분사' },
          { en: '*I am really confusing about this problem.', ko: '(오류) 나는 이 문제에 대해 (다른 사람을) 혼란스럽게 만드는 사람이다.', note: '의도한 뜻과 반대로 전달됨' },
          { en: 'I am really confused about this problem.', ko: '(올바름) 나는 이 문제가 정말 혼란스럽다.', note: '내가 혼란을 느끼는 대상 → 과거분사' },
          { en: '*He was so annoying by the traffic.', ko: '(오류) 그는 교통 상황에 의해 (다른 사람을) 짜증나게 만드는 존재였다.', note: 'by가 있으면 수동 의미이므로 과거분사여야 문법적으로도 맞음' },
          { en: 'He was so annoyed by the traffic.', ko: '(올바름) 그는 교통 상황 때문에 매우 짜증이 났다.', note: '그가 짜증을 느끼게 된 대상 → 과거분사' },
        ],
      },
      { type: 'heading', text: '감정동사 분사 확장 연습: 문맥 속에서 구별하기' },
      {
        type: 'p',
        text: '실제 문장에서는 한 문단 안에 현재분사와 과거분사가 함께 등장하며 원인과 결과를 나누어 보여주는 경우가 많습니다. 아래 예문들에서 "무엇이 감정을 일으키는 원인인지"와 "누가 그 감정을 느끼는 사람인지"를 함께 확인해 봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The surprising twist at the end left the surprised audience speechless.', ko: '마지막의 놀라운 반전은 놀란 관객들을 말도 못하게 만들었다.', note: 'surprising(원인: 반전) / surprised(결과: 관객)' },
          { en: 'The exhausting hike up the mountain left the exhausted hikers unable to move.', ko: '산을 오르는 그 힘든 등산은 지친 등산객들이 움직일 수 없게 만들었다.', note: 'exhausting(원인: 등산) / exhausted(결과: 등산객)' },
          { en: 'The frustrating delay at the airport made the frustrated passengers complain loudly.', ko: '공항에서의 그 답답한 지연은 답답해진 승객들이 큰 소리로 불평하게 만들었다.', note: 'frustrating(원인: 지연) / frustrated(결과: 승객)' },
          { en: 'The fascinating lecture on space travel kept the fascinated students awake until the end.', ko: '우주여행에 관한 그 매혹적인 강의는 매혹된 학생들을 끝까지 깨어 있게 만들었다.', note: 'fascinating(원인: 강의) / fascinated(결과: 학생)' },
        ],
      },
      {
        type: 'callout',
        title: '25장 핵심 정리 (1) — 분사의 형용사 역할',
        items: [
          '분사는 동사가 형용사처럼 쓰이도록 변형된 형태이며, 현재분사(Ving)와 과거분사(p.p.) 두 종류가 있다.',
          '판단 원리는 하나다: 수식받는 명사가 동작을 "하는 쪽"이면 현재분사(능동·진행), "당하는 쪽"이면 과거분사(수동·완료).',
          '분사가 한 단어로 짧으면 명사 앞에서, 다른 말과 결합해 길어지면 명사 뒤에서 수식한다.',
          '감정동사(bore, interest, excite, surprise 등)는 그 자체 의미가 "감정을 일으키다"이기 때문에, 감정을 "일으키는 원인"에는 현재분사, 그 감정을 "느끼는 사람"에는 과거분사를 쓴다.',
          '흔한 실수: 자신의 감정을 말할 때 현재분사를 쓰면 뜻이 반대가 된다. "I am boring."(X) → "I am bored."(O). by가 붙어 수동을 나타낼 때도 마찬가지로 과거분사가 와야 한다.',
        ],
      },
    ],
  },

  'ch25-2': {
    title: '분사구문',
    blocks: [
      {
        type: 'p',
        text: '**분사구문이란 부사절(때·이유·조건 등을 나타내는 접속사가 있는 절)을 현재분사나 과거분사를 이용해 더 짧게 줄인 표현을 말합니다.** 우리말도 반복되는 주어와 접속사를 생략해서 문장을 간결하게 표현할 수 있는 것처럼, 영어의 분사구문도 같은 원리로 문장을 압축합니다.',
      },
      { type: 'heading', text: '분사구문을 쓰는 이유' },
      {
        type: 'p',
        text: '두 개의 절이 이어질 때 그 주어가 서로 같다면, 같은 말을 두 번 반복하는 셈입니다. 분사구문은 바로 이 "반복되는 주어"와 "유추 가능한 접속사"를 지워서 문장을 압축하는 장치입니다. 즉 분사구문의 핵심 동기는 정보의 손실 없이 문장을 더 경제적으로 만드는 것입니다.',
      },
      {
        type: 'note',
        text: '우리말도 같은 원리로 문장을 줄입니다. "나 아침에 일찍 일어났어. 그리고 나는 아침밥을 먹었어." → "아침에 일찍 일어난 김에 아침밥을 먹었어." 처럼 반복되는 주어와 접속사를 생략하면 문장이 간결해집니다.',
      },
      {
        type: 'p',
        text: '다만 이 압축에는 대가가 있습니다. 생략된 접속사와 주어를 듣는 사람(읽는 사람)이 앞뒤 문맥으로 유추해야 하기 때문입니다. 일상적인 대화에서는 단순하고 직설적인 표현이 선호되므로 접속사와 주어를 분명하게 표현하는 것이 좋습니다. 대화중에 하는 말은 눈에 보이지 않고 오로지 들어서만 판단해야 하는데다, 즉흥적으로 생각을 표현하는 경우가 많아서, 분사구문처럼 구조적으로 복잡한 문장은 듣는 사람이 이해하기 어렵게 만들 수 있기 때문입니다. 반대로 문어체(글쓰기)에서는 앞뒤에 놓인 상황을 통해 생략된 접속사와 주어를 쉽게 유추할 수 있어 분사구문이 효과적으로 사용됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Having finished his work, he went home.', ko: '그의 일을 끝낸 후, 그는 집에 갔다.', note: '문어체: 완료의 의미를 살려 Having + p.p.로 표현' },
          { en: 'He finished his work and then went home.', ko: '그는 일을 끝내고 그런 다음 집에 갔다.', note: '구어체: 접속사 and를 그대로 살려 명확하게 표현' },
          { en: 'Opening the door, she saw the surprise.', ko: '문을 열면서, 그녀는 서프라이즈를 보았다.', note: '문어체' },
          { en: 'She opened the door and saw the surprise.', ko: '그녀는 문을 열었고 서프라이즈를 보았다.', note: '구어체' },
          { en: 'Feeling tired, he decided to skip the gym.', ko: '피곤함을 느끼면서, 그는 헬스장을 거르기로 했다.', note: '문어체' },
          { en: 'He felt tired, so he decided to skip the gym.', ko: '그는 피곤함을 느꼈고, 그래서 헬스장을 거르기로 했다.', note: '구어체: 접속사 so를 그대로 살려 명확하게 표현' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '분사구문 - 부사절이 압축된 형태',
        parts: [
          { tag: 'M', text: 'Feeling tired,' },
          { tag: 'S', text: 'he' },
          { tag: 'V', text: 'decided' },
          { tag: 'O', text: 'to skip the gym' },
        ],
        translation: 'Feeling tired, he decided to skip the gym. (Because he felt tired가 분사구문으로 압축됨)',
      },
      { type: 'heading', text: '분사구문을 만드는 과정' },
      {
        type: 'icon-row',
        caption: '분사구문 만들기 3단계',
        items: [
          { icon: '1️⃣', label: '접속사 삭제' },
          { icon: '2️⃣', label: '겹치는 주어 삭제' },
          { icon: '3️⃣', label: '동사 → 분사로 전환' },
        ],
      },
      {
        type: 'p',
        text: '**부사절을 분사구문으로 바꿀 때는 다음 순서를 따릅니다. ① 부사절의 접속사를 지운다. ② 부사절의 주어가 주절의 주어와 같으면 부사절의 주어도 지운다. ③ 남은 동사를 문맥(능동/진행이면 -ing, 수동/완료면 p.p.)에 맞게 분사 형태로 바꾼다.** 아래에서 "Because he was tired, he went to bed early."라는 문장이 어떻게 한 단계씩 "Being tired, he went to bed early."로 압축되는지 살펴봅니다.',
      },
      {
        type: 'transform',
        from: { label: '원래 문장 (부사절)', text: 'Because he was tired, he went to bed early.' },
        to: { label: '1단계: 접속사 삭제', text: 'He was tired, he went to bed early.' },
        note: '이유를 나타내는 접속사 Because를 지운다. 앞뒤 맥락으로 이유의 의미는 여전히 유추 가능하다.',
      },
      {
        type: 'transform',
        from: { label: '1단계 결과', text: 'He was tired, he went to bed early.' },
        to: { label: '2단계: 주어 삭제', text: 'Was tired, he went to bed early.' },
        note: '부사절의 주어 He가 주절의 주어 he와 같으므로, 반복되는 부사절 주어를 지운다.',
      },
      {
        type: 'transform',
        from: { label: '2단계 결과', text: 'Was tired, he went to bed early.' },
        to: { label: '3단계: 동사를 분사로 전환', text: 'Being tired, he went to bed early.' },
        note: '남은 동사 was tired는 "피곤한 상태였다"는 상태를 나타내므로 be동사를 현재분사 being으로 바꾼다. → 완성된 분사구문',
      },
      {
        type: 'table',
        caption: '같은 원리를 적용한 또 다른 예',
        headers: ['단계', '작업', '예'],
        rows: [
          ['1', '접속사 삭제', 'While she was reading a book → she was reading a book'],
          ['2', '주절과 같은 주어 삭제', 'she was reading a book → was reading a book'],
          ['3', '동사를 분사로 전환 (능동·진행: Ving / 수동·완료: p.p.)', 'was reading → Reading'],
        ],
      },
      {
        type: 'sentence-diagram',
        label: '분사구문의 구조',
        parts: [
          { tag: 'M', text: 'Reading a book,' },
          { tag: 'S', text: 'she' },
          { tag: 'V', text: 'fell' },
          { tag: 'C', text: 'asleep' },
        ],
        translation: 'Reading a book, she fell asleep. (부사절 While she was reading a book이 분사구문으로 축약됨)',
      },
      { type: 'heading', text: '왜 이 순서로 진행되는가' },
      {
        type: 'p',
        text: '세 단계는 아무 순서나 섞어도 되는 것이 아니라, "지워도 정보가 살아남는 순서"를 따릅니다. 접속사를 가장 먼저 지우는 것은 접속사가 만들어내는 의미(이유·시간·조건 등)를 문맥이 가장 쉽게 복원해 주기 때문입니다. 그다음 주어를 지우는 것은 주절과 겹치는 주어이기 때문에 아예 정보의 손실이 없기 때문입니다. 마지막으로 동사를 분사로 바꾸는 것은, 주어가 없어진 문장을 다시 문법적으로 성립시키기 위한 최소한의 조정입니다. 즉 분사구문은 "정보를 지키면서 형태를 압축한다"는 원칙을 순서대로 적용한 결과물입니다.',
      },
      { type: 'heading', text: '완료분사구문: Having + p.p.' },
      {
        type: 'p',
        text: '부사절의 동작이 주절의 동작보다 시간상 더 이전에 일어난 일이라면, 단순히 Ving로 바꾸는 것만으로는 그 "먼저 끝났다"는 순서를 정확히 전달할 수 없습니다. 이때는 완료형 had + p.p.를 분사로 바꾼 having + p.p.(완료분사구문)를 사용하여 두 동작 사이의 시간차를 분명히 보여줍니다.',
      },
      {
        type: 'timeline',
        label: '완료분사구문이 보여주는 시간차',
        now: 75,
        points: [
          { at: 20, text: 'Having finished his work', sub: '주절보다 먼저 끝난 일' },
        ],
        translation: 'Having finished his work, he went home. — 일을 끝낸 사건(왼쪽)이 집에 간 사건(오른쪽)보다 시간상 앞서 있습니다. Having + p.p.는 바로 이 순서, 즉 부사절의 일이 주절의 일보다 "먼저" 일어났다는 것을 분명히 보여주는 장치입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Because he had finished his work, he went home.', ko: '그는 일을 끝냈기 때문에, 집에 갔다.', note: '원래 부사절: had finished(완료)로 시간상 앞선 일임을 표시' },
          { en: 'Having finished his work, he went home.', ko: '그의 일을 끝낸 후, 그는 집에 갔다.', note: 'had finished → having finished. 완료의 의미를 그대로 유지' },
          { en: 'Having lived in Paris for ten years, she speaks fluent French.', ko: '파리에서 10년을 산 끝에, 그녀는 프랑스어를 유창하게 한다.', note: '10년을 산 것은 지금 프랑스어를 유창하게 하는 것보다 먼저(그리고 그 원인) 일어난 일' },
          { en: "Having lost his keys, he couldn't get into the house.", ko: '열쇠를 잃어버린 후, 그는 집에 들어갈 수 없었다.', note: '열쇠를 잃어버린 사건이 집에 못 들어간 사건보다 먼저 일어남' },
          { en: 'Having been rejected twice, she was reluctant to apply again.', ko: '두 번 거절당한 후, 그녀는 다시 지원하기를 꺼렸다.', note: 'having been + p.p.: 완료(먼저 일어난 일)와 수동(거절을 당함)이 함께 나타남' },
          { en: 'Having studied the case for months, the lawyer finally presented her argument.', ko: '몇 달 동안 그 사건을 연구한 끝에, 그 변호사는 마침내 자신의 주장을 펼쳤다.', note: '연구한 것이 주장을 펼친 것보다 먼저 끝난 일' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '완료분사구문 - Having + p.p.',
        parts: [
          { tag: 'M', text: 'Having finished his work,' },
          { tag: 'S', text: 'he' },
          { tag: 'V', text: 'went' },
          { tag: 'M', text: 'home' },
        ],
        translation: 'Having finished his work, he went home. (일을 끝낸 것이 집에 간 것보다 먼저 일어난 일)',
      },
      { type: 'heading', text: '단순분사(Ving) vs 완료분사(Having p.p.) 판별' },
      {
        type: 'icon-row',
        caption: '단순분사 vs 완료분사 - 시간 관계',
        items: [
          { icon: '⏱️', label: 'Ving', sub: '주절과 거의 동시' },
          { icon: '⏳', label: 'Having + p.p.', sub: '주절보다 먼저 끝난 일' },
        ],
      },
      {
        type: 'note',
        text: '단순분사(Ving)와 완료분사(Having p.p.)의 차이: 부사절과 주절의 동작이 거의 동시에 일어나거나 상태가 계속되는 경우에는 단순분사면 충분합니다("Being tired, he went to bed early." — 피곤한 상태와 잠자리에 든 것이 같은 시점). 하지만 부사절의 동작이 주절보다 먼저 끝난 별개의 사건이라면 having + p.p.를 써야 순서가 헷갈리지 않습니다. 이 구분을 무시하고 무조건 Ving만 쓰면, 두 사건이 동시에 일어난 것처럼 오해를 줄 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Feeling nervous, she took a deep breath before the interview.', ko: '긴장을 느끼면서, 그녀는 면접 전에 깊게 숨을 들이쉬었다.', note: '긴장한 상태와 숨을 들이쉰 것이 같은 시점 → 단순분사(Feeling)' },
          { en: 'Having prepared for the interview all week, she felt confident.', ko: '일주일 내내 면접을 준비한 끝에, 그녀는 자신감을 느꼈다.', note: '준비한 것은 자신감을 느낀 것보다 먼저 끝난 별개의 사건 → 완료분사(Having prepared)' },
        ],
      },
      { type: 'heading', text: '분사구문이 활발히 쓰이는 글쓰기 상황' },
      {
        type: 'p',
        text: '문어체(글쓰기)에서는 앞뒤 상황을 통해 생략된 접속사와 주어를 쉽게 유추할 수 있기 때문에, 분사구문이 문장을 간결하게 하고 흐름을 부드럽게 하며 중요한 정보를 강조하는 데 효과적으로 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The sun setting behind the mountains, the landscape took on a golden hue.', ko: '태양이 산 뒤로 지면서, 풍경은 황금빛을 띠었다.', note: '문학적 서술 — 분사구문으로 배경 묘사를 풍부하게 표현. 주어가 the sun으로 주절(the landscape)과 다르므로 남겨둠' },
          { en: 'Based on these findings, we can conclude that the hypothesis is correct.', ko: '이러한 발견을 바탕으로, 우리는 가설이 맞다고 결론지을 수 있다.', note: '학술 논문 — 과거분사구문으로 논점을 간결하게 전달' },
          { en: 'Announcing the new policy, the government aimed to reduce unemployment rates.', ko: '새 정책을 발표하면서, 정부는 실업률을 줄이려는 목표를 세웠다.', note: '뉴스 기사 — 현재분사구문으로 사건의 배경을 짧게 설명' },
          { en: 'Having reviewed all the applications, the committee selected three finalists.', ko: '모든 지원서를 검토한 후, 위원회는 세 명의 최종 후보를 선정했다.', note: '보고서/공지문 — 완료분사구문으로 검토가 선정보다 먼저 끝났음을 보여줌' },
          { en: 'Written in plain language, the manual is easy for beginners to follow.', ko: '평이한 언어로 쓰인 그 설명서는 초보자가 따라 하기 쉽다.', note: '기술 문서 — 과거분사구문으로 설명서가 쓰인 방식을 간결하게 덧붙임' },
          { en: 'Facing growing criticism, the company decided to recall the product.', ko: '커져가는 비판에 직면하면서, 그 회사는 제품을 회수하기로 결정했다.', note: '비즈니스 기사 — 현재분사구문으로 결정을 내리게 된 배경 상황을 간결하게 제시' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '완료분사구문 - 보고서·공지문에서의 쓰임',
        parts: [
          { tag: 'M', text: 'Having reviewed all the applications,' },
          { tag: 'S', text: 'the committee' },
          { tag: 'V', text: 'selected' },
          { tag: 'O', text: 'three finalists' },
        ],
        translation: 'Having reviewed all the applications, the committee selected three finalists. (검토가 선정보다 먼저 끝났음을 보여줌)',
      },
      {
        type: 'callout',
        title: '25장 핵심 정리 (2) — 분사구문',
        items: [
          '분사구문은 부사절의 접속사와 (주절과 같은) 주어를 지우고, 남은 동사를 분사로 바꾼 표현이다. 목적은 반복되는 주어를 줄여 문장을 경제적으로 만드는 것이다.',
          '만드는 순서에는 이유가 있다: ① 접속사 삭제 → ② 겹치는 주어 삭제 → ③ 동사를 분사로 전환. 정보 손실이 없는 것부터 지우고, 문법적으로 필요한 최소한의 조정을 마지막에 한다.',
          '동사가 능동·진행의 의미면 현재분사(Ving), 수동·완료의 의미면 과거분사(p.p.)로 바꾼다.',
          '부사절의 동작이 주절보다 시간상 먼저 끝난 별개의 사건이면 having + p.p.(완료분사구문)를 써서 순서를 분명히 한다. 두 동작이 동시에 일어나거나 상태가 이어지면 단순분사(Ving)로 충분하다.',
          '일상 대화는 눈에 보이지 않고 오로지 들어서만 판단해야 하고 즉흥적인 경우가 많아, 분사구문처럼 구조가 복잡한 문장은 이해하기 어렵게 만들 수 있어 잘 쓰이지 않는다. 반면 문어체(글쓰기)에서는 앞뒤 상황으로 생략된 내용을 쉽게 유추할 수 있어 문학적 서술, 학술 논문, 뉴스 기사 등에서 효과적으로 쓰인다.',
        ],
      },
    ],
  },
}
