import { SIMILAR_COUNT } from './data/data.js';
import './map/map.js';
import './form/form.js';
import './map/cards.js';
import { createMarkersGroup } from './map/map.js';
import { getData } from './form/api.js';

getData((ads) => {
  createMarkersGroup(ads.slice(0, SIMILAR_COUNT));
});
