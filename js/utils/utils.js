/* function getRandomPositiveInteger (min,max) {

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat (min, max, digits = 1) {

  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

const getRandomArrayElement = (elements) => (
  elements[getRandomPositiveInteger(0, elements.length - 1)]
);

// массив случайной длины из неповторяющихся значений. Из https://qna.habr.com/q/844269
// Не работает нифига
// const shuffleArr = ([...source], maxLength) => Array.from(
//  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
//  () => source.splice(Math.random() * source.length | 0, 1)[0]);

const shuffleArr = (items) => {
  const randomIndex = getRandomPositiveInteger(0, items.length - 1);
  const randomFeatures = items.slice(0, randomIndex + 1);
  return randomFeatures;
};
*/
const isEscEvent = (evt) => (evt.key === 'Escape' || evt.key === 'Esc');

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscEvent, debounce };


