$(document).ready(function(){
	
	//fade opacity on hover
	$('#nav-bar li').mouseenter(function() {
		$(this).fadeTo('fast', 0.25)
	}).mouseleave(function(){
		$(this).fadeTo('fast', 1)
	});

	//change background when clicked
	$('#nav-bar li').mousedown(function() {
		$(this).css('background-color', '#A26769')
	}).mouseup(function(){
		$(this).css('background-color', '#CB807D')
	});
	
	//add 'Clicked!' after clicked
	$('#nav-bar li').click(function(){	
		$(this).removeClass('unclicked').addClass('clicked');
	});
	
	//drop down when clicked
	$('#nav-button').click(function(){
		if ( $('#nav-bar').is(':hidden')) {
			$('#nav-bar').slideDown('slow');
		} else {
			$('#nav-bar').slideUp('slow');
		}	
	});
		
});
