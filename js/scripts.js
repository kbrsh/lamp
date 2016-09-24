function randomColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

function setBackground() {
  var color = randomColor();
  document.body.style.background = color;
  document.getElementById("color").innerHTML = color;
}

setBackground();
setInterval(setBackground, 2000)
