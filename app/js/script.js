<<<<<<< HEAD
$(function () {
	// Carousel
	$('.js-banner__carousel, .js-testimonials__carousel').slick({
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		// fade: true,
		arrows: false,
	});

	// Accordion

	$('.js-faq__card-header').on('click', function () {
		// self clicking close
		if ($(this).next('.js-faq__card-body').hasClass('active')) {
			$(this).next('.js-faq__card-body').removeClass('active').slideUp();
			$(this)
				.children('i')
				.removeClass('js-faq__down')
				.addClass('js-faq__right');
		} else {
			$('.js-faq__card .js-faq__card-body').removeClass('active').slideUp();
			$('.js-faq__card .js-faq__card-header i')
				.removeClass('js-faq__down')
				.addClass('js-faq__right');
			$(this).next('.js-faq__card-body').addClass('active').slideDown();
			$(this)
				.children('i')
				.removeClass('js-faq__right')
				.addClass('js-faq__down');
		}
	});

	$('.js-why-us__btn').on('click', function () {
		// Add or remove active class on buttons
		$('.js-why-us__btn.js-why-us__btn-active').removeClass('js-why-us__btn-active');
		$(this).addClass('js-why-us__btn-active');

		let name = $(this).attr('data-name');
		console.log(name);

		// Hide current tab
		$('.js-why-us__tab-container.js-why-us__active').hide(function () {
			$(this).removeClass('js-why-us__active');

			$('.js-why-us__tab-container' + name).show(function () {
				$(this).addClass('js-why-us__active');

			});
		});

	});

	// form input
	function stateCheck($formControl) {
		if($formControl.val().length > 0) {
			$formControl.addClass('valid');
		}else {
			$formControl.removeClass('valid');
		}
	}

	$('.js-form__form-control').on('focusout', function(){
		stateCheck($(this));
	});

});
=======

$(function() {

	$('.js-banner__carousel, .js-testimonials__carousel').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        // fade: true,
        arrows: false
    });

    $('.faq__card-header').on('click', function () {
		// self clicking close
		if ($(this).next('.faq__card-body').hasClass('active')) {
			$(this).next('.faq__card-body').removeClass('active').slideUp();
			$(this).children('i').removeClass('faq__down').addClass('faq__right');
		} else {
			$('.faq__card .faq__card-body').removeClass('active').slideUp();
			$('.faq__card .faq__card-header i').removeClass('faq__down').addClass('faq__right');
			$(this).next('.faq__card-body').addClass('active').slideDown();
			$(this).children('i').removeClass('faq__right').addClass('faq__down');
      
		}
	});

    $('.btn').on('click', function() {

		let name = $(this).attr('data-name');
		let content = name;
		console.log(name, content);

		// Hide current tab
		$('.content.active').hide(function() {
			$(this).removeClass('active');
			
			$('.content'+name).show(function() {
				$(this).addClass('active');
			});
			// $(".content [`data-content= ${name}`]").show(function() {
			// 	$(this).addClass('active');
			// });
		});
    });

// form input
	function stateCheck($formControl) {
		if($formControl.val().length > 0) {
			$formControl.addClass('valid');
		}else {
			$formControl.removeClass('valid');
		}
	}

	$('.js-form__form-control').on('focusout', function(){
		stateCheck($(this));
	});

});



>>>>>>> 83f2743d05bc7bbacacf12bc034cc2b21b5208e3
