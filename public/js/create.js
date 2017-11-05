'use strict';

// Show menu on mobile and tablet
$('#showMenu').click(function() {
    var $menu = $('#navigation');
    if($menu.is(':hidden')){
        $menu.fadeIn(500);
        $(this).text('close');
    }
    else {
    $menu.fadeOut(500);
    $('#showMenu').text('menu');
    }
});

// Tab menu function
function TabContent() {
    $('#menu li').on('click', function() {
        var selectTab = $(this).data('content');
        $('.content').hide();
        $('#' + selectTab).fadeIn(500);
        $('#navigation').fadeOut(500);
        $('#showMenu').text('menu');
    });
    $('#menu .tab:first').click(); 
}

$(document).ready(function() {
    TabContent();
});