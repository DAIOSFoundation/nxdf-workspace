import React from 'react';
import {EleDivS,SubImgDiv,GridImage,SubContentDiv,ImageHeadS,ImageSummary} from './style';

export function SubElm({img,header,text}){
  return(
    <EleDivS>
      <SubImgDiv>
        <GridImage src={img}></GridImage>
      </SubImgDiv>
      <SubContentDiv>
        <ImageHeadS>{header}</ImageHeadS>
        <ImageSummary>{text}</ImageSummary>
      </SubContentDiv>
    </EleDivS>
  )
}