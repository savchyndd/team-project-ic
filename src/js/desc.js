(() => {
  const refs = {
      openDescPinkBtn: document.querySelector("[data-desc-pink-open]"),
      openDescBrownBtn: document.querySelector("[data-desc-brown-open]"),
      openDescGreenBtn: document.querySelector("[data-desc-green-open]"),
      descPink: document.querySelector("[data-pink-desc]"),
      descBrown: document.querySelector("[data-brown-desc]"),
      descGreen: document.querySelector("[data-green-desc]"),
    };
  
    refs.openDescPinkBtn.addEventListener("click", togglePink);
    refs.openDescBrownBtn.addEventListener("click", toggleBrown);
    refs.openDescGreenBtn.addEventListener("click", toggleGreen);
  
  function togglePink() {
      refs.descPink.classList.toggle("products__desc-overlay-open");
      refs.openDescPinkBtn.classList.toggle("desc-rotate");
  }
  function toggleBrown() {
      refs.descBrown.classList.toggle("products__desc-overlay-open");
      refs.openDescBrownBtn.classList.toggle("desc-rotate");
  }
  function toggleGreen() {
      refs.descGreen.classList.toggle("products__desc-overlay-open");
      refs.openDescGreenBtn.classList.toggle("desc-rotate");
  }
  })();