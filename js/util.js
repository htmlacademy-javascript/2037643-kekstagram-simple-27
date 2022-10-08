// Функция для создания случайного числа в указанном диапазоне включительно
// Источник функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);


  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min > max) {
    const minValue = min;
    min = max;
    max = minValue;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomIntInclusive};
