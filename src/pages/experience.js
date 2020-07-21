import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

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
        }
      }
    }
  }
`;

const experienceItem = css({
  margin: `${rhythm(2)} 0`,
  position: "relative",
  "&:after": {
    backgroundColor: "#ccc",
    borderRadius: "50%",
    content: '""',
    display: "block",
    height: "40px",
    left: "-60px",
    position: "absolute",
    top: "10px",
    width: "40px",
  },
});

const qualificationItem = css({
  "&:after": {
    backgroundColor: "#666",
  },
});

const jobItem = css({
  "&:after": {
    backgroundColor: "#ccc",
  },
});

const experienceList = css({
  listStyleType: "none",
  margin: "0 0 0 60px",
});

export default function Experience({ data }) {
  const displayDate = (startDate, endDate) => {
    if (!endDate) {
      return startDate;
    }
    return `${startDate} - ${endDate}`;
  };

  const displayCompany = (company, url) => {
    if (!url) {
      return company;
    }
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {company}
      </a>
    );
  };

  return (
    <Layout isContentPadded>
      <h2>Experience</h2>
      <ul css={experienceList}>
        {data.allExperienceCsv.edges.map(({ node: experienceItemData }) => (
          <li
            key={experienceItemData.id}
            css={[
              experienceItem,
              experienceItemData.type === "job" ? jobItem : qualificationItem,
            ]}
          >
            <em>
              {displayDate(experienceItemData.start, experienceItemData.end)}
            </em>
            <h3>{experienceItemData.title}</h3>
            <h4>
              {displayCompany(
                experienceItemData.company,
                experienceItemData.url
              )}
            </h4>
            {experienceItemData.description && (
              <p>{experienceItemData.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
