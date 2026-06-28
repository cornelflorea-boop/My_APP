/**
 * Design System Demo Page
 * Showcases all design tokens, components, and patterns
 */

import { ScrollView, View, Text } from "react-native";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { H1, H2, H3, BodyMedium, Caption } from "../components/Typography";
import { colors, spacing } from "../theme";

export default function DesignSystemDemo() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View style={{ padding: spacing.lg }}>
        {/* Header */}
        <H1>Design System</H1>
        <BodyMedium style={{ marginTop: spacing.sm, color: colors.neutral.textSecondary }}>
          Lingua App - Complete design tokens and components
        </BodyMedium>

        {/* Colors Section */}
        <H2 style={{ marginTop: spacing.xl }}>Colors</H2>

        {/* Primary Colors */}
        <H3 style={{ marginTop: spacing.md }}>Primary</H3>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing.md }}>
          {[
            { name: "Purple", color: colors.primary.purple },
            { name: "Deep Purple", color: colors.primary.deepPurple },
            { name: "Blue", color: colors.primary.blue },
            { name: "Green", color: colors.primary.green },
          ].map((item) => (
            <View key={item.name} style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: item.color,
                  borderRadius: 8,
                  marginBottom: spacing.sm,
                }}
              />
              <Caption>{item.name}</Caption>
            </View>
          ))}
        </View>

        {/* Semantic Colors */}
        <H3 style={{ marginTop: spacing.md }}>Semantic</H3>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing.md }}>
          {[
            { name: "Success", color: colors.semantic.success },
            { name: "Warning", color: colors.semantic.warning },
            { name: "Streak", color: colors.semantic.streak },
            { name: "Error", color: colors.semantic.error },
            { name: "Info", color: colors.semantic.info },
          ].map((item) => (
            <View key={item.name} style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: item.color,
                  borderRadius: 8,
                  marginBottom: spacing.sm,
                }}
              />
              <Caption>{item.name}</Caption>
            </View>
          ))}
        </View>

        {/* Typography Section */}
        <H2 style={{ marginTop: spacing.xl }}>Typography</H2>
        <Card style={{ marginTop: spacing.md }}>
          <H1>Heading 1 (32px, Bold)</H1>
          <H2 style={{ marginTop: spacing.md }}>Heading 2 (24px, SemiBold)</H2>
          <H3 style={{ marginTop: spacing.md }}>Heading 3 (20px, SemiBold)</H3>
          <H3 style={{ marginTop: spacing.md }}>Heading 4 (16px, Medium)</H3>
          <BodyMedium style={{ marginTop: spacing.md }}>Body Medium (14px) - Main body text</BodyMedium>
          <Caption style={{ marginTop: spacing.md }}>Caption (11px) - Labels and meta text</Caption>
        </Card>

        {/* Buttons Section */}
        <H2 style={{ marginTop: spacing.xl }}>Buttons</H2>
        <View style={{ gap: spacing.md, marginTop: spacing.md }}>
          <Button label="Primary Button" variant="primary" />
          <Button label="Secondary Button" variant="secondary" />
          <Button label="Success Button" variant="success" />
          <Button label="Error Button" variant="error" />
          <Button label="Warning Button" variant="warning" />
          <Button label="Disabled Button" disabled />
        </View>

        {/* Cards Section */}
        <H2 style={{ marginTop: spacing.xl }}>Cards</H2>
        <Card style={{ marginTop: spacing.md }}>
          <H3>Card Title</H3>
          <BodyMedium style={{ marginTop: spacing.sm }}>
            This is a card component with the design system styling applied.
          </BodyMedium>
        </Card>

        {/* Badges Section */}
        <H2 style={{ marginTop: spacing.xl }}>Badges</H2>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing.md, marginTop: spacing.md }}>
          {[
            { name: "Success", className: "badge-success" },
            { name: "Warning", className: "badge-warning" },
            { name: "Error", className: "badge-error" },
            { name: "Info", className: "badge-info" },
          ].map((item) => (
            <View key={item.name} className={item.className}>
              <Text className="caption">{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Spacing Section */}
        <H2 style={{ marginTop: spacing.xl }}>Spacing Grid</H2>
        <Card style={{ marginTop: spacing.md }}>
          {[
            { label: "xs (4px)", size: spacing.xs },
            { label: "sm (8px)", size: spacing.sm },
            { label: "md (12px)", size: spacing.md },
            { label: "lg (16px)", size: spacing.lg },
            { label: "xl (24px)", size: spacing.xl },
          ].map((item) => (
            <View key={item.label} style={{ marginBottom: spacing.md }}>
              <Caption>{item.label}</Caption>
              <View
                style={{
                  height: item.size,
                  backgroundColor: colors.primary.purple,
                  borderRadius: 4,
                  marginTop: spacing.xs,
                }}
              />
            </View>
          ))}
        </Card>

        {/* Footer Spacing */}
        <View style={{ height: spacing.xl }} />
      </View>
    </ScrollView>
  );
}
