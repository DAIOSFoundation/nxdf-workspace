import { updatePercentiles } from '../../utils/utils';
import LAY2 from '../../.data/layer2.json';
import US from '../../.data/us-income.json';
import INCOME from '../../.data/us-income.json';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Map, { Layer, Source } from 'react-map-gl';
import styled from 'styled-components';
import dvision from '../../.data/dvision.png';
import Control from '../../components/control/Control';
import Nft from '../../components/nfts/Nft';
import { dataLayer } from '../../styles/map-style';
import NftDetail from '../../components/nfts/NftDetail';

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
  const mapkey =
    'pk.eyJ1Ijoia3NkZjcyMzUiLCJhIjoiY2wwdGFxczcyMDk5MzNjbWg5bGNzZ2picSJ9.YNS6eYFVC7AHjB-7tjmPLg';
  const map = useRef(null);
  // const [longitude,setLongitude] = useState(3.4);
  // const [latitude,setLatitude] = useState(39.5);
  // const [zoom, setZoom] = useState(7.4);
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState(false);
  const [year, setYear] = useState(2015);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [allData, setAllData] = useState(JSON.parse(JSON.stringify(LAY2)));
  const [viewport, setViewport] = useState({
    latitude: 34.75448787561973,
    longitude: 18.408940276632784,
    zoom: 11,
    // pitch: 80,
    // bearing: 80,
  });
  const onClick = () => {
    setModal(!modal);
  };
  const onDetailClick = useCallback(
    (event) => {
      console.log(detail);
      if (event.features.length > 0) {
        setDetail(!detail);
        const {
          features,
          point: { x, y },
        } = event;
        const hoveredFeature = features && features[0];

        // prettier-ignore
        setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
      }
    },
    [detail]
  );

  const data = useMemo(() => {
    return (
      allData && updatePercentiles(allData, (f) => f.properties.income[year])
    );
  }, [allData, year]);

  return (
    <Map
      ref={map}
      interactiveLayerIds={['data']}
      onClick={onDetailClick}
      mapboxAccessToken={mapkey}
      {...viewport}
      onMove={(evt) => {
        return setViewport(evt.viewState);
      }}
      style={{
        width: '100%',
        height: '100vh',
        // display: 'flex',
        // alignItems: 'center',
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      // mapStyle="mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y"
    >
      <Sta onClick={onClick} />
      <Nft modal={modal} setModal={setModal} />
      <Control viewport={viewport} setViewport={setViewport} />
      <NftDetail
        detail={detail}
        setDetail={setDetail}
        data={hoverInfo?.feature?.properties}
      />
      <Source
        id="map-source"
        type="image"
        url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f4/54/37/wilson-island.jpg?w=1400&h=-1&s=1"
        coordinates={[
          [18.2, 34.8],
          [18.6, 34.8],
          [18.6, 34.5],
          [18.2, 34.5],
        ]}
      />
      <Layer
        id="overlay"
        source="map-source"
        type="raster"
        paint={{ 'raster-opacity': 0.85 }}
      />
      <Source type="geojson" data={data}>
        <Layer {...dataLayer} />
      </Source>
    </Map>
  );
};

export default Mapbox;
