import React from "react";
import { css } from "@emotion/core";
import PDFIcon from "../images/svg/pdf.svg";

const linkStyle = css({
  display: "flex",
});

const pdfIconStyle = css({
  height: "25px",
  marginRight: "5px",
});

export default function PDFLink(props) {
  const { path, text } = props;

  return (
    <p>
      <a href={path} css={linkStyle}>
        <PDFIcon css={pdfIconStyle} />
        {text}
      </a>
    </p>
  );
}
