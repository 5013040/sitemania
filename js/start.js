$(document).ready(function(){
    $('.a-link').click(function () {
		$('#zakazat').ScrollTo();
 	   return false;
     });
       
	   
	
	/* POPUP WINDOW*/
	$('#popup-window, #demo-window, .hide-layout, #sendok, #sendcall').hide();
	$('.hide-layout').css({opacity: .5});
	alignCenter($('#popup-window, #demo-window, #sendok, #sendcall'));
	
	$(window).resize(function() {
		alignCenter($('#popup-window, #demo-window, #sendok, #sendcall')); // центрирование при ресайзе окна
	});
	
	//for DEMO link
	
	
	
//end DEMO link	
	
	
	$('button.order').click(function(){
		$('#popup-window, .hide-layout').fadeIn(300);
		var id = $(this).attr('id');
        $('#starttext1').show();
		$('#startform').show();
        $('#starttext2').hide();
        $('#startok').hide();
        
		$('input#start-id').attr('value', id);
	});
	
	
	$('.btn-close, .hide-layout, .ok-close').click(function(){
		$('#popup-window, #demo-window, .hide-layout, #sendok, #sendcall').fadeOut(300);
	});


		$('#submit').click(function(){
			var phone = $('#phone').val();
		
			if(phone == '' || phone == false)
				alert('Напишите, пожалуйста, контактный телефон.');
			else
			{
				alert('Заказ успешно отправлен. В ближайшее время с Вами свяжется менеджер. Хорошего дня!');
				$('#order').submit();
				$('#popup-window, .hide-layout').hide();
				
				return true;
			}	

			return false;
		});
		
		// функция принимает элемент, который необходимо центрировать
		function alignCenter(elem) {
			elem.css(
			{ // назначение координат left и top
				left: ($(window).width() - elem.width()) / 2 + 'px',
				top: ($(window).height() - elem.height()) / 2 + 'px'
			})
		}
	});