import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { cssDefaults } from "../utils/consts";

const quoteStyle = css({
  borderLeft: `5px solid ${cssDefaults.bg2}`,
  padding: `${rhythm(0.5)} ${rhythm(1)}`,
  margin: `${rhythm(1)} 0`,
});

const quoteTextStyle = css({
  fontStyle: "italic",
});

const attributionStyle = css({
  color: cssDefaults.headingColour,
  fontSize: cssDefaults.smallTextSize,
  fontWeight: "bold",
  margin: `${rhythm(1)} 0 0`,
});

export default function Quote(props) {
  const { attributionText, attributionUrl, children } = props;

  const attribution = !!attributionUrl ? (
    <a href={attributionUrl} rel="noreferrer" target="_blank">
      {attributionText}
    </a>
  ) : (
    attributionText
  );

  return (
    <blockquote css={quoteStyle}>
      <div css={quoteTextStyle}>{children}</div>
      <footer css={attributionStyle}>{attribution}</footer>
    </blockquote>
  );
}
