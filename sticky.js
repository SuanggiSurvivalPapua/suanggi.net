	window.onscroll = function() {myFunction()};

var menunavbarsuanggi = document.getElementById("SuanggiSurvivalPapua");
var stickytop = menunavbarsuanggi.offsetTop;

function myFunction() {
  if (window.pageYOffset > stickytop) {
    menunavbarsuanggi.classList.add("stickytop");
  } else {
    menunavbarsuanggi.classList.remove("stickytop");
  }
}
