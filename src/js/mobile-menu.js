// Scripts mobile, tablet menu
(() => {
    const mobileRefs = {
      mobileMenuBtnRef : document.querySelector("[data-menu-btn]"),
      mobileMenuRef: document.querySelector("[data-menu]"),
    };
  
    mobileRefs.mobileMenuBtnRef.addEventListener("click", toggleMobileMenu);
     
  function toggleMobileMenu() {
    const expanded =
      mobileRefs.mobileMenuBtnRef.getAttribute("aria-expanded") === "true" || false;
      mobileRefs.mobileMenuBtnRef.classList.toggle("is-open");
      mobileRefs.mobileMenuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileRefs.mobileMenuRef.classList.toggle("is-open");

      document.body.classList.toggle("mobile-menu-open");
    }
  })();