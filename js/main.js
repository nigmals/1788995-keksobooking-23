function getRandomIntegerFromRange (min, max) {
  const ceiledMin = Math.ceil(min);
  const ceiledMax = Math.floor(max);
  const intervalLength = Math.floor(max) - Math.ceil(min);

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw  new Error ('Оба аргумента не должны быть строкой');
  }
  if (intervalLength <= 0) {
    throw  new Error ('Некорректные границы интервала');
  }
  if (ceiledMin < 0 || ceiledMax< 0 || ceiledMax <= ceiledMin) {
    throw  new Error ('Оба аргумента должны быть положительными и  второй аргумент больше первого!');
  }

  return Math.floor(ceiledMin + Math.random() * (ceiledMax + 1 - ceiledMin));
}

getRandomIntegerFromRange(1.2, 2.2);

function getRandomFloatFromRange (min, max, places) {
  const intervalLength = max - min;

  if (typeof min !== 'number' || typeof max !== 'number' || typeof places !== 'number') {
    throw  new Error ('Все аргументы не должны быть строкой');
  }
  if (intervalLength <= 0) {
    throw  new Error ('Некорректные границы интервала');
  }
  if (places <= 0) {
    throw  new Error ('Третий аргумент должен быть больше нуля');
  }
  if (min < 0 || max < 0 || max <= min) {
    throw  new Error ('Все аргументы должны быть положительными и второй аргумент больше первого!');
  }

  const number = Math.random() * (max - min) + min;
  return parseFloat(number.toFixed(places));
}

getRandomFloatFromRange(0.1, 0.2, 1);
