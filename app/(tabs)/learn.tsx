import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useLanguageStore } from "../../store/useLanguageStore";
import { getLanguageByCode } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";
import { getLessonsByUnit } from "../../data/lessons";
import { Images } from "../../constants/images";
import type { Lesson, Unit } from "../../types/learning";

// ── Types ──────────────────────────────────────────────────────────────────
type LessonStatus = "completed" | "in_progress" | "not_started";

// ── Mock progress state ────────────────────────────────────────────────────
const MOCK_PROGRESS: Record<string, LessonStatus> = {
  "es-unit-1-lesson-1": "completed",
  "es-unit-1-lesson-2": "in_progress",
  "fr-unit-1-lesson-1": "completed",
  "fr-unit-1-lesson-2": "in_progress",
  "de-unit-1-lesson-1": "completed",
  "de-unit-1-lesson-2": "in_progress",
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: "A1",
  elementary: "A2",
  intermediate: "B1",
  advanced: "C1",
};

const PURPLE = "#6C4EF5";
const GREEN = "#21C16B";

// ── Helpers ────────────────────────────────────────────────────────────────
function getLessonStatus(lessonId: string): LessonStatus {
  return MOCK_PROGRESS[lessonId] ?? "not_started";
}

function getLessonImage(lesson: Lesson): number | { uri: string } {
  const t = lesson.title.toLowerCase();
  if (t.includes("hello") || t.includes("goodbye") || t.includes("greet")) {
    return Images.mascotWelcome;
  }
  if (t.includes("introduc") || t.includes("yourself")) {
    return Images.mascotAuth;
  }
  if (t.includes("number") || t.includes("count")) {
    return Images.treasure;
  }
  if (t.includes("color") || t.includes("colour")) {
    return Images.earth;
  }
  if (t.includes("day") || t.includes("week")) {
    return Images.palace;
  }
  if (t.includes("famil")) {
    return Images.mascotLogo;
  }
  return { uri: `https://picsum.photos/seed/${encodeURIComponent(lesson.id)}/128/128` };
}

function darkenColor(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((n >> 16) & 0xff) - 35);
  const g = Math.max(0, ((n >> 8) & 0xff) - 35);
  const b = Math.max(0, (n & 0xff) - 35);
  return `rgb(${r},${g},${b})`;
}

// ── Status indicator ────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: LessonStatus }) {
  if (status === "completed") {
    return (
      <View style={[styles.statusCircle, { backgroundColor: GREEN }]}>
        <Ionicons name="checkmark" size={15} color="#FFFFFF" />
      </View>
    );
  }
  if (status === "in_progress") {
    return (
      <View style={[styles.statusCircle, { backgroundColor: PURPLE }]}>
        <Ionicons name="play" size={11} color="#FFFFFF" style={{ marginLeft: 2 }} />
      </View>
    );
  }
  return <View style={[styles.statusCircle, styles.statusEmpty]} />;
}

// ── Lesson card ─────────────────────────────────────────────────────────────
function LessonCard({ lesson, onPress }: { lesson: Lesson; onPress: () => void }) {
  const status = getLessonStatus(lesson.id);
  const image = getLessonImage(lesson);
  const isDone = status === "completed";

  return (
    <TouchableOpacity style={styles.lessonCard} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.lessonImgWrap, isDone && styles.lessonImgDone]}>
        <Image source={image} style={styles.lessonImg} resizeMode="cover" />
        {isDone && <View style={styles.completedOverlay} />}
      </View>
      <View style={styles.lessonInfo}>
        <Text
          style={[styles.lessonTitle, isDone && styles.lessonTitleDone]}
          numberOfLines={1}
        >
          {lesson.title}
        </Text>
        <View style={styles.lessonMeta}>
          <Ionicons name="time-outline" size={11} color="#9CA3AF" />
          <Text style={styles.metaText}>{lesson.estimatedMinutes} min</Text>
          <Text style={styles.metaDot}>·</Text>
          <Text style={styles.metaXP}>+{lesson.xpReward} XP</Text>
        </View>
      </View>
      <StatusBadge status={status} />
    </TouchableOpacity>
  );
}

// ── Unit block ───────────────────────────────────────────────────────────────
function UnitBlock({ unit }: { unit: Unit }) {
  const lessons = getLessonsByUnit(unit.id);
  const router = useRouter();
  const completedCount = lessons.filter(
    (l) => getLessonStatus(l.id) === "completed"
  ).length;

  const handleLessonPress = (lesson: Lesson) => {
    router.push(`/lesson/${lesson.id}`);
  };

  return (
    <View style={styles.unitBlock}>
      {/* Unit banner */}
      <View style={[styles.unitBanner, { backgroundColor: unit.color }]}>
        <View
          style={[
            styles.bannerCircle1,
            { backgroundColor: darkenColor(unit.color) },
          ]}
        />
        <View
          style={[
            styles.bannerCircle2,
            { backgroundColor: darkenColor(unit.color) },
          ]}
        />
        <View style={styles.bannerRow}>
          <View style={styles.unitNumPill}>
            <Text style={styles.unitNumText}>Unit {unit.order}</Text>
          </View>
          <View style={styles.progressPill}>
            <Text style={styles.progressPillText}>
              {completedCount}/{lessons.length}
            </Text>
          </View>
        </View>
        <Text style={styles.unitTitle}>{unit.title}</Text>
        <Text style={styles.unitDesc} numberOfLines={2}>
          {unit.description}
        </Text>
      </View>

      {/* Lesson list */}
      <View style={styles.lessonList}>
        {lessons.length === 0 ? (
          <View style={styles.noLessons}>
            <Text style={styles.noLessonsText}>Lessons coming soon</Text>
          </View>
        ) : (
          lessons.map((lesson, idx) => (
            <View key={lesson.id}>
              <LessonCard
                lesson={lesson}
                onPress={() => handleLessonPress(lesson)}
              />
              {idx < lessons.length - 1 && (
                <View style={styles.lessonDivider} />
              )}
            </View>
          ))
        )}
      </View>
    </View>
  );
}

// ── Screen ───────────────────────────────────────────────────────────────────
export default function LearnScreen() {
  const insets = useSafeAreaInsets();
  const { selectedLanguage, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) return null;

  const language = selectedLanguage ? getLanguageByCode(selectedLanguage) : null;
  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage) : [];
  const firstUnit = units[0];
  const levelLabel = firstUnit ? (LEVEL_LABELS[firstUnit.difficulty] ?? "A1") : "A1";

  const allLessons = units.flatMap((u) => getLessonsByUnit(u.id));
  const totalLessons = allLessons.length;
  const completedCount = allLessons.filter(
    (l) => getLessonStatus(l.id) === "completed"
  ).length;
  const progressPct = totalLessons > 0 ? completedCount / totalLessons : 0;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 8 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* ── Header ────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {language?.flag ? (
            <Image source={{ uri: language.flag }} style={styles.flagImg} />
          ) : (
            <View style={[styles.flagImg, { backgroundColor: "#E5E7EB" }]} />
          )}
          <View>
            <Text style={styles.headerTitle}>Your Course</Text>
            <Text style={styles.headerSub}>
              {language?.name ?? "Select a language"}
            </Text>
          </View>
        </View>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{levelLabel}</Text>
        </View>
      </View>

      {/* ── Progress bar ──────────────────────────────────────────────── */}
      {totalLessons > 0 && (
        <View style={styles.progressRow}>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.round(progressPct * 100)}%` },
              ]}
            />
          </View>
          <Text style={styles.progressLabel}>
            {completedCount}/{totalLessons}
          </Text>
        </View>
      )}

      {/* ── Empty state ────────────────────────────────────────────────── */}
      {units.length === 0 && (
        <View style={styles.emptyState}>
          <Image
            source={Images.earth}
            style={styles.emptyImg}
            resizeMode="contain"
          />
          <Text style={styles.emptyTitle}>No course yet</Text>
          <Text style={styles.emptySub}>
            This language course is coming soon!
          </Text>
        </View>
      )}

      {/* ── Units ──────────────────────────────────────────────────────── */}
      {units.map((unit) => (
        <UnitBlock key={unit.id} unit={unit} />
      ))}

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 40,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  flagImg: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
  },
  headerSub: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    marginTop: 1,
  },
  levelBadge: {
    backgroundColor: PURPLE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  levelText: {
    fontSize: 13,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
  },

  // Progress
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 10,
  },
  progressTrack: {
    flex: 1,
    height: 7,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
  },
  progressFill: {
    height: 7,
    backgroundColor: PURPLE,
    borderRadius: 4,
    minWidth: 4,
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: PURPLE,
    minWidth: 36,
    textAlign: "right",
  },

  // Unit block
  unitBlock: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F1F3",
  },

  // Unit banner
  unitBanner: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    position: "relative",
    overflow: "hidden",
  },
  bannerCircle1: {
    position: "absolute",
    top: -25,
    right: -15,
    width: 110,
    height: 110,
    borderRadius: 55,
    opacity: 0.45,
  },
  bannerCircle2: {
    position: "absolute",
    bottom: -35,
    right: 55,
    width: 90,
    height: 90,
    borderRadius: 45,
    opacity: 0.28,
  },
  bannerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  unitNumPill: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  unitNumText: {
    fontSize: 11,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
  progressPill: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  progressPillText: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,0.9)",
  },
  unitTitle: {
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    marginBottom: 3,
  },
  unitDesc: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,0.82)",
    lineHeight: 17,
  },

  // Lesson list
  lessonList: {
    backgroundColor: "#FFFFFF",
  },
  lessonDivider: {
    height: 1,
    backgroundColor: "#F9FAFB",
    marginLeft: 86,
  },

  // Lesson card
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 14,
    gap: 12,
    backgroundColor: "#FFFFFF",
  },
  lessonImgWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F3F4F6",
  },
  lessonImgDone: {
    opacity: 0.75,
  },
  lessonImg: {
    width: 56,
    height: 56,
  },
  completedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(33, 193, 107, 0.18)",
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
  },
  lessonTitleDone: {
    color: "#9CA3AF",
  },
  lessonMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 3,
  },
  metaText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#9CA3AF",
  },
  metaDot: {
    fontSize: 12,
    color: "#D1D5DB",
  },
  metaXP: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: PURPLE,
  },

  // Status indicator
  statusCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  statusEmpty: {
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "transparent",
  },

  // Empty state
  emptyState: {
    alignItems: "center",
    paddingVertical: 56,
    paddingHorizontal: 40,
  },
  emptyImg: {
    width: 100,
    height: 100,
    marginBottom: 16,
    opacity: 0.45,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    textAlign: "center",
  },

  // No lessons in unit
  noLessons: {
    paddingVertical: 18,
    alignItems: "center",
  },
  noLessonsText: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#9CA3AF",
  },
});
