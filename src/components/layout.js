import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import Header from "./header";
import "./layout.css";
import { mediaQueries } from "../utils/consts";

const Layout = ({ children, isContentPadded }) => {
  const outerContainer = css({
    position: "relative",
  });

  const mainContainer = css({
    backgroundColor: "#fff",
    marginLeft: "33.3333%",
    minHeight: "100vh",
    padding: isContentPadded ? rhythm(2) : 0,
    [mediaQueries[0]]: {
      marginLeft: 0,
      marginTop: isContentPadded ? rhythm(6) : rhythm(5),
      minHeight: `calc(100vh - ${rhythm(6)})`,
      padding: isContentPadded ? rhythm(1) : 0,
    },
    [mediaQueries[1]]: {
      padding: isContentPadded ? rhythm(0.5) : 0,
    },
  });

  return (
    <section css={outerContainer}>
      <Header />
      <main css={mainContainer}>{children}</main>
    </section>
  );
};

export default Layout;
