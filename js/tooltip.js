$(document).ready(function() {

    $('.checkbox, .checkboxin, .selectsite').bind('click', function() {
        setTimeout(tool,10000);
    });

    var r = window.location;

    if(-1 < window.location.toString().indexOf('sozdanie-saita')){
        window.onscroll = setTimeout(tool,10000);
        $(window).scroll(function(){
            if((($(window).scrollTop()+$(window).height())+600)>=$(document).height()){
                setTimeout(tool,10000);
            }
        });
    }


    function tool(){
        var tip = $('#send1');
        tooltip             = $(tip);
        tooltipText         = '<div onclick=$(".tooltip-sweet-strong").remove(); id="close">X</div>Отправьте заявку сейчас<br> и получите скидку <br><strong>10%</strong> на всю стоимость';
        tooltipClassName    = 'tooltip-sweet-strong';
        tooltipClass        = '.' + tooltipClassName;

        if(tooltip.hasClass('showed-tooltip')) return false;

        tooltip.addClass('showed-tooltip')
            .after('<div class="'+tooltipClassName+'" id=tooltip>'+tooltipText+'</div>');


        tooltipPosTop     = -120;
        tooltipPosLeft = tooltip.offset().left;
        tooltipPosLeft = tooltipPosLeft - (($(tooltipClass).outerWidth()/2) - tooltip.outerWidth()/2);

        $(tooltipClass).css({ 'left': tooltipPosLeft, 'top': tooltipPosTop })
            .animate({'opacity':'1', 'marginTop':'0'}, 500);
    }
});