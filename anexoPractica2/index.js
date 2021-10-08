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

function aleatorio() {
  num = parseInt(document.getElementById('aleatorio').value);

  numAl = Math.floor(Math.random() * 10);
  if (num === numAl) {
    alert('¡Bien, has acertado!');
  } else {
    alert('¡Oh, has fallado! El número aleatorio era el: ' + numAl);
  }
}

function bienvenida() {
  let repeticiones = 0;
  document
    .getElementById('bienvenida')
    .insertAdjacentHTML('beforeend', '<p>Hola bienvenido</p>');
  setTimeout(() => {
    document
      .getElementById('bienvenida')
      .insertAdjacentHTML('beforeend', '<p>Han pasado 20 segundos</p>');
  }, 20000);
}

function cadenaTexto() {
  cadena = '2+2';
  alert('La evaluación de la cadena ' + cadena + ' es: ' + eval(cadena));
}
