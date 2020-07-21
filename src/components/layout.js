import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

import Header from "./header";
import "./layout.css";

const Layout = ({ children, isContentPadded }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const outerContainer = css({
    position: "relative",
  });

  const mainContainer = css({
    backgroundColor: "#fff",
    marginLeft: "33.3333%",
    minHeight: "100vh",
    padding: isContentPadded ? rhythm(2) : 0,
  });

  return (
    <section css={outerContainer}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={mainContainer}>{children}</main>
    </section>
  );
};

export default Layout;
