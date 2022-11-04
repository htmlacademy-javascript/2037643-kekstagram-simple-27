import {createPhotos} from './miniatures-rendering.js';
import {errorMessage} from './error-message.js';
import {formImgUploadReset} from './form-img-upload-reset.js';
import {messageSucces} from './message-img-upload-succes.js';
import {messageError} from './message-img-upload-error.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((data) => data.json())
  .then((data) => createPhotos(data))
  .catch(() => errorMessage('Не удалось загрузить изображения, попробуйте обновить страницу'));

const sendData = function (formData, onSucces) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    })
    .then((data) => {
      if (data.ok) {
        onSucces();
        formImgUploadReset();
        messageSucces();
      } else {
        onSucces();
        formImgUploadReset();
        messageError();
      }
    })
    .catch(() => messageError());
};

export {sendData};
