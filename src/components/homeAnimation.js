import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";

import { rhythm } from "../utils/typography";
import { cssDefaults, mediaQueries } from "../utils/consts";

const containerStyle = css({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: `calc(33.3333%) + ${rhythm(1)}`,
  padding: `${rhythm(1)} ${rhythm(2)}`,
  pointerEvents: "none",
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
  maxWidth: "100%",
  [mediaQueries[1]]: {
    maxHeight: "200px",
    maxWidth: "200px",
  },
});

const HomeAnimation = props => {
  const {
    isRangeInView,
    isDepthInView,
    isTShapedInView,
    isMobile,
    initialStep,
  } = props;
  const block1AnimationControls = useAnimation();
  const block2AnimationControls = useAnimation();

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  };

  const block1Animations = {
    step1: {
      x: -125,
      y: 0,
      height: 50,
      width: 300,
    },
    step2: {
      x: 0,
      y: 0,
      height: 50,
      width: 50,
    },
    step3: {
      x: 0,
      y: -125,
      height: 300,
      width: 50,
    },
    step4: {
      x: 0,
      y: -125,
      height: 50,
      width: 50,
    },
    step5: {
      x: -110,
      y: -125,
      height: 50,
      width: 270,
    },
  };

  const block2Animations = {
    hidden: {
      x: 0,
      y: 0,
      height: 50,
      width: 50,
      opacity: 0,
    },
    step5: {
      x: 0,
      y: 0,
      height: 300,
      width: 50,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (isMobile && initialStep) {
      block1AnimationControls.start(block1Animations[initialStep]);
      block2AnimationControls.start(block2AnimationControls.hidden);

      if (isRangeInView) {
        block1AnimationControls.start(block1Animations.step1);
        block2AnimationControls.start(block2Animations.hidden);
      } else if (isDepthInView) {
        block1AnimationControls.start(block1Animations.step3);
        block2AnimationControls.start(block2Animations.hidden);
      } else if (isTShapedInView) {
        block1AnimationControls.start(block1Animations.step5);
        block2AnimationControls.start(block2Animations.step5);
      }
    }

    if (isRangeInView && !isDepthInView) {
      block1AnimationControls.start(block1Animations.step1);
      block2AnimationControls.start(block2Animations.hidden);
    } else if (isRangeInView) {
      block1AnimationControls.start(block1Animations.step2);
      block2AnimationControls.start(block2Animations.hidden);
    } else if (isDepthInView && !isTShapedInView) {
      block1AnimationControls.start(block1Animations.step3);
      block2AnimationControls.start(block2Animations.hidden);
    } else if (isDepthInView && isTShapedInView) {
      block1AnimationControls.start(block1Animations.step4);
      block2AnimationControls.start(block2Animations.hidden);
    } else {
      block1AnimationControls.start(block1Animations.step5);
      block2AnimationControls.start(block2Animations.step5);
    }
  });

  return (
    <div css={isMobile ? mobileContainerStyle : containerStyle}>
      <svg width="400" viewBox="0 0 400 400" css={svgElementStyle}>
        <motion.rect
          width="50"
          height="50"
          x="175"
          y="175"
          fill={cssDefaults.headingColour}
          transition={spring}
          animate={block1AnimationControls}
        />
        <motion.rect
          width="50"
          height="50"
          x="175"
          y="50"
          fill={cssDefaults.headingColour}
          opacity={0}
          transition={spring}
          animate={block2AnimationControls}
        />
      </svg>
    </div>
  );
};

export default HomeAnimation;
