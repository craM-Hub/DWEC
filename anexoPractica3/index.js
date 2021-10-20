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

function refEnlacesP() {
  let parrafos = document.getElementsByTagName('p').length;
  alert(parrafos);
}
