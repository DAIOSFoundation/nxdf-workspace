import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './css/MainCenter/font.css'
import {
  ref,child,get
} from "@firebase/database"
import {dbService} from "./firebase"

const BuyerDiv=styled.div`
  height:100%;
  width:100vw;
  background-color:#524880;
  display:flex;
  flex-direction:column;
  padding:50px 0 100px 0;
`
const Title=styled.h1`
  font-size:3em;
  font-weight:bold;
  font-family:'neoneon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  text-align:center;
  margin-bottom:50px;
`
const Table=styled.table`
  border:1px solid white;
  margin:0 auto;
  width:90%;
  font-size:1.3rem;
  tr {
    border:1px solid white;
  }
  th {
    border:1px solid white;
    padding:20px 0;
    vertical-align:middle;
  }
  
`

function LotteryBuyers() {
  const [buyers,setBuyers]=useState<any[]>([])

  useEffect(()=>{
    const dbRef=ref(dbService);
    get(child(dbRef,'drawnumber/')).then((snapshot)=>{
      if(snapshot.exists()){
        setBuyers(Object.entries(snapshot.val()))
      } else {
        console.log("No data available")
      }
    }).catch((error)=>{
    console.error(error)
  })
  },[])

  return (
    <BuyerDiv id='Buyers'>
      <Title>Lottery Ticket Buyers</Title>
      <Table>
        <thead>
        <tr>
          <th>USER ID</th>
          <th>LOTTO TICKET NUMBER</th>
          <th>DATE</th>
        </tr>
        </thead>
        <tbody>
          { buyers?.map((data,index) => {
            return(
              <tr key={index}>
                <th style={{color:'rgb(244,134,193)'}}>{data[1].userid}</th>
                <th>{data[1].numbers}</th>
                <th style={{color:'pink'}}>{data[1].date}</th>
              </tr>)
            })
          } 
        </tbody>
      </Table>
    </BuyerDiv>
  );
}


export default LotteryBuyers;