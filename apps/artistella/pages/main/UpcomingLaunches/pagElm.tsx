import React from 'react';
import {EleDivP, PagContent, GridImgDiv, GridImage, ImageHead, ImageSummary} from './style';
import Link from 'next/link';

export function PagElm({img,header,text}){
    return(
      <Link href='/CollectionInfo'>
        <EleDivP>
          <GridImgDiv>
            <GridImage src={img} />
          </GridImgDiv>
          <PagContent>
            <ImageHead>{header}</ImageHead>
            <ImageSummary>{text}</ImageSummary>
          </PagContent>
        </EleDivP>
      </Link>
    )
  }