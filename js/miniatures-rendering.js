import {createPhotosArray} from './create-photos-description.js';
import {photoDescriptionCount} from './const.js';

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoList = document.querySelector('.pictures');
const photos = createPhotosArray(photoDescriptionCount);
const photosFragment = document.createDocumentFragment();

photos.forEach((value) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = value.url;
  photoElement.querySelector('.picture__likes').textContent = value.likes;
  photoElement.querySelector('.picture__comments').textContent = value.comments;
  photosFragment.appendChild(photoElement);
});

photoList.appendChild(photosFragment);
