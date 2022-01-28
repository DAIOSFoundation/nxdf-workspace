import React,{useState} from 'react';
import {Div,MoreDiv,Icon,Down,Up} from './style';
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import moreCollection from "../../../images/itemDetail/icon-more-collection.svg"
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';
import MoreSlide from './Slide';



function MoreCollection() {
  const [arrow,setArrow]=useState(true)
  function onArrow(){
    setArrow(prev => !prev);
  }
  return (
    <Div>
      <MoreDiv>
        <Icon src='images/itemDetail/icon-more-collection.svg' />More from this collection
        {arrow ? //그래프가 내려와있음
          <Down onClick={onArrow} src='images/itemDetail/down_arrow.png'/>:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png'/>
        }
      </MoreDiv>
      {arrow ?<MoreSlide/>:null}
    </Div>
  );
}


export default MoreCollection;