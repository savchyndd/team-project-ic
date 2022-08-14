(() => {
  var btn = $('.scroll-btn');
  const refs = {
    openModalcontactsBtn: document.querySelector('[data-modal-contacts-open]'),
    closeModalcontactsBtn: document.querySelector(
      '[data-modal-contacts-close]'
    ),
    modalcontacts: document.querySelector('[data-modal-contacts]'),
  };
  
  refs.openModalcontactsBtn.addEventListener('click', toggleModal);
  refs.closeModalcontactsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontacts.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-contacts-open');
    btn.removeClass('scroll-btn--show');
  }

  const maps = document.querySelectorAll('.map-wrap');

  const handleMapButtonClick = id => {
    id = id.split('_')[0];
    console.log(id);
    maps.forEach(map => {
      map.classList.add('display-none');
      if (map.id == id) {
        map.classList.remove('display-none');
      }
    });
    mapButtons.forEach(button => {
      button.classList.remove('btn--red');
      if (button.id == id + '_btn') {
        button.classList.add('btn--red');
      }
    });
  };

  const mapButtons = document.querySelectorAll('.map-button');
  [...mapButtons].forEach(item => {
    item.addEventListener('click', () => handleMapButtonClick(item.id));
  });
})();
