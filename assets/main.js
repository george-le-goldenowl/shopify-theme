
jQuery(function () {
	jQuery('.js-slider-top').slick({
		dots: true,
		arrows: false,
		infinite: true
	});
	jQuery('.js-slider-pro').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	jQuery('.js-review').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.js-product-detail').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-product-detail-nav'
	});
	$('.js-product-detail-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.js-product-detail',
	});
	$('.js-close-menu').click(function (e) {
		$('.navbar-collapse').removeClass('show')
	});

	$expand = $('.js-menu-child');
	$expand.click(function (e) {
		e.preventDefault();
		el = $(this);
		elUl = $(this).next();
		if (el.hasClass('active')) {
			el.removeClass('active');
			elUl.removeClass('active');
		} else {
			el.addClass('active');
			elUl.addClass('active');
		}
	})

});
