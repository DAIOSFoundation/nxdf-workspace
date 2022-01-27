import styled from 'styled-components';

//activities
export const Div=styled.div`
  width:100%;
  margin-top:16px;
`
export const ActivDiv=styled.div`
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

//table
export const DivTable=styled.div`
  background-color:#faf8f4;
  border-radius:8px;
  color:#737170;
  padding:20px;
  margin-top:4px;
`
export const Select =styled.select`
  background-color:white;
  padding:5px 15px 5px 10px;
  border-radius:6px;
  border:solid 1px #dfd9ce;
  color:#737170;
  background:url(images/itemDetail/icon-updown.svg) no-repeat 95% 50%;
  appearance: none;
  &::-ms-expand { 
    display: none;
  }
  &:hover{
    cursor: pointer;
  }
`
export const Option=styled.div`
  position:absolute;
  right:0;
`
export const Span=styled.span`
  color:black;
  margin-right:4px;
`

export const Styles = styled.div`
  table {
      width: 100%;
        //테이블 둥글게 처리 각 tr,td의 첫요소, 마지막 요소에 radius 삽입
        tbody tr:first-child td:first-child {
          border-top-left-radius: 12px;
        }
        tbody tr:last-child td:first-child {
          border-bottom-left-radius: 12px;
        }
        tbody tr:first-child td:last-child {
          border-top-right-radius: 12px;
        }
        tbody tr:last-child td:last-child {
          border-bottom-right-radius: 12px;
        }



        tbody tr {
          color:white;

          &:nth-child(odd){ 
            background-color:#c6b2a4;
          }
          &:nth-child(even){
            background-color:#9c7e6a;
          }

        }

        th,
        td {
            text-align:left;
            padding: 1rem;
            font-size:1rem;
        }

        border-collapse:collapse;
  }


  .pagination {
      padding: 0.5rem;
      display:flex;
      margin-top:16px;
      align-items:center;
      position:relative;
  }
`

//table pagination
export const RightArrow=styled.div`
  background-color:white;
  width:30px;
  height:30px;
  content:url('images/itemDetail/icon-pagination-right.svg');
  border:solid 1px #dfd9ce;
  border-radius: 8px; 
  color: #9c7e6a;
  padding:6px;
  &:hover{
    cursor: pointer;
  }
`
export const LeftArrow=styled.div`
  background-color:white;
  width:30px;
  height:30px;
  content:url('images/itemDetail/icon-pagination-left.svg');
  border:solid 1px #dfd9ce;
  border-radius: 8px;
  color: #9c7e6a;
  padding:6px;
  &:hover{
    cursor: pointer;
  }
`