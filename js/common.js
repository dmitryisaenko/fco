
$(document).ready(function(){
    // $('#owl_first').owlCarousel({
    //     margin:1,
    //     loop:true,
    //     autoWidth:true,
    //     items:2,
    //     autoplay:true,
    //     autoplaySpeed: 1000,
    //     autoplayTimeout:4000,
    //     autoplayHoverPause:true
    // });

    


    // Скрытие/отображение пунктов меню для моб. версии
    var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
        
    });
    
	// Sidebar navigation arrows
	$sidebarArrow.click(function() {
        $sidebarArrow.not(this).next().hide(300);
        $(this).next().slideToggle(300);
    });
    
    // Отображение полной исторической справки
    $('.meta-more p').on('click', function() {
		$(this).parents().find('.history-article').toggleClass('hist-open');
		$(this).toggleClass('meta-more-active');
		// $(this).css('display', 'inline-block');;
    });

    // Плавный переход между разделами сайта при клике на пункты меню
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    
    // Кнпка "Наверх" с появлением
    var top_show = 550; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(document).ready(function() {
        $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#back-top').fadeIn();
        else $('#back-top').fadeOut();
        });
        $('#back-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
        });
    });
   
  });

  