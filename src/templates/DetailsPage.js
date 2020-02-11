import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import withContext from 'hoc/withContext';
import UserPageTemplate from 'templates/UserPageTemplate';
import { connect } from 'react-redux';
import UserIcon from 'assets/icons/user.svg';

const StyledWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const StyledHeader = styled.div`
  margin-bottom: 100px;
  position: relative;
  width: 100%;
`;
const StyledParagraph = styled(Paragraph)`
  line-height: 1.6;
  margin-bottom: 50px;
`;

const TwitterAvatar = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  top: 0;
  right: 0;
  background: url(${({ avatar }) => avatar}) no-repeat center center / cover;
  border-radius: 50%;
`;

const StyledParagraphInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  color: black;
  font-style: italic;
`;

const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.grey200};
`;

class DetailsPage extends React.Component {
  render() {
    const { pagetype, item } = this.props;
    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledHeader>
              {pagetype === 'twitter' && (
                <TwitterAvatar
                  avatar={
                    item.twitterName
                      ? `https://twitter-avatar.now.sh/${item.twitterName}`
                      : UserIcon
                  }
                />
              )}
              <Heading>{item.title}</Heading>
              <Paragraph>3 days ago</Paragraph>
            </StyledHeader>
            <StyledParagraph>
              {item.description}
              {pagetype === 'article' && (
                <StyledParagraphInfo
                  target="_blank"
                  href={item.articleUrl}
                  as="a"
                >
                  Go to article
                </StyledParagraphInfo>
              )}
            </StyledParagraph>
            <WrapperButtons>
              <Button as={Link} to={`/${pagetype}`}>
                Close / Saved
              </Button>
              <StyledButton>Edit</StyledButton>
            </WrapperButtons>
          </StyledWrapper>
        </UserPageTemplate>
      </>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const pageTypes = ['note', 'twitter', 'article'];
  const {
    location: { pathname },
  } = ownProps;
  const [currentPage] = pageTypes.filter(item => pathname.includes(item));
  return {
    item: store[currentPage].filter(
      item => item.id === ownProps.match.params.id,
    )[0],
  };
};
export default connect(mapStateToProps)(withContext(DetailsPage));
