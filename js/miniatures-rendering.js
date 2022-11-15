const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoList = document.querySelector('.pictures');
const photosFragment = document.createDocumentFragment();

const createPhotos = (photos) => {
  photos.forEach((value) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = value.url;
    photoElement.querySelector('.picture__likes').textContent = value.likes;
    photoElement.querySelector('.picture__comments').textContent = value.comments;
    photosFragment.appendChild(photoElement);
  });

  photoList.appendChild(photosFragment);
};

export {createPhotos};
