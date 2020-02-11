import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  ${({ info }) =>
    info &&
    css`
      width: 100vh;
      color: ${({ theme }) => theme.grey300};
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Heading;
