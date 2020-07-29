import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useInView } from "react-intersection-observer";

import HomeAnimation from "../components/homeAnimation";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { mediaQueries } from "../utils/consts";

const containerStyle = css({
  alignItems: "center",
  display: "flex",
  marginBottom: rhythm(2),
  [mediaQueries[1]]: {
    display: "block",
    padding: rhythm(1),
  },
});

const columnStyle = css({
  flexBasis: "50%",
  flexShrink: 1,
  position: "relative",
});

const animationColumn = css({
  [mediaQueries[1]]: {
    display: "none",
  },
});

const mobileAnimation = css({
  display: "none",
  [mediaQueries[1]]: {
    display: "block",
    margin: `${rhythm(1)} auto`,
    maxHeight: "200px",
    maxWidth: "200px",
  },
});

const sectionStyle = css({
  alignItems: "center",
  display: "flex",
  flexShrink: 1,
  minHeight: "100vh",
  scrollSnapAlign: "start",
  scrollSnapStop: "normal",
  [mediaQueries[0]]: {
    minHeight: `calc(100vh - ${rhythm(7)})`,
  },
  [mediaQueries[1]]: {
    display: "block",
    minHeight: "auto",
    scrollSnapAlign: "none",
    scrollSnapType: "unset",
  },
});

const sectionContentStyle = css({
  padding: `0 ${rhythm(1)} 0 0`,
});

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      allMdx(filter: { fileAbsolutePath: { regex: "/(about)/.*\\\\.md$/" } }) {
        nodes {
          body
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  const [rangeRef, isRangeInView] = useInView({ threshold: 0.3 });
  const [depthRef, isDepthInView] = useInView({ threshold: 0.3 });
  const [tShapedRef, isTShapedInView] = useInView({ threshold: 0.3 });

  const mappedData = data.allMdx.nodes.reduce((accumulator, itemObj) => {
    accumulator[itemObj.frontmatter.slug] = itemObj;
    return accumulator;
  }, {});

  return (
    <Layout>
      <SEO title="Home" />
      <div css={containerStyle}>
        <div css={[columnStyle, animationColumn]}>
          <HomeAnimation
            isRangeInView={isRangeInView}
            isDepthInView={isDepthInView}
            isTShapedInView={isTShapedInView}
          />
        </div>
        <div css={columnStyle}>
          <article id="range" css={sectionStyle}>
            <div css={mobileAnimation}>
              <HomeAnimation
                isRangeInView={isRangeInView}
                isDepthInView={isDepthInView}
                isTShapedInView={isTShapedInView}
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={rangeRef}>
              <MDXRenderer>{mappedData.range.body}</MDXRenderer>
            </div>
          </article>
          <article id="depth" css={sectionStyle}>
            <div css={mobileAnimation}>
              <HomeAnimation
                isRangeInView={isRangeInView}
                isDepthInView={isDepthInView}
                isTShapedInView={isTShapedInView}
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={depthRef}>
              <MDXRenderer>{mappedData.depth.body}</MDXRenderer>
            </div>
          </article>
          <article id="tshaped" css={sectionStyle}>
            <div css={mobileAnimation}>
              <HomeAnimation
                isRangeInView={isRangeInView}
                isDepthInView={isDepthInView}
                isTShapedInView={isTShapedInView}
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={tShapedRef}>
              <MDXRenderer>{mappedData.tshaped.body}</MDXRenderer>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
