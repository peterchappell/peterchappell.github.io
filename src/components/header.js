import React from "react";
import { Link } from "gatsby";

import HeaderImage from "./headerImage";
import {
  headerContainer,
  siteTitleLinkStyle,
  siteTitleStyle,
  graphicStyle,
  headerNavStyle,
  mainMenuLinkStyle,
} from "./header.styles";

const Header = () => (
  <header css={headerContainer}>
    <Link to="/" css={siteTitleLinkStyle}>
      <h1 css={siteTitleStyle}>
        Pete Chappell
        <em>Portfolio</em>
      </h1>
      <figure css={graphicStyle}>
        <HeaderImage />
      </figure>
    </Link>
    <nav css={headerNavStyle}>
      <Link
        to="/"
        css={mainMenuLinkStyle}
        activeStyle={{ textDecoration: "underline" }}
      >
        Home
      </Link>
      <Link
        to="/projects"
        css={mainMenuLinkStyle}
        activeStyle={{ textDecoration: "underline" }}
        partiallyActive
      >
        My Work
      </Link>
      <Link
        to="/experience"
        css={mainMenuLinkStyle}
        activeStyle={{ textDecoration: "underline" }}
      >
        Experience
      </Link>
    </nav>
  </header>
);

export default Header;
