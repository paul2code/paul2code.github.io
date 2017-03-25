$(document).ready(function() {
	$('#header').hide();
	$('#header').fadeIn(3000);
	$('#intro').fadeTo(100, 0.2);
	
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 400) {
			$('#intro').fadeTo(1000, 1);
		}
	});

	$('.skillset-img').mouseover(function () {
		$(this).addClass('translate');
	});
	$('.skillset-img').mouseleave(function () {
		$(this).removeClass('translate');
	});
});

