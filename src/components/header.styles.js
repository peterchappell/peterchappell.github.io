import { css } from "@emotion/core";
import { cssDefaults, mediaQueries } from "../utils/consts";
import { rhythm } from "../utils/typography";

export const headerContainer = css({
  alignItems: "center",
  backgroundColor: cssDefaults.bg2,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  left: 0,
  overflowY: "auto",
  position: "fixed",
  padding: `${rhythm(2)} 0 ${rhythm(4)}`,
  textAlign: "center",
  top: 0,
  width: "33.3333%",
  zIndex: 900,
  [mediaQueries[0]]: {
    alignItems: "center",
    bottom: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: rhythm(1),
    right: 0,
    textAlign: "left",
    width: "auto",
  },
  [mediaQueries[1]]: {
    flexDirection: "column",
    padding: 0,
  },
});

export const siteTitleLinkStyle = css({
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  whiteSpace: "nowrap",
  [mediaQueries[0]]: {
    alignItems: "center",
    flexDirection: "row",
  },
  [mediaQueries[1]]: {
    padding: rhythm(0.5),
    width: "100%",
  },
});

export const siteTitleStyle = css({
  margin: 0,
  "> em": {
    display: "block",
    fontSize: "1.37078rem",
    fontStyle: "normal",
    fontWeight: 300,
  },
  [mediaQueries[0]]: {
    order: 2,
  },
  [mediaQueries[1]]: {
    fontSize: "1.62671rem",
    "> em": {
      fontSize: "1rem",
    },
  },
});

export const graphicStyle = css({
  borderRadius: "50%",
  display: "block",
  height: "150px",
  margin: `${rhythm(1)} auto`,
  width: "150px",
  overflow: "hidden",
  [mediaQueries[0]]: {
    height: rhythm(3),
    margin: `0 ${rhythm(1)} 0 0`,
    order: 1,
    width: rhythm(3),
  },
  [mediaQueries[1]]: {
    height: rhythm(2),
    margin: `0 ${rhythm(0.5)} 0 0`,
    width: rhythm(2),
  },
});

export const headerNavStyle = css({
  order: 5,
  [mediaQueries[0]]: {
    display: "flex",
  },
  [mediaQueries[1]]: {
    backgroundColor: cssDefaults.primary,
    flexDirection: "rows",
    justifyContent: "center",
    height: cssDefaults.mobileBarHeight,
    left: 0,
    marginLeft: 0,
    width: "100%",
  },
});

export const mainMenuLinkStyle = css({
  alignItems: "center",
  display: "flex",
  fontWeight: 500,
  justifyContent: "center",
  padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
  whiteSpace: "nowrap",
  "&:link, &:active, &:visited": {
    textDecoration: "none",
  },
  "&:hover": {
    textDecoration: "underline",
  },
  [mediaQueries[1]]: {
    borderBottom: `5px solid ${cssDefaults.primary}`,
    color: "#fff",
    flexBasis: "33.3333%",
    padding: `${rhythm(0.25)} ${rhythm(0.25)} calc(${rhythm(0.25)} - 5px)`,
    textAlign: "center",
    "&:link, &:active, &:visited, &:hover": {
      color: "#fff",
    },
    "&:hover": {
      textDecoration: "none",
    },
    "&:active": {
      backgroundColor: cssDefaults.primaryDark,
    },
  },
});
