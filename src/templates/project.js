import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Gallery from "../components/gallery";
import ProjectLink from "../components/projectLink";

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        type
        url
        repo
      }
    }
  }
`;

const headerClass = css({
  marginBottom: rhythm(2),
});

const shortcodes = {
  Gallery,
  ProjectLink,
};

export default function Project({ data }) {
  const project = data.mdx;

  return (
    <Layout isContentPadded>
      <header css={headerClass}>
        <Link to="/projects">Projects</Link>
        <h2>{project.frontmatter.title}</h2>
        <em>
          Type:
          {` `}
          {project.frontmatter.type}
          {` `}
          {project.frontmatter.url && (
            <>
              URL:
              {` `}
              <a
                href={project.frontmatter.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.frontmatter.url}
              </a>
              {` `}
            </>
          )}
          {project.frontmatter.repo && (
            <>
              Code:
              {` `}
              <a
                href={project.frontmatter.repo}
                target="_blank"
                rel="noreferrer"
              >
                {project.frontmatter.repo}
              </a>
              {` `}
            </>
          )}
        </em>
      </header>

      <div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{project.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
}
