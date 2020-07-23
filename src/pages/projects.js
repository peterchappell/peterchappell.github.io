import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            order
            type
            excerpt
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

const projectItem = css({
  border: "1px solid #ccc",
  borderRadius: "5px",
  breakInside: "avoid",
  display: "inline-block",
  marginBottom: rhythm(1),
  padding: rhythm(1),
});

const projectsGrid = css({
  columns: `2 auto`,
});

export default function Projects({ data }) {
  const displayImage = node => {
    if (!node.frontmatter.featuredImage) {
      return null;
    }
    return <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />;
  };

  return (
    <Layout isContentPadded>
      <h2>Projects</h2>
      <div css={projectsGrid}>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id} css={projectItem}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <p>
              <em>{node.frontmatter.type}</em>
            </p>
            {displayImage(node)}
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
