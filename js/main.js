

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
		$('.left-menu__item, .tile__item').removeClass('active');
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

	// Calc

	var calcShow = function(){
		menuHide();
		$('.calc--hidden').addClass('show');
		
	}

	var calcHide = function(){
		menuHide();
		$('.calc--hidden').removeClass('show');

	}

	$('.js-show-calc').click(function(){
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0Ly8gSGVhZGVyXHJcblxyXG5cdHZhciBtZW51U2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWVudS1saXN0JykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQoJy5qcy1tZW51LXRvZ2dsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdHZhciBtZW51SGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWVudS1saXN0JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQoJy5qcy1tZW51LXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdCQoJy5qcy1tZW51LXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWVudS1saXN0JykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQoJy5qcy1tZW51LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gU2xpZGVyXHJcblxyXG5cdHZhciBzbGlkZXJTaG93ID0gZnVuY3Rpb24ocG9pbnQsIHBhZ2Upe1xyXG5cdFx0bWVudUhpZGUoKTtcclxuXHRcdCQoJy5sZWZ0LW1lbnVfX2l0ZW0sIC50aWxlX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0cG9pbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnNsaWRlcicpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHQkKCcuc2xpZGVyX19wYWdlJykuaGlkZSgpO1xyXG5cdFx0JCgnLnNsaWRlcl9fcGFnZS0tJyArIHBhZ2UpLmZhZGVJbigpO1xyXG5cdFx0JCgnLmJsdXItdGhpcycpLmFkZENsYXNzKCdibHVyLW9uJyk7XHJcblx0XHQkKCcuY29udGVudF9fbG9nbycpLmFkZENsYXNzKCcuY29udGVudF9fbG9nby0taGlkaW5nJylcclxuXHR9XHJcblxyXG5cdHZhciBzbGlkZXJIaWRlID0gZnVuY3Rpb24ocG9pbnQsIHBhZ2Upe1xyXG5cdFx0bWVudUhpZGUoKTtcclxuXHRcdCQoJy5sZWZ0LW1lbnVfX2l0ZW0sIC50aWxlX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnNsaWRlcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHQkKCcuc2xpZGVyX19wYWdlJykuZmFkZU91dCgpO1xyXG5cdFx0JCgnLmJsdXItdGhpcycpLnJlbW92ZUNsYXNzKCdibHVyLW9uJyk7XHJcblx0XHQkKCcuY29udGVudF9fbG9nbycpLnJlbW92ZUNsYXNzKCcuY29udGVudF9fbG9nby0taGlkaW5nJylcclxuXHR9XHJcblxyXG5cdCQoJy5qcy1zaG93LXBhZ2UtMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRzbGlkZXJTaG93KCQodGhpcyksIDEpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuanMtaGlkZS1zbGlkZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2xpZGVySGlkZSgpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBDYWxjXHJcblxyXG5cdHZhciBjYWxjU2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51SGlkZSgpO1xyXG5cdFx0JCgnLmNhbGMtLWhpZGRlbicpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHZhciBjYWxjSGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51SGlkZSgpO1xyXG5cdFx0JCgnLmNhbGMtLWhpZGRlbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0JCgnLmpzLXNob3ctY2FsYycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRjYWxjU2hvdygpO1xyXG5cdH0pO1xyXG5cdCQoJy5qcy1oaWRlLWNhbGMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0Y2FsY0hpZGUoKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gU2VhcmNoXHJcblxyXG5cdCQoJy5qcy1vcGVuLXNlYXJjaCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuc2VhcmNoJykuZmFkZUluKCk7XHJcblxyXG5cdFx0aGlkZUFsbCgpO1xyXG5cclxuXHR9KTtcclxuXHQkKCcuanMtY2xvc2Utc2VhcmNoJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5zZWFyY2gnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8vIFNob3cgY2FsYyBkcm9wZG93blxyXG5cclxuXHR2YXIgZHJvcGRvd25TaG93ID0gZnVuY3Rpb24oZmllbGQpe1xyXG5cdFx0ZHJvcGRvd25IaWRlKCk7XHJcblx0XHRmaWVsZC5hZGRDbGFzcygnYWN0aXZlJykubmV4dCgpLnNsaWRlRG93bignZmFzdCcpO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgZHJvcGRvd25IaWRlID0gZnVuY3Rpb24oaXRlbSl7XHJcblx0XHQkKCcuY2FsYy1mb3JtX19kcm9wZG93bicpLnNsaWRlVXAoJ2Zhc3QnKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH1cclxuXHJcblx0dmFyIGRyb3Bkb3duVmFsdWUgPSBmdW5jdGlvbihpdGVtKXtcclxuXHRcdHZhciBkID0gaXRlbS50ZXh0KCk7XHJcblx0XHRpdGVtLmNsb3Nlc3QoJy5jYWxjLWZvcm1fX2l0ZW0nKS5maW5kKCcuY2FsYy1mb3JtX192YWwnKS50ZXh0KGQpO1xyXG5cdFx0aXRlbS5jbG9zZXN0KCcuY2FsYy1mb3JtX19pdGVtJykuZmluZCgnLmNhbGMtZm9ybV9faW5wdXQtaGlkZGVuJykudmFsKGQpO1xyXG5cdFx0ZHJvcGRvd25IaWRlKCk7XHJcblx0fVxyXG5cclxuXHQkKCcuanMtc2hvdy1kcm9wZG93bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRkcm9wZG93blNob3coJCh0aGlzKSk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5qcy1kcm9wZG93bi12YWwnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0ZHJvcGRvd25WYWx1ZSgkKHRoaXMpKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gT3RoZXJcclxuXHJcblx0Ly8gIyDQl9Cw0LrRgNGL0YLRjCDQstGB0LVcclxuXHR2YXIgaGlkZUFsbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRkcm9wZG93bkhpZGUoKTtcclxuXHRcdG1lbnVIaWRlKCk7XHJcblx0XHRjYWxjSGlkZSgpO1xyXG5cdFx0c2xpZGVySGlkZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gIyDQn9GA0Y/Rh9C10Lwg0YHQutGA0L7Qu9C70LHQsNGAXHJcblx0dmFyIHNjcm9sbGJhclNpemUgPSBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHN3ID0gJCgnLmpzLXNjcm9sbGJhci13aWR0aCcpO1xyXG5cdFx0dmFyIHBhZGRpbmcgPSAkKCcuanMtYXV0by1zY3JvbGwtcGFkZGluZycpO1xyXG5cdFx0dmFyIG1hcmdpbiA9ICQoJy5qcy1hdXRvLXNjcm9sbC1tYXJnaW4nKTtcclxuXHRcdHZhciBudW0gPSBzdy5nZXQoMCkub2Zmc2V0V2lkdGggLSBzdy5nZXQoMCkuY2xpZW50V2lkdGg7XHJcblxyXG5cdFx0cGFkZGluZy5jc3MoJ3BhZGRpbmctcmlnaHQnLCBudW0pO1xyXG5cdFx0bWFyZ2luLmNzcygnbWFyZ2luLXJpZ2h0JywgMC1udW0pO1xyXG5cdH1cclxuXHJcblx0c2Nyb2xsYmFyU2l6ZSgpO1xyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHRcdHNjcm9sbGJhclNpemUoKTtcclxuXHR9KTtcclxuXHJcblx0Ly8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gYWNjb3JkaW9uIFxyXG5cdCQoJy5qcy1hY2NvcmRpb24taGVyZScpLmFjY29yZGlvbih7XHJcblx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0Y29sbGFwc2libGU6IHRydWUsXHJcblx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnXHJcblx0fSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
