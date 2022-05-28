import type {FillLayer} from 'react-map-gl';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const imageLayer: FillLayer = {
  id: 'pattern-layer',
  type: 'fill',
  paint: {
    'fill-pattern': 'pattern',
  }
};
