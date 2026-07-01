import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PURPLE, GREEN } from "../../utils/learnHelpers";
import type { LessonStatus } from "../../utils/learnHelpers";

export function StatusBadge({ status }: { status: LessonStatus }) {
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

const styles = StyleSheet.create({
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
});
