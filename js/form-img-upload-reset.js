const scaleControlValue = document.querySelector('.scale__control--value');
const imgContainer = document.querySelector('.img-upload__preview');
const img = imgContainer.querySelector('img');
const effectNone = document.querySelector('input[type="radio"][value="none"]');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const comment = document.querySelector('.text__description');

const formImgUploadReset = () => {
  scaleControlValue.value = `${100}%`;
  img.style.removeProperty('filter');
  img.removeAttribute('class');
  effectNone.checked = true;
  sliderContainer.style.display = 'none';
  comment.value = '';
};

export {formImgUploadReset};
