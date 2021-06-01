function getRandomInteger (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( min < 0 || max < 0 || max <= min) {
    return 'Оба аргумента должны быть положительными и  второй аргумент больше первого!';
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

getRandomInteger(1,6);

function getRandomFromRange (min, max , places) {
  if ( min < 0 || max < 0 || max <= min) {
    return 'Оба аргумента должны быть положительными и  второй аргумент больше первого!';
  }
  const RESULT = Math.random() * (max - min) + min;
  return RESULT.toFixed(places);
}

getRandomFromRange(0.0, 1.2, 1);
