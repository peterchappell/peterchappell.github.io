import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

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
        }
      }
    }
  }
`;

export default function Experience({ data }) {
  return (
    <Layout>
      <h2>Experience</h2>
      {data.allExperienceCsv.edges.map(({ node: experienceItemData }) => (
        <div key={experienceItemData.id}>
          <em>
            {experienceItemData.start} - {experienceItemData.end}
          </em>
          <h4>{experienceItemData.title}</h4>
          <p>{experienceItemData.description}</p>
        </div>
      ))}
    </Layout>
  );
}
