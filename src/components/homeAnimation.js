import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import posed from "react-pose";
import { tween } from "popmotion";
import { interpolate } from "flubber";

import { rhythm } from "../utils/typography";
import { cssDefaults, mediaQueries } from "../utils/consts";

const containerStyle = css({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: `calc(33.3333%) + ${rhythm(1)}`,
  padding: `${rhythm(1)} ${rhythm(2)}`,
  position: "fixed",
  top: 0,
  width: "33.3333%",
  [mediaQueries[0]]: {
    width: "50%",
  },
});

const mobileContainerStyle = css({
  display: "block",
});

const svgElementStyle = css({
  display: "block",
  maxHeight: "100%",
  maxWidth: "100%",
  [mediaQueries[1]]: {
    maxHeight: "200px",
    maxWidth: "200px",
  },
});

const paths = {
  broad: "M0 153h380v80H0z",
  deep: "M230 0v380h-80V0z",
  tShaped: "M380 0v80H230v300h-80V80H0V0h380z",
};

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
  }).pipe(interpolate(from, to));

const Shape = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition,
    };

    return config;
  }, {})
);

const HomeAnimation = props => {
  const { isRangeInView, isDepthInView, isTShapedInView, isMobile } = props;

  const [pathIndex, setPathIndex] = useState(0);

  useEffect(() => {
    if (isRangeInView && !isDepthInView) {
      setPathIndex(0);
    } else if (isDepthInView && !isTShapedInView) {
      setPathIndex(1);
    } else {
      setPathIndex(2);
    }
  }, [isRangeInView, isDepthInView, isTShapedInView]);

  return (
    <div css={isMobile ? mobileContainerStyle : containerStyle}>
      <svg width="380" height="380" viewBox="0 0 380 380" css={svgElementStyle}>
        <Shape pose={pathIds[pathIndex]} fill={cssDefaults.headingColour} />
      </svg>
    </div>
  );
};

export default HomeAnimation;
