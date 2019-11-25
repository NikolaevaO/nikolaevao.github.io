window.addEventListener ("scroll", checkButton = () => {
  let btn = document.getElementById ("goTop");
  if (document.documentElement.scrollTop > 300) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
});
