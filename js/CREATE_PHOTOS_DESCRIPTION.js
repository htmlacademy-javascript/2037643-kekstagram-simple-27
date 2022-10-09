import {getRandomIntInclusive} from './util.js';
import {photoDescriptionCount, LIKES, COMMENTS} from './const.js';

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
