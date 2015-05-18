var SLIDER;

$(document).ready(function() {
    $("#slider div.left-bt").mouseover(function() {
        $(this).stop().animate({opacity: 0.5}, 300);
    });
    $("#slider div.left-bt").mouseout(function() {
        $(this).stop().animate({opacity: 1}, 300);
    });
    $("#slider div.right-bt").mouseover(function() {
        $(this).stop().animate({opacity: 0.5}, 300);
    });
    $("#slider div.right-bt").mouseout(function() {
        $(this).stop().animate({opacity: 1}, 300);
    });
    
    SLIDER = {
        current: 0,
        list: $("#slider div.slide"),
        nextSlide: function() {
            next = this.current + 1;
            if(next > this.list.size() - 1) {
                next = 0;
            }
            
            this.list.eq(next).stop().show().css("z-index", 1).animate({opacity: 1}, 1);
            this.list.eq(this.current).stop().css("z-index", 2).animate(
                    {opacity: 0}, 1000, null, function() {
                        $(this).hide();
                    }
            );
            this.current = next;
        },
        prevSlide: function() {
            next = this.current - 1;
            if(next < 0) {
                next = this.list.size() - 1;
            }
            
            this.list.eq(next).stop().show().css("z-index", 1).animate({opacity: 1}, 1);
            this.list.eq(this.current).stop().css("z-index", 2).animate(
                    {opacity: 0}, 1000, null, function() {
                        $(this).hide();
                    }
            );
            this.current = next;
        }
    };
    
    $("#slider div.left-bt").click(function() {
        SLIDER.prevSlide();
    });
    $("#slider div.right-bt").click(function() {
        SLIDER.nextSlide();
    });
});