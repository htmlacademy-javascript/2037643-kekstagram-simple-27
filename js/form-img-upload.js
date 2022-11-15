// Модуль для загрузки изображений
import {sendData} from './server.js';
import {formImgUploadReset} from './form-img-upload-reset.js';

const form = document.querySelector('.img-upload__form');
const inputFileUpload = form.querySelector('#upload-file');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const buttonUploatCancel = form.querySelector('#upload-cancel');
const imgUploadSubmit = form.querySelector('.img-upload__submit');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const img = imgUploadPreview.querySelector('img');

const onImgEditorOpen = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorCloseKeydownEscape);
  imgUploadSubmit.removeAttribute('disabled');
};

const onImgEditorClose = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  img.style.transform = `scale(${1})`;
  inputFileUpload.value = '';
  formImgUploadReset();
  document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
};

function onImgEditorCloseKeydownEscape (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onImgEditorClose();
    document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
  }
}

const onImgUploadSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  sendData(formData, onImgEditorClose);

  imgUploadSubmit.setAttribute('disabled', 'disabled');
};

inputFileUpload.addEventListener('change', onImgEditorOpen);

buttonUploatCancel.addEventListener('click', onImgEditorClose);

document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);

form.addEventListener('submit', onImgUploadSubmit);

export {onImgEditorCloseKeydownEscape};
