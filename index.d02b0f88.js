var btn=$("#scroll-btn");$(window).scroll((function(){$(window).scrollTop()>300?btn.addClass("scroll-btn--show"):btn.removeClass("scroll-btn--show")})),btn.on("click",(function(l){l.preventDefault(),$("html, body").animate({scrollTop:0},"200")}));
//# sourceMappingURL=index.d02b0f88.js.map
