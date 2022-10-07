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

//Функция проверки минимальной и максимальной длины строки

function commentLength (stroke, maxLength) {
  return stroke.length <= maxLength;
}

//Временные данные для описания фотографий

const photoDescriptionCount = 25;//Количество объектов которые нужно создать

const createArrayLikes = function (count) {//Функция для создания массива с данными LIKES
  const likes = [];
  for (let i = 0; i < count; i++) {
    likes[i] = getRandomIntInclusive(15, 200);
  }
  return likes;
};

const LIKES = createArrayLikes(photoDescriptionCount);//Массив с данными LIKES

const createArrayComments = function (count) {//Функция для создания массива с данными COMMENTS
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments[i] = getRandomIntInclusive(0, 200);
  }
  return comments;
};

const COMMENTS = createArrayComments(photoDescriptionCount);//Массив с данными COMMENTS

const createPhotosArray = function (photosQuantity) {//Функция для создания массива из объектов с описанием фотографий
  let photosArray = [];

  for (let i = 1; i <= photosQuantity; i++) {
    let obj = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фото ${getRandomIntInclusive(1, photoDescriptionCount)}`,
      likes: LIKES[getRandomIntInclusive(15, LIKES.length)],
      comments: COMMENTS[getRandomIntInclusive(0, COMMENTS.length)],
    };

    photosArray.push(obj);
  }

  return photosArray;
};
