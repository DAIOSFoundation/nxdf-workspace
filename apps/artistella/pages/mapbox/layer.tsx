import * as React from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import dvision from '../../.data/dvision.png';
import ControlPanel from '../../components/control-panel';
import TL from "../../.data/TL_SCCO_CTPRVN.json";
import LAY from "../../.data/layer.json";
import LAY2 from "../../.data/layer2.json";
import Img from "../../.data/image.json";
import US from "../../.data/us-income.json";
import {dataLayer} from '../../styles/map-style';
import {updatePercentiles} from '../../utils/utils';
import styled from 'styled-components';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia3NkZjcyMzUiLCJhIjoiY2wwdGFxczcyMDk5MzNjbWg5bGNzZ2picSJ9.YNS6eYFVC7AHjB-7tjmPLg'; // Set your mapbox token here

 function GeoLayer() {
  const [year, setYear] = useState<number>(2015);
  const [allData, setAllData] = useState<any>(null);
  const [hoverInfo, setHoverInfo] = useState(null);
     
     const data = useMemo(() => {
    return LAY2 && updatePercentiles(LAY2, f => year);
     }, [LAY2, year]);
   
   const Div = styled.div`
    position: absolute; 
     background-color: red ;
     width: 100%;
     height: 100%;
   `;
   
  return (
    <>
      <Map
        initialViewState={{
          longitude: 4.7,
          latitude: 39.0,
          zoom: 5
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={['data']}
        onClick={(da) => console.log(da.lngLat) }
        style={{width: 600, height: 400}}
      >
        <Source  type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
      </Map>

      {/* <ControlPanel year={year} onChange={(value:any) => setYear(value)} /> */}
    </>
  );
}

export default GeoLayer;
