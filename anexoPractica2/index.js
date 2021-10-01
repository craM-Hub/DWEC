function formulario() {
  let dni = document.forms['form']['dni'].value;
  if (dni === '') alert('Es necesario rellenar el dni');
}
