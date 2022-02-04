import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuIn from './MenuIn';
import Searchs from './SearchBar';
import Wallet from './Wallet';
const artisella = 'images/artistella-logo.png';
const artisella2x = '../../images/artistella-logo@2x.png';
const artisella3x = '../../images/artistella-logo@3x.png';
const idicon = 'images/icon-id.png';
const idicon2x = '../../images/icon-id@2x.png';
const idicon3x = '../../images/icon-id@3x.png';

import Link from 'next/link';

const HeaderNav = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index:1000; // position fixed
  top:0;
  left:0;
`

const NavDiv = styled.div`
  width : 80%;
  height : 100%;
  margin : 0 auto;
  display : flex;
  align-items: center;
  justify-content: space-between;
`

const Menudiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 89%;
    color: #252220;
    font-size: 1rem;
    > *  {
      align-items: center;
      margin-top: 8px;
    }
`

const Logo=styled.div`
  width: 10%;
  height: 50%;
  display: flex;
  justify-content: center;

  &:hover{
    cursor: pointer;
  }
`

const MenuImg =styled.img`
    width: 36px;
    height: 36px;

    &:hover{
      cursor: pointer;
    }
`
const MenuImgDiv =styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
const LogoImg = styled.img`
  width :140%;
`

const TempDiv=styled.div`
  width:50%;
  display:flex;
  justify-content:space-between;
`

function Banner(){
    return (
      <HeaderNav>
        <NavDiv>
          <Logo onClick={LogoClick}><LogoImg src='images/artistella-logo.png' srcSet='images/artistella-logo@2x.png, images/artistella-logo@3x.png'/></Logo>
          <Menudiv>
            <Searchs />
            <TempDiv>
            <MenuIn child="browse"/>
            <MenuIn child="sell"/>
            <MenuIn child="raydium"/>
            <MenuImgDiv>
                <MenuImg src='images/icon-id.png' srcSet='images/icon-id@2x.png, images/icon-id@3x.png'/>
            </MenuImgDiv>
            <Wallet/>
            </TempDiv>
          </Menudiv>
        </NavDiv>
      </HeaderNav>
  )
}

function LogoClick(e){
  e.preventDefault()
  return(window.location.assign("/"))
}


export default Banner;
