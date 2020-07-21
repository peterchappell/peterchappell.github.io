import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const section = css({
  padding: `${rhythm(2)} 0`,
});

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(about)/.*\\\\.md$/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  const mappedData = data.allMarkdownRemark.nodes.reduce(
    (accumulator, itemObj) => {
      accumulator[itemObj.frontmatter.slug] = itemObj;
      return accumulator;
    },
    {}
  );

  return (
    <Layout>
      <SEO title="Home" />
      <h2>A front-end engineer with...</h2>

      <article
        id="broad"
        css={section}
        dangerouslySetInnerHTML={{ __html: mappedData.range.html }}
      />

      <article
        id="broad"
        css={section}
        dangerouslySetInnerHTML={{ __html: mappedData.depth.html }}
      />

      <article
        id="tshaped"
        css={section}
        dangerouslySetInnerHTML={{ __html: mappedData.tshaped.html }}
      />

      <div style={{ maxWidth: `300px` }}>
        <Image />
      </div>
    </Layout>
  );
};

export default IndexPage;
