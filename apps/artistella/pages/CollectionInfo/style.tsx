import styled from 'styled-components'

//ele
export const EleDiv = styled.div`
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`

export const EleDivB=styled(EleDiv)`
  border: solid 1px #dfd9ce;
  height:90%;
  &:hover{
    cursor: pointer;
  }
`
export const  BroImgDiv = styled.div`
  width: 100%;
  height : 60%;
`
export const  BroContentDiv = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto 0px;
  padding: 30px 0 12px 0;
   *{
    margin-bottom: 10px;
  }
`
export const GridImage=styled.img`
    width:100%;
    height:230px;
    min-width: 100px;
    min-height: 100px;
    object-fit:cover;
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  padding-top: 10px;
`


export const ImageHead_s=styled.p`
  font-size:1.5rem;
  color:black;
  white-space:nowrap;
  text-overflow:ellipsis;
`

export const ImageSummary = styled.div`
    font-size:0.875rem;
    color:#737170;
    max-height:44px;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical; 
`


export const ImageHead = styled.p`
    font-size:1.25rem;
    font-weight:bold;
    color:black;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`

export const GridImgDiv = styled.div`
  width: 99%;
`
export const GridContent = styled.div`
  width: 80%;
  height: 100px;
  margin: 10px 0px;
   *{
    margin-top: 10px;
  }
`
//grid
export interface ShapeProps{
  shape:number;
}

export const GridDiv=styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`
export const Grid=styled.div`
  width:74%;
  display: grid;
  grid-template-columns: repeat(${(props:ShapeProps)=>props.shape},1fr);
  grid-auto-rows: minmax(450px,auto);
  grid-gap: 27px; 
`

//search view
export const SearchRayout=styled.div`
  width:100%;
  display:block;
  padding-left: 20px;
`

export const SearchContent = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
`

export const SearchDiv=styled.div`
  margin: auto 0 30px auto;
  width: 74%;
  display:grid;
  grid-template-columns: repeat(1, 66% 32%);
  justify-content:flex-end;
  grid-gap: 27px;
`


export const Divbar = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  :focus-within{
    border: 2px solid black;
  }
`

export const Search =  styled.input`
  width: 90%;
  height: 80%;
  margin-left: 10px;
  font-size: 1.1rem;
  border: none;
  :focus{
    outline: none;
  }
`

export const Button =styled.button`
    background-color: white;
    border: none;
    
    &:hover{
      cursor: pointer;
    }
`

export const Idiv = styled.div`
  display  : flex ;
  justify-content: space-between;
`

export const ListDiv =styled.div`
  width: 60%;
  border-radius:8px;
  border:solid 1px black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  position:relative;
`
export const ListIcon=styled.img`
  object-fit:contain;
  position:absolute;
  right:12px;
  top:16px;
  width:12px;
  height:12px;
`
export const Recently=styled.span`
  font-size:1em;
  line-height:1.6;
  padding-left: 7px;

  &:hover{
    cursor: pointer;
  }
`
export const BoxView=styled.div`
  width: 30%;
  border-radius:8px;
  border:solid 1px black;
  display:flex;
  justify-content: center;
  align-items:center;
  position:relative;
`
export const BoxIcon=styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin:0 5px;
  width:24px;
  height:24px;
  &:hover{
    cursor: pointer;
  }
`
//filter
export const FilterDiv = styled.div`
  width:20vw;
  height: 60vh;
  padding: 20px;
  margin-right:27px;
  border-radius:8px;
  background-color:#faf8f4;
  display: block;
  position:absolute;
  top:0px;
`
export const Title=styled.h1`
  margin-bottom:18px;
  font-size:18px;
  font-weight:bold;
  color:#151d29;
`
export const Select=styled.div`
  width:100%;
  height: 40px;
  margin-bottom:12px;
  border-radius:6px;
  background-color:#252220;
  display:flex;
  align-items: center;
  justify-content: space-around ;
  position:relative;

  &:hover{
    cursor: pointer;
  }
`
export const SelectLogo=styled.img`
  width: 7%;
  object-fit:contain;
  margin-right: 6px;
`
export const SelectName=styled.h1`
  width: 70% ;
  font-size:15px;
  font-weight:bold;
  color:white;
`
export const SelectArrow=styled.img`
  width: 5%;
  right:12px;
`
export const MinMax=styled.input`
  background-color:white;
  width: 45%;
  padding:11px 12px;
  border-radius:6px;
  border:solid 1px black;
`
export const To= styled.span`
  display: inline-block;
  width: 20px;
  font-size:13px;
  color:#aba29c;
  text-align:center;
`
export const ApplyDiv=styled.div`
  width:100%;
  height:36px;
  margin-top: 24px;
  border-radius:6px;
  background-image:linear-gradient(99deg, #fcd900, #fb9800 100%);
  font-size:15px;
  font-weight:bold;
  color:white;
  display:flex;
  justify-content: center;
  align-items:center;

  &:hover{
    cursor: pointer;
  }
`

//collection top
export const ArtTopDiv=styled.div`
  width:100%;
  padding: 0 120px 0 120px;
  text-align:center;
`
export const ArtButtons=styled.div`
  width:100%;
  height:29px;
  margin:24px 0 0;
  text-align:center;
  border-bottom: 1px solid #dfd9ce; 
`
export const ActLine=styled.span`
  border-bottom: 2px solid transparent;
  border-image:linear-gradient(92deg, #fcd900, #fb9800);
  border-image-slice:1;
  display:inline-block; 
  padding-bottom: 4px;

  &:hover{
    cursor: pointer;
  }
`
export const ItemIcon=styled.img`
  line-height:29px;
  vertical-align:middle;
  margin:0 1px 2px 1px;
  width:20px;
  height:20px;
`
export const ActivityIcon=styled.img`
  line-height:29px;
  vertical-align:middle;
  margin:0 1px 2px 1px;
  width:20px;
  height:20px;
`
export const Margin=styled.span`
  display:inline-block;
  width: 36px;
  background-color:white;
`

//info number
export const Info=styled.div`
margin-top:5.5%;
font-size: 0.8em;
color:#737170;
`
export const Number=styled.h2`
font-size:1em;
font-weight:bold;
line-height:1.38;
color:#fb9c00;
`
export const InfoDiv=styled.div`
width:100%;
border-radius:8px;
border: solid 1px #dfd9ce;
text-align:center;
height:68px;
padding:11px 10px;
`

//collection browse
export const Div =styled.div`
  margin-top: 100px;
  width:100%;
  background-color:white;
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Photo=styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom:12px;
    border: 3px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#fff, #fff), 
    linear-gradient(135deg, #fcd900, #fb9800);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

export const PhotoDiv=styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 30px;
`

export const Name=styled.h1`
  font-size:2.2em;
  font-weight:900;
  margin-bottom:30px;
`
export const Content=styled.p`
  width: 50%;
  font-size:0.9em;
  line-height:1.71;
  color:#737170;
`
export const ArtistGrid=styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 12px;
  margin-bottom:20px;
`