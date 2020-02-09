import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 360px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  max-width: 400px;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;
const StyledHeader = styled.div`
  background: ${({ theme }) => theme.note};
  padding: 25px;
`;
const StyledContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  line-height: 1.5;
`;
const StyledButton = styled(Button)`
  margin: auto 0;
`;
const StyledParagraph = styled(Paragraph)`
  display: inline;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

const Card = () => (
  <StyledWrapper>
    <StyledHeader>
      <Heading as="h1">New features in css </Heading>
      <Paragraph>Created 3days ago</Paragraph>
    </StyledHeader>
    <StyledContent>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        unde qui tempore, beatae ea illum.
        <StyledParagraph>...read more</StyledParagraph>
      </Paragraph>
      <Button secondary>Remove</Button>
    </StyledContent>
  </StyledWrapper>
);

export default Card;
