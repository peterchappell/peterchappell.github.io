import React from "react";

import { gallery, galleryGrid } from "./gallery.styles";

export default function Gallery({ children }) {
  return (
    <figure css={gallery}>
      <div css={galleryGrid}>{children}</div>
    </figure>
  );
}
