$(document).ready(function(){

	// navbar toogle
	$('#navbar-button').click(function(){
	    $('#myNavbar').slideToggle('fast');
	});

	$('.navbar-nav li a').click(function(){
		$('#myNavbar').slideToggle('fast');
	});

	// height adjustment for content in accordion
    $( "#accordion" ).accordion({heightStyle:'content'});

    // navbar slide to content
    $('#servicesLink').click(function() {
		scrollToDest('#services-lead-header');
	});

    $('#aboutLink').click(function() {
		scrollToDest("#about-lead-header");
	});

	$('#contactLink').click(function() {
		scrollToDest("#contactRow");
	});

	$('.navbar-brand').click(function() {
		scrollToDest(0);
	});

	$('#certifLink').click(function() {
		scrollToDest('#rec-header');
	});

});

function scrollToDest(dest){
	if(isNaN(dest))
		$("html, body").animate({ scrollTop:$(dest).offset().top -50 }, "slow");

	else
		$("html, body").animate({ scrollTop:dest }, "slow");

	return false;
}