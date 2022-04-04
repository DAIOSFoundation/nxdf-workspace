import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Timer() {
  let drawtime=new Date("Aprill 9, 2022 14:00:00 UTC").getTime()/1000;
  let now = new Date().getTime() / 1000;
  
  const TimeLeft = () => {
    let lefttime = drawtime - now;
    if (lefttime < 0) lefttime += 604800;
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
    <div style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'center',color:'white'}}>
      {timeLeft}
    </div>
  );
}

export default Timer;
