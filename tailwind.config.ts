import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#090B1A",
        midnight: "#0F172A",
        purple: "#5B3FD6",
        indigo: "#2E1F66",
        cyanGlow: "#67E8F9",
        lavenderGlow: "#C084FC",
        goldGlow: "#F8D27A",
        silver: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(103,232,249,.25)",
        purpleGlow: "0 0 55px rgba(192,132,252,.25)",
        goldGlow: "0 0 35px rgba(248,210,122,.22)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shooting: {
          "0%": {
            transform: "translateX(-120px) translateY(-80px)",
            opacity: "0",
          },
          "15%": { opacity: "1" },
          "100%": {
            transform: "translateX(900px) translateY(420px)",
            opacity: "0",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 12s ease infinite",
        spinSlow: "spinSlow 22s linear infinite",
        shooting: "shooting 7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
