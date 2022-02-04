import styled from 'styled-components'

export const Div=styled.div`
  width:100%;
  margin-top:16px;
`
export const MoreDiv=styled.div`
  width:100%;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  position:relative;
  font-size:1em;
  line-height:normal;
  display:flex;
  align-items:center;
`

export const Icon = styled.img`
  margin-right:4px;
`
export const Up=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;
  &:hover{
    cursor: pointer;
  }
`
export const Down=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;
  &:hover{
    cursor: pointer;
  }
`

//element
export const EleDiv = styled.div`
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`
export const ImageSummary = styled.p`
    font-size:0.875rem;
    color:#737170;
`
export const GridImage=styled.img`
    width:100%;
    min-width: 100px;
    height:100%;
    min-height: 100px;
`
export const ImageHeadS=styled.p`
  font-size:1.5rem;
  color:black;
`
export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  padding-top: 10px;
`
export const EleDivMore=styled(EleDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  &:hover{
    cursor: pointer;
  }
`

export const MoreImgDiv = styled.div`
  width: 100%;
  height: 60%;
  
`
export const MoreContDiv = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
   *{
    margin-bottom: 10px;
  }
`