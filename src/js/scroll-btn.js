var btn = $('.scroll-btn');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('scroll-btn--show');
  } else {
    btn.removeClass('scroll-btn--show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '200');
});