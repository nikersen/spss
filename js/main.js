$(document).ready(function(){

	// Header

	var menuShow = function(){
		$('.menu-list').addClass('show');
		$('.js-menu-toggle').addClass('active');
	}

	var menuHide = function(){
		$('.menu-list').removeClass('show');
		$('.js-menu-toggle').removeClass('active');
	}

	$('.js-menu-toggle').click(function(){
		$('.menu-list').toggleClass('show');
		$('.js-menu-toggle').toggleClass('active');
	});

	// Slider

	var sliderShow = function(point, page){
		menuHide();
		$('.service-menu__item, .left-menu__item, .tile__item').removeClass('active');
		point.parent().addClass('active');
		$('.slider').addClass('show');
		$('.slider__page').hide();
		$('.slider__page--' + page).fadeIn();
		$('.blur-this').addClass('blur-on');
		$('.content__logo').addClass('.content__logo--hiding')
	}

	var sliderHide = function(point, page){
		menuHide();
		$('.left-menu__item, .tile__item').removeClass('active');
		$('.slider').removeClass('show');
		$('.slider__page').fadeOut();
		$('.blur-this').removeClass('blur-on');
		$('.content__logo').removeClass('.content__logo--hiding')
	}

	$('.js-show-page-1').click(function(){
		sliderShow($(this), 1);
	});

	$('.js-hide-slider').click(function(){
		sliderHide();
	});

	$('.js-toggle-slider').click(function(){
		if ($('.slider').hasClass('show')) {
			sliderHide();
		} else {
			sliderShow($(this), 1);
		}
	});

	// Calc

	var calcShow = function(e){
		menuHide();

		$('.calc--hidden').addClass('show');
		
	}

	var calcHide = function(){
		menuHide();
		$('.calc--hidden').removeClass('show');
	}

	$('.js-show-calc').click(function(e){
		e.preventDefault();
		calcShow();
	});

	$('.js-hide-calc').click(function(){
		calcHide();
	});

	// Search

	$('.js-open-search').click(function(){
		$('.search').fadeIn();

		hideAll();

	});

	$('.js-close-search').click(function(){
		$('.search').fadeOut();
	});

	// Show calc dropdown

	var dropdownShow = function(field){
		dropdownHide();
		field.addClass('active').next().slideDown('fast');
	}
	
	var dropdownHide = function(item){
		$('.calc-form__dropdown').slideUp('fast').prev().removeClass('active');
	}

	var dropdownValue = function(item){
		var d = item.text();
		item.closest('.calc-form__item').next('.calc-form__item').removeClass('hidden');
		item.closest('.calc-form__item').find('.calc-form__val').text(d);
		item.closest('.calc-form__item').find('.calc-form__input-hidden').val(d);
		dropdownHide();
	}

	$('.js-show-dropdown').click(function(){
		dropdownShow($(this));
	});

	$('.js-dropdown-val').click(function(){
		dropdownValue($(this));
	});

	// # Демонстрация второго шага на форме
	$('.js-form-success').click(function(e){
		e.preventDefault();
		$('.calc-form__params').hide();
		$('.calc-form__finish').fadeIn();
	});

	// Other

	// # Закрыть все
	var hideAll = function(){
		dropdownHide();
		menuHide();
		calcHide();
		sliderHide();
	}

	// # Прячем скроллбар
	var scrollbarSize = function(){
		var sw = $('.js-scrollbar-width');
		var padding = $('.js-auto-scroll-padding');
		var margin = $('.js-auto-scroll-margin');
		var num = sw.get(0).offsetWidth - sw.get(0).clientWidth;

		padding.css('padding-right', num);
		margin.css('margin-right', 0-num);
	}

	scrollbarSize();
	$(window).resize(function(){
		scrollbarSize();
	});

	// Инициализация accordion 
	$('.js-accordion-here').accordion({
		active: false,
		collapsible: true,
		heightStyle: 'content'
	});

	// Инициализация slick-carousel
	$('#carousel-here').slick({
		arrows: false,
	});

	$('.footer__nav-arrow--next').click(function(){
		$('#carousel-here').slick('slickNext');
	});

	$('.footer__nav-arrow--prev').click(function(){
		$('#carousel-here').slick('slickPrev');
	});

	$('#carousel-here').on('beforeChange', function(event, slick, currentSlide, nextSlide){

		if ($(window).width() >= 767) {
			for (var i = 0; i < $('.carousel video').length; i++) {
				$('.carousel video').get(i).play();
			}
		}
	});

	if ($(window).width() >= 767) {
		for (var i = 0; i < $('.carousel video').length; i++) {
			$('.carousel video').get(i).play();
		}
	}
});
