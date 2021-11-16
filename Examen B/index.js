window.onload = function () {
  let ensalada = document.getElementById('ensalada');
  let jamon = document.getElementById('jamon');
  ensalada.onclick = ponerEnsalada;
  jamon.onclick = ponerJamon;

  let segundoPlato = document.getElementsByName('segundoPlato')
  for (let i = 0; i < segundoPlato.length; i++){
    segundoPlato[i].onclick = ponerSegundoPlato;
  }

  let resetButton = document.getElementById('resetForm');
  resetButton.onclick = borrarForm;

  let enviarButton = document.getElementById('enviar');
  enviarButton.onclick = enviar;
}

let mens = 'Tienes seleccionado: ';
let contEntrantes = 0;
let contSegundo = 0;
let precio = 0;
let precioPostre = 5;
let precioEntrante = 5;
let precioSegundo = 10;
let entrantes = '';
let segundo = '';

function borrarForm() {
  document.getElementById('form').reset();
}

function ponerEnsalada(){
  if(this.checked) {
    contEntrantes++;
    entrantes += '-' + this.value;
  }
}

function ponerJamon(){
  if (this.checked) {
    contEntrantes++;
    entrantes += '-' + this.value;
  }
}

function ponerSegundoPlato(){
  if(this.checked){
    contSegundo++;
    segundo += '-' + this.value;
  }
}

function enviar(){
  precio = (contEntrantes * precioEntrante + contSegundo * precioSegundo + precioPostre)
  mens += contEntrantes + ' Entrantes y ' + contSegundo + ' Segundo. \nPrecio final es de ' + precio;
  mens += '\nLos platos seleccionados son: ' + entrantes + segundo + '-Postre incluído';
  alert(mens);
}