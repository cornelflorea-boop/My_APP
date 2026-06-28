/**
 * Color Design Tokens for Lingua App
 * Based on design system specification
 */

export const colors = {
  // Primary Colors
  primary: {
    purple: "#6C4EF5",
    deepPurple: "#5B3BF6",
    blue: "#4D8BFF",
    green: "#21C16B",
  },

  // Semantic Colors
  semantic: {
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D88FF",
  },

  // Neutral Colors
  neutral: {
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
  },
} as const;

// Color aliases for easy reference
export const colorAliases = {
  brand: colors.primary.purple,
  text: colors.neutral.textPrimary,
  textMuted: colors.neutral.textSecondary,
  bg: colors.neutral.background,
  bgSecondary: colors.neutral.surface,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
} as const;
