import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { getLessonsByUnit } from "../../data/lessons";
import type { Lesson, Unit } from "../../types/learning";
import { getLessonStatus, darkenColor } from "../../utils/learnHelpers";
import { LessonCard } from "./LessonCard";

export function UnitBlock({ unit }: { unit: Unit }) {
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

const styles = StyleSheet.create({
  unitBlock: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F1F3",
  },
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
  lessonList: {
    backgroundColor: "#FFFFFF",
  },
  lessonDivider: {
    height: 1,
    backgroundColor: "#F9FAFB",
    marginLeft: 86,
  },
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
