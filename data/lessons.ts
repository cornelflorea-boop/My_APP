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
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return LESSONS.filter((l) => l.unitId === unitId);
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}
