export const ROADMAPS = {
  spanish: {
    about: `Spanish is the second most spoken language in the world by native speakers and one of the most useful languages for travel, business, and culture. It's considered one of the easiest languages for English speakers to learn due to its phonetic spelling and shared vocabulary.`,
    whyLearn: [
      'Spoken in 20+ countries across Latin America, Europe, and beyond',
      'High demand in business, healthcare, and tourism sectors',
      'One of the easiest languages for English speakers — faster progress',
      'Opens doors to rich literature, music, and cinema',
    ],
    timeline: {
      beginner: '3–6 months to reach A2 with daily 30-min practice',
      intermediate: '6–12 months to reach B1–B2',
      advanced: '2+ years for C1 fluency',
    },
    levels: [
      {
        code: 'A1',
        name: 'Beginner',
        duration: '2–3 months',
        description: 'You can understand and use basic phrases. Introduce yourself, ask simple questions, interact in a very basic way.',
        skills: ['Greetings and introductions', 'Numbers, dates, time', 'Basic vocabulary (~500 words)', 'Present tense verbs'],
        resources: [
          { name: 'Duolingo', type: 'App', url: 'https://duolingo.com', free: true },
          { name: 'SpanishPod101 Absolute Beginner', type: 'Course', url: 'https://spanishpod101.com', free: false },
          { name: 'Language Transfer – Complete Spanish', type: 'Audio', url: 'https://languagetransfer.org', free: true },
        ],
      },
      {
        code: 'A2',
        name: 'Elementary',
        duration: '3–4 months',
        description: 'You can communicate in simple, routine tasks. Understand frequently used expressions related to work, shopping, and family.',
        skills: ['Past and future tenses', 'Daily routines and activities', 'Vocabulary ~1000 words', 'Simple conversations'],
        resources: [
          { name: 'Pimsleur Spanish Level 2', type: 'Audio', url: 'https://pimsleur.com', free: false },
          { name: 'Clozemaster A2', type: 'App', url: 'https://clozemaster.com', free: true },
          { name: 'Dreaming Spanish – Beginner', type: 'Video', url: 'https://dreamingspanish.com', free: true },
        ],
      },
      {
        code: 'B1',
        name: 'Intermediate',
        duration: '4–6 months',
        description: 'You can deal with most situations while travelling. Produce simple connected text on familiar topics. Describe experiences and ambitions.',
        skills: ['Subjunctive mood basics', 'Compound tenses', 'Vocabulary ~2000 words', 'Extended conversations'],
        resources: [
          { name: 'Dreaming Spanish – Intermediate', type: 'Video', url: 'https://dreamingspanish.com', free: true },
          { name: 'Assimil Spanish with Ease', type: 'Book', url: '#', free: false },
          { name: 'Anki – frequency word decks', type: 'App', url: 'https://apps.ankiweb.net', free: true },
        ],
      },
      {
        code: 'B2',
        name: 'Upper Intermediate',
        duration: '6–8 months',
        description: 'You can interact with native speakers fluently enough for normal conversation. Understand complex texts and express ideas clearly.',
        skills: ['Full subjunctive usage', 'Idiomatic expressions', 'Vocabulary ~4000 words', 'Debate and opinion'],
        resources: [
          { name: 'News in Slow Spanish', type: 'Podcast', url: 'https://newsinslowspanish.com', free: false },
          { name: 'Dreaming Spanish – Upper Intermediate', type: 'Video', url: 'https://dreamingspanish.com', free: true },
          { name: 'El País (Spanish newspaper)', type: 'Reading', url: 'https://elpais.com', free: true },
        ],
      },
      {
        code: 'C1',
        name: 'Advanced',
        duration: '8–12 months',
        description: 'You can express ideas fluently and spontaneously. Use language flexibly and effectively for social, academic and professional purposes.',
        skills: ['Complex grammar nuances', 'Regional vocabulary', 'Vocabulary 6000+ words', 'Academic writing'],
        resources: [
          { name: 'Cuéntame cómo pasó (TV series)', type: 'Video', url: '#', free: false },
          { name: 'SpanishPod101 Advanced', type: 'Course', url: 'https://spanishpod101.com', free: false },
          { name: 'Read Spanish novels', type: 'Reading', url: '#', free: false },
        ],
      },
      {
        code: 'C2',
        name: 'Mastery',
        duration: '12+ months',
        description: 'You can understand virtually everything heard or read. Express spontaneously, very fluently and precisely.',
        skills: ['Native-level comprehension', 'Cultural nuance', 'Vocabulary 10,000+ words', 'Full professional fluency'],
        resources: [
          { name: 'Consume native media daily', type: 'Immersion', url: '#', free: true },
          { name: 'Language exchange partners', type: 'Speaking', url: 'https://tandem.net', free: true },
        ],
      },
    ],
    exams: [
      {
        name: 'DELE',
        fullName: 'Diplomas de Español como Lengua Extranjera',
        body: 'Instituto Cervantes',
        levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: 'Lifetime',
        whyTakeIt: 'Internationally recognized. Accepted by universities, employers, and immigration authorities worldwide.',
      },
      {
        name: 'SIELE',
        fullName: 'Servicio Internacional de Evaluación de la Lengua Española',
        body: 'UNAM / Instituto Cervantes',
        levels: ['B1', 'B2', 'C1'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: '5 years',
        whyTakeIt: 'Computer-based, flexible. Good for Latin American Spanish specifically.',
      },
    ],
  },

  french: {
    about: `French is an official language in 29 countries and one of the six official languages of the United Nations. It's the primary language of international diplomacy and a gateway to Europe, Canada, and large parts of Africa.`,
    whyLearn: [
      'Official language in 29 countries across 5 continents',
      'Strong demand for French speakers in Canada, Switzerland, Belgium, and Africa',
      'Gateway for higher education in France and Canada',
      'Required for many UN, EU, and NGO professional roles',
    ],
    timeline: {
      beginner: '3–5 months to A2 with consistent practice',
      intermediate: '8–14 months for B1–B2',
      advanced: '2–3 years for C1 fluency',
    },
    levels: [
      {
        code: 'A1', name: 'Beginner', duration: '2–3 months',
        description: 'Basic phrases, introductions, and simple interactions.',
        skills: ['Greetings', 'Numbers and dates', 'Basic verbs (être, avoir, aller)', 'Gender and articles'],
        resources: [
          { name: 'Duolingo French', type: 'App', url: 'https://duolingo.com', free: true },
          { name: 'Language Transfer – French', type: 'Audio', url: 'https://languagetransfer.org', free: true },
          { name: 'FrenchPod101 Beginner', type: 'Course', url: 'https://frenchpod101.com', free: false },
        ],
      },
      {
        code: 'A2', name: 'Elementary', duration: '3–4 months',
        description: 'Simple conversations about family, shopping, and familiar topics.',
        skills: ['Passé composé', 'Imparfait intro', 'Vocabulary ~1000 words', 'Negation'],
        resources: [
          { name: 'Coffee Break French', type: 'Podcast', url: 'https://coffeebreakfrench.com', free: true },
          { name: 'Anki French frequency deck', type: 'App', url: 'https://apps.ankiweb.net', free: true },
        ],
      },
      {
        code: 'B1', name: 'Intermediate', duration: '4–6 months',
        description: 'Handle most travel situations. Describe experiences and give opinions.',
        skills: ['Subjonctif basics', 'Conditional tense', 'Vocabulary ~2000 words', 'Longer conversations'],
        resources: [
          { name: 'Innerfrench Podcast', type: 'Podcast', url: 'https://innerfrench.com', free: true },
          { name: 'Assimil French with Ease', type: 'Book', url: '#', free: false },
        ],
      },
      {
        code: 'B2', name: 'Upper Intermediate', duration: '6–8 months',
        description: 'Fluent interaction with native speakers. Understand complex texts.',
        skills: ['Advanced subjunctive', 'Idiomatic expressions', 'Vocabulary ~4000 words'],
        resources: [
          { name: 'RFI Savoirs (French news)', type: 'Reading', url: 'https://savoirs.rfi.fr', free: true },
          { name: 'TV5Monde series', type: 'Video', url: 'https://tv5monde.com', free: true },
        ],
      },
      {
        code: 'C1', name: 'Advanced', duration: '8–12 months',
        description: 'Fluent, spontaneous expression for professional and academic use.',
        skills: ['Complex grammar', 'Academic writing', 'Vocabulary 6000+ words'],
        resources: [
          { name: 'Le Monde newspaper', type: 'Reading', url: 'https://lemonde.fr', free: false },
          { name: 'French novels (Victor Hugo, Camus)', type: 'Reading', url: '#', free: false },
        ],
      },
      {
        code: 'C2', name: 'Mastery', duration: '12+ months',
        description: 'Near-native fluency. Understand and express with precision.',
        skills: ['Native comprehension', 'Cultural nuance', 'Vocabulary 10,000+'],
        resources: [
          { name: 'Full native media immersion', type: 'Immersion', url: '#', free: true },
        ],
      },
    ],
    exams: [
      {
        name: 'DELF', fullName: 'Diplôme d\'Études en Langue Française',
        body: 'France Éducation International',
        levels: ['A1', 'A2', 'B1', 'B2'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: 'Lifetime',
        whyTakeIt: 'Most widely recognized French certification globally. Required for French university admission.',
      },
      {
        name: 'DALF', fullName: 'Diplôme Approfondi de Langue Française',
        body: 'France Éducation International',
        levels: ['C1', 'C2'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: 'Lifetime',
        whyTakeIt: 'Advanced certification. Accepted by top French universities in lieu of language entrance tests.',
      },
    ],
  },

  japanese: {
    about: `Japanese is the language of one of the world's largest economies and a global hub for technology, gaming, anime, and automotive industries. While the writing system is complex, Japanese grammar is logical and consistent once understood.`,
    whyLearn: [
      'Japan is a top destination for tech, engineering, and research careers',
      'Massive anime, manga, and gaming industry — content is richer in native Japanese',
      'JLPT N2/N1 is a strong differentiator for Japan-based jobs',
      'Japanese companies actively hire engineers with JLPT qualification',
    ],
    timeline: {
      beginner: '4–6 months to reach N5 (hiragana, katakana, ~800 words)',
      intermediate: '12–18 months for N3',
      advanced: '3–4 years for N1 fluency',
    },
    levels: [
      {
        code: 'N5', name: 'Beginner', duration: '3–6 months',
        description: 'Understand basic Japanese in everyday situations. ~800 vocab, ~100 kanji.',
        skills: ['Hiragana + Katakana', 'Basic sentence structure', '~800 vocabulary words', '~100 kanji'],
        resources: [
          { name: 'Genki I Textbook', type: 'Book', url: '#', free: false },
          { name: 'Anki – Core 2000 deck', type: 'App', url: 'https://apps.ankiweb.net', free: true },
          { name: 'JapanesePod101 Beginner', type: 'Course', url: 'https://japanesepod101.com', free: false },
        ],
      },
      {
        code: 'N4', name: 'Elementary', duration: '4–6 months',
        description: 'Understand basic Japanese used in daily situations. ~1500 vocab, ~300 kanji.',
        skills: ['Te-form and verb conjugations', 'Polite and plain speech', '~1500 words', '~300 kanji'],
        resources: [
          { name: 'Genki II Textbook', type: 'Book', url: '#', free: false },
          { name: 'WaniKani (kanji learning)', type: 'App', url: 'https://wanikani.com', free: false },
        ],
      },
      {
        code: 'N3', name: 'Intermediate', duration: '6–12 months',
        description: 'Understand Japanese encountered in everyday situations to a certain degree.',
        skills: ['Complex sentence patterns', 'Keigo (formal speech) basics', '~3000 words', '~650 kanji'],
        resources: [
          { name: 'Tobira Gateway to Advanced Japanese', type: 'Book', url: '#', free: false },
          { name: 'NHK Web Easy (simplified news)', type: 'Reading', url: 'https://www3.nhk.or.jp/news/easy', free: true },
        ],
      },
      {
        code: 'N2', name: 'Upper Intermediate', duration: '12–18 months',
        description: 'Understand Japanese used in everyday situations and a variety of circumstances.',
        skills: ['Advanced grammar patterns', 'Nuanced reading', '~6000 words', '~1000 kanji'],
        resources: [
          { name: 'Nihongo So-Matome N2', type: 'Book', url: '#', free: false },
          { name: 'Anki – N2 grammar deck', type: 'App', url: 'https://apps.ankiweb.net', free: true },
        ],
      },
      {
        code: 'N1', name: 'Advanced', duration: '18–24 months',
        description: 'Understand Japanese used in a variety of circumstances at a high level.',
        skills: ['Near-native reading', 'Complex kanji', '~10000 words', '~2000 kanji'],
        resources: [
          { name: 'Nihongo So-Matome N1', type: 'Book', url: '#', free: false },
          { name: 'Read native novels and news daily', type: 'Immersion', url: '#', free: true },
        ],
      },
    ],
    exams: [
      {
        name: 'JLPT', fullName: 'Japanese Language Proficiency Test',
        body: 'Japan Foundation / JEES',
        levels: ['N5', 'N4', 'N3', 'N2', 'N1'],
        sections: ['Vocabulary & Grammar', 'Reading', 'Listening'],
        validity: 'Lifetime',
        whyTakeIt: 'The standard Japanese certification globally. N2/N1 required for most professional roles in Japan.',
      },
    ],
  },

  german: {
    about: `German is the most widely spoken native language in the European Union and the language of some of the world's leading engineering, automotive, and scientific institutions. Germany actively welcomes skilled workers, making German a high-ROI language for engineers.`,
    whyLearn: [
      'Germany has the largest economy in Europe — strong job market for engineers',
      'Many German universities offer free or low-cost education in English and German',
      'Goethe B2/C1 is required for most German visa and immigration pathways',
      'German companies like BMW, Siemens, Bosch actively hire internationally',
    ],
    timeline: {
      beginner: '3–5 months to A2',
      intermediate: '8–14 months for B1–B2',
      advanced: '2–3 years for C1',
    },
    levels: [
      {
        code: 'A1', name: 'Beginner', duration: '2–3 months',
        description: 'Basic phrases, introductions, and simple interactions about familiar topics.',
        skills: ['German cases intro (Nominativ/Akkusativ)', 'Basic verbs and nouns', 'Numbers and dates', '~500 words'],
        resources: [
          { name: 'Duolingo German', type: 'App', url: 'https://duolingo.com', free: true },
          { name: 'Language Transfer – German', type: 'Audio', url: 'https://languagetransfer.org', free: true },
          { name: 'Nicos Weg A1 (Goethe Institut)', type: 'Course', url: 'https://www.dw.com/de/deutsch-lernen/nicos-weg/s-56970', free: true },
        ],
      },
      {
        code: 'A2', name: 'Elementary', duration: '3–4 months',
        description: 'Communicate in simple tasks. Describe your background and immediate environment.',
        skills: ['Dativ case', 'Modal verbs', 'Vocabulary ~1000 words', 'Simple past (Perfekt)'],
        resources: [
          { name: 'Nicos Weg A2 (DW)', type: 'Course', url: 'https://www.dw.com', free: true },
          { name: 'Anki German frequency deck', type: 'App', url: 'https://apps.ankiweb.net', free: true },
        ],
      },
      {
        code: 'B1', name: 'Intermediate', duration: '4–6 months',
        description: 'Handle most travel and work situations. Produce simple text on familiar topics.',
        skills: ['Genativ case', 'Konjunktiv II basics', 'Vocabulary ~2000 words', 'Relative clauses'],
        resources: [
          { name: 'Deutsch Warum Nicht (DW Radio)', type: 'Audio', url: 'https://dw.com', free: true },
          { name: 'Hueber Schritte Plus B1', type: 'Book', url: '#', free: false },
        ],
      },
      {
        code: 'B2', name: 'Upper Intermediate', duration: '6–8 months',
        description: 'Interact fluently with native speakers. Understand complex texts clearly.',
        skills: ['Advanced Konjunktiv', 'Passive voice', 'Vocabulary ~4000 words', 'Academic writing'],
        resources: [
          { name: 'Deutsche Welle News', type: 'Reading', url: 'https://dw.com', free: true },
          { name: 'Easy German YouTube', type: 'Video', url: 'https://youtube.com/@EasyGerman', free: true },
        ],
      },
      {
        code: 'C1', name: 'Advanced', duration: '8–12 months',
        description: 'Fluent expression for professional, academic, and complex social contexts.',
        skills: ['Complex grammar mastery', 'Idioms and nuance', 'Vocabulary 6000+ words'],
        resources: [
          { name: 'Der Spiegel (German magazine)', type: 'Reading', url: 'https://spiegel.de', free: false },
          { name: 'German novels and literature', type: 'Reading', url: '#', free: false },
        ],
      },
      {
        code: 'C2', name: 'Mastery', duration: '12+ months',
        description: 'Near-native fluency. Full professional and academic proficiency.',
        skills: ['Native-level comprehension', 'Cultural fluency', 'Vocabulary 10,000+'],
        resources: [
          { name: 'Full native media immersion', type: 'Immersion', url: '#', free: true },
        ],
      },
    ],
    exams: [
      {
        name: 'Goethe-Zertifikat', fullName: 'Goethe-Zertifikat',
        body: 'Goethe-Institut',
        levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: 'Lifetime',
        whyTakeIt: 'The gold standard for German certification. Required for German visa, university admission, and jobs.',
      },
      {
        name: 'TestDaF', fullName: 'Test Deutsch als Fremdsprache',
        body: 'TestDaF-Institut',
        levels: ['B2', 'C1'],
        sections: ['Reading', 'Listening', 'Writing', 'Speaking'],
        validity: '5 years',
        whyTakeIt: 'Specifically for university admission in Germany. Widely accepted alternative to DSH.',
      },
    ],
  },

  korean: {
    about: `Korean has seen explosive global interest driven by K-pop, K-dramas, and the growing influence of Korean tech and entertainment companies. South Korea is also a significant hub for semiconductor, gaming, and entertainment industries.`,
    whyLearn: [
      'K-pop and K-drama have made Korean the fastest-growing language globally',
      'South Korea is a leader in semiconductors, gaming, and entertainment',
      'TOPIK certification is required for Korean university admission and work visas',
      'Hangul (Korean script) can be learned in just 1–2 days',
    ],
    timeline: {
      beginner: '2–3 months to TOPIK Level 1–2',
      intermediate: '8–14 months for TOPIK Level 3–4',
      advanced: '2–3 years for TOPIK Level 5–6',
    },
    levels: [
      {
        code: 'Level 1', name: 'Beginner', duration: '2–3 months',
        description: 'Basic survival Korean. Greetings, numbers, simple phrases.',
        skills: ['Hangul reading and writing', 'Basic sentence structure', '~800 vocabulary', 'Polite endings (-요)'],
        resources: [
          { name: 'Talk To Me In Korean Level 1', type: 'Course', url: 'https://talktomeinkorean.com', free: true },
          { name: 'Duolingo Korean', type: 'App', url: 'https://duolingo.com', free: true },
          { name: 'Anki – Korean 1000 core deck', type: 'App', url: 'https://apps.ankiweb.net', free: true },
        ],
      },
      {
        code: 'Level 2', name: 'Elementary', duration: '3–4 months',
        description: 'Everyday conversations about familiar topics. Shopping, directions, daily life.',
        skills: ['Past tense', 'Negation', 'Vocabulary ~1500 words', 'Basic grammar patterns'],
        resources: [
          { name: 'Talk To Me In Korean Level 2–3', type: 'Course', url: 'https://talktomeinkorean.com', free: true },
          { name: 'Korean From Zero! Book 2', type: 'Book', url: '#', free: false },
        ],
      },
      {
        code: 'Level 3', name: 'Intermediate', duration: '4–6 months',
        description: 'Describe experiences and opinions. Handle most daily situations comfortably.',
        skills: ['Honorific speech', 'Connective endings', 'Vocabulary ~3000 words', 'Reading practice'],
        resources: [
          { name: 'Sogang Korean 3', type: 'Book', url: '#', free: false },
          { name: 'KBS World Korean news', type: 'Reading', url: 'https://world.kbs.co.kr', free: true },
        ],
      },
      {
        code: 'Level 4', name: 'Upper Intermediate', duration: '6–10 months',
        description: 'Discuss social and professional topics. Understand most native content with effort.',
        skills: ['Complex grammar', 'Formal vs informal registers', 'Vocabulary ~5000 words'],
        resources: [
          { name: 'Korean dramas without subtitles', type: 'Immersion', url: '#', free: false },
          { name: 'TTMIK Advanced vocabulary', type: 'Course', url: 'https://talktomeinkorean.com', free: false },
        ],
      },
      {
        code: 'Level 5', name: 'Advanced', duration: '10–14 months',
        description: 'Fluent expression in complex social and academic contexts.',
        skills: ['Academic Korean', 'Nuanced grammar', 'Vocabulary 7000+ words'],
        resources: [
          { name: 'Native Korean newspapers (Naver News)', type: 'Reading', url: 'https://news.naver.com', free: true },
          { name: 'Korean novels', type: 'Reading', url: '#', free: false },
        ],
      },
      {
        code: 'Level 6', name: 'Mastery', duration: '12+ months',
        description: 'Near-native fluency. Full professional and academic ability.',
        skills: ['Native comprehension', 'Dialectal awareness', 'Vocabulary 10,000+'],
        resources: [
          { name: 'Full native media immersion', type: 'Immersion', url: '#', free: true },
        ],
      },
    ],
    exams: [
      {
        name: 'TOPIK I', fullName: 'Test of Proficiency in Korean I',
        body: 'National Institute for International Education (NIIED)',
        levels: ['Level 1', 'Level 2'],
        sections: ['Vocabulary & Grammar', 'Writing', 'Reading', 'Listening'],
        validity: '2 years',
        whyTakeIt: 'Required for Korean university admission and some visa categories. Entry-level certification.',
      },
      {
        name: 'TOPIK II', fullName: 'Test of Proficiency in Korean II',
        body: 'NIIED',
        levels: ['Level 3', 'Level 4', 'Level 5', 'Level 6'],
        sections: ['Vocabulary & Grammar', 'Writing', 'Reading', 'Listening'],
        validity: '2 years',
        whyTakeIt: 'Required for advanced university admission, graduate programs, and professional work in Korea.',
      },
    ],
  },
}
