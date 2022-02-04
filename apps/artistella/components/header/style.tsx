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
export const WalletD=styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    &:hover{
        cursor:pointer;
    }
`

export const Icon_wallet=styled.div`
    width: 30px;
    height: 30px;
    margin-right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ConnectDiv=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:1300px ){
        display: none;
    }
    span {
        width: auto;
        font-size: 0.9rem;
        }
`

export const ImgWallet = styled.img`
    width: 20px;
    height: 20px;
    @media(max-width:1300px ){

        width: 30px;
        height: 30px;
    }
`

export const Walletdiv = styled.div`
    width: 170px;
    display: flex;
    align-items: center;
    justify-content : center;
    border-radius: 6px;
    border: solid 1px #252220;
    background-color: #fff;
    padding: 5px;
    margin-left: 5px;

    @media(max-width:1300px){
        border: none;
    }
`
export const Div = styled.div`
    width: 100%;
`
export const EmptyDiv = styled.div`
    width: 0%;
`
