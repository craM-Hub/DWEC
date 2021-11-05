window.onload = function () {
  document.getElementById('e3').onclick = ej_1;
  document.getElementById('botonEjercicio3').onclick = ej_2;
};

function formulario(e) {
  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let direccion = document.getElementById('direccion').value;
  if (nombre === '' || apellidos === '' || direccion === '') e.preventDefault();
}

function link(e) {
  e.preventDefault();
}

function ej_1(e) {
  console.log(e.clientX);
  alert(
    'x: '.concat(
      e.clientX - this.offsetLeft,
      '\ny: ',
      e.clientY - this.offsetTop
    )
  );
}

function ej_2(e) {
  with (this.parentNode.style) {
    height = Math.round(Math.random() * screen.height) + 'px';
    width = Math.round(Math.random() * screen.width) + 'px';
  }
  e.stopPropagation();
}
