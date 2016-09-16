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
  
  $('.centerpiece-tag, .loop-img').hide();
  $('.centerpiece-tag').fadeIn(5000);
  
  $('.loop-img').delay(2000).fadeIn(6000);
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
