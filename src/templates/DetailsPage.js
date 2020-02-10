import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import withContext from 'hoc/withContext';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const StyledHeader = styled.div`
  margin-bottom: 50px;
`;
const StyledParagraph = styled(Paragraph)`
  line-height: 1.6;
  margin-bottom: 50px;
`;

const DetailsPage = ({ pagetype }) => (
  <>
    <UserPageTemplate>
      <StyledWrapper>
        <StyledHeader>
          <Heading>Lorem ipsum dolor sit.</Heading>
          <Paragraph>3 days ago</Paragraph>
        </StyledHeader>
        <StyledParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet
          in ab temporibus laboriosam veritatis eum obcaecati voluptas hic
          iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          eveniet in ab temporibus laboriosam veritatis eum obcaecati voluptas
          hic iusto!
        </StyledParagraph>
        <Button as={Link} to={`/${pagetype}`}>
          Close / Saved
        </Button>
      </StyledWrapper>
    </UserPageTemplate>
  </>
);

export default withContext(DetailsPage);
