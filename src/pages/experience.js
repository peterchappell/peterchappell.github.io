import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import ExperienceItem from "../components/experienceItem";
import SEO from "../components/seo";

export const query = graphql`
  query Data {
    allExperienceCsv {
      edges {
        node {
          id
          description
          end
          start
          title
          url
          company
          type
          image
        }
      }
    }
  }
`;

const experienceList = css({
  listStyleType: "none",
  margin: 0,
});

export default function Experience({ data }) {
  return (
    <Layout isContentPadded>
      <SEO
        title="Experience"
        description="Work experience and qualifications for Pete Chappell."
      />
      <h2>Experience</h2>
      <ul css={experienceList}>
        {data.allExperienceCsv.edges.map(({ node: experienceItemData }) => (
          <ExperienceItem
            key={experienceItemData.id}
            start={experienceItemData.start}
            end={experienceItemData.end}
            title={experienceItemData.title}
            company={experienceItemData.company}
            url={experienceItemData.url}
            description={experienceItemData.description}
            image={experienceItemData.image}
          />
        ))}
      </ul>
    </Layout>
  );
}
