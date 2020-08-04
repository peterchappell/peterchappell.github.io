import React from "react";

import {
  containerStyle,
  contentStyle,
  graphicContainerStyle,
  graphicStyle,
  descriptionStyle,
  titleStyle,
  companyStyle,
  yearStyle,
} from "./experienceItem.styles";

export default function ExperienceItem(props) {
  const {
    TagName,
    title,
    company,
    url,
    description,
    image,
    start,
    end,
  } = props;

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
    <TagName css={containerStyle}>
      <div css={contentStyle}>
        <h3 css={titleStyle}>{title}</h3>
        <p css={companyStyle}>
          <strong className="sr-only">Organisation:</strong>
          {displayCompany(company, url)}
        </p>
        <p css={yearStyle}>
          <strong className="sr-only">Timeframe:</strong>
          <em>{displayDate(start, end)}</em>
        </p>
        {description && <p css={descriptionStyle}>{description}</p>}
      </div>
      <div css={graphicContainerStyle}>
        {image && (
          <img
            src={`/experience_logos/${image}`}
            css={graphicStyle}
            alt={`${company} logo`}
          />
        )}
      </div>
    </TagName>
  );
}

ExperienceItem.defaultProps = {
  TagName: "li",
};
