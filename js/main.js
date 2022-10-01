// Источник функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(5, 10));
