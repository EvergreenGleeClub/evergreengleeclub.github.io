(function() {
  var headerToggle = document.querySelector("nav .hamburger");
  var headerMenu = document.querySelector("nav .nav-menu");
  console.log(headerToggle)
  headerToggle.addEventListener("click", function() {
    headerMenu.classList.toggle("expanded");
  });
}());