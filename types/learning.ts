// Supported language codes
export type LanguageCode = "es" | "fr" | "de" | "it" | "pt" | "ja" | "zh" | "ko";

export interface Language {
  code: LanguageCode;
  name: string;        // Display name in English
  nativeName: string;  // Name in the language itself
  flag: string;        // Emoji flag
  isAvailable: boolean;
}

// ─── Activity ────────────────────────────────────────────────────────────────

export type ActivityType =
  | "vocabulary"   // Match word to image/definition
  | "translation"  // Translate a phrase
  | "listening"    // Listen and choose
  | "speaking"     // Speak the word/phrase
  | "fill-blank"   // Fill in the blank
  | "matching";    // Match pairs

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;       // Question or instruction text
  targetWord?: string;  // The word/phrase being tested
  options?: string[];   // For multiple-choice activities
  correctAnswer: string;
  hint?: string;
}

// ─── Vocabulary & Phrases ─────────────────────────────────────────────────────

export type PartOfSpeech = "noun" | "verb" | "adjective" | "adverb" | "phrase";

export interface VocabularyItem {
  id: string;
  word: string;           // Word in target language
  translation: string;    // English translation
  phonetic?: string;      // Pronunciation guide
  partOfSpeech?: PartOfSpeech;
  imageKey?: string;      // Key for a local image asset
}

export interface Phrase {
  id: string;
  phrase: string;       // Phrase in target language
  translation: string;  // English translation
  phonetic?: string;    // Pronunciation guide
  context?: string;     // When to use this phrase
}

// ─── Lesson ───────────────────────────────────────────────────────────────────

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface LessonGoal {
  id: string;
  description: string;  // e.g. "Learn 5 greetings"
  targetCount?: number; // e.g. 5 vocabulary words
}

/**
 * Prompts surfaced to the audio-based Vision Agent teacher.
 * The AI reads these at runtime to generate contextual speech.
 */
export interface AITeacherPrompt {
  introduction: string;      // Spoken intro for the lesson
  encouragement: string[];   // Phrases used when user succeeds
  correction: string[];      // Phrases used when user makes a mistake
  lessonSummary: string;     // Closing words after the lesson
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

// ─── Unit ─────────────────────────────────────────────────────────────────────

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;          // Position in the course (1-based)
  totalLessons: number;
  difficulty: DifficultyLevel;
  color: string;          // Hex color for UI accents
  iconKey?: string;       // Key for a local icon asset
}
