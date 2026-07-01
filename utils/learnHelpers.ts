import { Images } from "../constants/images";
import type { Lesson } from "../types/learning";

export type LessonStatus = "completed" | "in_progress" | "not_started";

export const MOCK_PROGRESS: Record<string, LessonStatus> = {
  "es-unit-1-lesson-1": "completed",
  "es-unit-1-lesson-2": "in_progress",
  "fr-unit-1-lesson-1": "completed",
  "fr-unit-1-lesson-2": "in_progress",
  "de-unit-1-lesson-1": "completed",
  "de-unit-1-lesson-2": "in_progress",
};

export const LEVEL_LABELS: Record<string, string> = {
  beginner: "A1",
  elementary: "A2",
  intermediate: "B1",
  advanced: "C1",
};

export const PURPLE = "#6C4EF5";
export const GREEN = "#21C16B";

export function getLessonStatus(lessonId: string): LessonStatus {
  return MOCK_PROGRESS[lessonId] ?? "not_started";
}

export function getLessonImage(lesson: Lesson): number {
  return Images[lesson.imageKey] ?? Images.mascotWelcome;
}

export function fmtTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return String(sec).padStart(2, "0");
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export function darkenColor(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((n >> 16) & 0xff) - 35);
  const g = Math.max(0, ((n >> 8) & 0xff) - 35);
  const b = Math.max(0, (n & 0xff) - 35);
  return `rgb(${r},${g},${b})`;
}
