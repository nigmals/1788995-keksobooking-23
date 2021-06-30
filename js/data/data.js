import { getRandomPositiveInteger, getRandomPositiveFloat } from '../utils/utils.js';

const TYPES_OF_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
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

const getRandomArrayElement = (elements) => (
  elements[getRandomPositiveInteger(0, elements.length - 1)]
);

// массив случайной длины из неповторяющихся значений. Из https://qna.habr.com/q/844269
const shuffleArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

shuffleArr;

const lat = getRandomPositiveFloat(35.65000,  35.70000, 5);
const lon = getRandomPositiveFloat(139.70000, 139.80000, 5);

const avatars = new Array(10)
  .fill()
  .map((value, index) => `img/avatars/user0${index + 1}.png`);

const createAd = () => {
  const author = new Object();
  author.avatar = getRandomArrayElement(avatars);

  const offer = new Object();
  offer.title = 'Заголовок';
  offer.address = `Широта: ${lat}, Долгота: ${lon}`;
  offer.price = getRandomPositiveInteger(10000, 1000000);
  offer.type = getRandomArrayElement(TYPES_OF_HOUSING);
  offer.rooms = getRandomPositiveInteger(1, 3);
  offer.guests = getRandomPositiveInteger(1, 3);
  offer.checkin = getRandomArrayElement(TIMES);
  offer.checkout = getRandomArrayElement(TIMES);
  offer.features = shuffleArr(ALL_FEATURES, 5);
  offer.description = 'Описание';
  offer.photos = shuffleArr(ALL_PHOTOS, 3);

  const location = new Object();
  location.lat = lat;
  location.lng = lon;

  return {author, offer, location};
};

const similarAd = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(createAd);

export { similarAd };
