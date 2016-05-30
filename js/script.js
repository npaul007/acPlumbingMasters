$(document).ready(function(){
	$('#navbar-button').click(function(){
	    $('#myNavbar').slideToggle('fast');
	});

	$('.navbar-nav li a').click(function(){
		$('#myNavbar').slideToggle('fast');
	});

    $( "#accordion" ).accordion({heightStyle:'content'});
});