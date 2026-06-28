/**
 * Lingua App Design System
 * Central export for all design tokens
 */

export { colors, colorAliases } from "./colors";
export { typography, textStyles } from "./typography";
export { spacing, spacingAliases, paddingSizes, gapSizes } from "./spacing";
export { radius, radiusAliases } from "./radius";
export { shadows, shadowAliases } from "./shadows";

// Re-export everything as a single theme object for convenience
export const designSystem = {
  colors: require("./colors").colors,
  colorAliases: require("./colors").colorAliases,
  typography: require("./typography").typography,
  textStyles: require("./typography").textStyles,
  spacing: require("./spacing").spacing,
  spacingAliases: require("./spacing").spacingAliases,
  paddingSizes: require("./spacing").paddingSizes,
  gapSizes: require("./spacing").gapSizes,
  radius: require("./radius").radius,
  radiusAliases: require("./radius").radiusAliases,
  shadows: require("./shadows").shadows,
  shadowAliases: require("./shadows").shadowAliases,
};
