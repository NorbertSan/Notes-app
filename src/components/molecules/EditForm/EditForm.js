import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 2px 5px ${({ theme }) => theme.grey300};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

const StyledTextarea = styled(Input)`
  resize: none;
  height: 150px;
`;

class EditForm extends React.Component {
  render() {
    const { pagetype } = this.props;
    return (
      <StyledWrapper>
        <Heading>{`Edit your ${pagetype}`}</Heading>
        <Input placeholder="title" />
        {pagetype === 'article' && <Input placeholder="article url" />}
        {pagetype == 'twitter' && <Input placeholder="account name" />}
        <StyledTextarea placeholder="description" as="textarea" />
        <Button secondary>Save changes</Button>
      </StyledWrapper>
    );
  }
}

export default withContext(EditForm);
