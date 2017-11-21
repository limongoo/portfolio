'use strict';

(function(module) {
  const indexController = {};

  indexController.index = function() {
    // createPage();
    Project.fetchData();
    $('#about').fadeOut(500);
    $('#main').fadeIn(500);
}
  module.indexController = indexController;
})(window);