/**
 * Border Radius Design Tokens for Lingua App
 */

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

// Semantic radius values
export const radiusAliases = {
  tight: radius.sm,
  normal: radius.md,
  comfortable: radius.lg,
  round: radius.xl,
  circle: radius.full,
} as const;
