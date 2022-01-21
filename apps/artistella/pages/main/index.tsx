import React from 'react';
import styled from 'styled-components';

import SlideImage from './slideImage/slideImage';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  color: pink;
`;

export function Main(props: MainProps) {
  return (
    <StyledMain>
      <h1>Welcome to Main!</h1>
      <SlideImage />
    </StyledMain>
  );
}

export default Main;
