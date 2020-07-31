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
      <Link to="/" css={mainMenuLinkStyle} activeClassName="activeMenuItem">
        Home
      </Link>
      <Link
        to="/work"
        css={mainMenuLinkStyle}
        activeClassName="activeMenuItem"
        partiallyActive
      >
        My Work
      </Link>
      <Link
        to="/experience"
        css={mainMenuLinkStyle}
        activeClassName="activeMenuItem"
      >
        Experience
      </Link>
    </nav>
  </header>
);

export default Header;
