let defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {
      'transparent': 'transparent',
    
      'black': '#22292f',
      'white': '#FFFFFF',
    
      'ake': '#BC002D',
      'sakura': '#EEBFCA',
      'sakura-lite': '#FCF5F6',
      
      'midnight': '#282828',
      'steel': '#C8C8C8',
      'steel-lite': '#E8E8E8'
    },
    fontFamily: {
      sans: [
        'Noto Sans JP',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },
    letterSpacing: {
      'tighter': '-0.05em',
      'tight': '-0.025em',
      'normal': '0',
      'wide': '0.05em',
    },
  },
  variants: {},
  plugins: []
}
