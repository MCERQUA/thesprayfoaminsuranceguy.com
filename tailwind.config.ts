import type { Config } from "tailwindcss";

/* ============================================================
   THE SPRAY FOAM INSURANCE GUY — Bold Personal Brand
   Token NAMES inherited from shared component architecture;
   VALUES remapped to orange (primary) / charcoal (body) / white.
   clay = #ff5a00 orange · sage = #1a1a1a charcoal · gold = #ff7a30
   cream = #ffffff · sand = #f5f5f5
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch: Bold Personal Brand — #ff5a00 orange, #1a1a1a charcoal, Plus Jakarta Sans
        cream: "#ffffff",
        sand: "#f5f5f5",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#ff5a00",
          dark: "#e65100",
          light: "#ff7a30",
          50: "#fff3ee",
          100: "#ffe4d0",
          200: "#ffcca3",
          300: "#ffa870",
          400: "#ff7a30",
          500: "#ff5a00",
          600: "#e65100",
          700: "#cc4700",
          800: "#a83b00",
          900: "#7a2b00",
        },
        sage: {
          DEFAULT: "#1a1a1a",
          dark: "#0a0a0a",
          light: "#262626",
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#c8c8c8",
          300: "#888888",
          400: "#555555",
          500: "#333333",
          600: "#1a1a1a",
          700: "#0a0a0a",
        },
        gold: {
          DEFAULT: "#ff7a30",
          dark: "#e65100",
          light: "#ff9a60",
          50: "#fff5f0",
          100: "#ffe8d8",
          200: "#ffcfad",
          300: "#ffae7a",
          400: "#ff9a60",
          500: "#ff7a30",
          600: "#e65100",
        },
        espresso: "#0a0a0a",
        cocoa: "#1a1a1a",
        mocha: "#888888",
        adobe: "#e8e8e8",
        adobeDark: "#c8c8c8",
      },
      fontFamily: {
        headline: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        label: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        // legacy aliases kept for compatibility
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #fff3ee 70%, #ffffff 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,90,0,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,90,0,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #ff5a00 0%, #ff7a30 100%)",
        "sage-gradient": "linear-gradient(135deg, #1a1a1a 0%, #262626 100%)",
        "gold-gradient": "linear-gradient(135deg, #ff7a30 0%, #ff9a60 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(255, 90, 0, 0.35), 0 4px 12px -6px rgba(0, 0, 0, 0.12)",
        "warm-lg": "0 30px 70px -20px rgba(255, 90, 0, 0.40), 0 10px 30px -10px rgba(0, 0, 0, 0.15)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 1px 3px -1px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 20px 50px -15px rgba(255, 90, 0, 0.28), 0 8px 20px -8px rgba(0, 0, 0, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(255, 90, 0, 0.12)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
