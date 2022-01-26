import React from 'react';
import styled from 'styled-components';

import UpcomingSlide from './UpcomingSlide';
import NewCollections from './NewCollectinos';
import UpcomingLaunches from './UpcomingLaunches';
import PopularCollections from './PopularCollections';
import HowToUse from './HowToUse';

const StyledMain = styled.div`
  
`;

export function Main() {
  return (
    <StyledMain>
      <UpcomingSlide/>
      <NewCollections/>
      <UpcomingLaunches/>
      <PopularCollections/>
      <HowToUse/>
    </StyledMain>
  );
}

export default Main;
