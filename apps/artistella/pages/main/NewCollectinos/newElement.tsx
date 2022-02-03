import React from 'react'
import {EleDivM,GridImgDiv,GridImage,GridContent,ImageHead,ImageSummary,ImageDate} from './style';
import Link from 'next/link'


function GridElm({img,header,text,date}){

    return(
      <Link href='/CollectionInfo'>
      <EleDivM>
          <GridImgDiv>
            <GridImage src={img} />
          </GridImgDiv>
          <GridContent>
            <ImageHead>{header}</ImageHead>
            <ImageSummary>{text}</ImageSummary>
            <ImageDate>{date}</ImageDate>
          </GridContent>
        </EleDivM>
      </Link>
    )
  }

export default GridElm;
