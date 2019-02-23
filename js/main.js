$(document).ready(function(){
	$('.js-fallout-header').on('click', function(){
	    $(this).parent().toggleClass('is-open');
	    $(this).siblings('.js-fallout-body').slideToggle(500);
	});

	var slides = $('#productSlider').children('.slider__item').length;

	if (slides < 10) {
    	$('#slidesCounter').text('0' + slides);
	} else {
    	$('#slidesCounter').text(slides);
	}

	$('#productSlider').slick({
		appendArrows: '#productSliderNav',
		prevArrow: '<div class="nav__item nav__item--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.04256 7.99903L9.09093 1.95758C9.19734 1.8511 9.28174 1.72468 9.33933 1.58556C9.39692 1.44643 9.42655 1.29731 9.42655 1.14672C9.42655 0.996133 9.39692 0.847017 9.33933 0.70789C9.28174 0.568763 9.19734 0.44235 9.09093 0.335867C8.98453 0.229384 8.85821 0.144917 8.71919 0.0872884C8.58016 0.0296601 8.43116 0 8.28068 0C8.1302 0 7.9812 0.0296601 7.84218 0.0872884C7.70315 0.144917 7.57683 0.229384 7.47043 0.335867L0.62321 7.18817C0.516247 7.29434 0.431349 7.42065 0.373411 7.55982C0.315474 7.69899 0.285645 7.84826 0.285645 7.99903C0.285645 8.14979 0.315474 8.29906 0.373411 8.43823C0.431349 8.5774 0.516247 8.70371 0.62321 8.80988L7.47043 15.6622C7.57652 15.7692 7.70274 15.8542 7.8418 15.9122C7.98087 15.9701 8.13003 16 8.28068 16C8.43133 16 8.5805 15.9701 8.71956 15.9122C8.85863 15.8542 8.98485 15.7692 9.09093 15.6622C9.1979 15.556 9.2828 15.4297 9.34074 15.2905C9.39867 15.1514 9.4285 15.0021 9.4285 14.8513C9.4285 14.7006 9.39867 14.5513 9.34074 14.4121C9.2828 14.273 9.1979 14.1466 9.09093 14.0405L3.04256 7.99903Z" fill="white"/></svg></div>',
		nextArrow: '<div class="nav__item nav__item--next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.04256 7.99903L9.09093 1.95758C9.19734 1.8511 9.28174 1.72468 9.33933 1.58556C9.39692 1.44643 9.42655 1.29731 9.42655 1.14672C9.42655 0.996133 9.39692 0.847017 9.33933 0.70789C9.28174 0.568763 9.19734 0.44235 9.09093 0.335867C8.98453 0.229384 8.85821 0.144917 8.71919 0.0872884C8.58016 0.0296601 8.43116 0 8.28068 0C8.1302 0 7.9812 0.0296601 7.84218 0.0872884C7.70315 0.144917 7.57683 0.229384 7.47043 0.335867L0.62321 7.18817C0.516247 7.29434 0.431349 7.42065 0.373411 7.55982C0.315474 7.69899 0.285645 7.84826 0.285645 7.99903C0.285645 8.14979 0.315474 8.29906 0.373411 8.43823C0.431349 8.5774 0.516247 8.70371 0.62321 8.80988L7.47043 15.6622C7.57652 15.7692 7.70274 15.8542 7.8418 15.9122C7.98087 15.9701 8.13003 16 8.28068 16C8.43133 16 8.5805 15.9701 8.71956 15.9122C8.85863 15.8542 8.98485 15.7692 9.09093 15.6622C9.1979 15.556 9.2828 15.4297 9.34074 15.2905C9.39867 15.1514 9.4285 15.0021 9.4285 14.8513C9.4285 14.7006 9.39867 14.5513 9.34074 14.4121C9.2828 14.273 9.1979 14.1466 9.09093 14.0405L3.04256 7.99903Z" fill="white"/></svg></div>',
		fade: true,
		easing: 'ease',
		speed: 800
	});


	$('#productSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		if (nextSlide + 1 < 10) {
	    	$('#currentSlide').text('0' + (nextSlide + 1));
		} else {
			$('#currentSlide').text(nextSlide + 1);
		}
	});

	$('.js-counter .js-counter-plus').on('click', function(){
		$(this).siblings('.js-counter-text').text(parseInt($(this).siblings('.js-counter-text').text()) + 1);
		if ($(this).siblings('.js-counter-minus').hasClass('disabled')) {
			$(this).siblings('.js-counter-minus').removeClass('disabled');
		}
	});

	$('.js-counter .js-counter-minus').on('click', function(){
		if (!$(this).hasClass('disabled') && parseInt($(this).siblings('.js-counter-text').text()) > 1) {
			$(this).siblings('.js-counter-text').text(parseInt($(this).siblings('.js-counter-text').text()) - 1);
			if (parseInt($(this).siblings('.js-counter-text').text()) <= 1) {
				$(this).addClass('disabled');	
			}
		}
	});

	$(window).resize(function(){
		setBgImages();
	});
	setBgImages();

});

function setBgImages() {
	if ($(window).width() <= 1100 && $(window).width() > 650) {
		$('.js-set-bg-image').each(function(){
			if ($(this).attr('data-tablet')) {
				$(this).css('backgroundImage',  'url(' + $(this).attr('data-tablet') + ')');
			}
		});
	} else if ($(window).width() <= 650) {
		$('.js-set-bg-image').each(function(){
			if ($(this).attr('data-mobile')) {
				$(this).css('backgroundImage',  'url(' + $(this).attr('data-mobile') + ')');
			}
		});
	} else if ($(window).width() > 1100) {
		$('.js-set-bg-image').each(function(){
			if ($(this).attr('data-desktop')) {
				$(this).css('backgroundImage',  'url(' + $(this).attr('data-desktop') + ')');
			}
		});
	}
}






