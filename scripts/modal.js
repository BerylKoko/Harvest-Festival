const dialog = document.getElementById('modal');
const openButton = document.getElementById('button-a');
const closeButton = document.getElementById('button-b');

if (dialog && openButton && closeButton) {
  openButton.setAttribute('aria-haspopup', 'dialog');
  openButton.setAttribute('aria-controls', 'modal');

  const openDialog = () => {
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
    closeButton.focus();
  };

  const closeDialog = () => {
    if (dialog.open) dialog.close();
  };

  openButton.addEventListener('click', openDialog);
  closeButton.addEventListener('click', closeDialog);

  // Close when the user clicks the backdrop, but not inside the dialog itself.
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    const outside =
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom;

    if (outside) closeDialog();
  });

  // Native dialogs already support Escape. Keep page state and focus tidy after any close.
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    openButton.focus();
  });

  dialog.addEventListener('cancel', () => {
    document.body.classList.remove('modal-open');
  });
}
