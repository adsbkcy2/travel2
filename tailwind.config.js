/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0078c8',
        secondary: '#ff8a00',
        accent: '#00a896',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
