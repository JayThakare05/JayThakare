export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#050505",
          light: "#0A0A0A",
          lighter: "#111111",
        },
        cobalt: {
          DEFAULT: "#0A2472",
          electric: "#1A53C0",
          light: "#2264E5",
          dark: "#05133D",
          navy: "#0A2472",
        },
        "silver-light": "#E5E5E5",
        "silver-base": "#C0C0C0",
        "silver-dark": "#A9A9A9",
        "silver-muted": "#737373",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'cobalt-gradient': 'linear-gradient(135deg, #0A2472 0%, #1A53C0 100%)',
      },
      boxShadow: {
        'cobalt-glow': '0 0 20px rgba(26, 83, 192, 0.5)',
        'cobalt-glow-lg': '0 0 35px rgba(26, 83, 192, 0.75)',
      }
    },
  },
  plugins: [],
}