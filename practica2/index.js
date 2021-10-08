function estacion() {
  let mes = '';
  mes = prompt('Introduce un mes: ', '').toLowerCase();
  switch (mes) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
      alert('Es invierno');
      break;
    case 'marzo':
    case 'abril':
    case 'mayo':
      alert('Es primavera');
      break;

    case 'junio':
    case 'julio':
    case 'agosto':
      alert('Es verano');
      break;

    case 'septiembre':
    case 'octubre':
    case 'noviembre':
      alert('Es otoño');
      break;
    default:
      alert('El mes introducido no existe');
      break;
  }
}

function calcularIva() {
  let precio = parseInt(prompt('Introduce un número: ', ''));
  let iva = Math.round(21 * precio) / 100;
  let total = precio + iva;

  alert('IVA: ' + iva + '. \nPrecio total: ' + total);
}

function getDayName(dateStr, locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}
function getMonthName(dateStr, locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { month: 'long' });
}

function fechaActual() {
  const fechaActual = new Date();

  const d = new Date();
  alert(
    getDayName(fechaActual, 'es-ES') +
      ', ' +
      fechaActual.getDate() +
      ' de ' +
      getMonthName(fechaActual, 'es-ES') +
      ' de ' +
      fechaActual.getFullYear()
  );
}

function horaActual() {
  let horaActual = new Date();

  let d = new Date();
  let hora = d.getHours();
  //const minutos = d.getMinutes();
  let minutos = 1;

  let mensaje = '';

  if (hora < 14) {
    mensaje = 'Buenos días';
  } else if (hora < 20) {
    mensaje = 'Buenas tardes';
  } else {
    mensaje = 'Buenas noches';
  }

  minutos > 10 ? minutos : (minutos = '0' + minutos);

  alert(mensaje + ', son las ' + hora + ':' + minutos);
}

function botonesColores(color) {
  document.body.style.backgroundColor = color;
  console.log(color);
}

function crearnueva() {
  nuevaVentana = window.open(
    '',
    'pagina2',
    'toolbar=yes,location=no,menubar=yes,width=300,height=300'
  );
  nuevaVentana.document.write('<!DOCTYPE html>\n');
  nuevaVentana.document.write('<HTML><HEAD><TITLE>Sin Título</TITLE></HEAD>\n');
  nuevaVentana.document.write('');
  nuevaVentana.document.write('<body><form>\n');
  nuevaVentana.document.write(
    '<input type="button" value="¿Continuamos?" onClick="document.write(\'<p>Continuamos</p>\')">\n'
  );
  nuevaVentana.document.write('</form>\n');
  nuevaVentana.document.write('</body></html>');
}

function abrirCerrar() {
  nuevaVentana = window.open(
    '',
    'Abrir/Cerrar',
    'toolbar=yes,location=no,menubar=yes,width=300,height=300'
  );
  nuevaVentana.document.write('<!DOCTYPE html>\n');
  nuevaVentana.document.write(
    '<HTML><HEAD><TITLE>Abrir/Cerrar</TITLE></HEAD>\n'
  );
  nuevaVentana.document.write('');
  nuevaVentana.document.write('<body><form>\n');
  nuevaVentana.document.write(
    '<input type="button" value="Cerrar" onClick="window.close()">\n'
  );
  nuevaVentana.document.write('</form>\n');
  nuevaVentana.document.write('</body></html>');
}

function redimensionar() {
  nuevaVentana = window.open(
    '',
    'pagina2',
    'toolbar=yes,location=no,menubar=yes,width=300,height=300'
  );
  nuevaVentana.document.write('<!DOCTYPE html>\n');
  nuevaVentana.document.write('<HTML><HEAD><TITLE>Sin Título</TITLE></HEAD>\n');
  nuevaVentana.document.write('');
  nuevaVentana.document.write('<body><form>\n');
  nuevaVentana.document.write(
    '<input type="button" value="Redimensionar" onClick="window.resizeTo(500, 500)">\n'
  );
  nuevaVentana.document.write('</form>\n');
  nuevaVentana.document.write('</body></html>');
}

function showHide(nombre) {
  var x = document.getElementById(nombre);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
