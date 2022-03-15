import { EleDivB, BroImgDiv, BroContentDiv, GridImage, ImageHead_s, ImageSummary, Price } from '../style'
import Link from 'next/link'

export function SubElmB({ img, header, text, price }) {
  return (
    <Link href='/ItemDetail'>
        <EleDivB>
          <BroImgDiv>
            <GridImage src={img}></GridImage>
          </BroImgDiv>
          <BroContentDiv>
            <ImageHead_s>{header}</ImageHead_s>
            <ImageSummary>{text}</ImageSummary>
            <Price>{price}</Price>
          </BroContentDiv>
        </EleDivB>
    </Link>
    )
  }