import {createPhotos} from './miniatures-rendering.js';
import {createErrorMessage} from './error-message.js';
import {formImgUploadReset} from './form-img-upload-reset.js';
import {showMessageSucces} from './message-img-upload-succes.js';
import {showMessageError} from './message-img-upload-error.js';
import {GET_DATA} from './const.js';
import {POST_DATA} from './const.js';

fetch(GET_DATA)
  .then((data) => data.json())
  .then((data) => createPhotos(data))
  .catch(() => createErrorMessage('Не удалось загрузить изображения, попробуйте обновить страницу'));

const sendData = function (formData, onSucces) {
  fetch(POST_DATA,
    {
      method: 'POST',
      body: formData,
    })
    .then((data) => {
      if (data.ok) {
        onSucces();
        formImgUploadReset();
        showMessageSucces();
      } else {
        onSucces();
        formImgUploadReset();
        showMessageError();
      }
    })
    .catch(() => showMessageError());
};

export {sendData};
