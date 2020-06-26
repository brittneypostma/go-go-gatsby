module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    //! anything here overrides tailwinds defaults //
    fontFamily: {
      sans: "'Roboto', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    colors: {
      black: " #232323",
      white: "#efefef",
      purple: "#633294",
      "light-purple": "#9d50e9",
      "dark-purple": "#340f57",
    },
    extend: {
      //! anything here extends tailwind defaults //
      backgroundColor: {
        "bg-gradient": "linear-gradient(to right, #340f57 0%, #633294 100%)",
      },
      maxWidth: {
        max: "64rem",
      },
    },
  },
  variants: {
    //! add in variants that don't come in by default //
    //! order is important //
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
