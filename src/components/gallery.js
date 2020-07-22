import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import { projectImagesHeight } from "../utils/consts";

const gallery = css({
  marginBottom: rhythm(1),
  maxWidth: "100%",
  overflowX: "auto",
  paddingBottom: "20px",
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
