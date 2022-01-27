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