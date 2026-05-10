/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111815',
        mist: '#f7faf8',
        paper: '#ffffff',
        line: '#dfe7e2',
        accent: '#00a676',
        ocean: '#1f7aec',
        blush: '#ff7a59',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 21, 0.08)',
        phone: '0 28px 80px rgba(17, 24, 21, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
