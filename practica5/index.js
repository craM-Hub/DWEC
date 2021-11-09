window.onload = function () {
  document.getElementById('nombre').focus();
};

function infoSelect() {
  let lista = document.getElementById('afición');
  let longitud = lista.length;
  let indice = lista.selectedIndex;
  let seleccion = lista.options[indice];

  let valor = seleccion.value;

  alert("Longitud: " + longitud + "\nIndice: " + indice + "\nValor: " + valor);
}
