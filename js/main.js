
$(document).ready(function () {

  $('.autoplay').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.slide_target').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slide_target').slick('slickPlay');
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  if ($(window).innerWidth() > 414) {
    window.onscroll = function () {
      var scrollTop = window.pageYOffset;  //スクロール量を代入する

      if (scrollTop < 600) {   //600より上にスクロールしたとき
        $(".logo_white").css('opacity', '1')
        $('.logo_white').css('transition', '0.2s')

        $(".logo_color").css('opacity', '0')
        $('.logo_color').css('transition', '0.2s')
      }
      if (scrollTop > 500) {   //１０pxスクロールした時
        $(".logo_white").css('opacity', '0')
        $('.logo_white').css('transition', '0.2s')

        $(".logo_color").css('opacity', '1')
        $('.logo_color').css('transition', '0.2s')
      }
    }
    var $nav = $('nav ul li a')


    jQuery(window).on('scroll', function () {
      if (500 < jQuery(this).scrollTop()) {
        $nav.addClass('change-color');
      } else {
        $nav.removeClass('change-color');
      }
    });
  }

  

  // info textarea
  $(function () {
    $('#textarea')
      .on('input', function () {
        if ($(this).outerHeight() > this.scrollHeight) {
          $(this).height(1)
        }
        while ($(this).outerHeight() < this.scrollHeight) {
          $(this).height($(this).height() + 1)
        }
      });
  });

});
$(function () {
  $('.index_burger').click(function () {
      $('.index_burger').toggleClass('is_active');
      $('.fixed').toggleClass('is_active');
  });

});