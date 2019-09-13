$(document).ready(function(){
    $('.slick-carousel').slick({
    });


    $('.slick-carousel-media-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slick-carousel-media-single',
      centerMode: true,
      centerPadding: '60px',
      focusOnSelect: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000
    });




  });
