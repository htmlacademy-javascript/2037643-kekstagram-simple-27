const message = document.querySelector('#success').content.querySelector('.success');
const buttonMessageClose = message.querySelector('.success__button');
const messageBlock = document.querySelector('#success').content.querySelector('.success__inner');

const showMessageSucces = () => {
  document.body.appendChild(message);

  const onButtonCloseClick = () => {
    document.body.removeChild(message);
    buttonMessageClose.removeEventListener('click', onButtonCloseClick);
  };

  const onCloseClick = (evt) => {
    const click = evt.composedPath().includes(messageBlock);
    if (!click) {
      document.body.removeChild(message);
    }
    document.removeEventListener('click', onCloseClick);
  };

  const onButtonCloseKeydown = (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(message);
      document.removeEventListener('keydown', onButtonCloseKeydown);
    }
  };

  buttonMessageClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('click', onCloseClick);
  document.addEventListener('keydown', onButtonCloseKeydown);
};

export {showMessageSucces};
