console.log('start');

// constructor
var project = function (image, title, link) {
    this.image = image;
    this.title = title;
    this.link = link;
}

// array
var projectData = [];
projectData.push(new project("lab1.jpg, Lab 1, #"));

// make project items
function makeItems() {
    var get = document.getElementById("projectContainer");
    for (index = 0; index < projectData.length; index++) {
        var port = projectData[index];


}


console.log('end');