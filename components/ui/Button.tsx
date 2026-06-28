/**
 * Button Component
 * Demonstrates design system usage with variant support
 */

import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { colors } from "../../theme";

type ButtonVariant = "primary" | "secondary" | "success" | "error" | "warning";

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export function Button({
  label,
  variant = "primary",
  disabled = false,
  onPress,
  style,
}: ButtonProps) {
  const getBackgroundColor = (variant: ButtonVariant) => {
    const variantColors: Record<ButtonVariant, string> = {
      primary: colors.primary.purple,
      secondary: colors.neutral.surface,
      success: colors.semantic.success,
      error: colors.semantic.error,
      warning: colors.semantic.warning,
    };
    return variantColors[variant];
  };

  const getTextColor = (variant: ButtonVariant) => {
    const textColors: Record<ButtonVariant, string> = {
      primary: "#FFFFFF",
      secondary: colors.neutral.textPrimary,
      success: "#FFFFFF",
      error: "#FFFFFF",
      warning: "#000000",
    };
    return textColors[variant];
  };

  return (
    <Pressable
      className="btn-base"
      style={[
        {
          backgroundColor: getBackgroundColor(variant),
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: getTextColor(variant),
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
