import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

const container = css({
  margin: `${rhythm(1)} 0`,
});

const button = css({
  backgroundColor: "#666",
  borderRadius: "8px",
  color: "#fff",
  display: "inline-block",
  padding: `${rhythm(0.5)} ${rhythm(1)}`,
  textDecoration: "none",
});

export default function ProjectLink({ url }) {
  return (
    <div css={container}>
      <a href={url} target="_blank" rel="noreferrer" css={button}>
        View the project
      </a>
    </div>
  );
}
