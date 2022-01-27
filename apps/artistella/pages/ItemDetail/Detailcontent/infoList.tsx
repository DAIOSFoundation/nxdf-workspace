import React,{useState} from 'react';
import {Div,NameDiv,Name,Artist,WalletDiv,ArtistIcon,WalletTitle,PriceDiv,WalletButton,ListDiv,List,Up,Down,Icon,Text} from './style';
import artistYellow from 'images/itemDetail/icon-artist-yellow.svg'
import priceTag from '../../../images/itemDetail/icon-price-tag.svg'
import itemInfo from '../../../images/itemDetail/icon-item-info.svg';
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';
import reporticon from '../../../images/itemDetail/icon-report.svg';


function InfoList({title,artisitName,price,about,mintAdress,owner,tokenAdress }){
  const [artArrow, setArtArrow] = useState(true);
  const [detailArrow, setDetailArrow] = useState(true);
  function onArtArrow(){
    setArtArrow(prev => !prev);
  }
  function onDetailArrow(){
    setDetailArrow(prev => !prev);
  }
  return(
    <Div>
      <NameDiv>
        <Name>{title}</Name>
        <Artist><ArtistIcon src='images/itemDetail/icon-artist-yellow.svg' />{artisitName}</Artist>
      </NameDiv>
      <WalletDiv>
        <WalletTitle>TOTAL LISTED COUNT</WalletTitle>
        <PriceDiv><img src='images/itemDetail/icon-price-tag.svg' />{price} SOL</PriceDiv>
        <WalletButton>Connect Wallet</WalletButton>
      </WalletDiv>
      <ListDiv>
        {/* About Digital Art */}
        <List>
          <Icon src='images/itemDetail/icon-item-info.svg'/>About Digital Art
          {artArrow ?
            <Down onClick={onArtArrow} src='images/itemDetail/down_arrow.png'/>:
            <Up onClick={onArtArrow} src='images/itemDetail/up_arrow.png'/>
          }
        </List>
        {artArrow ? <Text>{about }</Text>:null}
      </ListDiv>
      <ListDiv>
        {/* Details */}
        <List>
          <Icon src='images/itemDetail/icon-report.svg' />Details
          {detailArrow ?
          <Down onClick={onDetailArrow} src='images/itemDetail/down_arrow.png'/>:
          <Up onClick={onDetailArrow} src='images/itemDetail/up_arrow.png'/>
          }
        </List>
        {detailArrow ? <Text>
          {`Mint Address : ${mintAdress}`}<br/>
          {`Token Address : ${tokenAdress}`}<br/>
          {`Owner : ${owner}`}
          </Text> : null}
      </ListDiv>
    </Div>
  )
}

export default InfoList;