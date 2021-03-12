module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: [
      './content/**/*.md',
      './views/**/*.ejs',
    ],
  } ,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
