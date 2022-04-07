import { NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import Map, { Layer, Marker, NavigationControl, Popup } from 'react-map-gl';
import dvision from "../../.data/dvision.png";

interface City {
    city: string;
    population: string;
    image: string;
    state: string;
    latitude: number;
    longitude: number;
}

const Mapbox: NextPage = () => {
  const mapkey = "pk.eyJ1Ijoia3NkZjcyMzUiLCJhIjoiY2wwdGFxczcyMDk5MzNjbWg5bGNzZ2picSJ9.YNS6eYFVC7AHjB-7tjmPLg"
  const [popupInfo, setPopupInfo] = useState<City>(null);
  const city = {
    city: "New York",
    population: "8,550,405",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/New_York_City_skyline_from_Manhattan_%28cropped%29.jpg/800px-New_York_City_skyline_from_Manhattan_%28cropped%29.jpg",
    state: "New York",
    latitude: 39.5,
    longitude: 3.4
  }
  return <Map
    onClick={(data)=>{ console.log(data.target)}}
    mapboxAccessToken={mapkey}
    initialViewState={{
      longitude: 3.4,
      latitude: 39.5,
      zoom: 7.4
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  > 
    <Marker anchor='bottom' latitude={39.5} longitude={3.4} scale={1} onClick={() => setPopupInfo(city)}>
    </Marker>

    {popupInfo && (
      <Popup anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            closeOnClick={false}
        onClose={() => setPopupInfo(null)} >
            <div>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
              >
                Wikipedia
              </a>
            </div>
            <Image width="100%" src={dvision} />  
      </Popup>
    )}
    <NavigationControl />
  </Map>;
}

export default Mapbox;