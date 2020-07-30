import Typography from "typography";
import { cssDefaults } from "./consts";

const themeOptions = {
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300", "300i", "400", "400i", "500", "700"],
    },
  ],
  baseLineHeight: 1.6,
  bodyFontFamily: ["Roboto", "sans-serif"],
  bodyWeight: "300",
  bodyTextColour: cssDefaults.bodyTextColour,
  boldWeight: "400",
  headerColor: cssDefaults.headingColour,
  headerFontFamily: ["Roboto", "sans-serif"],
  headerWeight: "700",
  scaleRatio: 2.25,
  overrideStyles: () => ({
    h4: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 400,
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

export const { scale, rhythm, options } = typography;
export default typography;
