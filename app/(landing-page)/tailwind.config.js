import { typeScale, defaultConfig } from "../../tailwind.main.config";

const config = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
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
      current: "currentColor",
    },
    fontFamily: {
      narrow: ["nimbus-sans-condensed", "Arial Narrow", "sans-serif"],
      sans: ["nimbus-sans", "Arial", "sans-serif"],
      extended: ["nimbus-sans-extended", "Arial", "sans-serif"],
    },
    fontSize: typeScale({
      numberOfSmallSizes: 4,
      numberOfLargeSizes: 4,
      base: 1.25,
      coefficient: "var(--base-font-size)",
      transformer: ({ fontSizes, key, value }) => {
        let lineHeight;
        if (key >= 1) {
          lineHeight = 1;
        } else if (key === 0) {
          lineHeight = 1.3;
        } else {
          lineHeight = 1.5;
        }
        fontSizes[key] = [value, { lineHeight }];
      },
    }),
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percentageSizes"),
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    maxWidth: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percentageSizes"),
      ...theme("keywordSizes"),
    }),
    borderRadius: {
      DEFAULT: "25% / 100%",
    },
    screens: {
      sm: "21em",
      md: "48em",
      lg: "75em",
      xl: "105em",
    },
    spacing: ({ theme }) => ({
      ...theme("gutterSizes"),
      ...theme("emSizes"),
      ...theme("pxSizes"),
    }),
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percentageSizes"),
      ...theme("keywordSizes"),
    }),
    outlineWidth: ({ theme }) => ({
      ...theme("pxSizes"),
    }),
    outlineOffset: ({ theme }) => ({
      ...theme("pxSizes"),
    }),
    extend: {},
  },
  plugins: [],
};

console.log(config)
export default config;
