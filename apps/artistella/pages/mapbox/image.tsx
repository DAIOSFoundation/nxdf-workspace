import * as React from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import dvision from '../../.data/dvision.png';
import ControlPanel from '../../components/control-panel';
import TL from "../../.data/TL_SCCO_CTPRVN.json";
import LAY from "../../.data/layer.json";
import LAY2 from "../../.data/layer2.json";
import Img from "../../.data/image.json";
import RAS from "../../.data/raster.json";
import US from "../../.data/us-income.json";
import {dataLayer} from '../../styles/map-style';
import { imageLayer } from '../../styles/image-style';
import { updatePercentiles } from '../../utils/utils';
import styled from 'styled-components';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia3NkZjcyMzUiLCJhIjoiY2wwdGFxczcyMDk5MzNjbWg5bGNzZ2picSJ9.YNS6eYFVC7AHjB-7tjmPLg'; // Set your mapbox token here


const Image_Source = {
    "type": "image",
    "url": "https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif",
    "coordinates": [
        [-80.425, 46.437],
        [-71.516, 46.437],
        [-71.516, 37.936],
        [-80.425, 37.936]
    ]
}


 function GeoLayer() {
  const [year, setYear] = useState<number>(2015);
  const [allData, setAllData] = useState<any>(null);
  const [hoverInfo, setHoverInfo] = useState(null);
     
     const data = useMemo(() => {
    return LAY2 && updatePercentiles(LAY2, f => year);
     }, [LAY2, year]);
   
  return (
    <>
      <Map
        initialViewState={{
          longitude: -71,
          latitude: 46.0,
          zoom: 4
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={['data']}
        onClick={(da) => {console.log("click",da)} }
        style={{width: 600, height: 400}}
      >
        <Source id="source_id" type="image" url={Image_Source.url} coordinates={Image_Source.coordinates} />
          <Layer type="raster" id="layer_id" sourceId="source_id" />
      </Map>

    </>
  );
}

export default GeoLayer;
