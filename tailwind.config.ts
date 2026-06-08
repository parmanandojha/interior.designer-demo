import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EDE9E0",
        off: "#E2DDD2",
        ink: "#1A1813",
        coal: "#14120E",
        rust: "#A85C3C", // accent — warm clay / terracotta
        mute: "#756F63",
        line: "#1A1813"
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "Helvetica", "Arial", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      }
    }
  },
  plugins: []
};
export default config;
