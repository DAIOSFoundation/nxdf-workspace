import styled from 'styled-components';

export const Div =styled.div`
width: 100%;
height: 35vh;
border-radius: 6px;
box-shadow: 2px 2px 20px 0 rgba(195, 179, 160, 0.62);
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const UseNumber=styled.div`
font-weight:bold;
font-size:46px;
text-align:center;
color: #fbac00;
margin-bottom: 10px;
`

export const UseGridTitle=styled.div`
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:6px;
`

export const UseSummary=styled.div`
width: 80%;
line-height: 1.57;
font-size:14px;
text-align:center;
color:#737170;
`

export const UseDiv= styled.div`
  padding: 40px 0px;
  width:100%;
  height: 63vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const UseTitle=styled.div`
  width: 100%;
  height: 10%;
  margin-top: 4vh;
  margin-bottom: 50px;
  font-size:30px;
  font-weight:bold;
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UseGrid=styled.div`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(200px,auto);
  gap : 30px;
  
`


