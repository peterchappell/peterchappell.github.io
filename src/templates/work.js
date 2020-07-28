import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Gallery from "../components/gallery";
import GithubLink from "../components/githubLink";
import ProjectLink from "../components/projectLink";
import Quote from "../components/quote";
import { cssDefaults } from "../utils/consts";
import BackLinkIcon from "../images/svg/back.svg";

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

const backLinkStyle = css({
  alignItems: "center",
  display: "flex",
  marginLeft: "-1.25rem",
  textDecoration: "none",
});

const backLinkIconStyle = css({
  height: "1rem",
  marginRight: "0.25rem",
  width: "1rem",
});

const headerStyle = css({
  marginBottom: rhythm(1),
});

const headingStyle = css({
  margin: `${rhythm(1)} 0 0`,
});

const metaStyle = css({
  color: cssDefaults.headingColour,
  display: "flex",
  fontSize: cssDefaults.smallTextSize,
  dd: {
    margin: `0 ${rhythm(0.5)} 0 0`,
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
      <header css={headerStyle}>
        <Link to="/work" css={backLinkStyle}>
          <BackLinkIcon css={backLinkIconStyle} />
          My Work
        </Link>
        <h2 css={headingStyle}>{project.frontmatter.title}</h2>
        <dl css={metaStyle}>
          <dt className="sr-only">Timeframe</dt>
          <dd>{project.frontmatter.timeFrame}</dd>
          <dt className="sr-only">Type</dt>
          <dd>{project.frontmatter.type}</dd>
          {project.frontmatter.repo && (
            <>
              <dt className="sr-only">Code</dt>
              <dd>
                <GithubLink url={project.frontmatter.repo} />
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
