$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,items:1,center:!1,responsive:{0:{nav:!1,margin:50},764:{nav:!0},1366:{nav:!0}}}),$(".intro__button").on("click",function(e){$(".intro-modal").removeClass("d-none").addClass("show")}),$(".modal-form__close").on("click",function(e){$(".intro-modal").addClass("d-none").removeClass("show")}),$(".main-nav__toogles").on("click",function(e){$(".header-modal__container").removeClass("d-none").addClass("show")}),$(".modal-close").on("click",function(e){$(".header-modal__container").addClass("d-none").removeClass("show")}),$(".modal-manu a").on("click",function(e){$(".header-modal__container").addClass("d-none").removeClass("show")}),jQuery.validator.addMethod("checkMask",function(e,o){return/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(e)}),$(".modal-form").validate({rules:{fname:{required:!0,minlength:2},fmail:{required:!0,email:!0},fphone:{required:!0,checkMask:!0}},messages:{fname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fmail:{required:"Это поле обязательно",email:"Необходим формат адреса email"},fphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"},fcheckbox:{required:"Необходимо Ваше согласие"}}}),$("#phone").mask("+7(999)999-9999",{autoclear:!1})});