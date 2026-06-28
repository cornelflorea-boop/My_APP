# Lingua Design System

## Overview

The Lingua app uses a comprehensive design system built on **NativeWind (Tailwind CSS)** with custom design tokens organized in the `theme/` folder. All styling follows the Poppins font family and a carefully curated color palette.

## Directory Structure

```
theme/
├── colors.ts          # Color tokens (primary, semantic, neutral)
├── typography.ts      # Font sizes, weights, and text styles
├── spacing.ts         # Spacing/gap values (8px grid system)
├── radius.ts          # Border radius tokens
├── shadows.ts         # Shadow definitions
└── index.ts          # Central export

config/
└── fonts.ts          # Font loading configuration

hooks/
└── useTheme.ts       # Custom hooks for accessing tokens

globals.css           # Global styles, utilities, and font imports
tailwind.config.js    # Tailwind configuration with theme extensions
```

## Color Palette

### Primary Colors
- **Lingua Purple**: `#6C4EF5` - Primary action color
- **Lingua Deep Purple**: `#5B3BF6` - Active/hover state
- **Lingua Blue**: `#4D8BFF` - Secondary action
- **Lingua Green**: `#21C16B` - Success/positive

### Semantic Colors
- **Success**: `#21C16B` - Positive actions/confirmations
- **Warning**: `#FFC800` - Alerts that need attention
- **Streak**: `#FF8A00` - Streak/consecutive indicators
- **Error**: `#FF4D4F` - Errors/destructive actions
- **Info**: `#4D88FF` - Informational messages

### Neutral Colors
- **Text Primary**: `#0D132B` - Main text color
- **Text Secondary**: `#6B7280` - Muted/secondary text
- **Border**: `#E5E7EB` - Border/divider color
- **Surface**: `#F6F7FB` - Secondary background
- **Background**: `#FFFFFF` - Primary background

## Typography

All text uses the **Poppins** font family (modern, geometric sans-serif).

### Heading Styles
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 32px | Bold (700) | 1.2 | Page/Screen Title |
| H2 | 24px | SemiBold (600) | 1.3 | Section Title |
| H3 | 20px | SemiBold (600) | 1.3 | Card/Module Title |
| H4 | 16px | Medium (500) | 1.4 | Subheading |

### Body Text
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Body Large | 16px | Regular (400) | 1.6 | Important content |
| Body Medium | 14px | Regular (400) | 1.6 | Body text |
| Body Small | 13px | Regular (400) | 1.6 | Supporting text |
| Caption | 11px | Regular (400) | 1.4 | Labels, meta text |

## Spacing System

Based on an **8px grid system**:
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 24px
- **2xl**: 32px
- **3xl**: 48px
- **4xl**: 64px

## Border Radius

- **none**: 0px
- **sm**: 4px
- **md**: 8px
- **lg**: 12px
- **xl**: 16px
- **full**: 9999px (circle)

## Shadows

| Level | Shadow |
|-------|--------|
| sm | Subtle elevation |
| md | Default elevation |
| lg | Elevated elevation |
| xl | Prominent elevation |
| 2xl | Dramatic elevation |

## Usage Guide

### In CSS/Tailwind

Use design tokens directly in Tailwind classes:

```css
<View className="bg-lingua-purple text-white rounded-lg p-4 shadow-lg">
  <Text className="text-h1">Hello</Text>
</View>
```

### In TypeScript/React

Import tokens for dynamic styling or component configuration:

```typescript
import { colors, typography, spacing } from "../theme";
import { useTheme } from "../hooks/useTheme";

// Direct import
function MyComponent() {
  return (
    <View style={{ backgroundColor: colors.primary.purple, padding: spacing.lg }}>
      <Text style={{ ...typography.h1 }}>Title</Text>
    </View>
  );
}

// Using the hook
function AnotherComponent() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.primary.blue }}>
      <Text>Content</Text>
    </View>
  );
}
```

### Component Utilities

Pre-built component utilities are available in `globals.css`:

**Buttons:**
```jsx
<Pressable className="btn-primary">Primary Button</Pressable>
<Pressable className="btn-secondary">Secondary Button</Pressable>
<Pressable className="btn-success">Success Button</Pressable>
<Pressable className="btn-error">Error Button</Pressable>
```

**Typography:**
```jsx
<Text className="heading-1">Heading 1</Text>
<Text className="heading-2">Heading 2</Text>
<Text className="body-large">Body Large</Text>
<Text className="caption">Caption Text</Text>
```

**Cards:**
```jsx
<View className="card">
  <Text className="heading-3">Card Title</Text>
  <Text className="body-medium">Card content</Text>
</View>
```

**Forms:**
```jsx
<TextInput className="input-base" placeholder="Enter text..." />
```

**Badges:**
```jsx
<View className="badge-success">
  <Text className="caption">Success</Text>
</View>
```

## Font Loading

Fonts are loaded via Expo Font in the root layout. The `loadFonts()` function should be called during app initialization:

```typescript
import { loadFonts } from "../config/fonts";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(async () => {
    await loadFonts();
  });

  if (!fontsLoaded) return null;

  return <Stack />;
}
```

## Adding New Tokens

1. Add the token to the appropriate file in `theme/`:
   - Colors → `theme/colors.ts`
   - Typography → `theme/typography.ts`
   - Spacing → `theme/spacing.ts`
   - Radius → `theme/radius.ts`
   - Shadows → `theme/shadows.ts`

2. Export from `theme/index.ts`

3. Update `tailwind.config.js` if adding Tailwind-specific tokens

4. Add component utilities in `globals.css` if creating reusable component styles

## Tailwind Configuration

The project uses Tailwind v3 with custom theme extensions in `tailwind.config.js`. All design tokens are automatically available as Tailwind classes:

- Colors: `bg-lingua-purple`, `text-success`, `border-border`, etc.
- Font sizes: `text-h1`, `text-body-large`, etc.
- Typography: `font-poppins`

## Best Practices

1. **Use semantic color names** when possible (success, error, warning) rather than color names
2. **Stick to the spacing grid** - avoid arbitrary spacing values
3. **Leverage component utilities** in `globals.css` for consistency
4. **Use hooks** (`useTheme`, `useColors`) when accessing tokens in JavaScript
5. **Keep custom styles minimal** - use Tailwind classes first
6. **Document new patterns** in this file when adding to the design system
