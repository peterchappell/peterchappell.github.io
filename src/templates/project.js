import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        url
        repo
        images {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const headerClass = css({
  marginBottom: rhythm(2),
});

const gallery = css({
  maxWidth: "100%",
  overflowX: "auto",
});

const galleryGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat( 12, minmax(250px, 1fr) )",
});

const galleryImage = css({
  height: "300px",
});

export default function Project({ data }) {
  const project = data.markdownRemark;

  return (
    <Layout isContentPadded>
      <header css={headerClass}>
        <Link to="/projects">Projects</Link>
        <h2>{project.frontmatter.title}</h2>
        {project.frontmatter.url && (
          <div>
            View:
            {` `}
            <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
              {project.frontmatter.url}
            </a>
          </div>
        )}
        {project.frontmatter.repo && (
          <div>
            Code:
            {` `}
            <a href={project.frontmatter.repo} target="_blank" rel="noreferrer">
              {project.frontmatter.repo}
            </a>
          </div>
        )}
      </header>

      <figure css={gallery}>
        <div css={galleryGrid}>
          {project.frontmatter.images.map(image => (
            <Img fluid={image.childImageSharp.fluid} css={galleryImage} />
          ))}
        </div>
      </figure>

      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  );
}
