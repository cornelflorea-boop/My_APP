import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RED = "#FF3B30";

export function CtrlBtn({
  icon,
  label,
  onPress,
  isEndCall = false,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  isEndCall?: boolean;
  active?: boolean;
}) {
  return (
    <View style={styles.ctrlItem}>
      <TouchableOpacity
        style={[
          styles.ctrlBtn,
          isEndCall && styles.ctrlBtnEnd,
          active && styles.ctrlBtnActive,
        ]}
        onPress={onPress}
        activeOpacity={0.75}
      >
        {icon}
      </TouchableOpacity>
      <Text style={styles.ctrlLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ctrlItem: {
    alignItems: "center",
    gap: 6,
  },
  ctrlBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  ctrlBtnEnd: {
    backgroundColor: RED,
  },
  ctrlBtnActive: {
    backgroundColor: "#EEE9FF",
  },
  ctrlLabel: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    textAlign: "center",
  },
});
