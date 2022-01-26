import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin:0;
   padding:0;
 }
 body{
  font-family: 'Roboto';
 }
 @font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf');
}

input{
  :focus{
    outline: none;
  }
}

`;