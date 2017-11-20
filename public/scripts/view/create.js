'use strict';

// Show menu on mobile and tablet
function mainMenu() {
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
}

// Tab menu function
// function TabContent() {
//     $('#menu li').on('click', function() {
//         var selectTab = $(this).data('content');
//         $('.content').hide();
//         $('#' + selectTab).fadeIn(500);
//         $('#navigation').fadeOut(500);
//         $('#showMenu').text('menu');
//     });
//     $('#menu .tab:first').click(); 
// }

// Show project info function. showProject from project template handlebars
function overlayMenu() {
    $('.showProject').on('click', function(event) {
        event.preventDefault();

        var selectID = $(this).data('id');

        if($('.projectOverlay').is(':hidden')) {
            $('#' + selectID).fadeIn(200);
            // $projectOverlay.fadeIn(200);
            // $('.proImg').delay(2000).fadeIn(500);
            $('#showMenu').hide();
        }
    });
    $('.projectOverlay #closeProject').on('click', function() {
        event.preventDefault();

        $(this).closest('.projectOverlay').fadeOut(500);
        $('#showMenu').show();
    }); 
}

// function closeOverlayMenu() {
//     var $projectOverlay = $('#projectOverlay');
//     var selectID = $(this).data('id');
//     $('#closeProject').click(function() {
//         $('#' + selectID).fadeOut(500); 
//         $('#showMenu').show();
//     });
// }



// function showInfo() {
//     $('#projectBox a').on('click', function() {
//         var selectProject = $(this).data('info');
//         $('.showProject').hide();
//         $('#' + )
//     });
// }





$(document).ready(function() {
    // TabContent();
    mainMenu();
    overlayMenu();
    // closeOverlayMenu();
});