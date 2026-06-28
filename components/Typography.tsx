/**
 * Typography Components
 * Pre-styled text components matching design system
 */

import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-large"
  | "body-medium"
  | "body-small"
  | "caption";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  children: ReactNode;
}

export function Typography({
  variant = "body-medium",
  children,
  ...props
}: TypographyProps) {
  const classNameMap: Record<TypographyVariant, string> = {
    h1: "heading-1",
    h2: "heading-2",
    h3: "heading-3",
    h4: "heading-4",
    "body-large": "body-large",
    "body-medium": "body-medium",
    "body-small": "body-small",
    caption: "caption",
  };

  return (
    <Text className={classNameMap[variant]} {...props}>
      {children}
    </Text>
  );
}

// Convenience exports
export const H1 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h1" {...props} />
);
export const H2 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h2" {...props} />
);
export const H3 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h3" {...props} />
);
export const H4 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h4" {...props} />
);
export const BodyLarge = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-large" {...props} />
);
export const BodyMedium = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-medium" {...props} />
);
export const BodySmall = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-small" {...props} />
);
export const Caption = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="caption" {...props} />
);
