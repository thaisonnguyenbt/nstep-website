module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'color-mod-function': { unresolved: 'warn' },
        'nesting-rules': true,
        'custom-media-queries': {
          preserve: false,
        },
        'custom-properties': {
          preserve: false,
        },
      },
    }),
  ],
});
