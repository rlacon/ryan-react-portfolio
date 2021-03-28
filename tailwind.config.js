module.exports = {
  important: true,
  plugins: [
    require('tailwindcss-gradients')
  ],
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      '100': '100px'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    height: {
      'h-half-screen': '50vh'
    },
    container: {
      center: true,
    },
    maxWidth: {
      '12xl': '120rem'
    },
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      display: ['Lato', 'sans-serif']
    },
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
    },
    extend: {
      fontSize: {
        'mega': '10rem'
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      colors: {
        'red': '#f00',
        'blue': '#00f',
        cyan: '#9cdbff',
        blue100: '#ebf8ff',
        blue200: '#bee3f8',
        blue300: '#90cdf4',
        blue400: '#63b3ed',
        blue500: '#4299e1',
        blue600: '#3182ce',
        blue700: '#2b6cb0',
        blue800: '#2c5282',
        blue900: '#2a4365'
      },
      linearGradientDirections: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      linearGradientColors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-burst': ['#667eea', '#764ba2'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
      radialGradientShapes: { // defaults to this value
        'default': 'ellipse',
      },
      radialGradientSizes: { // defaults to this value
        'default': 'closest-side',
      },
      radialGradientPositions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      radialGradientColors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-burst': ['#667eea', '#764ba2'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
      conicGradientStartingAngles: { // defaults to this value
        'default': '0',
      },
      conicGradientPositions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      conicGradientColors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-burst': ['#667eea', '#764ba2'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'checkerboard': ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
      },
      repeatingLinearGradientDirections: theme => theme('linearGradientDirections'), // defaults to this value
      repeatingLinearGradientColors: theme => theme('linearGradientColors'), // defaults to {}
      repeatingLinearGradientLengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
      repeatingRadialGradientShapes: theme => theme('radialGradientShapes'), // defaults to this value
      repeatingRadialGradientSizes: { // defaults to this value
        'default': 'farthest-corner',
      },
      repeatingRadialGradientPositions: theme => theme('radialGradientPositions'), // defaults to this value
      repeatingRadialGradientColors: theme => theme('radialGradientColors'), // defaults to {}
      repeatingRadialGradientLengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
      repeatingConicGradientStartingAngles: theme => theme('conicGradientStartingAngles'), // defaults to this value
      repeatingConicGradientPositions: theme => theme('conicGradientPositions'), // defaults to this value
      repeatingConicGradientColors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'starburst': ['white 0 5deg', 'blue 5deg'],
        'blue-burst': ['#667eea', '#764ba2']
      },
      repeatingConicGradientLengths: { // defaults to {}
        'sm': '10deg',
        'md': '20deg',
        'lg': '40deg',
      },

      variants: { // all the following default to ['responsive']
        backgroundImage: ['responsive'], // this is for the "bg-none" utility
        linearGradients: ['responsive'],
        radialGradients: ['responsive'],
        conicGradients: ['responsive'],
        repeatingLinearGradients: ['responsive'],
        repeatingRadialGradients: ['responsive'],
        repeatingConicGradients: ['responsive'],
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}