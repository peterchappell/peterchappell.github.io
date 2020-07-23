import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import { projectImagesHeight } from "../utils/consts";

const gallery = css({
  backgroundColor: "#fafafa",
  marginBottom: rhythm(1),
  maxWidth: "100%",
  overflowX: "auto",
  padding: "10px 10px 20px",
});

const galleryGrid = css({
  whiteSpace: "nowrap",
  height: `${projectImagesHeight}px`,
});

export default function Gallery({ children }) {
  return (
    <figure css={gallery}>
      <div css={galleryGrid}>{children}</div>
    </figure>
  );
}
