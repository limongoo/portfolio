'use strict';

(function(module) {
  const indexController = {};

  indexController.index = function() {
    createPage();
    $('#about').fadeOut(500);
    $('#main').fadeIn(500);
}
  module.indexController = indexController;
})(window);