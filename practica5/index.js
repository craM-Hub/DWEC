window.onload = function () {
  document.getElementById('nombre').focus();
  let lista = document.getElementById('aficion');
  lista.onchange = infoSelect;

  let submit = document.getElementById('saveChanges');
  submit.onclick = validateForm;

  let colores = document.getElementById('colores');
  colores.onchange = cambiarColor;

  let coloresRadio = document.getElementsByName('colors');

  for (let i = 0; i < coloresRadio.length; i++) {
    coloresRadio[i].onclick = cambiarColorRadio;
  }

  let negrita = document.getElementById('negrita');
  console.log(negrita);
  let cursiva = document.getElementById('cursiva');
  negrita.onclick = ponerNegrita;
  cursiva.onclick = ponerCursiva;
};

function ponerNegrita() {
  let cambiaLetra = document.getElementById('cambiaLetra');
  if (this.checked) {
    cambiaLetra.style.fontWeight = this.value;
  } else {
    cambiaLetra.style.fontWeight = 'normal';
  }
}

function ponerCursiva() {
  let cambiaLetra = document.getElementById('cambiaLetra');
  if (this.checked) {
    cambiaLetra.style.fontStyle = this.value;
  } else {
    cambiaLetra.style.fontStyle = 'normal';
  }
}

function infoSelect() {
  let longitud = this.length;
  let indice = this.selectedIndex;
  let seleccion = this.options[indice];

  let valor = seleccion.value;

  alert('Longitud: ' + longitud + '\nIndice: ' + indice + '\nValor: ' + valor);
}

function validateForm() {
  if (!requiredDNI()) return false;
  if (!phonePattern()) return false;
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
  const reg = /^[0-9]{9}$/;
  if (!reg.test(phone)) {
    alert('Formato teléfono incorrecto');
    return false;
  }
  return true;
}

function cambiarColor() {
  let indice = this.selectedIndex;
  let color = this.options[indice].value;
  let coloreame = document.getElementById('coloreame');
  coloreame.style.backgroundColor = color;
}

function cambiarColorRadio() {
  let color;
    if (this.checked) {
      color = this.value;
  }
  let coloreame = document.getElementById('coloreame');
  coloreame.style.backgroundColor = color;
}
