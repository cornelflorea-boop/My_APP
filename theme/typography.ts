/**
 * Typography Design Tokens for Lingua App
 * Font Family: Poppins (modern, geometric sans-serif)
 */

export const typography = {
  fontFamily: {
    primary: "Poppins",
  },

  // Heading Styles
  h1: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: 0,
    usage: "Page / Screen Title",
  },

  h2: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: 0,
    usage: "Section Title",
  },

  h3: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: 0,
    usage: "Card / Module Title",
  },

  h4: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: 0,
    usage: "Subheading",
  },

  // Body Styles
  bodyLarge: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: 0,
    usage: "Important content",
  },

  bodyMedium: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: 0,
    usage: "Body text",
  },

  bodySmall: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: 0,
    usage: "Supporting text",
  },

  // Caption Style
  caption: {
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: 0,
    usage: "Labels, meta text",
  },
} as const;

// Text style presets for quick access
export const textStyles = {
  heading1: {
    fontSize: typography.h1.fontSize,
    fontWeight: typography.h1.fontWeight,
    lineHeight: typography.h1.lineHeight,
  },
  heading2: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    lineHeight: typography.h2.lineHeight,
  },
  heading3: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    lineHeight: typography.h3.lineHeight,
  },
  heading4: {
    fontSize: typography.h4.fontSize,
    fontWeight: typography.h4.fontWeight,
    lineHeight: typography.h4.lineHeight,
  },
  bodyLarge: {
    fontSize: typography.bodyLarge.fontSize,
    fontWeight: typography.bodyLarge.fontWeight,
    lineHeight: typography.bodyLarge.lineHeight,
  },
  bodyMedium: {
    fontSize: typography.bodyMedium.fontSize,
    fontWeight: typography.bodyMedium.fontWeight,
    lineHeight: typography.bodyMedium.lineHeight,
  },
  bodySmall: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodySmall.fontWeight,
    lineHeight: typography.bodySmall.lineHeight,
  },
  caption: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    lineHeight: typography.caption.lineHeight,
  },
} as const;
