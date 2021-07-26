import { activateForm } from '../form/form.js';
import { createCard } from './cards.js';
import { getData } from '../form/api.js';
import { showPopupGetError } from '../form/popup.js';
import { getFilterData, addFilters, MAX_NUM_ADS } from '../map/filter/filter.js';

const INITIAL_SETTING_MAP = {
  lat: 35.67500,
  lng: 139.75000,
};

const adAddress = document.querySelector('#address');

const map = L.map('map-canvas');

const mainIcon = L.icon(
  {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: INITIAL_SETTING_MAP.lat,
    lng: INITIAL_SETTING_MAP.lng,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

const markerGroup = L.layerGroup().addTo(map);

const createAdMarker = (dataAd) => {

  const { location } = dataAd;

  const iconAd = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerAd = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: iconAd,
    },
    {
      keepInView: true,
    },
  );

  markerAd.addTo(markerGroup).bindPopup(createCard(dataAd));
};

const createMarkersGroup = (similarAds) => {
  similarAds.forEach((dataAd) => {
    createAdMarker(dataAd);
  });
};

const resetDataMap = () => {
  markerGroup.clearLayers();

  map.setView(
    INITIAL_SETTING_MAP,
    12);

  mainMarker.setLatLng(
    INITIAL_SETTING_MAP,
  );

  adAddress.value = `${INITIAL_SETTING_MAP.lat.toFixed(5)}, ${INITIAL_SETTING_MAP.lng.toFixed(5)}`;

  getData((ads) => createMarkersGroup(ads.slice(0, MAX_NUM_ADS)));
};

map
  .on('load', () => {
    activateForm();
    getData(
      (ads) => {
        getFilterData(ads);
        addFilters(ads);
      },
      showPopupGetError,
    );
  })
  .setView({
    lat: INITIAL_SETTING_MAP.lat,
    lng: INITIAL_SETTING_MAP.lng,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainMarker.addTo(map);

adAddress.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  adAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

export { resetDataMap, markerGroup, createMarkersGroup };
