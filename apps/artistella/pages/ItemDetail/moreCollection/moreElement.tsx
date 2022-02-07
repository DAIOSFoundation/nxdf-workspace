import React from 'react'
import { EleDiv, GridImage, ImageHeadS, ImageSummary,Price, EleDivMore,MoreContDiv,MoreImgDiv } from "./style"






export function SubElmP({img, header, text, price }) {
  
  return (
    <EleDivMore>
      <MoreImgDiv>
        <GridImage src={img}></GridImage>
      </MoreImgDiv>
      <MoreContDiv>
        <ImageHeadS>{header}</ImageHeadS>
        <ImageSummary>{text}</ImageSummary>
        <Price>{price} SOL</Price>
      </MoreContDiv>
    </EleDivMore>
  )
}