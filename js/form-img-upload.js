// Модуль для загрузки изображений

const form = document.querySelector('.img-upload__form');
const inputFileUpload = form.querySelector('#upload-file');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const buttonUploatCancel = form.querySelector('#upload-cancel');
const imgUploadSubmit = form.querySelector('.img-upload__submit');

function onImgEditorOpen () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorCloseKeydownEscape);
}

function onImgEditorClose () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
}

function onImgEditorCloseKeydownEscape (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onImgEditorClose();
    document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);
  }
}

function onImgUploadSubmitDisabled () {
  imgUploadSubmit.setAttribute('disabled', 'disabled');
}

inputFileUpload.addEventListener('change', onImgEditorOpen);

buttonUploatCancel.addEventListener('click', onImgEditorClose);

document.removeEventListener('keydown', onImgEditorCloseKeydownEscape);

form.addEventListener('submit', onImgUploadSubmitDisabled);
