const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /*
      {
        '0': '0',
        '1': 'calc(var(--gutter) * 1)',
        '2': 'calc(var(--gutter) * 2)',
        '3': 'calc(var(--gutter) * 3)',
        '4': 'calc(var(--gutter) * 4)',
        DEFAULT: 'calc(var(--gutter) * 1)',
        px: '1px'
      }
    */
    borderWidth: (() => {
      const borderWidth = Array.from({ length: 4 }).reduce((acc, _, i) => {
        const value = `calc(var(--gutter) * ${i + 1})`;
        acc[i + 1] = value;
        return acc;
      }, {});
      borderWidth["0"] = "0";
      borderWidth["DEFAULT"] = borderWidth[1];
      borderWidth["px"] = "1px";
      borderWidth["2px"] = "2px";
      borderWidth["3px"] = "3px";
      return borderWidth;
    })(),
    colors: {
      red: "#E43400",
      cyan: "#00A4E6",
      yellow: "#FAEA3E",
      orange: "#FFA935",
      "pale-green": "#A0DD87",
      blue: "#0048C1",
      violet: "#9F1994",
      "pale-blue": "#9BC8E5",
      lavender: "#E6ADFF",
      lilac: "#D9DDFF",
      "kelly-green": "#008000",
      brown: "#633800",
      teal: "#00848B",
      purple: "#592173",
      "bright-green": "#34DA62",
      black: "#000000",
      white: "#ffffff",
      gold: "#FFB416",
      gray: "#646464",
    },
    fontFamily: {
      narrow: ["nimbus-sans-condensed", "Arial Narrow", "sans-serif"],
      sans: ["nimbus-sans", "Arial", "sans-serif"],
      extended: ["nimbus-sans-extended", "Arial", "sans-serif"],
    },
    fontSize: (() => {
      const numberOfSmallSizes = 4;
      const numberOfLargeSizes = 4;
      const base = 1.25;
      const fontSizes = {};
      Array.from({ length: numberOfSmallSizes }).forEach((_, i) => {
        const key = -1 * (numberOfSmallSizes - i);
        const multiplier = Math.pow(
          base,
          -1 * (numberOfSmallSizes - i)
        ).toFixed(3);
        const fontSize = `calc(var(--base-font-size) * ${multiplier})`;
        fontSizes[key] = [fontSize, { lineHeight: 1.5 }];
      });
      Array.from({ length: numberOfLargeSizes + 1 }).forEach((_, i) => {
        const key = i;
        // const fontSize = `${Math.pow(base, i + 1).toFixed(3)}rem`;
        const multiplier = Math.pow(base, i).toFixed(3);
        const fontSize = `calc(var(--base-font-size) * ${multiplier})`;
        fontSizes[key] = [fontSize, { lineHeight: i > 0 ? 1 : 1.3 }];
      });
      fontSizes["DEFAULT"] = fontSizes[0];
      return fontSizes;
    })(),
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      half: "50%",
      third: "33.333333%",
      "two-thirds": "66.666667%",
      quarter: "25%",
      "three-quarters": "75%",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    keywordSizes: {
      sm: "20rem",
      md: "30rem",
      lg: "40rem",
      xl: "50rem",
    },
    maxWidth: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percentages"),
      ...theme("keywordSizes"),
    }),
    percentages: {
      half: "50%",
      third: "33.333333%",
      "two-thirds": "66.666667%",
      quarter: "25%",
      "three-quarters": "75%",
      full: "100%",
    },
    borderRadius: {
      DEFAULT: "25% / 100%",
    },
    screens: {
      sm: "21em",
      md: "48em",
      lg: "75em",
      xl: "105em",
    },
    spacing: (() => {
      // const tinyIntervals = [0, 0.125, 0.25, 0.5, 0.625, 0.75, 0.875, 1.5, 2.5];
      const tinyIntervals = [
        0,
        "1/8",
        "1/4",
        "3/8",
        "1/2",
        "5/8",
        "3/4",
        "7/8",
        "3/2",
        "5/2",
      ];
      const intervals = tinyIntervals.concat(Array.from(Array(96).keys()));
      const spacing = Array.from(intervals).reduce((acc, interval) => {
        const value = `calc(var(--gutter) * ${interval})`;
        acc[interval] = value;
        return acc;
      }, {});
      spacing["px"] = "1px";
      spacing["2px"] = "2px";
      spacing["2em"] = "2em";
      spacing["3em/2"] = "1.5em";
      spacing["5em/4"] = "1.25em";
      spacing["em"] = "1em";
      spacing["7em/8"] = "0.875em";
      spacing["3em/4"] = "0.75em";
      spacing["5em/8"] = "0.625em";
      spacing["em/2"] = "0.5em";
      spacing["3em/8"] = "0.375em";
      spacing["em/4"] = "0.25em";
      spacing["em/8"] = "0.125em";
      return spacing;
    })(),
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percentages"),
      ...theme("keywordSizes"),
    }),
    extend: {},
  },
  plugins: [],
};
export default config;
