/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "lingua-purple": "#6C4EF5",
        "lingua-deep-purple": "#5B3BF6",
        "lingua-blue": "#4D8BFF",
        "lingua-green": "#21C16B",

        // Semantic Colors
        success: "#21C16B",
        warning: "#FFC800",
        streak: "#FF8A00",
        error: "#FF4D4F",
        info: "#4D88FF",

        // Neutral Colors
        "text-primary": "#0D132B",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",
        surface: "#F6F7FB",
        background: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins-Regular"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-bold": ["Poppins-Bold"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["16px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-large": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-medium": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-small": ["13px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["11px", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
