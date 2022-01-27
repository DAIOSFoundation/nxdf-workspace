import styled from 'styled-components'

//infoList
export const Div=styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction: column;
`
export const NameDiv=styled.div`
  width:100%;
`
export const Name=styled.h1`
  font-size:1.25em;
  font-weight:bold;
`
export const Artist=styled.div`
  font-size:1em;
  color:#737170;
  display:flex;
  align-items:center;
  margin:10px 0 20px 0;
`
export const ArtistIcon=styled.img`
  margin-right:6px; 
`
export const WalletDiv=styled.div`
  width:35vw;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
`
export const WalletTitle=styled.h1`
  font-size:0.75em;
  line-height:2;
  color:#737170;
`
export const PriceDiv=styled.div`
  font-size:1.5em;
  font-weight:bold;
  display:flex;
  align-items:center;
  margin-top:6px;
`
export const WalletButton=styled.div`
  width:100%;
  height:42px;
  border-radius:8px;
  background-image: linear-gradient(94deg, #fcd900, #fb9800);
  color:white;
  font-size:1em;
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:16px;

  &:hover{
    cursor: pointer;
  }
`
export const ListDiv=styled.div`
  width:35vw;
`
export const List=styled.div`
  width:100%;
  padding:16px 20px;
  margin-top:16px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  font-size:1rem;
  line-height:normal;
  position:relative;
  display:flex;
  align-items:center;
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

export const Text=styled.span`
  width:100%;
  font-size: 0.8rem;
  line-height:1.43;
  background-color:#faf8f4;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:4px;
  border-radius:8px;
  padding:16px 20px;
`
export const Icon=styled.img`
  margin-right:4px;
`

//itemhistory
export const ItemhistoryDiv=styled.div`
  width:50%;
  margin-right:40px;
  display:inline-block;
`
export const Art=styled.img`
  width:100%;
  border-radius:8px;
`
export const History=styled.div`
  width:100%;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  font-size:1em;
  line-height:normal;
  position:relative;
  display:flex;
  align-items:center;
`

export const Graph=styled.div`
  width:100%;
  height:180px;
  background-color:#faf8f4;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:4px;
  border-radius:8px;
`
export const GraphIcon=styled.img`
  margin-right:4px;
`