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

const createArrayLikes = function () {//Функция для создания массива с данными LIKES
  const likes = [];
  for (let i = 0; i < photoDescriptionCount; i++) {
    likes[i] = getRandomIntInclusive(15, 200);
  }
  return likes;
};

const LIKES = createArrayLikes();//Массив с данными LIKES

const createArrayComments = function () {//Функция для создания массива с данными COMMENTS
  const comments = [];
  for (let i = 0; i < photoDescriptionCount; i++) {
    comments[i] = getRandomIntInclusive(0, 200);
  }
  return comments;
};

const COMMENTS = createArrayComments();//Массив с данными COMMENTS

const createPhotoDescription = function () {//Функция для создания объекта
  return {
    id: '',
    url: '',
    description: `Фото ${getRandomIntInclusive(1, photoDescriptionCount)}`,
    likes: LIKES[getRandomIntInclusive(0, LIKES.length)],
    comments: COMMENTS[getRandomIntInclusive(0, COMMENTS.length)],
  };
};

const photos = Array.from({length: photoDescriptionCount}, createPhotoDescription);//Создаём и наполняем массив созданными объектами

for (let i = 0; i < photos.length; i++) {//Цикл для заполнения ключа id в созданных объектах
  photos[i].id = i + 1;
}

for (let i = 0; i < photos.length; i++) {//Цикл для заполнения ключа url в созданных объектах
  photos[i].url = `photos/${i + 1}.jpg`;
}
