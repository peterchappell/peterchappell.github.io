import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
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

export default function Projects({ data }) {
  return (
    <Layout isContentPadded>
      <h2>Projects</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title} </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}
