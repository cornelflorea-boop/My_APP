/**
 * Spacing Design Tokens for Lingua App
 * Based on an 8px grid system
 */

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
} as const;

// Semantic spacing values
export const spacingAliases = {
  zero: 0,
  tight: spacing.xs,
  compact: spacing.sm,
  default: spacing.md,
  comfortable: spacing.lg,
  spacious: spacing.xl,
  extraSpacious: spacing["2xl"],
} as const;

// Common padding/margin combinations
export const paddingSizes = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
} as const;

// Gap sizes for flex and grid layouts
export const gapSizes = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
} as const;
