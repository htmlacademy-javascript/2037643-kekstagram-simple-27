import {getRandomIntInclusive} from './util.js';
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
  const photosArray = [];

  for (let i = 1; i <= photosQuantity; i++) {
    const obj = {
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
