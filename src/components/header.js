import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
import Image from "./image";

const headerContainer = css({
  bottom: 0,
  left: 0,
  position: "fixed",
  padding: rhythm(2),
  textAlign: "center",
  top: 0,
  width: "33.3333%",
  zIndex: 900,
});

const graphic = css({
  borderRadius: "50%",
  margin: `${rhythm(1)} auto`,
  maxWidth: "50%",
  overflow: "hidden",
});

const mainMenuLink = css({
  display: "block",
});

const Header = ({ siteTitle }) => (
  <header css={headerContainer}>
    <h1>{siteTitle}</h1>
    <figure css={graphic}>
      <Image />
    </figure>
    <nav>
      <Link to="/" css={mainMenuLink}>
        Home
      </Link>
      <Link to="/projects" css={mainMenuLink}>
        My Work
      </Link>
      <Link to="/experience" css={mainMenuLink}>
        Experience
      </Link>
    </nav>
  </header>
);

export default Header;
