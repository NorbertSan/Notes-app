import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 150px 0;
  margin: 0 50px;
  grid-gap: 35px;
  position: relative;
`;

const StyleInput = styled(Input)`
  position: absolute;
  top: 50px;
  left: 0;
  width: 300px;
`;

const GridTemplate = ({ children }) => (
  <GridWrapper>
    <StyleInput placeholder="search by title" search />
    {children}
  </GridWrapper>
);

export default GridTemplate;
