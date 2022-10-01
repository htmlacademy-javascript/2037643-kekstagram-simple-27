//Функция возвращающая случайное целое число из переданного диапазона включительно
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

console.log(getRandomIntInclusive(3, 1));

//Функция проверки минимальной и максимальной длины строки

function commentLength (stroke, minLength, maxLength) {
  if (stroke.length < minLength) {
    console.log(`Длинна комментария не может быть меньше ${ minLength } символов`);
  }
  else if (stroke.length > maxLength) {
    console.log(`Длинна комментария не может быть больше ${ maxLength } символов`);
  }
  else {
    console.log(stroke);
  }
}

commentLength('ааа', 20, 140);
