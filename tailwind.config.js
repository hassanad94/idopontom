/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      backgroundImage: {
        googleDowloadIcon: "url('/img/icons/google-play-badge.svg')",
        apppleDownloadIcon: "url('/img/icons/app-store-badge.svg')",
      },
    },
  },
  plugins: [],
};
