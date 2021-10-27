window.onload = function () {
  ejercicio1 = document.getElementById('e1');
  ejercicio3 = document.getElementById('e3');

  ejercicio1.onmouseover = incSize;
  ejercicio1.onmouseout = decSize;

  ejercicio3.onmouseover = changeSize;
  ejercicio3.onmouseout = changeSize;
};

function incSize() {
  ejercicio1.setAttribute('style', 'font-size:16px');
}

function decSize() {
  ejercicio1.setAttribute('style', 'font-size:12px');
}

function incSizeV2(el) {
  el.setAttribute('style', 'font-size:16px');
}

function decSizeV2(el) {
  el.setAttribute('style', 'font-size:12px');
}

function changeSize(elEvento) {
  let evento = elEvento || window.event;
  if (evento.type === 'mouseover') {
    ejercicio3.setAttribute('style', 'font-size:16px');
  } else if (evento.type === 'mouseout') {
    ejercicio3.setAttribute('style', 'font-size:12px');
  }
}
