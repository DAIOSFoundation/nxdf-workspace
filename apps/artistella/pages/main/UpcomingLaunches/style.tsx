import styled from 'styled-components';
import Slider from 'react-slick';

export const GridImage=styled.img`
    width:100%;
    min-width: 100px;
    height:100%;
    min-height: 100px;
`
export const ImageSummary = styled.p`
    font-size:0.875rem;
    color:#737170;
`
export const ImageHead = styled.p`
    font-size:1.25rem;
    font-weight:bold;
    color:black;
`
export const EleDiv = styled.div`
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`
export const GridImgDiv = styled.div`
  width: 99%;
  height : 60%;
  overflow: hidden;
`
export const GridContent = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
   *{
    margin-top: 10px;
  }
`
export const EleDivP=styled(EleDiv)`
  background-color: white;
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover{
    cursor:pointer;
  }
`

export const PagContent = styled(GridContent)`
  width: 80%;
  height : 100%;

  *{
    margin-top: 10px;
  }
  :last-child{
    margin: 20px 0px;
  }
`
export const PagTitle = styled.h1`
  font-size:30px;
  font-weight:bold;
  color:black;
  margin-bottom: 16px;
`

export const PageTitleDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const PagRayout = styled.div`
background: #faf8f4;
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slick-dots{
    top: 107%;
  }
  li button:before{
    font-size: 10px;
  }
`

export const PageSlider = styled(Slider)`
  width: 80%;
`
