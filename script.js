$(document).ready(function() {

	$('.menu-button').hide().delay(500).fadeIn(500);

	$('.menu').hide();

	//$('.menu-button').hide();

	///setTimeout(function() {
	//		$('.menu-button').fadeIn('slow');
	//	},500);

	
	$('.menu-button').click(function() {
		$('.menu').slideToggle();
	});
});