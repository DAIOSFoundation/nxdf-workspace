import React,{useState} from 'react';
import {Div,ActivDiv,Icon,Down,Up} from './style';
import TablePag from './Table';
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';
import activity from '../../../images/itemDetail/icon-activity-01.svg';


function Activities() {
  const [arrow, setArrow] = useState(true);
  function onArrow(){
    setArrow(prev=> !prev)
  }
  return (
    <Div>
      <ActivDiv>
        <Icon src='images/itemDetail/icon-activity-01.svg' />Activities
        {arrow ? //그래프가 내려와있음
        <Down onClick={onArrow} src='images/itemDetail/down_arrow.png'/>:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png' />
        }
      </ActivDiv>
      {arrow ? <TablePag></TablePag> : null}
    </Div>
  );
}

export default Activities;