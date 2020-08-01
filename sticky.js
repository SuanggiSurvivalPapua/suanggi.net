window.onscroll = function() {myFunction()};

var headersuanggi = document.getElementById("SuanggiSurvivalPapua");
var sticky = headersuanggi.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headersuanggi.classList.add("sticky");
  } else {
    headersuanggi.classList.remove("sticky");
  }
}
