// scroll reveal - Scroll Reveal from https://scrollrevealjs.org/
// function addImgClass () {
// //   var pi = document.getElementById('projectContainer');
//   var pimg = document.getElementById('projectItem');
//   var i = 0;  
//   for (i=0; i <pimg.length; i++) {
//       pimg[i].setAttribute('class', 'sr');
//     }
// }
// addImgClass();

// window.sr = ScrollReveal({
//   origin: 'bottom',
//   duration: 2000,
//   delay: 1,
//   opacity: 0,
//   useDelay: 'always',
//   reset: false,
// });
// var revealContainer = document.getElementById('projectContainer');
// sr.reveal('.sr', {container: revealContainer});


window.sr = ScrollReveal({
  reset: true,
  origin: 'bottom',
  opacity: 0,
  duration: 2000,
  delay: 0.3,
  scale: 1
});
sr.reveal('.scroll');
// sr.reveal('.scrolldiv', {container: '#container'});