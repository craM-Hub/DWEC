function formulario() {
  let dni = document.forms['form']['dni'].value;
  if (dni === '') alert('Es necesario rellenar el dni');
}

function sumar() {
  let suma = 0;
  suma += parseInt(document.getElementById('resultadoSuma').value);
  console.log(suma);
}

function inicializar() {}
