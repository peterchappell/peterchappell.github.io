import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";

export const containerStyle = css({
  display: "flex",
  flexDirection: "row-reverse",
  margin: `${rhythm(2)} 0`,
  maxWidth: "700px",
});

export const contentStyle = css({
  display: "flex",
  flexBasis: "100%",
  flexDirection: "column",
});

export const graphicContainerStyle = css({
  display: "block",
  padding: `5px ${rhythm(1)} 0 0`,
  width: "100px",
});

export const graphicStyle = css({
  maxWidth: "100%",
});

export const titleStyle = css({
  margin: 0,
  order: 3,
});

export const yearStyle = css({
  margin: 0,
  order: 1,
});

export const companyStyle = css({
  margin: 0,
  order: 5,
});

export const descriptionStyle = css({
  margin: `${rhythm(0.5)} 0 0`,
  order: 7,
});
