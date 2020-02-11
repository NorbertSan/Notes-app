import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import AddCard from 'components/organisms/AddCard/AddCard';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import CancelIcon from 'assets/icons/cancel.svg';

const StyledWrapper = styled.div`
  margin: 150px 50px;
`;
const StyledAddIcon = styled(ButtonIcon)`
  position: fixed;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
  background-color: grey;
  z-index: 999;
`;

class UserPageTemplate extends React.Component {
  state = {
    isOpen: false,
  };

  toggleAddPanel = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { children, pagetype } = this.props;
    return (
      <>
        <AddCard isVisible={this.state.isOpen} />
        <StyledAddIcon
          icon={this.state.isOpen ? CancelIcon : PlusIcon}
          color={pagetype}
          onClick={this.toggleAddPanel}
        />
        <StyledWrapper>
          {children}
          <Sidebar />
        </StyledWrapper>
      </>
    );
  }
}

export default withContext(UserPageTemplate);
