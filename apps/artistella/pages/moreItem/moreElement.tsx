import React from 'react'
import Link from 'next/link'
import {EleDivS,SubImgDiv,GridImage,SubContentDiv,ImageHeadS,ImageSummary} from './style';

export function MoreEle({img,header,text}){
  return(
    <Link href='/ItemDetail'>
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