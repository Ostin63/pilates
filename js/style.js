$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    center: false,
    responsive: { 
      0: {
        nav: false,
        margin: 50
        
      },
      764: {
        nav:true
      },
      1366: {
        nav:true
      }
    }
  });
  $('.intro__button').on('click', function(evt){
    $('.intro-modal').removeClass('d-none').addClass('show')
  });
  $('.modal-form__close').on('click', function (evt) {
    $('.intro-modal').addClass('d-none').removeClass('show')
  });
  $('.main-nav__toogles').on('click', function(evt) {
    $('.header-modal__container').removeClass('d-none').addClass('show')
  });
  $('.modal-close').on('click', function (evt){
    $('.header-modal__container').addClass('d-none').removeClass('show')
  });
  $('.modal-manu a').on('click', function(evt){
    $('.header-modal__container').addClass('d-none').removeClass('show')
  })
});