import React from 'react'
import UseEle from './htuEle';
import {UseDiv,UseTitle,UseGrid} from './style';

function HowToUse(){
  return (
    <UseDiv>
      <UseTitle>
        <h1>
          Create and sell your NFTs
        </h1>
      </UseTitle>
      <UseGrid>
        <UseEle number='01' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Eiusmod culpa et mollit mollit officia eiusmod dolor et adipisicing dolore adipisicing.'></UseEle>
        <UseEle number='02' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Minim qui in non aliqua aute nulla aliqua sunt in commodo exercitation ut.'></UseEle>
        <UseEle number='03' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Esse ad deserunt fugiat mollit est dolore anim dolor consequat.'></UseEle>
        <UseEle number='04' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Anim exercitation velit aute laborum veniam fugiat do pariatur aute sint cillum nulla.'></UseEle>
      </UseGrid>
    </UseDiv>
  )
}

export default HowToUse;