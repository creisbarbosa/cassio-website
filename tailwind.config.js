const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        cyan: "#0054FF",
        yellow: "#FF9600",

      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'pulse-slow': 'pulse 60s infinite',
      },

      fontFamily: {
        sans: ['var(--font-poly)', ...fontFamily.sans],
      },

    },
  },
  plugins: [],
}
