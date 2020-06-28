module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    //! anything here overrides tailwinds defaults //
    colors: {
      black: "#232323",
      "dark-black": "#000000",
      white: "#efefef",
      "light-teal": "#11d3cf",
      teal: "#0ea9a6",
      "dark-teal": "#0a7f7c",
      red: "#f70000",
      "dark-red": "#c60000",
      purple: "#633294",
      "light-purple": "#9d50e9",
      "dark-purple": "#340f57",
    },
    fontFamily: {
      sans: "'Roboto', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      //! anything here extends tailwind defaults //
      backgroundColor: {
        "bg-gradient": "linear-gradient(to right, #340f57 0%, #633294 100%)",
      },
      boxShadow: {
        outline: "0 0 0 3px #340f57",
      },
      height: {
        96: "24rem",
        100: "25rem",
        125: "32rem",
        180: "45rem",
      },
      width: {
        80: "20rem",
        100: "25rem",
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
