import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import WorkListItem from "../components/workListItem";
import { rhythm } from "../utils/typography";
import SEO from "../components/seo";

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(work)/.*/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            order
            type
            timeFrame
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
    }
  }
`;

const projectsGridStyle = css({
  display: "grid",
  gridGap: rhythm(2),
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gridAutoRows: "minmax(100px, auto)",
  margin: 0,
});

export default function Work({ data }) {
  return (
    <Layout isContentPadded>
      <SEO
        title="My Work"
        description="Some of the projects and jobs Pete Chappell been working on."
      />
      <h2>My Work</h2>
      <ul css={projectsGridStyle}>
        {data.allMdx.edges.map(({ node }) => (
          <WorkListItem
            key={node.id}
            title={node.frontmatter.title}
            slug={node.fields.slug}
            type={node.frontmatter.type}
            timeFrame={node.frontmatter.timeFrame}
            featuredImageData={node.frontmatter.featuredImage}
          />
        ))}
      </ul>
    </Layout>
  );
}
