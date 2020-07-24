import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Gallery from "../components/gallery";
import ProjectLink from "../components/projectLink";
import Quote from "../components/quote";

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        timeFrame
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

const metaStyle = css({
  display: "flex",
  fontStyle: "italic",
  "> dd": {
    marginRight: "1em",
  },
  "> dt": {
    marginRight: "0.5em",
  },
});

const shortcodes = {
  Gallery,
  ProjectLink,
  Quote,
};

export default function Work({ data }) {
  const project = data.mdx;

  return (
    <Layout isContentPadded>
      <header css={headerClass}>
        <Link to="/work">My Work</Link>
        <h2>
          {project.frontmatter.type === "Job" ? " @" : ""}
          {project.frontmatter.title}
        </h2>
        <dl css={metaStyle}>
          <dt>Type</dt>
          <dd>{project.frontmatter.type}</dd>
          <dt>Timeframe</dt>
          <dd>{project.frontmatter.timeFrame}</dd>
          {project.frontmatter.url && (
            <>
              <dt>URL</dt>
              <dd>
                <a
                  href={project.frontmatter.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </dd>
            </>
          )}
          {project.frontmatter.repo && (
            <>
              <dt>Code</dt>
              <dd>
                <a
                  href={project.frontmatter.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </dd>
            </>
          )}
        </dl>
      </header>

      <div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{project.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
}
