function getRandomIntNumFromIntRange (min, max) {
  const firstNumber = Math.ceil(min);
  const secondNumber = Math.floor(max);
  const numbersOfInterval = Math.floor(max) - Math.ceil(min);

  if (typeof min !== 'number' || typeof max !== 'number') {
    return ('Оба аргумента не должны быть строкой');
  }
  if (numbersOfInterval < 0) {
    return 'Оба аргумента должны быть целыми числами';
  }
  if (firstNumber < 0 || secondNumber < 0 || secondNumber <= firstNumber) {
    return 'Оба аргумента должны быть положительными и  второй аргумент больше первого!';
  }

  return Math.floor(firstNumber + Math.random() * (secondNumber + 1 - firstNumber));
}

getRandomIntNumFromIntRange(1.2, 2.2);

function getRandomFloatNumFromRange (min, max , places) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof places !== 'number') {
    return ('Все аргументы не должны быть строкой');
  }
  if (places <= 0){
    return 'Третий аргумент должен быть больше нуля';
  }
  if (min < 0 || max < 0 || max <= min) {
    return 'Все аргументы должны быть положительными и второй аргумент больше первого!';
  }

  const number = Math.random() * (max - min) + min;
  return parseFloat(number.toFixed(places));
}

getRandomFloatNumFromRange(0.1, 0.2, 1);
