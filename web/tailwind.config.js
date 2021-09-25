module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-primary': '#0d0f18',
        'red-primary': '#d31a2e',
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
        lato: ['"Lato"'],
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '.875rem',
        h6: '.75rem',
        14: '3.5rem',
        9: '2.25rem',
      },
      letterSpacing: {
        2: '0.125rem',
      },
      lineHeight: {
        'normal-12': 1.2,
      },
      inset: {
        '-container-sm': 'calc((640px - 100vw) / 2)',
        '-container-md': 'calc((768px - 100vw) / 2)',
        '-container-lg': 'calc((1024px - 100vw) / 2)',
        '-container-xl': 'calc((1280px - 100vw) / 2)',
        '-container-2xl': 'calc((1536px - 100vw) / 2)',
      },
      opacity: { 56: '0.56' },
      textOpacity: { 56: '0.56', 72: '0.72' },
      backgroundImage: {
        'image-logo': "url('/images/logo.png')",
        'image-footer-black': "url('/images/footer-black-bg.jpg')",
        'red-gradient':
          'linear-gradient(88.09deg, #d31a2e 34.45%, #fb4e24 140.75%)',
      },
      minHeight: {
        2: '.5rem',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        11: '2.25rem',
        12: '3rem',
        14: '3.5rem',
      },
      boxShadow: {
        1: '0px 20px 40px rgba(0, 0, 0, 0.25)',
        'red-top-curl':
          '0px 10px 40px rgba(0, 0, 0, 0.05), inset 0px 4px 0px #d31a2e',
      },
    },
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
    },
  },
  plugins: [],
};
