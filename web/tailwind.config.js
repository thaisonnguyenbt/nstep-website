module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-primary': '#0d0f18',
        'red-primary': '#d31a2e',
        'dark-primary': '#0D0F18',
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
        lato: ['"Lato"'],
      },
      fontSize: {
        h1: '3.5rem',
        h2: '2.25rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '.875rem',
        h6: '.75rem',
        6: '1.5rem',
        9: '2.25rem',
        10: '2.5rem',
        14: '3.5rem',
      },
      letterSpacing: {
        2: '0.125rem',
      },
      lineHeight: {
        'normal-12': 1.2,
      },
      inset: {
        '-container-sm': 'calc((45rem - 100vw) / 2)',
        '-container-md': 'calc((51rem - 100vw) / 2)',
        '-container-lg': 'calc((64rem - 100vw) / 2)',
        '-container-xl': 'calc((76rem - 100vw) / 2)',
        '-container-2xl': 'calc((86rem - 100vw) / 2)',
      },
      opacity: { 56: '0.56' },
      textOpacity: { 56: '0.56', 72: '0.72' },
      backgroundImage: {
        'image-logo': "url('/images/logo.png')",
        'image-footer-black': "url('/images/footer-black-bg.jpg')",
        'image-footer-black-mobile':
          "url('/images/footer-black-mobile-bg.jpg')",
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
      spacing: {
        '1/2-vw': 'calc(100vw / 2)',
        '3/5-vw': 'calc(100vw * 0.625)',
        'full-w-p': 'calc(100vw - 4rem)',
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
