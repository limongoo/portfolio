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
    var get = document.getElementById("projectContainer");
    for (index = 0; index < projectData.length; index++) {
        var pro = projectData[index];
    
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "imgBox");

    var createImg = document.createElement("img");
    createImg.setAttribute("id", "imgShow");
    createImg.src = "img/" + pro.image;

    var createTitle = document.createElement('h2');
    createTitle.innerText = pro.title;

    createDiv.appendChild(createImg);
    get.appendChild(createDiv);
    get.appendChild(createTitle);
    }
}

window.addEventListener("load", makeItems);
console.log('end');