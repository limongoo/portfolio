'use strict';

(function(module) {
  const aboutController = {};

  aboutController.about = function() {
    console.log('start about');
    // createPage();
    Project.fetchData();
    $('#main').fadeOut(500);
    $('#about').fadeIn(500);
}
  module.aboutController = aboutController;
})(window);