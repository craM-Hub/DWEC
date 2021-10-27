window.onload = function () {
  let ejercicio1 = document.getElementById('e1');
  let ejercicio3 = document.getElementById('e3');
  let ejercicio6 = document.getElementsByTagName('button');

  ejercicio1.onmouseover = incSize;
  ejercicio1.onmouseout = decSize;

  ejercicio3.onmouseover = changeSize;
  ejercicio3.onmouseout = changeSize;
};

function incSize() {
  //ejercicio1.setAttribute('style', 'font-size:16px');
  this.style.fontSize = '16px';
}

function decSize() {
  //ejercicio1.setAttribute('style', 'font-size:12px');
  this.style.fontSize = '12px';
}

function incSizeV2(el) {
  //el.setAttribute('style', 'font-size:16px');
  el.style.fontSize = '16px';
}

function decSizeV2(el) {
  //el.setAttribute('style', 'font-size:12px');
  el.style.fontSize = '12px';
}

function changeSize(elEvento) {
  let evento = elEvento || window.event;
  if (evento.type === 'mouseover') {
    //ejercicio3.setAttribute('style', 'font-size:16px');
    this.style.fontSize = '16px';
  } else if (evento.type === 'mouseout') {
    //ejercicio3.setAttribute('style', 'font-size:12px');
    this.style.fontSize = '12px';
  }
}

function soloNumeros(evt) {
  var charCode = evt.which ?? evt.which;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}

function botonPulsado() {}
