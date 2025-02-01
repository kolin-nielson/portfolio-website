// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Enable dark mode via a class
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // A professional indigo (equivalent to indigo-600)
        backgroundLight: "#F9FAFB", // A very light gray for backgrounds (if needed)
        backgroundDark: "#1F2937", // A dark, professional gray for dark mode (if needed)
      },
    },
  },
  plugins: [],
}
