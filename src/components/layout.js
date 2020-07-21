import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

import Header from "./header";
import "./layout.css";

const outerContainer = css({
  display: "flex",
  height: "100%",
});

const mainContainer = css({
  flexBasis: "100%",
  padding: rhythm(2),
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <section css={outerContainer}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={mainContainer}>{children}</main>
    </section>
  );
};

export default Layout;
