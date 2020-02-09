import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  background: ${({ theme }) => theme.note};
  border: none;
  outline: none;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.grey200};
      font-size: ${({ theme }) => theme.fontSize.xs};
      border-radius: 20px;
    `};
`;

export default Button;
