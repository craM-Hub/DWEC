window.onload = function () {
  ejercicio1 = document.getElementById('e1');
  ejercicio3 = document.getElementById('e3');

  ejercicio1.onmouseover = incSize;
  ejercicio1.onmouseout = decSize;

  ejercicio3.onmouseover = changeSize;
  ejercicio3.onmouseout = changeSize;
  let evento = window.event;

  function incSize() {
    ejercicio1.setAttribute('style', 'font-size:16px');
  }

  function decSize() {
    ejercicio1.setAttribute('style', 'font-size:12px');
  }

  function changeSize() {
    evento.type === 'mouseover';
  }
};

function incSizeV2(el) {
  el.setAttribute('style', 'font-size:16px');
}

function decSizeV2(el) {
  el.setAttribute('style', 'font-size:12px');
}
