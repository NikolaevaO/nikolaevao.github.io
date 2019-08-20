var menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("mobileMenu").style.right = "-280px";
    menuVisible = false;
  } else {
    document.getElementById("mobileMenu").style.right = "-20px";
    menuVisible = true;
  }
}

$(function() {
  $( ".datepicker" ).datepicker();
} );
