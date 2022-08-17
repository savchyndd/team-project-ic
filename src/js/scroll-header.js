window.onscroll = function () {
    myFunction();
};

var header = document.getElementById('heder');
var headerScroll = $('.header-section');
var headerPadding = $('.header');
var headerPaddingPadd = $('.header-padding');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
      headerScroll.addClass('header__scroll');
    //   headerPaddingPadd.removeClass('header-padding');
    //   headerPadding.style.paddingTop = `$10px`;
  } else {
      headerScroll.removeClass('header__scroll');
    //   headerPaddingPadd.addClass('header-padding');
  }
}
