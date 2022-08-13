(() => {
  const refs = {
    openModalcontactsfranchiseBtn: document.querySelector(
      '[data-modal-contacts-franchise-open]'
    ),
    closeModalcontactsfranchiseBtn: document.querySelector(
      '[data-modal-contacts-franchise-close]'
    ),
    modalcontactsfranchise: document.querySelector(
      '[data-modal-contacts-franchise]'
    ),
  };

  refs.openModalcontactsfranchiseBtn.addEventListener('click', toggleModal);
  refs.closeModalcontactsfranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontactsfranchise.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-contacts-franchise-open');
  }
})();