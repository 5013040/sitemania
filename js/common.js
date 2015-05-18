$(document).ready(function() {
    /* SubLevels Controller */
    $("div.sublevel").animate({opacity: 0}, 1);
    $("div.sublevel").mouseover(function() {
        $(this).stop().show().animate({opacity: 1}, 200);
    });
    $("div.sublevel").mouseout(function() {
        $(this).stop().animate({opacity: 0}, 200, null, function() {
                    $(this).hide();
        });
    });
    
    /* SubMenu Controller */
    $("#header-bottom div.section-60 ul.g-menu li.drop a").mouseover(function() {
        $(this).parent().find("div.sublevel").stop()
                .show().animate({opacity: 1}, 200);
    });
    $("#header-bottom div.section-60 ul.g-menu li.drop a").mouseout(function() {
        $(this).parent().find("div.sublevel").stop()
                .animate({opacity: 0}, 200, null, function() {
                    $(this).hide();
                });
    });
    
    /* Location Controller */
    $("#header-top div.locations span").mouseover(function() {
        $(this).parent().parent().find("div.sublevel").stop()
                .show().animate({opacity: 1}, 200);
    });
    $("#header-top div.locations span").mouseout(function() {
        $(this).parent().parent().find("div.sublevel").stop()
                .animate({opacity: 0}, 200, null, function() {
                    $(this).hide();
                });
    });
    //
    // /* YellowBlock Controller */
    // $("div.yellow-block").mouseenter(function() {
    //     $(this).stop().animate({top: -15}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 40}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 35}, 100);
    // });
    // $("div.yellow-block").mouseleave(function() {
    //     $(this).stop().animate({top: 0}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 20}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 20}, 100);
    // });
    //
    // /* BlueBlock Controller */
    // $("div.blue-block").mouseenter(function() {
    //     $(this).stop().animate({top: -15}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 40}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 35}, 100);
    // });
    // $("div.blue-block").mouseleave(function() {
    //     $(this).stop().animate({top: 0}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 20}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 20}, 100);
    // });
    //
    // /* GreenBlock Controller */
    // $("div.green-block").mouseenter(function() {
    //     $(this).stop().animate({top: -15}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 40}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 35}, 100);
    // });
    // $("div.green-block").mouseleave(function() {
    //     $(this).stop().animate({top: 0}, 100);
    //     $(this).find(".block-header").stop().animate({paddingTop: 20}, 100);
    //     $(this).find(".block-button").stop().animate({paddingBottom: 20}, 100);
    // });
});
