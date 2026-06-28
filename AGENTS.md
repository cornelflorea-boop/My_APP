# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

## NativeWind v5 Setup for Expo 54

This project uses **Expo SDK 54** with **NativeWind v4.2.6**. Follow these steps when setting up or updating NativeWind:

### 1. Install NativeWind
```bash
npm install nativewind
```

### 2. Configuration Files Required

Create these configuration files in the project root:

#### **tailwind.config.js**
```javascript
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### **globals.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### **babel.config.js**
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

#### **nativewind.d.ts**
```typescript
import "nativewind";
declare module "nativewind" {
  interface NativeWindStyleSheet {}
}
```

### 3. TypeScript Configuration

Update **tsconfig.json** compiler options:
```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "jsxImportSource": "nativewind"
  }
}
```

### 4. Install babel-preset-expo as DevDependency

**CRITICAL: This step is required for Expo 54.**

`babel-preset-expo` is NOT hoisted to root `node_modules` by default. It must be installed explicitly:
```bash
npm install --save-dev babel-preset-expo@54.0.11
```

Without this, you'll get: `Error: Cannot find module 'babel-preset-expo'`

### 5. Update package.json

Ensure package.json has:
```json
{
  "type": "commonjs",
  "devDependencies": {
    "babel-preset-expo": "^54.0.11"
  }
}
```

### 6. Update App Entry Point

Add to **app/_layout.tsx**:
```typescript
import "../globals.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
```

### 7. Metro Config

**DO NOT use metro.config.js with `withNativeWind()` on Windows.** It causes ESM loader errors. NativeWind works through Babel transformation without the Metro wrapper.

### 8. Usage

Now you can use Tailwind classes in React Native components:
```typescript
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center bg-white"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text className="text-blue-500" style={{ fontSize: 18, fontFamily: "Poppins-Bold" }}>
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

### Key Points for Expo 54

- Phone/emulator must run **Expo SDK 54** to match the installed version
- `babel-preset-expo` MUST be a direct devDependency (not just transitive)
- Set `"type": "commonjs"` in package.json to avoid Windows ESM issues
- Do not use metro.config.js wrapper on Windows
- After any config change (tailwind.config.js, globals.css, babel.config.js) always run `npx expo start --clear` to purge the Babel cache

### ⚠️ Known Limitations & Gotchas (learned from real usage)

#### 1. Custom fonts: `font-bold` does NOT work
`font-bold` and `font-semibold` only set `fontWeight` — they do **not** switch to the bold font file. In React Native, font weight is controlled via `fontFamily`, not `fontWeight`.

**Wrong:**
```tsx
<Text className="font-bold">Bold text</Text>
```

**Correct:**
```tsx
<Text style={{ fontFamily: "Poppins-Bold" }}>Bold text</Text>
```

Font weight → font family mapping:
| Weight | fontFamily value |
|--------|-----------------|
| Regular | `"Poppins-Regular"` |
| Medium | `"Poppins-Medium"` |
| SemiBold | `"Poppins-SemiBold"` |
| Bold | `"Poppins-Bold"` |

#### 2. Layout classes need inline style backup
`flex-1 justify-center items-center` in `className` may not resolve reliably. Always back critical layout with inline `style`:
```tsx
<View
  className="flex-1 justify-center items-center"
  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
>
```

#### 3. `globals.css`: never use `*` or `body` selectors
These selectors do not exist in React Native and **break the entire NativeWind CSS compilation**, causing all classes to silently stop working:
```css
/* ❌ BREAKS EVERYTHING — do not use */
@layer base {
  * { @apply font-poppins; }
  body { @apply bg-white; }
}
```

#### 4. `globals.css`: avoid CSS-only utilities in `@apply`
The following Tailwind utilities are CSS-only and cause silent failures in NativeWind when used inside `@apply`:
- `transition-*`, `duration-*` (CSS animations)
- `focus:*`, `hover:*` (CSS pseudo-selectors)
- `inline-flex` (CSS display value; use `flex` instead)
- `outline-none` (CSS outline)

#### 5. `fontFamily` in tailwind.config.js must be per-weight
```js
// ❌ Wrong — array of multiple fonts
fontFamily: { poppins: ["Poppins-Regular", "Poppins-Bold"] }

// ✅ Correct — one entry per weight
fontFamily: {
  poppins: ["Poppins-Regular"],
  "poppins-medium": ["Poppins-Medium"],
  "poppins-semibold": ["Poppins-SemiBold"],
  "poppins-bold": ["Poppins-Bold"],
}
```

#### 6. Typography pattern: `className` for color/spacing, `style` for font
NativeWind handles colors, spacing, and layout via `className`. Font size and font family must use the `style` prop for reliable rendering:
```tsx
<Text
  className="text-lingua-purple text-center mt-4"
  style={{ fontSize: 32, fontFamily: "Poppins-Bold" }}
>
  Heading
</Text>
```

#### 7. "All Tailwind v3 features work" is NOT true for React Native
Only layout, color, spacing, and border utilities are fully supported. CSS-specific features (animations, pseudo-selectors, `display: inline-flex`, etc.) are ignored or cause errors.
