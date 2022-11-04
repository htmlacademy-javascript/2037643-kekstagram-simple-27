const errorMessage = function (message) {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = '100';
  errorContainer.style.position = 'absolute';
  errorContainer.style.padding = '20px 20px';
  errorContainer.style.top = '0px';
  errorContainer.style.left = '0px';
  errorContainer.style.right = '0px';
  errorContainer.style.backgroundColor = '#ff0000';
  errorContainer.style.textAlign = 'center';
  errorContainer.textContent = message;
  document.body.append(errorContainer);
};

export {errorMessage};
