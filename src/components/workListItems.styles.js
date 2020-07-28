import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { cssDefaults } from "../utils/consts";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
});

export const titleStyle = css({
  margin: `${rhythm(0.5)} 0 0`,
  order: 6,
  textDecoration: "none",
  "> a": {
    color: cssDefaults.primary,
    textDecoration: "none",
    "&:hover, &:focus": {
      color: cssDefaults.primaryLight,
      textDecoration: "underline",
    },
    "&:active": {
      color: cssDefaults.primaryDark,
    },
  },
});

export const metaStyle = css({
  display: "flex",
  margin: 0,
  order: 9,
  dd: {
    color: cssDefaults.headingColour,
    fontSize: cssDefaults.smallTextSize,
    margin: `0 ${rhythm(0.5)} 0 0`,
  },
});

export const imageContainerStyle = css({
  display: "block",
  order: 3,
  overflow: "hidden",
  position: "relative",
});
