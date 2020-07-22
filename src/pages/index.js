import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const section = css({
  alignItems: "center",
  display: "flex",
});

const sectionContent = css({
  alignItems: "center",
  flexBasis: "50%",
  flexShrink: 1,
  padding: `0 ${rhythm(2)} 0 0`,
});

const graphic = css({
  alignItems: "center",
  display: "flex",
  flexBasis: "50%",
  flexShrink: 1,
  height: "100vh",
  justifyContent: "center",
});

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      allMdx(filter: { fileAbsolutePath: { regex: "/(about)/.*\\\\.md$/" } }) {
        nodes {
          body
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  const mappedData = data.allMdx.nodes.reduce((accumulator, itemObj) => {
    accumulator[itemObj.frontmatter.slug] = itemObj;
    return accumulator;
  }, {});

  return (
    <Layout>
      <SEO title="Home" />
      <article id="broad" css={section}>
        <div css={graphic}>
          <div>—</div>
        </div>
        <div css={sectionContent}>
          <MDXRenderer>{mappedData.range.body}</MDXRenderer>
        </div>
      </article>

      <article id="broad" css={section}>
        <div css={graphic}>
          <div>|</div>
        </div>
        <div css={sectionContent}>
          <MDXRenderer>{mappedData.depth.body}</MDXRenderer>
        </div>
      </article>

      <article id="broad" css={section}>
        <div css={graphic}>T</div>
        <div css={sectionContent}>
          <MDXRenderer>{mappedData.tshaped.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export default IndexPage;
