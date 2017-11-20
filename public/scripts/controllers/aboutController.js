'use strict';

(function(module) {
  const aboutController = {};

  aboutController.about = function() {
    console.log('start');
    createPage();
    $('#main').fadeOut(500);
    $('#about').fadeIn(500);
}
  module.aboutController = aboutController;
})(window);