'use strict';

page('/main', indexController.index);
page('/about', aboutController.about);
page('*', indexController.index);
page();