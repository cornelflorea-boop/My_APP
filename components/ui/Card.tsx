/**
 * Card Component
 * Reusable card with design system styling
 */

import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  return (
    <View
      className="card"
      style={style}
    >
      {children}
    </View>
  );
}
