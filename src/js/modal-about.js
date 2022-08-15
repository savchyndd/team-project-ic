// Script modal about section window
(() => {
  var btn = $('.scroll-btn'); 
  const refs = {
      openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
      closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
      modalAbout: document.querySelector("[data-modal-about]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalAboutBtn.addEventListener("click", toggleModal);
    refs.closeModalAboutBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modalAbout.classList.toggle("is-hidden");
    refs.body.classList.toggle('body-fixed');
    btn.removeClass('scroll-btn--show');  
  }
  })();