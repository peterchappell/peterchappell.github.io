import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import {
  containerStyle,
  titleStyle,
  metaStyle,
  imageContainerStyle,
} from "./workListItems.styles";

export default function WorkListItem(props) {
  const { title, slug, type, timeFrame, featuredImageData, TagName } = props;

  const displayImage = imageData => {
    if (!imageData) {
      return null;
    }
    return <Img fluid={imageData.childImageSharp.fluid} />;
  };

  return (
    <TagName css={containerStyle}>
      <h3 css={titleStyle}>
        <Link to={slug}>{title}</Link>
      </h3>
      <dl css={metaStyle}>
        <dt className="sr-only">Timeframe</dt>
        <dd>{timeFrame}</dd>
        <dt className="sr-only">Type</dt>
        <dd>{type}</dd>
      </dl>
      <Link to={slug} css={imageContainerStyle}>
        {displayImage(featuredImageData)}
      </Link>
    </TagName>
  );
}

WorkListItem.defaultProps = {
  TagName: "li",
};
