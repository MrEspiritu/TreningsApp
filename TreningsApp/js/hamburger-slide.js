$(function() {

    function settEvent() {
        $(".cmn-toggle-switch").click(function() {
            $("#ham-menu-open").animate({width: 'toggle'}, 200);
            $(this).toggleClass('active');
        });
    }

    var init = function() {
        settEvent();

    }();


});