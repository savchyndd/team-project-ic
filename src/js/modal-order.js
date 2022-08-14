// Script modal order window
(() => {
  var btn = $('.scroll-btn');
  const refs = {
    openModalOrderBtn: document.querySelector("[data-modal-order-open]"),
    openMobileModalOrderBtn: document.querySelector("[data-mobile-modal-order-open]"),
    closeModalOrderBtn: document.querySelector("[data-modal-order-close]"),
      modalOrder: document.querySelector("[data-modal-order]"),
    };
  
    refs.openModalOrderBtn.addEventListener("click", toggleModal);
    refs.openMobileModalOrderBtn.addEventListener("click", toggleModal);
    
    refs.closeModalOrderBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalOrder.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-order-open");
      btn.removeClass('scroll-btn--show');
      }
    }
)();