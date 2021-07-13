import { getRandomPositiveInteger,
  getRandomPositiveFloat,
  shuffleArr,
  getRandomArrayElement } from '../utils/utils.js';

const TYPES_OF_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TITLES = [
  'the square GINZA ',
  'Hotel Graphy Nezu',
  'Hotel Nihonbashi Saibo',
  'Like Home - Santos',
  'Tokio Serviced Apartments - Campos ',
  'Tokio Serviced Apartments - Madalena',
  'Minn Ueno',
  'Comfort Tokyo Kanda',
  'Best Western Fino Tokyo Akihabara ',
  'TRUNK',
];
const DESCRIPTIONS = [
  'Рядом есть все необходимые магазины, аптеки, дет.сад в 10 минутах, школа в 20 мин. ходьбы',
  'Окна выходят во двор, есть свое пароковчное место, 20 минут от метро',
  'С дизайнерским ремонтом, есть лоджия, вся необходимая мебель и техника, рядом есть парк',
  'Находится в историческом центре города, рядом есть музеи, рестораны и кафешки, где подают вкусные круассаны',
  'Находится на уютной улочке, где можно забежать за ванильным латте и свежим пироженым, недалеко есть парк, бар и клуб. Идеально для тусовщиков и любителям бегать по парку',
  'Идеально для тех, кто любит спальные районы. Покой, тишина, без шумных соседей и свежий ремонт',
  'Расположение в отличном районе, в 5 минут от станции, рядом аквапарк',
  '650 метрах от популярного района, есть все удобства',
  'С живописным садом расположен в историческом здании, спальный район',
  'Еще одно балдежное и красивое описание',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_COUNT = 10;

const AVATARS = new Array(10)
  .fill()
  .map((value, index) => `img/avatars/user0${index + 1}.png`);

const createAd = () => {
  const COORDINATES = {
    lat: getRandomPositiveFloat(35.65, 35.7, 5),
    lng: getRandomPositiveFloat(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar: getRandomArrayElement(AVATARS),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `Широта: ${COORDINATES.lat}, Долгота: ${COORDINATES.lng}`,
      price: getRandomPositiveInteger(0, 13000),
      type: getRandomArrayElement(Object.values(TYPES_OF_HOUSING)),
      rooms: getRandomPositiveInteger(1, 3),
      guests: getRandomPositiveInteger(1, 3),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: shuffleArr(ALL_FEATURES),
      descriptions: getRandomArrayElement(DESCRIPTIONS),
      photos: shuffleArr(ALL_PHOTOS),
    },
    location: {
      lat: COORDINATES.lat,
      lng: COORDINATES.lng,
    },
  };
};

export { SIMILAR_COUNT, createAd };
