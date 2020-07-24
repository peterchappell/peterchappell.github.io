export const projectImagesHeight = 300;

export const breakpoints = [780, 500];

export const mediaQueries = breakpoints.map(
  bp => `@media (max-width: ${bp + 1}px)`
);

export const cssDefaults = {
  bg1: "#fff",
  bg2: "#f5f5f5",
  bg3: "#eee",
  primary: "#006D97",
  primaryLight: "#398AB6",
  primaryDark: "#004269",
};
