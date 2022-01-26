import React from "react"
import {EleDivP, PagContent, GridImgDiv, GridImage, ImageHead, ImageSummary} from './style';


export function PagElm({img,header,text}){
    return(
      <EleDivP>
        <GridImgDiv>
          <GridImage src={img} />
        </GridImgDiv>
        <PagContent>
          <ImageHead>{header}</ImageHead>
          <ImageSummary>{text}</ImageSummary>
        </PagContent>
      </EleDivP>
    )
  }