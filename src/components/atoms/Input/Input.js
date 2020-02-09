import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  background: ${({ theme }) => theme.grey100};
  outline: none;
  border: none;
  border-radius: 20px;
  ::placeholder {
    color: ${({ theme }) => theme.grey300};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default Input;
