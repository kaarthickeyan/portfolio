module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5fbff',
          100: '#e6f7ff',
          500: '#7c3aed',
          600: '#5b21b6'
        },
        accent: {
          500: '#7dd3fc',
          600: '#06b6d4'
        }
      },
      backgroundImage: {
        'gradient-radial-primary': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15), transparent 30%)'
      }
    },
  },
  plugins: [],
}
