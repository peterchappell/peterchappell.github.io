import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";
import { mediaQueries, cssDefaults } from "../utils/consts";

export const footerStyle = css({
  bottom: 0,
  fontSize: "14px",
  left: 0,
  padding: rhythm(1),
  position: "fixed",
  width: "33.3333%",
  zIndex: 1000,
  [mediaQueries[0]]: {
    alignItems: "center",
    backgroundColor: cssDefaults.bg2,
    display: "flex",
    height: rhythm(1.5),
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
    flexBasis: "33%",
    margin: 0,
    textAlign: "center",
    [mediaQueries[0]]: {
      flexBasis: "auto",
    },
  },
});

export const footerLink = css({
  display: "block",
  padding: rhythm(0.25),
  textDecoration: "none",
  "&:link, &:hover, &:visited, &:active": {
    color: cssDefaults.bodyTextColour,
  },
  "&:hover, &:focus": {
    textDecoration: "underline",
  },
});
