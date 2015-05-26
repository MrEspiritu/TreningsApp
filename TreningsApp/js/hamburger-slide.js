$(function() {

    function settEvent() {
        $(".cmn-toggle-switch").click(function() {
            $("#ham-menu-open").animate({width: 'toggle'});
            $(this).toggleClass('active');
        });
    }

    var init = function() {
        settEvent();

    }();


});