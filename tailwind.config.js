export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gta: {
          pink: '#FF6EC7',
          purple: '#A855F7',
          orange: '#FF8C42',
          cyan: '#00E5FF',
          dark: '#0A0A0A',
          darker: '#050505',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 20px rgba(255, 110, 199, 0.5)' },
          '100%': { textShadow: '0 0 40px rgba(255, 110, 199, 1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
}
