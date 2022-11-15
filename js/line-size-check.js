//Функция проверки минимальной и максимальной длины строки
import {MAX_LENGTH_COMMENT} from './const.js';

const comment = document.querySelector('.text__description');

const getMaxCommentLength = (stroke, maxLength) => stroke.length <= maxLength;

getMaxCommentLength(comment, MAX_LENGTH_COMMENT);
