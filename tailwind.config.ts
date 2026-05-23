import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1020",
        foreground: "#F8FAFC",
        card: "#121A2B",
        primary: "#2563EB",
        secondary: "#1E293B",
        success: "#16A34A",
        danger: "#DC2626",
        muted: "#94A3B8",
      },
    },
  },
  plugins: [],
};

export default config;
