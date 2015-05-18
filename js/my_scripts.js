$(function () {
	//script for popups
	$('a.show_popup').click(function () {
        $('#zagolovok').text($(this).attr('name'));
        $('#iframe').attr("src",$(this).attr('href'));
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});

		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
});	



 
