import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const headerContainer = css({
  backgroundColor: "#f5f5f5",
  flexBasis: "33%",
  padding: rhythm(2),
});

const mainMenuLink = css({
  display: "block",
});

const Header = ({ siteTitle }) => (
  <header css={headerContainer}>
    <h1>{siteTitle}</h1>
    <nav>
      <Link to="/" css={mainMenuLink}>
        Home
      </Link>
      <Link to="/projects" css={mainMenuLink}>
        Projects
      </Link>
      <Link to="/experience" css={mainMenuLink}>
        Experience
      </Link>
    </nav>
  </header>
);

export default Header;
