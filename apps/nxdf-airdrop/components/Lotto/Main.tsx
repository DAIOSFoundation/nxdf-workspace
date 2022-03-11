import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';
import Timer from '../Lotto/Timer';
import {
  ref, child, get, update
} from "@firebase/database";
import {dbService} from "./firebase";
import {PotContainer,PotSolContainer,PotUsdContainer,CurrentJackpot,GetTicket,BuyMultipleTicket,TimerContainer,GetTicketContainer, BackgroundDiv} from "./css/MainCenter/maincss";
import Link from 'next/link';
import { increment } from 'firebase/database';

// import styles from './Lotto.module.css';
import {WalletMultiButton} from "@nxdf/shared/services";

/* eslint-disable-next-line */
export interface LottoProps {
  userId: string;
};

function Main(props: LottoProps) {
  const [loading,setloading] = useState(false);

  const [nxdfInfo,setNxdfInfo]=useState({})
  const [current,setCurrent]=useState(0)
  const [noftic,setNoftic]=useState(1)
  const [multiple, setMultiple] = useState(false)

  async function ToUsd(){
    await fetch('https://api.coingecko.com/api/v3/coins/next-defi-protocol/',{
      method:'GET',
      mode:'cors',
      headers:{
        'Content-Type':'application/json'
      },
    })
    .then(Currency=>Currency.json())
    //.then(Currency=>console.log(Currency))
    .then(Currency=>{
      setNxdfInfo(Currency.market_data.current_price.usd)
      setloading(true)
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  async function CurrentJackpotDB(){
    const dbRef=ref(dbService);
    await get(child(dbRef,'/currentJackpot/value')).then((snapshot)=>{
      if(snapshot.exists()){
        setCurrent(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error)=>{
      console.error(error);
    });
  }

  useEffect(()=>{
    CurrentJackpotDB();
    ToUsd();
  },[]);

  return (
    <MainLayout id="Main">
        <PotContainer>
          <CurrentJackpot>CURRENT<br/>JACKPOT</CurrentJackpot>
          <PotSolContainer>{current.toLocaleString(undefined, { maximumFractionDigits: 2 }) } NXDF</PotSolContainer>
          <PotUsdContainer>( { loading ?  (Number(nxdfInfo)*current).toLocaleString(undefined, { maximumFractionDigits: 2 }) : 0 } $)</PotUsdContainer>
        </PotContainer>
        <GetTicketContainer>
          <HourGlass src='/img/img-hourglass.svg'/>
          <BackgroundDiv>
          {/* 남은 시간 계산해주는 타이머 */}
            <TimerContainer>
                <Timer></Timer>
            </TimerContainer>
            <WalletMultiButton className="btn btn-ghost" />
            <Link href={`/events/lotto/draw/?user_id=${props.userId}`}>
              <GetTicket>
                GET {noftic} TICKET
              </GetTicket>
            </Link>
            </BackgroundDiv>
        </GetTicketContainer>
        {/*<BuyMultipleTicket onClick={()=>setMultiple(!multiple)}>Buy Multiple Tickets</BuyMultipleTicket>*/}
        {/*{multiple?*/}
        {/*<SliderDiv>*/}
        {/*  <Slider styles={{track:{backgroundColor:'rgb(197, 186, 250)'}, active:{backgroundColor:'rgb(244,134,193)'}}} xmin={1} xmax={50} axis='x' x={noftic} onChange={({x})=>setNoftic(x)}></Slider>*/}
        {/*  <SliderLabel>{noftic} Tickets</SliderLabel>*/}
        {/*</SliderDiv>*/}
        {/*:*/}
        {/*<SliderDiv style={{opacity:0}}>*/}
        {/*  <Slider styles={{track:{backgroundColor:'rgb(197, 186, 250)'}, active:{backgroundColor:'rgb(244,134,193)'}}} xmin={1} xmax={50} axis='x' x={noftic} onChange={({x})=>setNoftic(x)}></Slider>*/}
        {/*  <SliderLabel>{noftic} Tickets</SliderLabel>*/}
        {/*</SliderDiv>*/}
        {/*}*/}
    </MainLayout>
  );
}

export default Main;

const MainLayout = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  height:100%;
  width:100vw;
  margin-top:5rem;
  background-color: #453C70;
  background-image:url('/img/img-lottomen.svg'), url('/img/img-lottobox.svg');
  background-repeat:no-repeat,no-repeat;
  background-size:380px, 38%;
  background-position:left, right;
  //padding-top:5rem;
`;

const HourGlass = styled.img`
  width: 11%;
  height: 100%;
  position:absolute;
  top:-50%;
  left:3%;
`;

const SliderDiv=styled.div`
  display:flex;
  align-items:center;
  margin:20px 0;
`
const SliderLabel=styled.div`
  color:white;
  font-size:1.5rem;
  font-weight:bold;
  margin-left:20px;
`
