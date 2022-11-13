const message = document.querySelector('#error').content.querySelector('.error');
const buttonMessageClose = message.querySelector('.error__button');
const messageBlock = document.querySelector('#error').content.querySelector('.error__inner');

function showMessageError () {
  document.body.appendChild(message);

  function onButtonCloseClick () {
    document.body.removeChild(message);
    buttonMessageClose.removeEventListener('click', onButtonCloseClick);
  }

  function onCloseClick (evt) {
    const click = evt.composedPath().includes(messageBlock);
    if (!click) {
      document.body.removeChild(message);
    }
    document.removeEventListener('click', onCloseClick);
  }

  function onButtonCloseKeydown (evt) {
    if (evt.key === 'Escape') {
      document.body.removeChild(message);
      document.removeEventListener('keydown', onButtonCloseKeydown);
    }
  }

  buttonMessageClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('click', onCloseClick);
  document.addEventListener('keydown', onButtonCloseKeydown);
}

export {showMessageError};
