import Typography from "typography";
import { cssDefaults } from "./consts";

const themeOptions = {
  googleFonts: [
    {
      name: "Source Serif Pro",
      styles: ["500"],
    },
    {
      name: "Roboto",
      styles: ["300", "300i", "400", "400i"],
    },
  ],
  baseLineHeight: 1.6,
  bodyFontFamily: ["Roboto", "sans-serif"],
  bodyWeight: "300",
  boldWeight: "400",
  headerColor: "hsla(0,0%,0%,0.7)",
  headerFontFamily: ["Source Serif Pro", "serif"],
  headerWeight: "500",
  scaleRatio: 2.2,
  overrideStyles: () => ({
    h4: {
      fontSize: "1.2rem",
    },
    a: {
      color: cssDefaults.primary,
    },
    "a:hover": {
      color: cssDefaults.primaryLight,
    },
    "a:active, a:focus": {
      color: cssDefaults.primaryDark,
    },
  }),
};

const typography = new Typography(themeOptions);

console.log("typography", typography);
console.log("linesForFontSize", typography.linesForFontSize());

export const { scale, rhythm, options } = typography;
export default typography;
