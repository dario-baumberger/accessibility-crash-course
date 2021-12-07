module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./content/**/*.md", "./views/**/*.ejs"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
