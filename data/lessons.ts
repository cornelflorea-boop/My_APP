import { Lesson } from "../types/learning";

export const LESSONS: Lesson[] = [
  // ── Spanish · Unit 1 · Lesson 1 ────────────────────────────────────────────
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    title: "Hello & Goodbye",
    description: "Master the most essential Spanish greetings.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,

    goals: [
      { id: "g1", description: "Learn 5 greeting words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],

    vocabulary: [
      { id: "v1", word: "Hola", translation: "Hello", phonetic: "OH-lah", partOfSpeech: "phrase" },
      { id: "v2", word: "Adios", translation: "Goodbye", phonetic: "ah-DYOS", partOfSpeech: "phrase" },
      { id: "v3", word: "Buenos dias", translation: "Good morning", phonetic: "BWEH-nos DEE-as", partOfSpeech: "phrase" },
      { id: "v4", word: "Buenas noches", translation: "Good night", phonetic: "BWEH-nas NO-ches", partOfSpeech: "phrase" },
      { id: "v5", word: "Por favor", translation: "Please", phonetic: "por fah-VOR", partOfSpeech: "phrase" },
    ],

    phrases: [
      {
        id: "p1",
        phrase: "Como estas?",
        translation: "How are you?",
        phonetic: "KOH-mo es-TAS",
        context: "Informal greeting",
      },
      {
        id: "p2",
        phrase: "Estoy bien, gracias.",
        translation: "I'm fine, thank you.",
        phonetic: "es-TOY BYEN, GRAH-syas",
        context: "Responding to 'how are you?'",
      },
      {
        id: "p3",
        phrase: "Mucho gusto.",
        translation: "Nice to meet you.",
        phonetic: "MOO-cho GOOS-toh",
        context: "When meeting someone for the first time",
      },
    ],

    activities: [
      {
        id: "a1",
        type: "translation",
        prompt: "What does 'Hola' mean?",
        targetWord: "Hola",
        options: ["Goodbye", "Hello", "Please", "Thank you"],
        correctAnswer: "Hello",
      },
      {
        id: "a2",
        type: "translation",
        prompt: "How do you say 'Goodbye' in Spanish?",
        targetWord: "Goodbye",
        options: ["Hola", "Gracias", "Adios", "Por favor"],
        correctAnswer: "Adios",
      },
      {
        id: "a3",
        type: "fill-blank",
        prompt: "Complete the greeting: 'Buenos ___' (Good morning)",
        targetWord: "Buenos dias",
        correctAnswer: "dias",
        hint: "Think of the Spanish word for 'days'.",
      },
    ],

    aiTeacherPrompt: {
      introduction:
        "Hola! I'm your AI language teacher. Today we'll learn the most important Spanish greetings. Ready? Let's go!",
      encouragement: [
        "Muy bien! That was perfect!",
        "Excelente! You got it!",
        "Great job! Keep going!",
        "Fantastico! You're a natural!",
      ],
      correction: [
        "Not quite — let's try again!",
        "Almost! The correct answer is...",
        "Good effort! Here's a tip...",
      ],
      lessonSummary:
        "You've learned your first Spanish greetings! Practice them with someone today. Hasta luego!",
    },
  },

  // ── Spanish · Unit 1 · Lesson 2 ────────────────────────────────────────────
  {
    id: "es-unit-1-lesson-2",
    unitId: "es-unit-1",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 6,

    goals: [
      { id: "g1", description: "Learn 4 introduction phrases", targetCount: 4 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],

    vocabulary: [
      { id: "v1", word: "Me llamo", translation: "My name is", phonetic: "meh YAH-moh", partOfSpeech: "phrase" },
      { id: "v2", word: "Soy de", translation: "I am from", phonetic: "soy deh", partOfSpeech: "phrase" },
      { id: "v3", word: "Encantado", translation: "Pleased to meet you", phonetic: "en-kan-TAH-doh", partOfSpeech: "adjective" },
      { id: "v4", word: "De donde eres?", translation: "Where are you from?", phonetic: "deh DON-deh EH-res", partOfSpeech: "phrase" },
    ],

    phrases: [
      {
        id: "p1",
        phrase: "Me llamo Ana.",
        translation: "My name is Ana.",
        phonetic: "meh YAH-moh AH-nah",
        context: "Introducing your name",
      },
      {
        id: "p2",
        phrase: "Soy de Espana.",
        translation: "I am from Spain.",
        phonetic: "soy deh es-PAH-nyah",
        context: "Saying where you are from",
      },
      {
        id: "p3",
        phrase: "Como te llamas?",
        translation: "What is your name?",
        phonetic: "KOH-moh teh YAH-mas",
        context: "Asking someone their name",
      },
    ],

    activities: [
      {
        id: "a1",
        type: "translation",
        prompt: "What does 'Me llamo' mean?",
        targetWord: "Me llamo",
        options: ["How are you?", "My name is", "I am from", "Nice to meet you"],
        correctAnswer: "My name is",
      },
      {
        id: "a2",
        type: "translation",
        prompt: "How do you say 'I am from' in Spanish?",
        targetWord: "I am from",
        options: ["Me llamo", "Soy de", "Encantado", "De donde eres?"],
        correctAnswer: "Soy de",
      },
      {
        id: "a3",
        type: "translation",
        prompt: "What does 'Como te llamas?' mean?",
        targetWord: "Como te llamas?",
        options: ["How are you?", "Where are you from?", "What is your name?", "Nice to meet you"],
        correctAnswer: "What is your name?",
      },
    ],

    aiTeacherPrompt: {
      introduction:
        "Hola de nuevo! Today you'll learn how to introduce yourself in Spanish — one of the most useful skills. Let's begin!",
      encouragement: [
        "Perfecto! Well done!",
        "You're doing great — keep it up!",
        "Increible! That's exactly right!",
        "Excellent work! You're making real progress!",
      ],
      correction: [
        "Close! Let's look at that again.",
        "Almost there — try once more.",
        "Good try! The correct answer is...",
      ],
      lessonSummary:
        "Amazing work! You can now introduce yourself in Spanish. Try saying your name and country to someone today. Hasta la proxima!",
    },
  },

  // ── French · Unit 1 · Lesson 1 ─────────────────────────────────────────────
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    title: "Hello & Goodbye",
    description: "Master the most essential French greetings.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,

    goals: [
      { id: "g1", description: "Learn 5 greeting words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],

    vocabulary: [
      { id: "v1", word: "Bonjour", translation: "Hello / Good day", phonetic: "bon-ZHOOR", partOfSpeech: "phrase" },
      { id: "v2", word: "Au revoir", translation: "Goodbye", phonetic: "oh reh-VWAR", partOfSpeech: "phrase" },
      { id: "v3", word: "Bonsoir", translation: "Good evening", phonetic: "bon-SWAR", partOfSpeech: "phrase" },
      { id: "v4", word: "Salut", translation: "Hi / Bye (informal)", phonetic: "sah-LUE", partOfSpeech: "phrase" },
      { id: "v5", word: "S'il vous plait", translation: "Please (formal)", phonetic: "seel voo PLEH", partOfSpeech: "phrase" },
    ],

    phrases: [
      {
        id: "p1",
        phrase: "Comment allez-vous?",
        translation: "How are you? (formal)",
        phonetic: "koh-MON tah-LAY voo",
        context: "Formal greeting",
      },
      {
        id: "p2",
        phrase: "Je vais bien, merci.",
        translation: "I am fine, thank you.",
        phonetic: "zhuh vay BYAN, mehr-SEE",
        context: "Responding to 'how are you?'",
      },
      {
        id: "p3",
        phrase: "Enchante.",
        translation: "Nice to meet you.",
        phonetic: "on-shan-TAY",
        context: "When meeting someone for the first time",
      },
    ],

    activities: [
      {
        id: "a1",
        type: "translation",
        prompt: "What does 'Bonjour' mean?",
        targetWord: "Bonjour",
        options: ["Goodbye", "Hello", "Please", "Thank you"],
        correctAnswer: "Hello",
      },
      {
        id: "a2",
        type: "translation",
        prompt: "How do you say 'Goodbye' in French?",
        targetWord: "Goodbye",
        options: ["Bonjour", "Merci", "Au revoir", "S'il vous plait"],
        correctAnswer: "Au revoir",
      },
      {
        id: "a3",
        type: "translation",
        prompt: "Which word means 'Hi' informally in French?",
        targetWord: "Salut",
        options: ["Bonjour", "Salut", "Bonsoir", "Enchante"],
        correctAnswer: "Salut",
      },
    ],

    aiTeacherPrompt: {
      introduction:
        "Bonjour! I'm your AI language teacher. Today we'll learn the most important French greetings. Ready? Allons-y — let's go!",
      encouragement: [
        "Tres bien! That was perfect!",
        "Excellent! You got it!",
        "Super! Keep going!",
        "Magnifique! You're doing great!",
      ],
      correction: [
        "Pas tout a fait — let's try again!",
        "Almost! The correct answer is...",
        "Good effort! Here's a hint...",
      ],
      lessonSummary:
        "You've learned your first French greetings! Try using them with someone today. Au revoir!",
    },
  },

  // ── French · Unit 1 · Lesson 2 ─────────────────────────────────────────────
  {
    id: "fr-unit-1-lesson-2",
    unitId: "fr-unit-1",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from in French.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { id: "g1", description: "Learn 4 introduction phrases", targetCount: 4 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Je m'appelle", translation: "My name is", phonetic: "zhuh ma-PEL", partOfSpeech: "phrase" },
      { id: "v2", word: "Je suis de", translation: "I am from", phonetic: "zhuh swee duh", partOfSpeech: "phrase" },
      { id: "v3", word: "Ravi de vous rencontrer", translation: "Nice to meet you", phonetic: "rah-VEE duh voo ron-kon-TRAY", partOfSpeech: "phrase" },
      { id: "v4", word: "D'où êtes-vous?", translation: "Where are you from?", phonetic: "doo-EHT voo", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "p1", phrase: "Je m'appelle Marie.", translation: "My name is Marie.", phonetic: "zhuh ma-PEL mah-REE", context: "Introducing your name" },
      { id: "p2", phrase: "Je suis de Paris.", translation: "I am from Paris.", phonetic: "zhuh swee duh pah-REE", context: "Saying where you are from" },
      { id: "p3", phrase: "Comment vous appelez-vous?", translation: "What is your name?", phonetic: "koh-MON voo za-peh-LAY voo", context: "Asking someone their name" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Je m'appelle' mean?", targetWord: "Je m'appelle", options: ["How are you?", "My name is", "I am from", "Nice to meet you"], correctAnswer: "My name is" },
      { id: "a2", type: "translation", prompt: "How do you say 'I am from' in French?", targetWord: "I am from", options: ["Je m'appelle", "Je suis de", "Ravi de vous rencontrer", "Bonjour"], correctAnswer: "Je suis de" },
      { id: "a3", type: "fill-blank", prompt: "Complete: 'Je _____ de Lyon.' (I am from Lyon.)", targetWord: "Je suis de", correctAnswer: "suis", hint: "Think of the French verb 'to be'." },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Today you'll learn to introduce yourself in French. Allons-y!",
      encouragement: ["Très bien!", "Excellent!", "Bravo!", "Parfait!"],
      correction: ["Pas tout à fait — let's try again!", "Almost! The correct answer is...", "Bon effort! Here's a tip..."],
      lessonSummary: "Félicitations! You can now introduce yourself in French. À bientôt!",
    },
  },

  // ── French · Unit 1 · Lesson 3 ─────────────────────────────────────────────
  {
    id: "fr-unit-1-lesson-3",
    unitId: "fr-unit-1",
    title: "Numbers 1-10",
    description: "Count from one to ten in French.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn numbers 1 through 10", targetCount: 10 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Un / Une", translation: "One", phonetic: "uh / ewn", partOfSpeech: "noun" },
      { id: "v2", word: "Deux", translation: "Two", phonetic: "duh", partOfSpeech: "noun" },
      { id: "v3", word: "Trois", translation: "Three", phonetic: "twah", partOfSpeech: "noun" },
      { id: "v4", word: "Cinq", translation: "Five", phonetic: "sank", partOfSpeech: "noun" },
      { id: "v5", word: "Dix", translation: "Ten", phonetic: "dees", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "J'ai deux chats.", translation: "I have two cats.", phonetic: "zhay duh shah", context: "Using numbers in sentences" },
      { id: "p2", phrase: "Il y a cinq personnes.", translation: "There are five people.", phonetic: "eel ya sank pehr-SON", context: "Counting people or things" },
      { id: "p3", phrase: "Répétez, s'il vous plaît.", translation: "Please repeat.", phonetic: "ray-pay-TAY seel voo PLEH", context: "Asking to hear something again" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Deux' mean?", targetWord: "Deux", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two" },
      { id: "a2", type: "translation", prompt: "How do you say 'Five' in French?", targetWord: "Five", options: ["Quatre", "Six", "Cinq", "Trois"], correctAnswer: "Cinq" },
      { id: "a3", type: "translation", prompt: "What number is 'Dix'?", targetWord: "Dix", options: ["Eight", "Nine", "Ten", "Seven"], correctAnswer: "Ten" },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Let's learn to count in French. Un, deux, trois — allons-y!",
      encouragement: ["Très bien!", "Excellent!", "Super!", "Magnifique!"],
      correction: ["Pas tout à fait — let's try again!", "Almost there!", "Bon effort!"],
      lessonSummary: "Bravo! You can now count to ten in French. Au revoir!",
    },
  },

  // ── French · Unit 1 · Lesson 4 ─────────────────────────────────────────────
  {
    id: "fr-unit-1-lesson-4",
    unitId: "fr-unit-1",
    title: "Colors",
    description: "Name common colors in French.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { id: "g1", description: "Learn 5 color words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Rouge", translation: "Red", phonetic: "roozh", partOfSpeech: "adjective" },
      { id: "v2", word: "Bleu / Bleue", translation: "Blue", phonetic: "bluh", partOfSpeech: "adjective" },
      { id: "v3", word: "Vert / Verte", translation: "Green", phonetic: "vehr", partOfSpeech: "adjective" },
      { id: "v4", word: "Jaune", translation: "Yellow", phonetic: "zhohn", partOfSpeech: "adjective" },
      { id: "v5", word: "Noir / Noire", translation: "Black", phonetic: "nwahr", partOfSpeech: "adjective" },
    ],
    phrases: [
      { id: "p1", phrase: "Le ciel est bleu.", translation: "The sky is blue.", phonetic: "luh SYEL eh bluh", context: "Describing color of objects" },
      { id: "p2", phrase: "J'aime le rouge.", translation: "I like red.", phonetic: "zhehm luh roozh", context: "Expressing color preferences" },
      { id: "p3", phrase: "De quelle couleur est-ce?", translation: "What color is it?", phonetic: "duh kel koo-LEUR es", context: "Asking about color" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Rouge' mean?", targetWord: "Rouge", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Red" },
      { id: "a2", type: "translation", prompt: "How do you say 'Green' in French?", targetWord: "Green", options: ["Rouge", "Vert", "Bleu", "Jaune"], correctAnswer: "Vert" },
      { id: "a3", type: "translation", prompt: "What does 'Jaune' mean?", targetWord: "Jaune", options: ["Black", "White", "Yellow", "Orange"], correctAnswer: "Yellow" },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Today we'll explore the colors of the world in French. C'est magnifique!",
      encouragement: ["Très bien!", "Excellent!", "Super coloré!", "Bravo!"],
      correction: ["Pas tout à fait — let's try again!", "Almost! The correct color is...", "Bon effort!"],
      lessonSummary: "Magnifique! You now know your French colors. Au revoir et bonne journée!",
    },
  },

  // ── French · Unit 2 · Lesson 1 ─────────────────────────────────────────────
  {
    id: "fr-unit-2-lesson-1",
    unitId: "fr-unit-2",
    title: "Days of the Week",
    description: "Learn the seven days of the week in French.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn all 7 days of the week", targetCount: 7 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Lundi", translation: "Monday", phonetic: "luh-DEE", partOfSpeech: "noun" },
      { id: "v2", word: "Mardi", translation: "Tuesday", phonetic: "mar-DEE", partOfSpeech: "noun" },
      { id: "v3", word: "Mercredi", translation: "Wednesday", phonetic: "mehr-kruh-DEE", partOfSpeech: "noun" },
      { id: "v4", word: "Vendredi", translation: "Friday", phonetic: "von-druh-DEE", partOfSpeech: "noun" },
      { id: "v5", word: "Dimanche", translation: "Sunday", phonetic: "dee-MON-sh", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Aujourd'hui, c'est lundi.", translation: "Today is Monday.", phonetic: "oh-zhoor-DWEE seh luh-DEE", context: "Stating the current day" },
      { id: "p2", phrase: "Quel jour sommes-nous?", translation: "What day is today?", phonetic: "kel zhoor SOM noo", context: "Asking the day of the week" },
      { id: "p3", phrase: "Le weekend est samedi et dimanche.", translation: "The weekend is Saturday and Sunday.", phonetic: "luh week-END eh sam-DEE ay dee-MON-sh", context: "Talking about the weekend" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Lundi' mean?", targetWord: "Lundi", options: ["Tuesday", "Monday", "Wednesday", "Friday"], correctAnswer: "Monday" },
      { id: "a2", type: "translation", prompt: "How do you say 'Friday' in French?", targetWord: "Friday", options: ["Lundi", "Mercredi", "Vendredi", "Samedi"], correctAnswer: "Vendredi" },
      { id: "a3", type: "translation", prompt: "What day is 'Dimanche'?", targetWord: "Dimanche", options: ["Saturday", "Friday", "Sunday", "Thursday"], correctAnswer: "Sunday" },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Today we learn the days of the week. Quel jour sommes-nous? Let's find out!",
      encouragement: ["Très bien!", "Parfait!", "Super!", "Excellent!"],
      correction: ["Pas tout à fait — try again!", "Almost! The correct day is...", "Bon effort!"],
      lessonSummary: "Bravo! You now know the days of the week in French. À la semaine prochaine!",
    },
  },

  // ── French · Unit 2 · Lesson 2 ─────────────────────────────────────────────
  {
    id: "fr-unit-2-lesson-2",
    unitId: "fr-unit-2",
    title: "Family Members",
    description: "Talk about your family in French.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn 5 family words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "La mère", translation: "Mother", phonetic: "lah mehr", partOfSpeech: "noun" },
      { id: "v2", word: "Le père", translation: "Father", phonetic: "luh pehr", partOfSpeech: "noun" },
      { id: "v3", word: "La sœur", translation: "Sister", phonetic: "lah suhr", partOfSpeech: "noun" },
      { id: "v4", word: "Le frère", translation: "Brother", phonetic: "luh frehr", partOfSpeech: "noun" },
      { id: "v5", word: "Les grands-parents", translation: "Grandparents", phonetic: "lay gron-pah-RON", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "J'ai une sœur et un frère.", translation: "I have a sister and a brother.", phonetic: "zhay ewn suhr ay uh frehr", context: "Describing your siblings" },
      { id: "p2", phrase: "Ma mère s'appelle Anne.", translation: "My mother's name is Anne.", phonetic: "mah mehr sa-PEL ahn", context: "Introducing a family member" },
      { id: "p3", phrase: "Tu as des frères et sœurs?", translation: "Do you have siblings?", phonetic: "tew ah day frehr ay suhr", context: "Asking about siblings" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'La mère' mean?", targetWord: "La mère", options: ["Sister", "Mother", "Grandmother", "Aunt"], correctAnswer: "Mother" },
      { id: "a2", type: "translation", prompt: "How do you say 'Brother' in French?", targetWord: "Brother", options: ["La sœur", "Le père", "Le frère", "L'oncle"], correctAnswer: "Le frère" },
      { id: "a3", type: "translation", prompt: "What does 'La sœur' mean?", targetWord: "La sœur", options: ["Mother", "Daughter", "Sister", "Grandmother"], correctAnswer: "Sister" },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Today we talk about family — la famille. Let's meet the family!",
      encouragement: ["Très bien!", "Magnifique!", "Bravo!", "Excellent!"],
      correction: ["Pas tout à fait — let's try again!", "Almost! The correct word is...", "Bon effort!"],
      lessonSummary: "Félicitations! You can now talk about your family in French. À bientôt!",
    },
  },

  // ── French · Unit 2 · Lesson 3 ─────────────────────────────────────────────
  {
    id: "fr-unit-2-lesson-3",
    unitId: "fr-unit-2",
    title: "Food & Drinks",
    description: "Order food and talk about what you like to eat in French.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 8,
    goals: [
      { id: "g1", description: "Learn 5 food and drink words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Le pain", translation: "Bread", phonetic: "luh pan", partOfSpeech: "noun" },
      { id: "v2", word: "L'eau", translation: "Water", phonetic: "loh", partOfSpeech: "noun" },
      { id: "v3", word: "Le café", translation: "Coffee", phonetic: "luh kah-FAY", partOfSpeech: "noun" },
      { id: "v4", word: "La pomme", translation: "Apple", phonetic: "lah pom", partOfSpeech: "noun" },
      { id: "v5", word: "Le fromage", translation: "Cheese", phonetic: "luh froh-MAHZH", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Je voudrais un café, s'il vous plaît.", translation: "I would like a coffee, please.", phonetic: "zhuh voo-DREH uh kah-FAY seel voo PLEH", context: "Ordering at a café" },
      { id: "p2", phrase: "J'aime le fromage.", translation: "I like cheese.", phonetic: "zhehm luh froh-MAHZH", context: "Expressing food preferences" },
      { id: "p3", phrase: "Avez-vous du pain?", translation: "Do you have any bread?", phonetic: "ah-VAY voo dew pan", context: "Asking for food at a shop" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Le pain' mean?", targetWord: "Le pain", options: ["Water", "Cheese", "Bread", "Apple"], correctAnswer: "Bread" },
      { id: "a2", type: "translation", prompt: "How do you say 'Water' in French?", targetWord: "Water", options: ["Le café", "L'eau", "Le jus", "Le lait"], correctAnswer: "L'eau" },
      { id: "a3", type: "translation", prompt: "What does 'Le fromage' mean?", targetWord: "Le fromage", options: ["Butter", "Milk", "Cheese", "Egg"], correctAnswer: "Cheese" },
    ],
    aiTeacherPrompt: {
      introduction: "Bonjour! Let's learn some French food vocabulary. Bon appétit — let's begin!",
      encouragement: ["Très bien!", "Délicieux!", "Bravo!", "Magnifique!"],
      correction: ["Pas tout à fait — let's try again!", "Almost! The correct answer is...", "Bon effort!"],
      lessonSummary: "Excellent! You can now talk about food and drinks in French. Bon appétit!",
    },
  },

  // ── German · Unit 1 · Lesson 1 ─────────────────────────────────────────────
  {
    id: "de-unit-1-lesson-1",
    unitId: "de-unit-1",
    title: "Hello & Goodbye",
    description: "Master the most essential German greetings.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "g1", description: "Learn 5 greeting words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Hallo", translation: "Hello", phonetic: "HAH-loh", partOfSpeech: "phrase" },
      { id: "v2", word: "Tschüss", translation: "Bye (informal)", phonetic: "chews", partOfSpeech: "phrase" },
      { id: "v3", word: "Auf Wiedersehen", translation: "Goodbye (formal)", phonetic: "owf VEE-dehr-zayn", partOfSpeech: "phrase" },
      { id: "v4", word: "Guten Morgen", translation: "Good morning", phonetic: "GOO-ten MOR-gen", partOfSpeech: "phrase" },
      { id: "v5", word: "Guten Abend", translation: "Good evening", phonetic: "GOO-ten AH-bent", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "p1", phrase: "Wie geht es Ihnen?", translation: "How are you? (formal)", phonetic: "vee gayt es EE-nen", context: "Formal greeting" },
      { id: "p2", phrase: "Mir geht es gut, danke.", translation: "I'm doing well, thank you.", phonetic: "meer gayt es goot DAHN-keh", context: "Responding to 'how are you?'" },
      { id: "p3", phrase: "Sehr erfreut.", translation: "Pleased to meet you.", phonetic: "zayr er-FROYT", context: "When meeting someone for the first time" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Hallo' mean?", targetWord: "Hallo", options: ["Goodbye", "Hello", "Please", "Thank you"], correctAnswer: "Hello" },
      { id: "a2", type: "translation", prompt: "How do you say 'Good morning' in German?", targetWord: "Good morning", options: ["Guten Abend", "Auf Wiedersehen", "Guten Morgen", "Tschüss"], correctAnswer: "Guten Morgen" },
      { id: "a3", type: "fill-blank", prompt: "Complete: 'Auf ___sehen!' (Goodbye!)", targetWord: "Auf Wiedersehen", correctAnswer: "Wieder", hint: "Think of the German word meaning 'again'." },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! I'm your AI language teacher. Today we learn essential German greetings. Los geht's!",
      encouragement: ["Sehr gut!", "Ausgezeichnet!", "Wunderbar!", "Fantastisch!"],
      correction: ["Nicht ganz — let's try again!", "Fast! The correct answer is...", "Guter Versuch! Here's a tip..."],
      lessonSummary: "You've learned your first German greetings! Try using them today. Auf Wiedersehen!",
    },
  },

  // ── German · Unit 1 · Lesson 2 ─────────────────────────────────────────────
  {
    id: "de-unit-1-lesson-2",
    unitId: "de-unit-1",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from in German.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { id: "g1", description: "Learn 4 introduction phrases", targetCount: 4 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Ich heiße", translation: "My name is", phonetic: "ich HYE-seh", partOfSpeech: "phrase" },
      { id: "v2", word: "Ich komme aus", translation: "I come from", phonetic: "ich KOM-eh ows", partOfSpeech: "phrase" },
      { id: "v3", word: "Freut mich", translation: "Nice to meet you", phonetic: "froyt mich", partOfSpeech: "phrase" },
      { id: "v4", word: "Wie heißen Sie?", translation: "What is your name?", phonetic: "vee HYE-sen zee", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "p1", phrase: "Ich heiße Thomas.", translation: "My name is Thomas.", phonetic: "ich HYE-seh TOH-mas", context: "Introducing your name" },
      { id: "p2", phrase: "Ich komme aus Deutschland.", translation: "I come from Germany.", phonetic: "ich KOM-eh ows DOYCH-lant", context: "Saying where you are from" },
      { id: "p3", phrase: "Woher kommen Sie?", translation: "Where are you from?", phonetic: "VOH-hehr KOM-en zee", context: "Asking someone's origin" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Ich heiße' mean?", targetWord: "Ich heiße", options: ["How are you?", "My name is", "I am from", "Nice to meet you"], correctAnswer: "My name is" },
      { id: "a2", type: "translation", prompt: "How do you say 'Nice to meet you' in German?", targetWord: "Nice to meet you", options: ["Ich heiße", "Ich komme aus", "Freut mich", "Auf Wiedersehen"], correctAnswer: "Freut mich" },
      { id: "a3", type: "translation", prompt: "What does 'Ich komme aus' mean?", targetWord: "Ich komme aus", options: ["My name is", "I come from", "Where are you from?", "Nice to meet you"], correctAnswer: "I come from" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo wieder! Today you'll introduce yourself auf Deutsch — in German. Let's go!",
      encouragement: ["Sehr gut!", "Wunderbar!", "Ausgezeichnet!", "Prima!"],
      correction: ["Nicht ganz — let's try again!", "Fast richtig! The correct answer is...", "Guter Versuch!"],
      lessonSummary: "Toll gemacht! You can now introduce yourself in German. Bis bald!",
    },
  },

  // ── German · Unit 1 · Lesson 3 ─────────────────────────────────────────────
  {
    id: "de-unit-1-lesson-3",
    unitId: "de-unit-1",
    title: "Numbers 1-10",
    description: "Count from one to ten in German.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn numbers 1 through 10", targetCount: 10 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Eins", translation: "One", phonetic: "ynts", partOfSpeech: "noun" },
      { id: "v2", word: "Zwei", translation: "Two", phonetic: "tsvy", partOfSpeech: "noun" },
      { id: "v3", word: "Drei", translation: "Three", phonetic: "dry", partOfSpeech: "noun" },
      { id: "v4", word: "Fünf", translation: "Five", phonetic: "fewnf", partOfSpeech: "noun" },
      { id: "v5", word: "Zehn", translation: "Ten", phonetic: "tsayn", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Ich habe zwei Katzen.", translation: "I have two cats.", phonetic: "ich HAH-beh tsvy KAT-zen", context: "Using numbers in sentences" },
      { id: "p2", phrase: "Es gibt fünf Personen.", translation: "There are five people.", phonetic: "es gipt fewnf pehr-ZOH-nen", context: "Counting people or things" },
      { id: "p3", phrase: "Bitte wiederholen.", translation: "Please repeat.", phonetic: "BIT-eh VEE-dehr-hoh-len", context: "Asking to hear something again" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Zwei' mean?", targetWord: "Zwei", options: ["One", "Three", "Two", "Four"], correctAnswer: "Two" },
      { id: "a2", type: "translation", prompt: "How do you say 'Five' in German?", targetWord: "Five", options: ["Vier", "Sechs", "Fünf", "Drei"], correctAnswer: "Fünf" },
      { id: "a3", type: "translation", prompt: "What number is 'Zehn'?", targetWord: "Zehn", options: ["Eight", "Nine", "Seven", "Ten"], correctAnswer: "Ten" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! Let's count auf Deutsch — in German. Eins, zwei, drei — los!",
      encouragement: ["Sehr gut!", "Prima!", "Ausgezeichnet!", "Wunderbar!"],
      correction: ["Nicht ganz — try again!", "Fast! The correct number is...", "Guter Versuch!"],
      lessonSummary: "Toll! You can now count to ten in German. Auf Wiedersehen!",
    },
  },

  // ── German · Unit 1 · Lesson 4 ─────────────────────────────────────────────
  {
    id: "de-unit-1-lesson-4",
    unitId: "de-unit-1",
    title: "Colors",
    description: "Name common colors in German.",
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { id: "g1", description: "Learn 5 color words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Rot", translation: "Red", phonetic: "roht", partOfSpeech: "adjective" },
      { id: "v2", word: "Blau", translation: "Blue", phonetic: "blow", partOfSpeech: "adjective" },
      { id: "v3", word: "Grün", translation: "Green", phonetic: "grewn", partOfSpeech: "adjective" },
      { id: "v4", word: "Gelb", translation: "Yellow", phonetic: "gelp", partOfSpeech: "adjective" },
      { id: "v5", word: "Schwarz", translation: "Black", phonetic: "shvarts", partOfSpeech: "adjective" },
    ],
    phrases: [
      { id: "p1", phrase: "Der Himmel ist blau.", translation: "The sky is blue.", phonetic: "dehr HIM-el ist blow", context: "Describing the color of objects" },
      { id: "p2", phrase: "Ich mag die Farbe Rot.", translation: "I like the color red.", phonetic: "ich mahk dee FAR-beh roht", context: "Expressing color preferences" },
      { id: "p3", phrase: "Welche Farbe ist das?", translation: "What color is this?", phonetic: "VEL-cheh FAR-beh ist das", context: "Asking about color" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Rot' mean?", targetWord: "Rot", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Red" },
      { id: "a2", type: "translation", prompt: "How do you say 'Green' in German?", targetWord: "Green", options: ["Rot", "Grün", "Blau", "Gelb"], correctAnswer: "Grün" },
      { id: "a3", type: "translation", prompt: "What does 'Gelb' mean?", targetWord: "Gelb", options: ["Black", "White", "Yellow", "Orange"], correctAnswer: "Yellow" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! Today we learn colors — Farben — in German. Let's paint the world!",
      encouragement: ["Sehr gut!", "Ausgezeichnet!", "Wunderbar!", "Prima!"],
      correction: ["Nicht ganz — let's try again!", "Fast richtig! The correct color is...", "Guter Versuch!"],
      lessonSummary: "Fantastisch! You now know German colors. Bis zum nächsten Mal!",
    },
  },

  // ── German · Unit 2 · Lesson 1 ─────────────────────────────────────────────
  {
    id: "de-unit-2-lesson-1",
    unitId: "de-unit-2",
    title: "Days of the Week",
    description: "Learn the seven days of the week in German.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn all 7 days of the week", targetCount: 7 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Montag", translation: "Monday", phonetic: "MON-tahk", partOfSpeech: "noun" },
      { id: "v2", word: "Dienstag", translation: "Tuesday", phonetic: "DEENS-tahk", partOfSpeech: "noun" },
      { id: "v3", word: "Mittwoch", translation: "Wednesday", phonetic: "MIT-vokh", partOfSpeech: "noun" },
      { id: "v4", word: "Freitag", translation: "Friday", phonetic: "FRY-tahk", partOfSpeech: "noun" },
      { id: "v5", word: "Sonntag", translation: "Sunday", phonetic: "ZON-tahk", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Heute ist Montag.", translation: "Today is Monday.", phonetic: "HOY-teh ist MON-tahk", context: "Stating the current day" },
      { id: "p2", phrase: "Welcher Tag ist heute?", translation: "What day is today?", phonetic: "VEL-cher tahk ist HOY-teh", context: "Asking the day of the week" },
      { id: "p3", phrase: "Das Wochenende ist Samstag und Sonntag.", translation: "The weekend is Saturday and Sunday.", phonetic: "das VOH-khen-en-deh ist ZAM-stahk unt ZON-tahk", context: "Talking about the weekend" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Montag' mean?", targetWord: "Montag", options: ["Tuesday", "Monday", "Wednesday", "Friday"], correctAnswer: "Monday" },
      { id: "a2", type: "translation", prompt: "How do you say 'Friday' in German?", targetWord: "Friday", options: ["Montag", "Mittwoch", "Freitag", "Samstag"], correctAnswer: "Freitag" },
      { id: "a3", type: "translation", prompt: "What day is 'Sonntag'?", targetWord: "Sonntag", options: ["Saturday", "Friday", "Sunday", "Thursday"], correctAnswer: "Sunday" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! Heute lernen wir die Tage der Woche. Let's learn the days of the week!",
      encouragement: ["Sehr gut!", "Prima!", "Ausgezeichnet!", "Wunderbar!"],
      correction: ["Nicht ganz — try again!", "Fast! The correct day is...", "Guter Versuch!"],
      lessonSummary: "Toll! You now know the days of the week auf Deutsch. Bis nächste Woche!",
    },
  },

  // ── German · Unit 2 · Lesson 2 ─────────────────────────────────────────────
  {
    id: "de-unit-2-lesson-2",
    unitId: "de-unit-2",
    title: "Family Members",
    description: "Talk about your family in German.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { id: "g1", description: "Learn 5 family words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Die Mutter", translation: "Mother", phonetic: "dee MUT-ter", partOfSpeech: "noun" },
      { id: "v2", word: "Der Vater", translation: "Father", phonetic: "dehr FAH-ter", partOfSpeech: "noun" },
      { id: "v3", word: "Die Schwester", translation: "Sister", phonetic: "dee SHVES-ter", partOfSpeech: "noun" },
      { id: "v4", word: "Der Bruder", translation: "Brother", phonetic: "dehr BROO-der", partOfSpeech: "noun" },
      { id: "v5", word: "Die Großeltern", translation: "Grandparents", phonetic: "dee GROHS-el-tern", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Ich habe eine Schwester.", translation: "I have a sister.", phonetic: "ich HAH-beh EYE-neh SHVES-ter", context: "Describing your siblings" },
      { id: "p2", phrase: "Meine Mutter heißt Anna.", translation: "My mother's name is Anna.", phonetic: "MY-neh MUT-ter HYE-st AH-nah", context: "Introducing a family member" },
      { id: "p3", phrase: "Hast du Geschwister?", translation: "Do you have siblings?", phonetic: "hast doo geh-SHVIS-ter", context: "Asking about siblings" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Die Mutter' mean?", targetWord: "Die Mutter", options: ["Sister", "Mother", "Grandmother", "Aunt"], correctAnswer: "Mother" },
      { id: "a2", type: "translation", prompt: "How do you say 'Brother' in German?", targetWord: "Brother", options: ["Die Schwester", "Der Vater", "Der Bruder", "Der Onkel"], correctAnswer: "Der Bruder" },
      { id: "a3", type: "translation", prompt: "What does 'Die Schwester' mean?", targetWord: "Die Schwester", options: ["Mother", "Daughter", "Sister", "Grandmother"], correctAnswer: "Sister" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! Today we talk about family — die Familie. Let's meet the family!",
      encouragement: ["Sehr gut!", "Wunderbar!", "Ausgezeichnet!", "Prima!"],
      correction: ["Nicht ganz — let's try again!", "Fast richtig! The correct word is...", "Guter Versuch!"],
      lessonSummary: "Fantastisch! You can now talk about your family auf Deutsch. Tschüss!",
    },
  },

  // ── German · Unit 2 · Lesson 3 ─────────────────────────────────────────────
  {
    id: "de-unit-2-lesson-3",
    unitId: "de-unit-2",
    title: "Food & Drinks",
    description: "Order food and talk about what you like to eat in German.",
    difficulty: "beginner",
    xpReward: 12,
    estimatedMinutes: 8,
    goals: [
      { id: "g1", description: "Learn 5 food and drink words", targetCount: 5 },
      { id: "g2", description: "Complete 3 practice activities", targetCount: 3 },
    ],
    vocabulary: [
      { id: "v1", word: "Das Brot", translation: "Bread", phonetic: "das broht", partOfSpeech: "noun" },
      { id: "v2", word: "Das Wasser", translation: "Water", phonetic: "das VAS-ser", partOfSpeech: "noun" },
      { id: "v3", word: "Der Kaffee", translation: "Coffee", phonetic: "dehr kah-FAY", partOfSpeech: "noun" },
      { id: "v4", word: "Der Apfel", translation: "Apple", phonetic: "dehr AHP-fel", partOfSpeech: "noun" },
      { id: "v5", word: "Der Käse", translation: "Cheese", phonetic: "dehr KAY-zeh", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "p1", phrase: "Ich möchte einen Kaffee, bitte.", translation: "I would like a coffee, please.", phonetic: "ich MŒKH-teh EYE-nen kah-FAY BIT-eh", context: "Ordering at a café" },
      { id: "p2", phrase: "Ich mag Käse.", translation: "I like cheese.", phonetic: "ich mahk KAY-zeh", context: "Expressing food preferences" },
      { id: "p3", phrase: "Haben Sie Brot?", translation: "Do you have any bread?", phonetic: "HAH-ben zee broht", context: "Asking for food at a shop" },
    ],
    activities: [
      { id: "a1", type: "translation", prompt: "What does 'Das Brot' mean?", targetWord: "Das Brot", options: ["Water", "Cheese", "Bread", "Apple"], correctAnswer: "Bread" },
      { id: "a2", type: "translation", prompt: "How do you say 'Water' in German?", targetWord: "Water", options: ["Der Kaffee", "Das Wasser", "Der Saft", "Die Milch"], correctAnswer: "Das Wasser" },
      { id: "a3", type: "translation", prompt: "What does 'Der Käse' mean?", targetWord: "Der Käse", options: ["Butter", "Milk", "Cheese", "Egg"], correctAnswer: "Cheese" },
    ],
    aiTeacherPrompt: {
      introduction: "Hallo! Let's learn some German food vocabulary. Guten Appetit — los geht's!",
      encouragement: ["Sehr gut!", "Lecker!", "Ausgezeichnet!", "Wunderbar!"],
      correction: ["Nicht ganz — let's try again!", "Fast! The correct answer is...", "Guter Versuch!"],
      lessonSummary: "Wunderbar! You can now talk about food auf Deutsch. Guten Appetit!",
    },
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return LESSONS.filter((l) => l.unitId === unitId);
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}
