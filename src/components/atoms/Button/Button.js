import styled, { css } from 'styled-components';
import withContext from 'hoc/withContext';

const Button = styled.button`
  padding: 10px 15px;
  background: ${({ pagetype, theme }) => theme[pagetype]};
  border: none;
  outline: none;
  border-radius: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.grey200};
      font-size: ${({ theme }) => theme.fontSize.xs};
      border-radius: 20px;
    `};
`;

export default withContext(Button);
