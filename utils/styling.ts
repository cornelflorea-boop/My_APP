/**
 * Styling Utilities
 * Helper functions for common styling patterns
 */

import { colors, spacing, radius } from "../theme";

/**
 * Create consistent button styles
 */
export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary.purple,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
  },
  secondary: {
    backgroundColor: colors.neutral.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
};

/**
 * Create consistent card styles
 */
export const cardStyles = {
  default: {
    backgroundColor: colors.neutral.background,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  elevated: {
    backgroundColor: colors.neutral.background,
    borderRadius: radius.lg,
    padding: spacing.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
};

/**
 * Create consistent container spacing
 */
export const containerStyles = {
  screen: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  component: {
    marginBottom: spacing.md,
  },
};

/**
 * Helper to combine multiple style objects
 */
export function combineStyles(...styles: any[]): any {
  return styles.reduce((acc, style) => ({ ...acc, ...style }), {});
}
