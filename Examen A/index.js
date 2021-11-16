window.onload = function () {
  let form = document.getElementById('form');
  let nodeInput = document.createElement('input');
  nodeInput.setAttribute('name', 'clave');
  nodeInput.setAttribute('id', 'clave');
  form.prepend(nodeInput);
  console.log(nodeInput);

  let validarClave = document.getElementById('validarClave');
  validarClave.onclick = validar;

  let parrafos = document.getElementsByTagName('p');
  parrafos[0].onmouseover = subirTamanyo;
  parrafos[0].onmouseout = bajarTamanyo;
};

function validar() {
  let clave = document.getElementById('clave');
  let form = document.getElementById('form');
  const reg = /^[A-Z][0-9]{3}$/;
  if (!reg.test(clave.value)) {
    alert('Formato clave incorrecto - Formato -> A333');
    clave.focus();
    form.reset();
    return false;
  }
  alert('Clave correctísima');
  return true;
}

function subirTamanyo() {
  let enlaces = document.getElementsByTagName('a');
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].style.fontSize = '20pt';
  }
}
function bajarTamanyo() {
  let enlaces = document.getElementsByTagName('a');
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].style.fontSize = '12pt';
  }
}
