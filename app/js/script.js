
$(document).ready(() => {
    $('.js-banner__carousel, .js-testimonials__carousel').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        // fade: true,
        arrows: false
    });

    $('.faq__card-header').click(function () {
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
});


