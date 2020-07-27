import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";
import { cssDefaults } from "../utils/consts";

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

const projectsGrid = css({
  display: "grid",
  gridGap: rhythm(2),
  gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
  gridAutoRows: "minmax(100px, auto)",
  margin: 0,
});

const projectItem = css({
  display: "flex",
  flexDirection: "column",
});

const projectItemImage = css({
  display: "block",
  height: "150px",
  overflow: "hidden",
});

const projectItemTitle = css({
  margin: `${rhythm(0.5)} 0 0`,
  textDecoration: "none",
  "> a": {
    color: cssDefaults.primary,
    textDecoration: "none",
    "&:hover, &:focus": {
      color: cssDefaults.primaryLight,
      textDecoration: "underline",
    },
    "&:active": {
      color: cssDefaults.primaryDark,
    },
  },
});

const projectItemMeta = css({
  display: "flex",
  margin: 0,
  dt: {
    display: "none",
  },
  dd: {
    color: "#666",
    fontSize: "0.8em",
    margin: `0 ${rhythm(0.5)} 0 0`,
  },
});

export default function Work({ data }) {
  const displayImage = node => {
    if (!node.frontmatter.featuredImage) {
      return null;
    }
    return <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />;
  };

  return (
    <Layout isContentPadded>
      <h2>My Work</h2>
      <ul css={projectsGrid}>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} css={projectItem}>
            <h3 css={projectItemTitle} style={{ order: 6 }}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
            <dl css={projectItemMeta} style={{ order: 9 }}>
              <dt>Type</dt>
              <dd>{node.frontmatter.type}</dd>
              <dt>Timeframe</dt>
              <dd>{node.frontmatter.timeFrame}</dd>
            </dl>
            <Link
              to={node.fields.slug}
              css={projectItemImage}
              style={{ order: 3 }}
            >
              {displayImage(node)}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
