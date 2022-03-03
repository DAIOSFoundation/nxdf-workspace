import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Timer() {
  
  const TimeLeft=()=>{
    let drawtime=new Date("February 26, 2022 23:00:00").getTime()/1000;
    let now=new Date().getTime()/1000;
    let lefttime=drawtime-now;
    let duration=moment.duration(lefttime,'seconds');
    let interval=1000;
    if (duration.asSeconds()<=0){
      clearInterval(interval);
    }
    duration=moment.duration(duration.asSeconds()-1,'seconds');
    return (duration.days()+' Days '+duration.hours()+' Hours '+duration.minutes()+' Min '+duration.seconds()+' Sec ')
  }
  
  const [timeLeft,setTimeleft]=useState(TimeLeft());
  useEffect(()=>{
    setTimeout(()=>{
      setTimeleft(TimeLeft());
    },1000)
  })

  return (
    <div style={{fontSize:'1.8rem', fontWeight:'bold',textAlign:'center'}}>
      {timeLeft}
    </div>
  );
}

export default Timer;