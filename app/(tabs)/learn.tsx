import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLanguageStore } from "../../store/useLanguageStore";
import { getLanguageByCode } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";
import { getLessonsByUnit } from "../../data/lessons";
import { Images } from "../../constants/images";
import { getLessonStatus, LEVEL_LABELS, PURPLE } from "../../utils/learnHelpers";
import { UnitBlock } from "../../components/learn/UnitBlock";

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
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 8 }]}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 40,
  },
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
});
