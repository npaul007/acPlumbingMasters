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
		$("html, body").animate({ scrollTop:$("#services-lead-header").offset().top -45 }, "slow");
		return false;
	});

    $('#aboutLink').click(function() {
		$("html, body").animate({ scrollTop:$("#about-lead-header").offset().top -45 }, "slow");
		return false;
	});

	$('#contactLink').click(function() {
		$("html, body").animate({ scrollTop:$("#contactRow").offset().top -45 }, "slow");
		return false;
	});
});