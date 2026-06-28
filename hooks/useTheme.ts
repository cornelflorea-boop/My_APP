/**
 * Custom hook to access design system tokens
 */

import {
  colors,
  colorAliases,
  typography,
  textStyles,
  spacing,
  radius,
  shadows,
} from "../theme";

export function useTheme() {
  return {
    colors,
    colorAliases,
    typography,
    textStyles,
    spacing,
    radius,
    shadows,
  };
}

/**
 * Hook to access color tokens specifically
 */
export function useColors() {
  return colors;
}

/**
 * Hook to access typography tokens
 */
export function useTypography() {
  return typography;
}
