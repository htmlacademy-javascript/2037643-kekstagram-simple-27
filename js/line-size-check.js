//Функция проверки минимальной и максимальной длины строки
import {MAX_LENGTH_COMMENT} from './const.js';

const comment = document.querySelector('.text__description');

function getMaxCommentLength (stroke, maxLength) {
  return stroke.length <= maxLength;
}

getMaxCommentLength(comment, MAX_LENGTH_COMMENT);
