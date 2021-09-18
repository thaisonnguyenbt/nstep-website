module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        lato: ['"Lato"'],
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '.83rem',
        h6: '.67rem',
        14: '3.5rem',
        9: '2.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
