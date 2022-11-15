const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const img = imgUploadPreview.querySelector('img');

const onimgResize = (image, imgSize) => {
  const imgSizeParseInt = parseInt(imgSize, 10);
  const imgResizeValue = imgSizeParseInt / 100;
  image.style.transform = `scale(${imgResizeValue})`;
};

const onScaleControlSmallerClick = () => {
  if (scaleControlValue.value !== '25%') {
    const valueParseInt = parseInt(scaleControlValue.value, 10);
    const valueParseIntSmaller = valueParseInt - 25;
    const valueParseString = String(valueParseIntSmaller);
    scaleControlValue.value = `${valueParseString}%`;
  }

  onimgResize(img, scaleControlValue.value);
};

const onScaleControlBiggerClick = () => {
  if (scaleControlValue.value !== '100%') {
    const valueParseInt = parseInt(scaleControlValue.value, 10);
    const valueParseIntSmaller = valueParseInt + 25;
    const valueParseString = String(valueParseIntSmaller);
    scaleControlValue.value = `${valueParseString}%`;
  }

  onimgResize(img, scaleControlValue.value);
};

scaleControlSmaller.addEventListener ('click', onScaleControlSmallerClick);

scaleControlBigger.addEventListener ('click', onScaleControlBiggerClick);
