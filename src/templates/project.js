import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default function Project({ data }) {
  const project = data.markdownRemark;
  return (
    <Layout>
      <h2>{project.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  );
}
