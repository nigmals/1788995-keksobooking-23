import { activateForm } from '../form/form.js';
import { createCard } from './cards.js';

const INITIAL_SETTING_MAP = {
  lat: 35.67500,
  lng: 139.75000,
};

const addressInput = document.querySelector('#address');

const mapCanvas = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: INITIAL_SETTING_MAP .lat,
    lng: INITIAL_SETTING_MAP .lng,
  }, 14);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(mapCanvas);

const mainIcon = L.icon(
  {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: INITIAL_SETTING_MAP .lat,
    lng: INITIAL_SETTING_MAP .lng,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(mapCanvas);

addressInput.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(mapCanvas);

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


export { createAdMarker };
