const TYPES_OF_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIMES = [
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

function getRandomPositiveFloat (min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const shuffleArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

shuffleArr;

const lat = getRandomPositiveFloat(35.65000,  35.70000, 5);
const lon = getRandomPositiveFloat(139.70000, 139.80000, 5);

const AVATARS = [];
for ( let count = 1; count <= 11; count++ ) {
  const zeroInt = (count < 10) ? 0 : '';
  AVATARS.push(`img/avatars/user${  zeroInt  }${count  }.png`);
}

const createAd = () => ({
  author: {
    avatar: getRandomArrayElement(AVATARS),
  },
  offer: {
    title: 'Заголовок',
    address: `Широта: ${lat}, Долгота: ${lon}`,
    price: getRandomPositiveInteger(10000, 1000000),
    type: getRandomArrayElement(TYPES_OF_HOUSING),
    rooms: getRandomPositiveInteger(1, 100),
    guests: getRandomPositiveInteger(1, 100),
    checkin: getRandomArrayElement(CHECKIN_TIMES),
    checkout: getRandomArrayElement(CHECKOUT_TIMES),
    features: shuffleArr(ALL_FEATURES, 5),
    description: 'Описание',
    photos: shuffleArr(ALL_PHOTOS, 3),
  },
  location: {
    lat: lat,
    lng: lon,
  },
});

const similarAd = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(createAd);

similarAd;
