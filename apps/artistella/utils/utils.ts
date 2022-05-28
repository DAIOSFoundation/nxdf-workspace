import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

import type GeoJSON from 'geojson';

export function updatePercentiles(
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  accessor: (f: GeoJSON.Feature<GeoJSON.Geometry>) => number
): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const {features} = featureCollection;
  return {
    type: 'FeatureCollection',
    features: features.map((f, i) => {
      const value = accessor(f)*i;
      const properties = {
        ...f.properties,
        value,
        percentile: Number(String(value).substr(0,1)),
      };
      return {...f, properties};
    })
  };
}
