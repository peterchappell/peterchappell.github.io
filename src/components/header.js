import React from "react";
import { Link } from "gatsby";

import { cssDefaults } from "../utils/consts";
import HeaderImage from "./headerImage";
import {
  headerContainer,
  siteTitleLinkStyle,
  siteTitleStyle,
  graphicStyle,
  headerNavStyle,
  mainMenuLinkStyle,
} from "./header.styles";

const activeStyle = {
  textDecoration: "underline",
};

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
      <Link to="/" css={mainMenuLinkStyle} activeStyle={activeStyle}>
        Home
      </Link>
      <Link
        to="/work"
        css={mainMenuLinkStyle}
        activeStyle={activeStyle}
        partiallyActive
      >
        My Work
      </Link>
      <Link to="/experience" css={mainMenuLinkStyle} activeStyle={activeStyle}>
        Experience
      </Link>
    </nav>
  </header>
);

export default Header;
