import React from 'react'
import {EleDivM,GridImgDiv,GridImage,GridContent,ImageHead,ImageSummary,ImageDate} from './style';
import Link from 'next/link'


function GridElm({img,header,text,date}){

    return(
      <Link href='/collectionInfo'>
        <a>
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
        </a>
      </Link>
    )
  }

export default GridElm;
