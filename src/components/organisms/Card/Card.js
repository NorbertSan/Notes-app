import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import LinkIcon from 'assets/icons/link.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import ClickIcon from 'assets/icons/click.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  min-height: 360px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  &::after {
    content: 'Check details';
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fontSize.s};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ color, theme }) => theme[color]};
    width: 100%;
    bottom: 0;
    height: 10%;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease;
  }
  &::before {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 5px;
    right: 20px;
    background: url(${ClickIcon});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: 50%;
    z-index: 999;
    opacity: 0;
  }
  &:hover::after,
  &:hover::before {
    opacity: 1;
  }
`;
const StyledHeader = styled.div`
  background: ${({ color, theme }) => theme[color]};
  padding: 25px;
  position: relative;
`;
const StyledContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  line-height: 1.5;
`;

const StyledParagraphInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 0;
`;
const LinkAvatar = styled.a`
  background: #fff url(${LinkIcon});
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 70%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const TwitterAvatar = styled.div`
  background: url(${({ avatar }) => avatar}) no-repeat center center / cover;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  right: 25px;
  top: 40px;
  border: 5px solid ${({ color, theme }) => theme[color]};
  &::after {
    content: '';
    background: rgba(255, 255, 255, 0.9) url(${TwitterIcon}) center no-repeat;
    background-size: 60%;
    z-index: 999;
    position: absolute;
    width: 100%;
    border-radius: 50%;
    height: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Card = ({ title, description, pagetype, articleUrl, twitterName }) => (
  <StyledWrapper color={pagetype}>
    <StyledHeader color={pagetype}>
      <Heading as="h1">{title} </Heading>
      <StyledParagraphInfo>Created 3days ago</StyledParagraphInfo>
      {pagetype === 'twitter' && (
        <TwitterAvatar
          color={pagetype}
          avatar={`https://twitter-avatar.now.sh/${twitterName}`}
        />
      )}

      {pagetype === 'article' && (
        <LinkAvatar href={articleUrl} target="_blank" />
      )}
    </StyledHeader>
    <StyledContent>
      <Paragraph>{description.substr(0, 150)}...</Paragraph>
      <Button secondary>Remove</Button>
    </StyledContent>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withContext(Card);
