window.addEventListener ("scroll", checkButton = () => {
  let btn = document.getElementById ("goTop");
  if (window.pageYOffset > 200) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
});
