import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import { projectImagesHeight } from "../utils/consts";

export const gallery = css({
  backgroundColor: "#fafafa",
  marginBottom: rhythm(1),
  maxWidth: "100%",
  overflowX: "auto",
  padding: "10px 10px 20px",
});

export const galleryGrid = css({
  whiteSpace: "nowrap",
  height: `${projectImagesHeight}px`,
});
