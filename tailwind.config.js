module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    fontFamily: {
      main: ["Montserrat"],
      title: ["Oswald"],
      subtitle: ["Roboto"],
    },
    container: {
      padding: "20px",
      center: true,
      maxWidth: "1240px",
    },
    extend: {
      colors: {
        textMain: "#434242",
        textNote: "#635D5D",
        secodaryText: "#961914",
        mainBg: "#E5E5E5",
        secondaryBG: "#EAD1D0",
      },
    },
  },
  plugins: [],
};
