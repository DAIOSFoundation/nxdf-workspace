import React,{useState}from 'react';
import {ItemhistoryDiv,Art,History,GraphIcon,Down,Up,Graph} from './style';
import priceChart from '../../../images/itemDetail/icon-price-chart.svg'
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';


function ItemHistory({img}) {
  const [arrow, setArrow] = useState(true);
  function onArrow(){
    setArrow(prev => !prev)
  }
  return(
    <ItemhistoryDiv>
      <Art src='images/grid.png'/>
      <History>
        <GraphIcon src='images/itemDetail/icon-price-chart.svg'/>Price History
        {arrow ? //그래프가 내려와있음
        <Down onClick={onArrow} src='images/itemDetail/down_arrow.png' />:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png'/>
        }
      </History>
      {arrow ? <Graph>그래프 표시</Graph>:null}
    </ItemhistoryDiv>
  )
}

export default ItemHistory;