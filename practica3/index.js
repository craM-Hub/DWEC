function color(color) {
  document.getElementById('divColor').style.backgroundColor = color;
  console.log(color);
}

function contarEl(el) {
  alert(document.getElementsByTagName(el).length);
}
