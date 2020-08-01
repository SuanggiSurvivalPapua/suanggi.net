<script>
window.onscroll = function() {myFunction()};

var header-suanggi = document.getElementById("SuanggiSurvivalPapua");
var sticky = header-suanggi.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header-suanggi.classList.add("sticky");
  } else {
    header-suanggi.classList.remove("sticky");
  }
}
</script>
