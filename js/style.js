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
        nav: true
      },
      1366: {
        nav: true
      }
    }
  });
  $('.intro__button').on('click', function (evt) {
    $('.intro-modal').removeClass('d-none').addClass('show')
  });
  $('.modal-form__close').on('click', function (evt) {
    $('.intro-modal').addClass('d-none').removeClass('show')
  });
  $('.main-nav__toogles').on('click', function (evt) {
    $('.header-modal__container').removeClass('d-none').addClass('show')
  });
  $('.modal-close').on('click', function (evt) {
    $('.header-modal__container').addClass('d-none').removeClass('show')
  });
  $('.modal-manu a').on('click', function (evt) {
    $('.header-modal__container').addClass('d-none').removeClass('show')
  });

  jQuery.validator.addMethod("checkMask", function (value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  $('.modal-form').validate({
    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      fmail: {
        required: true,
        email: true
      },
      fphone: {
        required: true,
        checkMask: true
      }
    },
    messages: {
      fname: {
        required: "Это поле обязательно",
        minlength: "Введите не менее 2-х символов в поле 'Имя'"
      },
      fmail: {
        required: "Это поле обязательно",
        email: "Необходим формат адреса email"
      },
      fphone: {
        required: "Это поле обязательно",
        checkMask: "Введите полный номер телефона"
      },
      fcheckbox : {
        required: "Необходимо Ваше согласие"
      }
    }
  });
  $('#phone').mask("+7(999)999-9999", { autoclear: false });
});