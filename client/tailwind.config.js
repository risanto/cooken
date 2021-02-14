module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  important: true,
  theme: {
    fontFamily: {
      'serif': ['Libre Baskerville', 'ui-serif', 'Georgia'],
      'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    borderRadius: {
      lg: '0.75rem',
      xl: '1.25rem',
      '2xl': '2.5rem'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'indigo-10': '#fafaff',
      'pink-10': '#fffafa',
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30%': '30%',
      '50%': '50%',
      '16': '4rem',
    },
    screens: {
      'below-sm-500': { 'max': '499px' },
      'sm-500': '500px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
