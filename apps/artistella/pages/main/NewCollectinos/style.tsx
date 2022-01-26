import styled from 'styled-components';

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
export const EleDivM=styled(EleDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover{
    cursor:pointer;
  }
`
export const ImageDate=styled.p`
  font-size:0.875rem;
  color:#aea9a5;
`

export const GridImage=styled.img`
  width:100%;
  min-width: 100px;
  height:100%;
  min-height: 100px;
`
export const GridDiv = styled.div`
  padding: 70px 0px;
  width: 100%;
  background: #faf8f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Grid=styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px,50%);
  grid-gap: 26px;
  align-items: center;
  justify-content: center;
`
export const GridTitle = styled.div`
  width: 80%;
  height: 5%;
  display: inline-block;
  margin-bottom: 16px;
  font-size:30px;
  font-weight:bold;
  color:black;
`
export const TopDiv=styled.div`
  width: 80%;
  margin-bottom: 16px;
  padding-top: 16px;
  display:flex;
  align-items:center;
`
export const MoreButton = styled.span`
  width: 75px;
  height: 32px;
  padding: 8px 12px;
  border-radius:6px;
  border: solid 1px black;
  position:absolute;
  right:10%;
  display:flex;
  align-items:center;
  justify-content:center;
  &:hover{
    cursor:pointer;
  }
`