export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        saffron: "#c45616",
        gold: "#d5a73b",
        cream: "#fff7e8",
        leaf: "#1f3d2f",
        wood: "#5b331e",
        coal: "#120e0a",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(213, 167, 59, 0.28)",
        glass: "0 20px 70px rgba(10, 8, 5, 0.24)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
