$(document).ready(function() {
  
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.first-row, .second-row, .third-row, .fourth-row, .fifth-row, .sixth-row, .mirrors-row, .onboard-row, .group-row, .first-row img').css('min-height', windowHeight);    
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
  windowHeight = $(window).innerHeight();
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > windowHeight) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < windowHeight) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
  $('body').hide();
  $('body').fadeIn(4000);
  
  $('.centerpiece-tag, .centerpiece-credits, .loop-img').hide();
  $('.centerpiece-tag, .centerpiece-credits').fadeIn(5000);
  
  $('.loop-img').delay(2000).fadeIn(6000);
});
