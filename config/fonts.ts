/**
 * Font Loading Configuration
 * Manages font assets for the Lingua app
 */

import * as Font from "expo-font";

// Define font assets
const fontAssets = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
};

/**
 * Load all fonts used in the app
 * Call this during app initialization
 */
export async function loadFonts() {
  try {
    await Font.loadAsync(fontAssets);
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
}

/**
 * Font family aliases for easy reference.
 * In React Native, font weight is set via fontFamily, not fontWeight.
 * Always use these instead of fontWeight: 'bold' etc.
 */
export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

/**
 * Pre-built text style objects for each typography token.
 * Use these in the `style` prop alongside NativeWind className for color/spacing.
 *
 * Example:
 *   <Text style={textStyle.h1} className="text-lingua-purple">Hello</Text>
 */
export const textStyle = {
  h1: { fontSize: 32, fontFamily: fontFamily.bold, lineHeight: 38 },
  h2: { fontSize: 24, fontFamily: fontFamily.semibold, lineHeight: 31 },
  h3: { fontSize: 20, fontFamily: fontFamily.semibold, lineHeight: 26 },
  h4: { fontSize: 16, fontFamily: fontFamily.medium, lineHeight: 22 },
  bodyLarge: { fontSize: 16, fontFamily: fontFamily.regular, lineHeight: 26 },
  bodyMedium: { fontSize: 14, fontFamily: fontFamily.regular, lineHeight: 22 },
  bodySmall: { fontSize: 13, fontFamily: fontFamily.regular, lineHeight: 21 },
  caption: { fontSize: 11, fontFamily: fontFamily.regular, lineHeight: 15 },
} as const;
