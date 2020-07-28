export const workImagesHeight = 300;

export const breakpoints = [780, 500];

export const mediaQueries = breakpoints.map(
  bp => `@media (max-width: ${bp + 1}px)`
);

export const cssDefaults = {
  bg1: "#fff",
  bg2: "rgba(235,239,242)",
  bg3: "rgba(205,215,221)",
  primary: "#006D97",
  primaryLight: "#398AB6",
  primaryDark: "#004269",
  headingColour: "#384955",
  bodyTextColour: "#1f282f",
  smallTextSize: "14px",
};
