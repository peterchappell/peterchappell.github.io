import React from "react";

import EmailIcon from "../images/svg/email.svg";
import LinkedInIcon from "../images/svg/linkedin.svg";
import GithubIcon from "../images/svg/github.svg";

import {
  footerStyle,
  footerListStyle,
  footerLink,
  footerIcon,
  footerLinkText,
} from "./footer.styles";

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
            <LinkedInIcon css={footerIcon} aria-hidden="true" />
            <span css={footerLinkText}>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/peterchappell"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            <GithubIcon css={footerIcon} aria-hidden="true" />
            <span css={footerLinkText}>Github</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:petechappell@gmail.com"
            target="_blank"
            rel="noreferrer"
            css={footerLink}
          >
            <EmailIcon css={footerIcon} aria-hidden="true" />
            <span css={footerLinkText}>peter@ap3x.com</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
