import React from "react";
import { css } from "@emotion/core";
import { cssDefaults } from "../utils/consts";
import GithubIcon from "../images/svg/github.svg";

const button = css({
  alignItems: "center",
  color: cssDefaults.bodyTextColour,
  display: "flex",
  textDecoration: "none",
  "&:hover, &:focus, &:active": {
    color: cssDefaults.bodyTextColour,
    textDecoration: "underline",
  },
  "&:visited": {
    color: cssDefaults.bodyTextColour,
  },
});

export const icon = css({
  height: "1rem",
  marginRight: "0.25rem",
  width: "1rem",
});

export default function GithubLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" css={button}>
      <GithubIcon css={icon} ariaHidden="true" />
      View the source code
    </a>
  );
}
