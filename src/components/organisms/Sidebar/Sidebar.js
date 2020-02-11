import React from 'react';
import styled from 'styled-components';
import LogoutIcon from 'assets/icons/logout.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import EditIcon from 'assets/icons/edit.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  height: 100vh;
  background: ${({ pagetype, theme }) => theme[pagetype]};
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  display: grid;
  grid-template-rows: 2fr 3fr 3fr;
  justify-items: center;
  padding: 20px 0;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoutIcon = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pagetype }) => (
  <StyledWrapper pagetype={pagetype}>
    <Heading as={NavLink} to="/">
      LOGO
    </Heading>
    <StyledIcons>
      <ButtonIcon
        as={NavLink}
        to="/note"
        activeclass="active"
        icon={EditIcon}
      />
      <ButtonIcon
        as={NavLink}
        to="/article"
        activeclass="active"
        icon={BulbIcon}
      />
      <ButtonIcon
        as={NavLink}
        to="/twitter"
        activeclass="active"
        icon={TwitterIcon}
      />
    </StyledIcons>
    <StyledLogoutIcon
      icon={LogoutIcon}
      as={NavLink}
      to="/login"
      activeclass="active"
    />
  </StyledWrapper>
);
export default withContext(Sidebar);
