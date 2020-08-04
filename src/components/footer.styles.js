import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";
import { mediaQueries, cssDefaults } from "../utils/consts";

export const footerStyle = css({
  bottom: 0,
  fontSize: cssDefaults.smallTextSize,
  left: 0,
  padding: rhythm(1),
  position: "fixed",
  width: "33.3333%",
  zIndex: 1000,
  [mediaQueries[0]]: {
    alignItems: "center",
    backgroundColor: cssDefaults.bg2,
    display: "flex",
    height: cssDefaults.mobileBarHeight,
    padding: 0,
    width: "100%",
  },
});

export const footerListStyle = css({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  listStyleType: "none",
  margin: "0 auto",
  "> li": {
    margin: 0,
    textAlign: "center",
    [mediaQueries[0]]: {
      flexBasis: "auto",
    },
  },
});

export const footerLink = css({
  alignItems: "center",
  display: "flex",
  padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
  textDecoration: "none",
  "&:link, &:hover, &:visited, &:active": {
    color: cssDefaults.headingColour,
  },
  "&:hover, &:focus": {
    textDecoration: "underline",
  },
});

export const footerIcon = css({
  height: "1rem",
  marginRight: "0.25rem",
  width: "1rem",
});

export const footerLinkText = css({
  [mediaQueries[1]]: {
    fontSize: cssDefaults.smallTextSize,
    lineHeight: cssDefaults.smallTextSize,
  },
});
