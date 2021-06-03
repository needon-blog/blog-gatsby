import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Global, css } from '@emotion/react';
import styled from "@emotion/styled";

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

const TextStyle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
`;


const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <TextStyle>
      <Global styles={globalStyle} />
      <TextStyle>{title}</TextStyle>
      <Text1>{description}</Text1>
      {author}
    </TextStyle>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
