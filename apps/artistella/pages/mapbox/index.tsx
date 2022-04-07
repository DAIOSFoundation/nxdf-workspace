import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Map, { Layer, Marker, NavigationControl, Popup, Source,ImageSource } from 'react-map-gl';
import styled from 'styled-components';
import dvision from "../../.data/dvision.png";
import Control from '../../components/control/Control';
import Nft from '../../components/nfts/Nft';

interface City {
    city: string;
    population: string;
    image: string;
    state: string;
    latitude: number;
    longitude: number;
}


const Sta = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  z-index: auto;
  position: absolute;
  right: 2%;
  top: 30%;
`;







const Mapbox: NextPage = () => {
  const mapkey = "pk.eyJ1Ijoia3NkZjcyMzUiLCJhIjoiY2wwdGFxczcyMDk5MzNjbWg5bGNzZ2picSJ9.YNS6eYFVC7AHjB-7tjmPLg"
  const map = useRef(null);
  // const [longitude,setLongitude] = useState(3.4);
  // const [latitude,setLatitude] = useState(39.5);
  // const [zoom, setZoom] = useState(7.4);
  const [modal, setModal] = useState(false);
  const [ viewport, setViewport ] = useState({
      latitude: 37.532600,
      longitude: 127.024612,
      zoom: 12
    });


  const onClick = () => {
  setModal(!modal)
  }

  
  return <Map
    ref={map}
    onClick={(data)=>{ console.log(data.target)}}
    mapboxAccessToken={mapkey}
    {...viewport}
    onMove={evt => { console.log(evt.viewState.zoom); return setViewport(evt.viewState)}}
    style={{width: "100%", height: "100vh" ,display: "flex" ,alignItems: "center"}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Sta onClick={onClick} />
    <Nft modal={modal} setModal={setModal} />
    <Control viewport={viewport} setViewport={setViewport} />
  </Map>;
}



export default Mapbox;