import { Unit } from "../types/learning";

export const UNITS: Unit[] = [
  // ── Spanish ────────────────────────────────────────────────────────────────
  {
    id: "es-unit-1",
    languageCode: "es",
    title: "Greetings & Basics",
    description: "Say hello, introduce yourself, and use everyday expressions.",
    order: 1,
    totalLessons: 4,
    difficulty: "beginner",
    color: "#6C4EF5",
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    title: "Numbers & Colors",
    description: "Count from 1 to 20 and name common colors.",
    order: 2,
    totalLessons: 3,
    difficulty: "beginner",
    color: "#21C16B",
  },

  // ── French ─────────────────────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    languageCode: "fr",
    title: "Greetings & Basics",
    description: "Say hello, introduce yourself, and use everyday expressions.",
    order: 1,
    totalLessons: 4,
    difficulty: "beginner",
    color: "#4D8BFF",
  },

  // ── German ─────────────────────────────────────────────────────────────────
  {
    id: "de-unit-1",
    languageCode: "de",
    title: "Greetings & Basics",
    description: "Say hello, introduce yourself, and use everyday expressions.",
    order: 1,
    totalLessons: 4,
    difficulty: "beginner",
    color: "#FF8A00",
  },
  {
    id: "de-unit-2",
    languageCode: "de",
    title: "Everyday Life",
    description: "Talk about days, colors, family, and common objects.",
    order: 2,
    totalLessons: 3,
    difficulty: "beginner",
    color: "#21C16B",
  },

  // ── French · Unit 2 ────────────────────────────────────────────────────────
  {
    id: "fr-unit-2",
    languageCode: "fr",
    title: "Everyday Life",
    description: "Talk about days, colors, family, and common objects.",
    order: 2,
    totalLessons: 3,
    difficulty: "beginner",
    color: "#21C16B",
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return UNITS.filter((u) => u.languageCode === languageCode).sort(
    (a, b) => a.order - b.order
  );
}

export function getUnitById(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}
