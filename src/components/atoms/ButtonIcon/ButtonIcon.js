import React from 'react';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

const ButtonIcon = styled.button`
  width: 45px;
  height: 45px;
  background: ${({ pageType, theme }) => theme.pageType}
    url(${({ icon }) => icon});
  border: none;
  outline: none;
  border-radius: 20px;
  background-size: 60%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &.active {
    background-color: #fff;
  }
`;

export default withContext(ButtonIcon);
