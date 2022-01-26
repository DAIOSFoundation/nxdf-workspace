import React from 'react';
import {TransDiv,TitleDiv,TransTitle,TransSum,ExpButton,TextSpan} from './style';

function TransImage({title, summary, path}) {
  return (
    <TransDiv path={path}>
      <TitleDiv>
        <TransTitle>{title}</TransTitle>
        <TransSum>{summary}</TransSum>
        <ExpButton><TextSpan>Explore Collection</TextSpan></ExpButton>
      </TitleDiv>
    </TransDiv>
  )
}

export default TransImage;
