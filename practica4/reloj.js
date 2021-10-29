var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();

var sufijo = ' am';
if (horas > 12) {
  horas = horas - 12;
  sufijo = ' pm';
}

if (horas < 10) {
  horas = '0' + horas;
}
if (minutos < 10) {
  minutos = '0' + minutos;
}
if (segundos < 10) {
  segundos = '0' + segundos;
}

window.onload = () => {
  alert('Página que contiene un reloj digital');
  document.getElementById('reloj').innerHTML =
    horas + ':' + minutos + ':' + segundos + sufijo;
  window.focus();
};

window.onbeforeunload = () => {
  return '';
};
