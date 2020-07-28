import React from "react";
import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";
import { cssDefaults } from "../utils/consts";
import ForwardIcon from "../images/svg/forward.svg";

const container = css({
  margin: `${rhythm(1)} 0`,
});

const button = css({
  alignItems: "center",
  backgroundColor: cssDefaults.primary,
  borderRadius: rhythm(1),
  color: "#fff",
  display: "inline-flex",
  height: rhythm(2),
  padding: `${rhythm(0.5)} ${rhythm(1)}`,
  textDecoration: "none",
  "&:hover, &:focus": {
    backgroundColor: cssDefaults.primaryLight,
    color: "#fff",
  },
  "&:active": {
    backgroundColor: cssDefaults.primaryDark,
    color: "#fff",
  },
});

const iconStyle = css({
  height: "2rem",
  marginLeft: "-1rem",
  width: "2rem",
});

export default function ProjectLink({ url }) {
  return (
    <div css={container}>
      <a href={url} target="_blank" rel="noreferrer" css={button}>
        <ForwardIcon css={iconStyle} />
        View the project
      </a>
    </div>
  );
}
