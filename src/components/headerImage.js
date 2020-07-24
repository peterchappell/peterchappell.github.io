import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "petechappell.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <img src={data.placeholderImage.childImageSharp.fixed.src} />;
};

export default HeaderImage;
