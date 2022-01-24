import React from 'react';
import styled from 'styled-components';

import Index from './slideImage';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  color: pink;
`;

export function Main(props: MainProps) {
  return (
    <StyledMain>
      <h1>Welcome to Main!</h1>
      <Index />
    </StyledMain>
  );
}

export default Main;
