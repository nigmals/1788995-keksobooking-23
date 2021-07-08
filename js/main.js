import { SIMILAR_COUNT, createAd } from './data/data.js';
import { createAdMarker } from './map/map.js';
import './form/form.js';

const createOffers = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(createAd);

createOffers.forEach((dataAd) => createAdMarker(dataAd));
