function formulario() {
  let dni = document.getElementById('dni').value;
  if (dni === '') alert('Es necesario rellenar el dni');
}

let suma = 0;

function sumar() {
  suma += 10;
  document.getElementById('resultadoSuma').value = suma;
}

function inicializar() {
  document.getElementById('resultadoSuma').value = '';
  suma = 0;
}

function contarEl(el) {
  alert(document.getElementsByTagName(el).length);
}

function refEnlaces() {
  let links = document.getElementsByTagName('a');
  let mensaje = '';

  for (let i = 0; i < links.length; i++) {
    mensaje += links[i] + '\n';
  }

  alert(mensaje);
}

function refEnlacesPorParrafo() {
  let parrafos = document.getElementsByTagName('p');
  mensaje = '';

  for (let i = 0; i < parrafos.length; i++) {
    let links = parrafos[i].getElementsByTagName('a');
    mensaje += '\nEnlaces del párrafo: ' + i + '\n';
    for (let j = 0; j < links.length; j++) {
      mensaje += links[j] + '\n';
    }
  }
  alert(mensaje);
}

function cambiarColorParrafos(color) {
  let parrafos = document.getElementsByTagName('p');
  background = 'background-color:' + color + ';';

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].setAttribute('style', background);
  }

  //parrafos.forEach((parrafo) => console.log(parrafo));
}
