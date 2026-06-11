/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sea blue accents
        sea: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Warm sand tones
        sand: {
          50: '#fdfaf3',
          100: '#faf3e3',
          200: '#f5e6c8',
          300: '#ecd6a4',
          400: '#e0bf78',
          500: '#d4a850',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Baloo 2"', '"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(2, 132, 199, 0.18)',
        nav: '0 -4px 20px -6px rgba(15, 23, 42, 0.12)',
        soft: '0 10px 40px -12px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}
