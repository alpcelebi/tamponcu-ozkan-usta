/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#090d16',
          surface: '#0f172a',
          card: '#182234',
          cardHover: '#1e2d45',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          DEFAULT: '#FFD369',
          hover: '#fbbf24',
          muted: 'rgba(255, 211, 105, 0.15)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20ba59',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(255, 211, 105, 0.3)',
        'glow-whatsapp': '0 0 25px -5px rgba(37, 211, 102, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
