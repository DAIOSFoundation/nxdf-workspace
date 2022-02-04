import React from 'react';
import SolanaIcon from '../../../images/itemList/icon-solana.png'
import SolanaIcon2x from '../../../images/itemList/icon-solana@2x.png'
import SolanaIcon3x from '../../../images/itemList/icon-solana@3x.png'
import IconDownWhite from '../../../images/itemList/icon-down-white.png';
import IconDownWhite2x from '../../../images/itemList/icon-down-white@2x.png';
import IconDownWhite3x from '../../../images/itemList/icon-down-white@3x.png';
import {FilterDiv,Title,Select,SelectLogo,SelectName,SelectArrow,MinMax,To,ApplyDiv} from '../style';

function Filter(){
  return(
    <FilterDiv>
      <Title>Price Filter</Title>
      <Select>
        <SelectLogo src='images/itemList/icon-solana.png' srcSet='images/itemList/icon-solana@2x.png, images/itemList/icon-solana@3x.png'/>
        <SelectName>SOL</SelectName>
        <SelectArrow src='images/itemList/icon-down-white.png' srcSet='images/itemList/icon-down-white@2x.png, images/itemList/icon-down-white@3x.png'/>
      </Select>
      <MinMax placeholder='Min'></MinMax>
      <To>to</To>
      <MinMax placeholder='Max'></MinMax>
      <ApplyDiv>Apply</ApplyDiv>
    </FilterDiv>
  )
}

export default Filter;