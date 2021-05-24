
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



