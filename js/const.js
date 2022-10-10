import {getRandomIntInclusive} from './util.js';

//Временные данные для описания фотографий

const photoDescriptionCount = 25;//Количество объектов которые нужно создать для описания фотографий

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

export {photoDescriptionCount, LIKES, COMMENTS};
