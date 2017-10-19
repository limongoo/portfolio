'use strict';

console.log('start');

// constructor
var project = function (image, title, link) {
    this.image = image;
    this.title = title;
    this.link = link;
}

// array
var projectData = [];
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
projectData.push(new project("3dhouse.jpg", "Project 1", "#"));

// make project items
function makeItems() {
    var index;
    var get = document.getElementById("projectContainer");
    for (index = 0; index < projectData.length; index++) {
        var pro = projectData[index];
    
    var createItem = document.createElement("div");
    createItem.setAttribute("id", "projectItem");

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "projectBox");    

    var createImg = document.createElement("img");
    createImg.setAttribute("id", "imgShow");
    createImg.src = "img/" + pro.image;

    // var createTitle = document.createElement('h2');
    // createTitle.setAttribute("id", "projectName");
    // createTitle.innerText = pro.title;

    var createLink = document.createElement("a");
    createLink.href = pro.link;
    // createLink = document.createElement('h2');
    createLink.setAttribute("id", "projectName");
    createLink.innerText = pro.title;

    createDiv.appendChild(createImg);
    createItem.appendChild(createDiv);
    createItem.appendChild(createLink);
    get.appendChild(createItem);
    }
}

window.addEventListener("load", makeItems);
console.log('end');