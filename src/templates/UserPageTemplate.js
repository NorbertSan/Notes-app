import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 150px 50px;
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    {children}
    <Sidebar />
  </StyledWrapper>
);

export default UserPageTemplate;
