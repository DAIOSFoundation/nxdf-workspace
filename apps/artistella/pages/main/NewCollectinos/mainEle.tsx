import React from 'react'
import {EleDivM,GridImgDiv,GridImage,GridContent,ImageHead,ImageSummary,ImageDate} from './style';



function GridElm({img,header,text,date}){

    return(
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
    )
  }

export default GridElm;
