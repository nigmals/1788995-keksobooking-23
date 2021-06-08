/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
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

  const createAd = () => ({
    author: {
      avatar: 'img/avatars/user0${getRandomPositiveInteger(1, 10)}.png',
    },
    offer: {
      title: 'Заголовок',
      address: 'Широта: ${getRandomPositiveFloat(35.65000,  35.70000, 5)}, Долгота: ${getRandomPositiveFloat(139.70000, 139.80000, 5)}',
      // eslint-disable-next-line no-undef
      price: getRandomPositiveInteger(10000, 1000000),
      type: getRandomArrayElement(TYPES_OF_HOUSING),
      rooms: getRandomPositiveInteger(1, 100),
      guests: getRandomPositiveInteger(1, 100),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: createArr(ALL_FEATURES, 5),
      description: 'Описание',
      photos: createArr(ALL_PHOTOS, 3),
    },
    location: {
      lat: getRandomPositiveFloat(35.65000,  35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
    },
  });

  const similarAd = new Array(SIMILAR_COUNT).fill(null).map(() => createAd());

  similarAd;

  const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

  // массив случайной длины из неповторяющихся значений. Из https://qna.habr.com/q/844269
  const createArr = ([...source], maxLength) => Array.from(
    { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
    () => source.splice(Math.random() * source.length | 0, 1)[0]);

  createArr;
