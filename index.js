const color = document.getElementById("incol");
const colbutton = document.getElementById("changeColorButton");
const body = document.body;

colbutton.addEventListener("click", function () {
  const fincolor = color.value;
  body.style.backgroundColor = fincolor;
});
incol.addEventListener("keypress", function (event) {
  if (event.key == "Enter" || event.keyCode === 13) {
    const fincolor = color.value;
    body.style.backgroundColor = fincolor;
  }
});
