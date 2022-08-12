// Script modal about section window
(() => {
    const refs = {
      openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
      closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
      modalAbout: document.querySelector("[data-modal-about]"),
    };
  
    refs.openModalAboutBtn.addEventListener("click", toggleModal);
    refs.closeModalAboutBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modalAbout.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-about-open");
    }
  })();