import React, { useRef, useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css, keyframes } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useInView } from "react-intersection-observer";

import HomeAnimation from "../components/homeAnimation";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { cssDefaults, mediaQueries } from "../utils/consts";
import HomeMoreArrowIcon from "../images/svg/homeMoreArrow.svg";

const arrowOpacity = 0.25;

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
  padding: `0 ${rhythm(2)} 0 0`,
  ul: {
    marginBottom: 0,
  },
});

const scrollPromptBounce = keyframes({
  "from, 20%, 53%, 80%, to": {
    transform: "translate3d(0,0,0)",
  },
  "40%, 43%": {
    transform: "translate3d(0, -20px, 0)",
  },
  "70%": {
    transform: "translate3d(0, -10px, 0)",
  },
  "90%": {
    transform: "translate3d(0, -2px, 0)",
  },
});

const scrollPromptStyle = css({
  background: "none",
  border: "none",
  bottom: "20px",
  color: cssDefaults.headingColour,
  cursor: "pointer",
  left: "calc(66.6666% - 50px)",
  opacity: 0,
  position: "fixed",
  width: "100px",
  "&:focus": {
    outline: "none",
  },
  [mediaQueries[0]]: {
    bottom: "40px",
    left: "calc(50% - 35px)",
    width: "70px",
  },
  [mediaQueries[1]]: {
    display: "none",
  },
});

const showScrollPrompt = css({
  opacity: arrowOpacity,
  transition: "opacity 1s",
  animation: `${scrollPromptBounce} 1s ease infinite`,
  animationDelay: "3s",
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
  const [mobileRangeRef, isMobileRangeInView] = useInView();
  const [depthRef, isDepthInView] = useInView({ threshold: 0.3 });
  const [mobileDepthRef, isMobileDepthInView] = useInView();
  const [tShapedRef, isTShapedInView] = useInView({ threshold: 0.3 });
  const [mobileTShapedRef, isMobileTShapedInView] = useInView();
  const depthScrollRef = useRef();
  const tShapedScrollRef = useRef();
  const [isPromptShowing, setIsPromptShowing] = useState(true);

  const mappedData = data.allMdx.nodes.reduce((accumulator, itemObj) => {
    accumulator[itemObj.frontmatter.slug] = itemObj;
    return accumulator;
  }, {});

  const handleArrowClick = event => {
    event.preventDefault();
    if (isRangeInView) {
      depthScrollRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (isDepthInView) {
      tShapedScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isDepthInView && !isRangeInView && !isTShapedInView) {
      setIsPromptShowing(true);
    } else if (isRangeInView && !isDepthInView && !isTShapedInView) {
      setIsPromptShowing(true);
    } else {
      setIsPromptShowing(false);
    }
  }, [isDepthInView, isRangeInView, isTShapedInView]);

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
            <div css={mobileAnimation} ref={mobileRangeRef} aria-hidden="true">
              <HomeAnimation
                isRangeInView={isMobileRangeInView}
                isDepthInView={isMobileDepthInView}
                isTShapedInView={isMobileTShapedInView}
                initialStep="step1"
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={rangeRef}>
              <MDXRenderer>{mappedData.range.body}</MDXRenderer>
            </div>
          </article>
          <article id="depth" css={sectionStyle} ref={depthScrollRef}>
            <div css={mobileAnimation} ref={mobileDepthRef} aria-hidden="true">
              <HomeAnimation
                isRangeInView={isMobileRangeInView}
                isDepthInView={isMobileDepthInView}
                isTShapedInView={isMobileTShapedInView}
                initialStep="step2"
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={depthRef}>
              <MDXRenderer>{mappedData.depth.body}</MDXRenderer>
            </div>
          </article>
          <article id="tshaped" css={sectionStyle} ref={tShapedScrollRef}>
            <div
              css={mobileAnimation}
              ref={mobileTShapedRef}
              aria-hidden="true"
            >
              <HomeAnimation
                isRangeInView={isMobileRangeInView}
                isDepthInView={isMobileDepthInView}
                isTShapedInView={isMobileTShapedInView}
                initialStep="step4"
                isMobile
              />
            </div>
            <div css={sectionContentStyle} ref={tShapedRef}>
              <MDXRenderer>{mappedData.tshaped.body}</MDXRenderer>
            </div>
          </article>
        </div>
      </div>
      <button
        css={[scrollPromptStyle, isPromptShowing ? showScrollPrompt : null]}
        aria-hidden="true"
        onClick={handleArrowClick}
      >
        <HomeMoreArrowIcon />
      </button>
    </Layout>
  );
};

export default IndexPage;
