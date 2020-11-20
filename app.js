$(window).scroll(function() {
    if ($(document).scrollTop() >610) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });