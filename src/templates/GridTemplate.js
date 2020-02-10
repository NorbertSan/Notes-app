import React from 'react';
import styled from 'styled-components';

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 100px 50px;
  grid-gap: 35px;
`;

export default GridTemplate;
