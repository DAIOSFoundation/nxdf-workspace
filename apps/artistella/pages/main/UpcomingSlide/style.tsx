import styled from 'styled-components';

export const ImageSlider = styled.div`
  width: 100%;
  height: 100%;

  .slick-dots{
    top: 60vh;
    li button:before{
      color: #fbac00;
      font-size: 10px;
    }
  }
`
interface Image {
  path:string;
}
export const TransDiv = styled.div`
  width: 100%;
  height: 60vh; 
  background: linear-gradient(to bottom, rgba(76, 71, 67, 0.18), rgba(31, 29, 27, 0.89)),url(${(props:Image) => props.path || 'images/1.png'});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top:80px;
  display: flex;
  align-items: center;
  justify-content: center;

  *{
    margin: 15px 0px;
  }
`
export const TitleDiv=styled.div`
  height: 50%;
  width: 80%;
  text-align: left;
`
export const TransTitle = styled.div`
  font-size: 58px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  white-space: nowrap;
`

export const TransSum=styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: white;
`

export const ExpButton=styled.div`
  width: 20%;
  height: 56px;
  border-radius: 6px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    cursor: pointer;
  }
`
export const TextSpan=styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height:1.33;
  letter-spacing: normal;
  color: white;
`
