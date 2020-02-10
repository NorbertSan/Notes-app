import styled, { css } from 'styled-components';
import SearchIcon from 'assets/icons/search.svg';

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
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  ${({ search }) =>
    search &&
    css`
      padding-left: 30px;
      background-image: url(${SearchIcon});
      background-position: 10px 50%;
      background-size: 12px;
      background-repeat: no-repeat;
    `}
`;

export default Input;
