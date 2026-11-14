/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        strava: {
          orange: '#FC5200',
          'orange-hover': '#E04900',
          bg: '#151611',
          surface: '#22231E',
          'surface-highlight': '#2E302A',
          card: '#1C1D18',
          'card-banner': '#262722',
          'text-primary': '#FFFFFF',
          'text-secondary': '#8C8E8B',
          'text-tertiary': '#656763',
          border: '#282924',
          gold: '#EBB604',
          silver: '#B4B8BC',
          bronze: '#CD7F32',
          'badge-green': '#1D3320',
          'badge-green-text': '#5EE07A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        'safe-top': 'env(safe-area-inset-top, 0px)',
        'safe-bottom': 'env(safe-area-inset-bottom, 0px)',
      },
    },
  },
  plugins: [],
};
