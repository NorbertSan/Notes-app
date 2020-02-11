import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import withContext from 'hoc/withContext';
import UserPageTemplate from 'templates/UserPageTemplate';
import { connect } from 'react-redux';
import { getItem as getItemAction } from 'actions';

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

class DetailsPage extends React.Component {
  render() {
    const { pagetype, item } = this.props;
    console.log(this.props);
    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledHeader>
              <Heading>{item.title}</Heading>
              <Paragraph>3 days ago</Paragraph>
            </StyledHeader>
            <StyledParagraph>{item.description}</StyledParagraph>
            <Button as={Link} to={`/${pagetype}`}>
              Close / Saved
            </Button>
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
