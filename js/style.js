$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1
  });
  $('.intro__button').on('click', function(evt){
    $('.intro-modal').removeClass('d-none')
  });
  $('.modal-form__close').on('click', function (evt) {
    $('.intro-modal').addClass('d-none')
  });
});