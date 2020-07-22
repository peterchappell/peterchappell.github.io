import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.md$/" } }
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
  margin: `${rhythm(1)} 0`,
  padding: rhythm(1),
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
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} css={projectItem}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <p>
            <em>{node.frontmatter.type}</em>
          </p>
          {displayImage(node)}
          <p>{node.frontmatter.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}
