import React from 'react';
import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.note} url(${({ icon }) => icon});
  border: none;
  outline: none;
  border-radius: 50px;
  background-size: 60%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &.active {
    background: #fff;
  }
`;

export default ButtonIcon;
