import React from "react";

import { footerStyle, footerListStyle, footerLink } from "./footer.styles";

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <ul css={footerListStyle}>
        <li>
          <a
            href="https://www.linkedin.com/in/pete-chappell-6430a319"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/peterchappell"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="/PeteChappell-CV.pdf"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            CV
          </a>
        </li>
        <li>
          <a
            href="mailto:petechappell@gmail.com"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            petechappell@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
