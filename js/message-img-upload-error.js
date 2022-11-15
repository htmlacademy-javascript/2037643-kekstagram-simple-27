import {onImgEditorCloseKeydownEscape} from './form-img-upload.js';

const message = document.querySelector('#error').content.querySelector('.error');
const buttonMessageClose = message.querySelector('.error__button');
const messageBlock = document.querySelector('#error').content.querySelector('.error__inner');
const imgUploadSubmit = document.querySelector('.img-upload__submit');

const showMessageError = () => {
  document.body.appendChild(message);

  const managementEvent = () => {
    buttonMessageClose.removeEventListener('click', onButtonCloseClick);
    document.removeEventListener('click', onCloseClick);
    document.removeEventListener('keydown', onButtonCloseKeydown);
    document.addEventListener('keydown', onImgEditorCloseKeydownEscape);
  };

  function onButtonCloseClick () {
    document.body.removeChild(message);
    managementEvent();
  }

  function onCloseClick (evt) {
    const click = evt.composedPath().includes(messageBlock);
    if (!click) {
      document.body.removeChild(message);
      managementEvent();
    }
  }

  function onButtonCloseKeydown (evt) {
    if (evt.key === 'Escape') {
      document.body.removeChild(message);
      managementEvent();
    }
  }

  document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
  buttonMessageClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('click', onCloseClick);
  document.addEventListener('keydown', onButtonCloseKeydown);
  imgUploadSubmit.removeAttribute('disabled');
};

export {showMessageError};
