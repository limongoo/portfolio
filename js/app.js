'use strict';
console.log('start');


Project.all = [];

// JQuery Constructor
function Project (projectData) {
    this.image = projectData.image;
    this.title = projectData.title;
    this.link = projectData.link;
    this.class = projectData.class;
    this.tag = projectData.tag;
}

Project.prototype.toHtml = function() {
    var projectFiller = Handlebars.compile($('#project-template').html()); // Compile templates
    $('div #projectItem').removeClass('hide');
    return projectFiller(this); // return compiled templates back to html
};

// new
Project.loadAll = function(data) {
    data.forEach(function(newPro) {
        Project.all.push(new Project(newPro));
    });
};
// original
// data.forEach(function(newPro) {
//     Project.all.push(new Project(newPro));
// });


// new
function createPage() {
    Project.all.forEach(function(pro) {
        $('#projectContainer').append(pro.toHtml());
        $('#projectContainer1').append(pro.toHtml());  
    });
}
// original
// Project.all.forEach(function(pro) {
//     $('#projectContainer').append(pro.toHtml());
//     $('#projectContainer1').append(pro.toHtml());  
// });


// Fetch ajax function
Project.fetchData = function() {
    if (localStorage.data) {
        Project.loadAll(JSON.parse(localStorage.data));
        createPage();
    } else {
        $.getJSON('/data/projectData.json', function(getData) {
            localStorage.setItem('data', JSON.stringify(getData));
            Project.loadAll(getData);
            createPage();
        });
    }
};




console.log('end');