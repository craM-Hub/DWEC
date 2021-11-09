window.onload = function () {
  document.getElementById('nombre').focus();
  let lista = document.getElementById('aficion');
  lista.addEventListener('change', infoSelect);

  let submit = document.getElementById('saveChanges');
  submit.addEventListener('click', requiredDNI);
  submit.addEventListener('click', phonePattern);
};

function infoSelect() {
  let lista = document.getElementById('aficion');
  let longitud = lista.length;
  let indice = lista.selectedIndex;
  let seleccion = lista.options[indice];

  let valor = seleccion.value;

  alert('Longitud: ' + longitud + '\nIndice: ' + indice + '\nValor: ' + valor);
}

function requiredDNI() {
  let dni = document.getElementById('dni').value;
  if (dni.length == 0) {
    alert('Dni Obligatorio');
    return false;
  }
  return true;
}

function phonePattern() {
  let phone = document.getElementById('telefono').value;
  console.log(phone);
  const reg = /^[0-9]\d{9}$/;
  if (!reg.test(phone)) {
    alert('Formato teléfono incorrecto');
    return false;
  }
  return true;
}