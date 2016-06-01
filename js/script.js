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
		//$("html, body").animate({ scrollTop:$("#services-lead-header").offset().top -45 }, "slow");
		scrollTo('#services-lead-header');
	});

    $('#aboutLink').click(function() {
		scrollTo("#about-lead-header");
	});

	$('#contactLink').click(function() {
		scrollTo("#contactRow");
	});

	$('.navbar-brand').click(function() {
		//$("html, body").animate({ scrollTop:0 }, "slow");
		scrollTo(0);
	});

	$('#certifLink').click(function() {
		scrollTo('#nest-lead-header');
	});

});

function scrollTo(dest){
	if(isNaN(dest))
		$("html, body").animate({ scrollTop:$(dest).offset().top -45 }, "slow");
	else
		$("html, body").animate({ scrollTop:dest }, "slow");

	return false;
}