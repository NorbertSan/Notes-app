import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
