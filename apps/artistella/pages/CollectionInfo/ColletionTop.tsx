import React from 'react';
import iconItemPressed from "../../../images/itemList/icon-item-pressed.png"
import iconItemPressed2x from "../../../images/itemList/icon-item-pressed@2x.png";
import iconItemPressed3x from "../../../images/itemList/icon-item-pressed@3x.png";
import iconActivityNormal from "../../../images/itemList/icon-activity-normal.png"
import iconActivityNormal2x from "../../../images/itemList/icon-activity-normal@2x.png"
import iconActivityNormal3x from "../../../images/itemList/icon-activity-normal@3x.png"
import {ArtTopDiv,ArtButtons,ActLine,ItemIcon,Margin,ActivityIcon} from './style';


function CollectionTop(){
  return(
    <ArtTopDiv>
      <ArtButtons>
          <ActLine>
            <ItemIcon src='images/itemList/icon-item-pressed.png' srcSet='images/itemList/icon-item-pressed@2x.png, images/itemList/icon-item-pressed@3x.png'/>
            <span>Items</span>
          </ActLine>
          <Margin></Margin>
          <span>
            <ActivityIcon src='images/itemList/icon-activity-normal.png' srcSet='images/itemList/icon-activity-normal@2x.png, images/itemList/icon-activity-normal@3x.png'/>
            <span style={{color:'#dfd9ce'}}>Activity</span> 
          </span>
          {/*활성상태 아이콘컬러 */}
      </ArtButtons>
    </ArtTopDiv>
  )
}
export default CollectionTop;