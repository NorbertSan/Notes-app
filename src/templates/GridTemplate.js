import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import withContext from 'hoc/withContext';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 35px;
  position: relative;
`;

const StyleInput = styled(Input)`
  position: absolute;
  top: -100px;
  left: 0;
  width: 300px;
  z-index: 9999;
`;

const GridTemplate = ({ children, pagetype }) => (
  <GridWrapper>
    <StyleInput placeholder={`search ${pagetype}`} search />
    {children}
  </GridWrapper>
);

export default withContext(GridTemplate);
