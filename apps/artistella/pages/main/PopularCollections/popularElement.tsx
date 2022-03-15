import React from 'react';
import {EleDivS,SubImgDiv,GridImage,SubContentDiv,ImageHeadS,ImageSummary} from './style';
import Link from 'next/link';

export function SubElm({img,header,text}){
  return(
    <Link href='/collectionInfo'>
    <EleDivS>
      <SubImgDiv>
        <GridImage src={img}></GridImage>
      </SubImgDiv>
      <SubContentDiv>
        <ImageHeadS>{header}</ImageHeadS>
        <ImageSummary>{text}</ImageSummary>
      </SubContentDiv>
    </EleDivS>
    </Link>
  )
}