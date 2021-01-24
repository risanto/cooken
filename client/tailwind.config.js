module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui']
    },
    container: {
      center: true,
      padding: '2rem'
    },
    borderRadius: {
      lg: '0.75rem',
      xl: '1.25rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
