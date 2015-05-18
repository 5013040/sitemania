$(document).ready(function(){
	function show_scrollTop(){
        ( $(window).scrollTop()>400 ) ? $('#back-top').fadeIn(300) : $('#back-top').fadeOut(300);
    }    
    $(window).scroll( function(){show_scrollTop()} ); 
    show_scrollTop();
    $('#back-top a').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    $('#showcontent').click(function(){
        $('.full_desc_link').hide();
        $('.dopcontent').fadeIn(500);
        $('.full_desc_link_close').show();
        return false;
    });
    $('#closecontent').click(function(){
        $('.full_desc_link_close').hide();
        $('.dopcontent').fadeOut(500);
        $('.full_desc_link').show();
        return false;
    })
    
    $('.selectsite').click(function(){
        var t = $(this);
        var id = t.attr('id');
        $('.sitemodules').hide();

        $('#module-'+id).show();

		$('#scroll').ScrollTo({
  		  duration: 400,
    	  easing: 'linear'
	  });

        if ( $(this).parent().hasClass("red-block") ) {
            $(this).parent().removeClass('red-block');
            colorbtn =  $(this).find('.block-button').attr('button');
            $(this).find('.block-button img').attr('src','/images/' + colorbtn + '.png');
            getSum(0);
        }else{
            $('.selectsite').parent().removeClass('red-block');
            $( ".selectsite" ).each(function() {
                colorbtn =  $(this).find('.block-button').attr('button');
                $(this).find('.block-button img').attr('src','/images/' + colorbtn + '.png');
            });
            $(this).parent().addClass('red-block');
            $(this).find('.block-button img').attr('src','/images/red.png');
            $('#tariffnum').val(id);
            getSum(id);
        }

        return false;
    })

    //главная страница с сайтами
    $('.checkbox').click(function(){
        if(!$(this).hasClass('hiddenbox')){
            if($(this).hasClass('checked')){
                $(this).removeClass('checked');
            }else{
                $(this).addClass('checked');
            }
            getSum($(this).attr('tarif_id'));
        }
        return false;

    });

    //страница сайта
    $('.checkboxin').click(function(){
        if(!$(this).hasClass('hiddenbox')){
            if($(this).hasClass('checked')){
                $(this).removeClass('checked');
            }else{
                $(this).addClass('checked');
            }
            getSumin();
        }
        return false;

    });

    //главная страница продвижения
    $('.seo-headers .section-33').click(function(){
        var t = $(this);
        var id = t.attr('flag');
        $('.seo-headers .section-33').removeClass('selected-service');
        t.addClass('selected-service');

        $('.seo-body').hide();
        $('#seo-body'+id).show();

        $('.modules-seo').hide();
        $('#modules-seo-'+id).show();

        return false;
    });
    $('.one-service').click(function(){
        var t = $(this);
        var title = t.attr('name');
        var price = t.attr('price');
        if ( t.hasClass("active") ) {
            $('.hiddenblock').hide();
            $('#formtextblock').show();
            $('.one-service').removeClass('active');
            $('#tariffnum').val('');
        }else{
            $('#formtextblock').hide();
            $('.hiddenblock').show();
            $('.one-service').removeClass('active');
            t.addClass('active');
            $('#tarif-name').text(title);
            $('#tarif-price').text(price);

            $('#tariffnum').val(t.attr('tariff_id'));
        }


        return false;
    });

    var offset = $('#formsend').offset();
    if($('#formsend').length > 0){
        param_height = offset.top - $(window).height()+ 58;
        //alert(param_height);
        var top = $(document).scrollTop();
        if (top < param_height){
            $("#formsend").css({position: 'relative'});
        }else{
            $("#formsend").css({position: 'fixed', bottom: '30px'});
        }
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < param_height){
                $("#formsend").css({position: 'relative'});
            }else{
                $("#formsend").css({position: 'fixed', bottom: '30px'});
            }

        });
    }

    $('#formsend').submit(function(){
        $('#send1').click();
        return false;
    })

    $('#send1').click(function(){

        var id = $('#tariffnum').val();
        var modules_array = new Object();
        var name = $('#formname').val();
        var contact = $('#formcontact').val();
        if(name == ''){
            $('#formname').focus();
            alert('Укажите ваше имя.')
            return false;
        }
        if(contact == ''){
            alert('Укажите ваш контактный телефон.')
            $('#formcontact').focus();
            return false;
        }
        modules = $('#module-'+id).find('.checkbox');
        var count = modules.size();
        for(num = 0; num < count; num++)
        {
            if((!modules.eq(num).hasClass('hiddenbox')) && (modules.eq(num).hasClass('checked'))){
                modules_array[num] = modules.eq(num).attr('module_id');
            }
        }

        if($('#goal').length > 0){
            var goal = $('#goal').val();
            yaCounter20537668.reachGoal(goal);
        }
        $.ajax({
				   type: "POST",
				   url:"/sendform",
				   data: {'id':id,'modules': modules_array, 'name':name, 'contact':contact },
				   dataType: "html",
				   success: function(data){
                        if(data == 'ok'){
                            $('#sendok, .hide-layout').fadeIn(300);
                            $('#formname').val('');
                            $('#formcontact').val('');
                            $('#tariffnum').val('');
                        }else{
                            alert('Извините, произошла ошибка, свяжитесь с нами по телефону.');
                        }

				   },
				   error: function(data){
						alert("Произошла ошибка!");
				   }
		});
        return false;
    });
    $('a#demo').click(function(){
	    $('#demoform').show();
        $('#demook').hide();
		$('#demo-window, .hide-layout').fadeIn(300);

	});
    $('#demo-submit').click(function(){
        var email = $('#email').val();
        if(email == ''){
            $('#email').focus();
            alert('Введите, пожалуйста, ваш e-mail.');
            return false;
        }
        $.ajax({
				   type: "POST",
				   url:"/senddemo",
				   data: {'email':email },
				   dataType: "html",
				   success: function(data){
				    //alert(data);
                        $('#demook').show();
                        $('#demoform').hide();
                        $('#email').val('');

				   },
				   error: function(data){
						alert("Произошла ошибка!");
				   }
		});
        return false;
    });

    $('.asendcall').click(function(){
	    $('#calltext2').hide();
        $('#callok').hide();
	    $('#calltext1').show();
        $('#callform').show();
        $('#sendcall, .hide-layout').fadeIn(300);
        return false;

	});
    $('#call-submit').click(function(){

        var name = $('#namecall').val();
        var phone = $('#phonecall').val();
        if(name == ''){
            $('#namecall').focus();
            alert('Укажите, пожалуйста, Ваше имя.');
            return false;
        }
        if(phone == ''){
            $('#phonecall').focus();
            alert('Укажите, пожалуйста, Ваш контактный номер телефона.');
            return false;
        }

        $.ajax({
				   type: "POST",
				   url:"/sendcall",
				   data: {'name':name, 'phone':phone },
				   dataType: "html",
				   success: function(data){
				        //alert(data);
				        $('#calltext1').hide();
                        $('#callform').hide();
                        $('#calltext2').show();
                        $('#callok').show();
                        $('#namecall').val('');
                        $('#phonecall').val('');

				   },
				   error: function(data){
						alert("Произошла ошибка!");
				   }
		});
        return false;
    });
    
    $('#start-submit').click(function(){
        
        var name = $('#namestart').val();
        var phone = $('#phonestart').val();
        var id = $('#start-id').val();
        if(name == ''){
            $('#namestart').focus();
            alert('Укажите, пожалуйста, Ваше имя.');
            return false;
        }
        if(phone == ''){
            $('#phonestart').focus();
            alert('Укажите, пожалуйста, Ваш контактный номер телефона.');
            return false;
        }

        $.ajax({
				   type: "POST",
				   url:"/sendstart",
				   data: {'name':name, 'phone':phone, 'id':id },
				   dataType: "html",
				   success: function(data){
				        //alert(data);
				        $('#starttext1').hide();
                        $('#startform').hide();
                        $('#starttext2').show();
                        $('#startok').show();
                        $('#namestart').val('');
                        $('#phonestart').val('');

				   },
				   error: function(data){
						alert("Произошла ошибка!");
				   }
		});
        return false;
    });
    
    //$('.promo-video a').hover(function(){$(this).find('img').stop().animate({opacity:'0.8'})},function(){$(this).find('img').stop().animate({opacity:'1'})})
    $('.promo-video a').hover(function(){$(this).find('#promo2').fadeIn(500);},function(){$(this).find('#promo2').fadeOut(500);});


	// Subscriber	
	$( "#subscriber" ).click(function() {
	  $( ".subscriber" ).toggle();
	});

});

//калькулятор на главной тарифов
var SUMSTORAGE = 0;
var timerInstance;
function getSum(id){
    if(id == 0){
        $('.hiddenblock').hide();
        $('#formtextblock').show();
    }else{
        $('#formtextblock').hide();
        $('.hiddenblock').show();
    }
    var price = $('#'+id).find('.pricehidden').val();
    var title = $('#'+id).find('.block-header').text();

    total_price = parseInt(price);
    modules = $('#module-'+id).find('.checkbox');

    var count = modules.size();
    for(num = 0; num < count; num++)
    {
        if((!modules.eq(num).hasClass('hiddenbox')) && (modules.eq(num).hasClass('checked'))){
            total_price += parseInt(modules.eq(num).attr('price'));
        }
    }
    // НАЧАЛО КОДА АНИМАЦИИ //
    SUMSTORAGE = total_price;
    if($('#tarif-price').text() == "") {
        deltaPrice = SUMSTORAGE;
    }
    else {
        deltaPrice = SUMSTORAGE - parseInt($('#tarif-price').text().replace(/ /g, ""));
    }
    var delta = 1;

    var priceAnima = function () {
        if($('#tarif-price').text() == "") {
            current = 0;
        }
        else {
            current = parseInt($('#tarif-price').text().replace(/ /g, ""));
        }
        //alert(SUMSTORAGE);
        if(current < (SUMSTORAGE)) {
            $('#tarif-price').text(nf(current + 10000, 0, ' ', ' '));
            timerInstance = setTimeout(priceAnima, delta);
        }
        else if(current > (SUMSTORAGE)) {
            $('#tarif-price').text(nf(current - 10000, 0, ' ', ' '));
            timerInstance = setTimeout(priceAnima, delta);
        }
        else {
            $('#tarif-price').text(nf(SUMSTORAGE, 0, ' ', ' '));
        }
    };
    clearTimeout(timerInstance);
    timerInstance = priceAnima();
    // КОНКЦ КОДА АНИМАЦИИ //
    //total_price = nf(total_price, 0, ' ', ' ');

    //$('#tarif-name').text(title);
    //$('#tarif-price').text(total_price);

}

//калькулятор суммы внутри тарифа
function getSumin(){
    var price = $('#tariff_price').val();

    total_price = parseInt(price);
    modules = $('#modules').find('.checkboxin');

    var count = modules.size();
    for(num = 0; num < count; num++)
    {
        if((!modules.eq(num).hasClass('hiddenbox')) && (modules.eq(num).hasClass('checked'))){
            total_price += parseInt(modules.eq(num).attr('price'));
        }
    }

    //total_price = nf(total_price, 0, ' ', ' ');

    // НАЧАЛО КОДА АНИМАЦИИ //
    SUMSTORAGE = total_price;
    deltaPrice = SUMSTORAGE - parseInt($('#tarif-price').text()
            .replace(new RegExp(String.fromCharCode(160), "g"), "")
            .replace(/ /g, ""));
    var delta = 1;
    var priceAnima = function () {
        current = parseInt($('#tarif-price').text()
                .replace(new RegExp(String.fromCharCode(160), "g"), "")
                .replace(/ /g, ""));
        if(current < (SUMSTORAGE)) {
            $('#tarif-price').text(nf(current + 10000, 0, ' ', ' '));
            timerInstance = setTimeout(priceAnima, delta);
        }
        else if(current > (SUMSTORAGE)) {
            $('#tarif-price').text(nf(current - 10000, 0, ' ', ' '));
            timerInstance = setTimeout(priceAnima, delta);
        }
        else {
            $('#tarif-price').text(nf(SUMSTORAGE, 0, ' ', ' '));
        }
    };
    clearTimeout(timerInstance);
    timerInstance = priceAnima();
    // КОНКЦ КОДА АНИМАЦИИ //
    //$('#tarif-price').text(total_price);

}

function nf(h, d, m, g) {
        function j(s, r) {
            r = !r ? " \\s\u00A0" : (r + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1");
            var q = new RegExp("[" + r + "]+$", "g");
            return (s + "").replace(q, "")
        }
        h = (h + "").replace(/[^0-9+\-Ee.]/g, "");
        var c = !isFinite(+h) ? 0 : +h,
            b = !isFinite(+d) ? 2 : Math.abs(d),
            p = (typeof g === "undefined") ? "" : g,
            e = (typeof m === "undefined") ? "." : m,
            o = "",
            k = function (s, r) {
                var q = Math.pow(10, r);
                return "" + Math.round(s * q) / q
            };
        o = (b ? k(c, b) : "" + Math.round(c)).split(".");
        if (o[0].length > 3) {
            o[0] = o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, p)
        }
        if ((o[1] || "").length < b) {
            o[1] = o[1] || "";
            o[1] += new Array(b - o[1].length + 1).join("0")
        }
        val = o.join(e);
        if ((o[1] || "").length < b) {
            val = j(val, "0");
            val = j(val, ".")
        }
        return val;
}