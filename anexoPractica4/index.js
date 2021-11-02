function formulario(e) {
  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let direccion = document.getElementById('direccion').value;
  if (nombre === '' || apellidos === '' || direccion === '') e.preventDefault();
}

function link(e) {
  e.preventDefault();
}

function ejercicio3(event) {
  alert(
    'x: '.concat(
      event.clientX - this.offsetLeft,
      '\ny: ',
      event.clientY - this.offsetTop
    )
  );

  var par = document.getElementById('e3');
  with (this.parentNode.style) {
    height = Math.round(Math.random() * screen.height) + 'px';
    width = Math.round(Math.random() * screen.width) + 'px';
  }

  //event.stopPropagation();
}
