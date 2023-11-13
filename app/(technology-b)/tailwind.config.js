import { typeScale, defaultConfig } from "../../tailwind.main.config";

const config = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    fontFamily: {
      sans: ["Arial", "sans-serif"],
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
    extend: {},
  },
  plugins: [],
};
export default config;
