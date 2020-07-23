import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

const quoteStyle = css({
  margin: `${rhythm(1)} 0`,
});

const attributionStyle = css({
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
      {children}
      <footer css={attributionStyle}>{attribution}</footer>
    </blockquote>
  );
}
