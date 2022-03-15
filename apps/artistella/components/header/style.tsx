import styled from 'styled-components';

//Menuin
export const MenudivIn = styled.div`
    padding: 10px;
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: 'Roboto';
`

export const MenuDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover{
        cursor: pointer;
    }

    span{
        width: auto;
        height: auto;
        display: flex;
        position: relative;

    }
    span::after{
            content:"";
            position: absolute;
            width: 0px;
            height: 3px;
            transition: all 0.2s ease-in-out;
            transition-duration: 0.3s;
            bottom: -5px;
            opacity: 0;
            background-color: #fbac00;
        }

        span:hover:after{
            width: 100%;
            opacity: 1;
            }
`
//SearchBar
export const Searchbar = styled.input`
  border : none;
  width: 80%;
  font-size : 1rem;
  :focus {
    outline : none;
  }
`
export const SearchButton=styled.div`
  border: none;
  width: 5%;
  margin: 0 10px;
  display:flex;
  align-items:center;
  justify-content: center;
  background-color: white;
  &:hover{
    cursor: pointer;
  }
`
export const SearchDiv=styled.div`
  margin-top: 4px;
  width : 70%;
  height: 40%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const SearchBardiv = styled.div`
    width : 90%;
    height: 40px;
    display:flex;
    border-radius: 6px;
    align-items: center;
    border : 1px solid black;

  :focus-within{
    border: 2px solid #737170;
  }
  `
  
export const Img=styled.img`
    width:22px;
    height:22px;
  `
//wallet
export const WalletDiv=styled.div`
  .wallet-adapter-button-trigger {
      background-color: white;
      color:black;
      border-radius: 6px;
      border: solid 1px #252220;
      font-weight:100;
      line-height:1.2;
      justify-content : center;
      width:150px;
  }
  .wallet-adapter-button-trigger:hover{
    color:white;
  }
`