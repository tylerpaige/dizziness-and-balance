export function typeScale({
  coefficient = "var(--base-font-size)",
  base = 1.25,
  lineHeight = 1,
  numberOfSmallSizes,
  numberOfLargeSizes,
  transformer,
} = {}) {
  const fontSizes = {};
  transformer ||= ({ fontSizes, key, value }) => {
    fontSizes[key] = [value, { lineHeight }];
  };

  Array.from({ length: numberOfSmallSizes }).forEach((_, i) => {
    // const key = -1 * (numberOfSmallSizes - i);
    const key = `neg-${(numberOfSmallSizes - i)}`;
    const exponent = -1 * (numberOfSmallSizes - i);
    const power = Math.pow(base, exponent).toFixed(3);
    const value = `calc(${coefficient} * ${power})`;
    transformer({
      fontSizes,
      key,
      value,
      coefficient,
      power,
      base,
      exponent,
    });
  });
  Array.from({ length: numberOfLargeSizes + 1 }).forEach((_, i) => {
    const key = i;
    const exponent = i;
    const power = Math.pow(base, exponent).toFixed(3);
    const value = `calc(${coefficient} * ${power})`;
    transformer({
      fontSizes,
      key,
      value,
      coefficient,
      power,
      base,
      exponent,
    });
  });
  return fontSizes;
}

export const defaultConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keywordSizes: {
      sm: "20rem",
      md: "30rem",
      lg: "40rem",
      xl: "50rem",
    },
    percentageSizes: {
      half: "50%",
      third: "33.333333%",
      "two-thirds": "66.666667%",
      quarter: "25%",
      "three-quarters": "75%",
      full: "100%",
    },
    emSizes: (() =>
      [
        [1, 8],
        [1, 4],
        [3, 8],
        [1, 2],
        [5, 8],
        [3, 4],
        [7, 8],
        [1, 1],
        [9, 8],
        [5, 4],
        [11, 8],
        [3, 2],
        [2, 1],
      ].reduce((acc, [num, den]) => {
        const key = den !== 1 ? `${num}/${den}` : num;
        acc[`${key}em`] = `${num / den}em`;
        return acc;
      }, {}))(),
    pxSizes: (() =>
      [1, 2, 3].reduce((acc, px) => {
        acc[`${px}px`] = `${px}px`;
        return acc;
      }, {}))(),
    gutterSizes: (() =>
      [0, "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8", "3/2", "5/2"]
        .concat(Array.from(Array(96).keys()))
        .reduce((acc, interval) => {
          const value = `calc(var(--gutter) * ${interval})`;
          acc[interval] = value;
          return acc;
        }, {}))(),
    extend: {},
  },
  plugins: [],
};

export default defaultConfig;
