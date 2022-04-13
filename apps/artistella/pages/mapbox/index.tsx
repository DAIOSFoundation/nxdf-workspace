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
      latitude: 34.55448787561973,
      longitude: 18.068940276632784,
      zoom: 5
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
    mapStyle="mapbox://styles/mapbox/streets-v11"
  >
    <Sta onClick={onClick} />
    <Nft modal={modal} setModal={setModal} />
    <Control viewport={viewport} setViewport={setViewport} />

    <Source
      id="map-source"
      type="image"
      url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f4/54/37/wilson-island.jpg?w=1400&h=-1&s=1"
      coordinates={[
        [18.2870007, 34.8267332],
        [18.6605358, 34.8267332],
        [18.6605358, 34.5647822],
        [18.2870007, 34.5647822],
      ]}
    />
    <Layer
      id="overlay"
      source="map-source"
      type="raster"
      paint={{ "raster-opacity": 0.85 }}
    />
  </Map>;
}



export default Mapbox;
