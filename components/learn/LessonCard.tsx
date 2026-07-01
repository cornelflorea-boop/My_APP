import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Lesson } from "../../types/learning";
import { getLessonStatus, getLessonImage, PURPLE } from "../../utils/learnHelpers";
import { StatusBadge } from "./StatusBadge";

export function LessonCard({ lesson, onPress }: { lesson: Lesson; onPress: () => void }) {
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

const styles = StyleSheet.create({
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
});
