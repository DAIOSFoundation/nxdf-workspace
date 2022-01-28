import React, { useState } from 'react';
import BrowseGrid from './collectionGrid';
import BoxViewPrssed from '../../../images/itemList/icon-boxview-pressed.png';
import BoxViewPrssed2x from '../../../images/itemList/icon-boxview-pressed@2x.png';
import BoxViewPrssed3x from '../../../images/itemList/icon-boxview-pressed@3x.png';
import BoxViewNormal from '../../../images/itemList/icon-boxview-normal.png';
import BoxViewNormal2x from '../../../images/itemList/icon-boxview-normal@2x.png';
import BoxViewNormal3x from '../../../images/itemList/icon-boxview-normal@3x.png';
import TileViewNormal from '../../../images/itemList/icon-tileview-normal.png';
import TileViewNormal2x from '../../../images/itemList/icon-tileview-normal@2x.png';
import TileViewNormal3x from '../../../images/itemList/icon-tileview-normal@3x.png';
import TileViewPressed from '../../../images/itemList/icon-tileview-pressed.png';
import TileViewPressed2x from '../../../images/itemList/icon-tileview-pressed@2x.png';
import TileViewPressed3x from '../../../images/itemList/icon-tileview-pressed@3x.png';
import IconDownBlack from '../../../images/itemList/icon-down-black.png';
import IconDownBlack2x from '../../../images/itemList/icon-down-black@2x.png';
import IconDownBlack3x from '../../../images/itemList/icon-down-black@3x.png';
import SearchIcon from '../../../images/itemList/icon-search-copy.png';
import SearchIcon2x from '../../../images/itemList/icon-search-copy@2x.png';
import SearchIcon3x from '../../../images/itemList/icon-search-copy@3x.png';
import {SearchRayout,SearchContent,SearchDiv,Divbar,Search,Button,Idiv,ListDiv,Recently,ListIcon,BoxIcon,BoxView} from '../style'

function SearchView(){
  const [grid, setgird]=useState(3)
  function onGridShape(){
    grid !== 3 ?
    setgird(3):
    setgird(4)
  }
  return(
    <SearchRayout>
      <SearchContent>
        <SearchDiv>
            <Divbar>
              <Search placeholder='Search Items'/>
              <Button><img style={{width:'20px'}} src='images/itemList/icon-search-copy.png' srcSet='images/itemList/icon-search-copy@2x.png, images/itemList/icon-search-copy@3x.png'/></Button>
            </Divbar> 
            <Idiv>
              <ListDiv>
                <Recently>Recently Listed</Recently>
                <ListIcon src='images/itemList/icon-down-black.png' srcSet='images/itemList/icon-down-black@2x.png, images/itemList/icon-down-black@3x.png'/>
              </ListDiv>
              <BoxView>
                  {grid === 3 ?
                  <BoxIcon src='images/itemList/icon-boxview-pressed.png' srcSet='images/itemList/icon-boxview-pressed@2x.png, images/itemList/icon-boxview-pressed@3x.png'></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src='images/itemList/icon-boxview-normal.png' srcSet='images/itemList/icon-boxview-normal@2x.png, images/itemList/icon-boxview-normal@3x.png'></BoxIcon>}
                  {grid === 4 ?
                  <BoxIcon src='images/itemList/icon-tileview-pressed.png' srcSet='images/itemList/icon-tileview-pressed@2x.png, images/itemList/icon-tileview-pressed@3x.png'></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src='images/itemList/icon-tileview-normal.png' srcSet='images/itemList/icon-tileview-normal@2x.png, images/itemList/icon-tileview-normal@3x.png'></BoxIcon>}
              </BoxView>
            </Idiv>
        </SearchDiv>
        <BrowseGrid shape={grid}/>
      </SearchContent>
    </SearchRayout>
  )
}

export default SearchView;