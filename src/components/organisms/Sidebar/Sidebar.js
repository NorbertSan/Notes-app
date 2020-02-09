import React from 'react';
import styled from 'styled-components';
import LogoutIcon from 'assets/icons/logout.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import EditIcon from 'assets/icons/edit.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoIcon from 'assets/icons/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.note};
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  display: grid;
  grid-template-rows: 2fr 3fr 3fr;
  justify-items: center;
  padding: 20px 0;
`;

const StyledLogo = styled.div`
  background: url(${LogoIcon}) no-repeat center center / cover;
  width: 80px;
  height: 80px;
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

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo />
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
      activeClass="active"
    />
  </StyledWrapper>
);
export default Sidebar;
