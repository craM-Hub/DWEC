function suma() {
  let numero = 0;
  let suma = 0;
  let suma100 = 0;

  for (let i = 0; i < 5; i++) {
    numero = parseInt(prompt("Introduce un número: ", ""));
    suma += numero;
    if (numero > 100) suma100++;
  }

  alert(
    "La suma total es de: " +
      suma +
      ". \nHay " +
      suma100 +
      " números mayores de 100"
  );
}

function sumaMayor8() {
  let numeros = [7, 8, 2, 9, 10];
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 8) suma += numeros[i];
  }

  alert("La suma de los número mayores que 8 es de: " + suma);
}

function estacion() {
  let mes = "";
  mes = prompt("Introduce un mes: ", "").toLowerCase();
  switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
      alert("Es invierno");
      break;
    case "marzo":
    case "abril":
    case "mayo":
      alert("Es primavera");
      break;

    case "junio":
    case "julio":
    case "agosto":
      alert("Es verano");
      break;

    case "septiembre":
    case "octubre":
    case "noviembre":
      alert("Es otoño");
      break;
    default:
      alert("El mes introducido no existe");
      break;
  }
}

function parImpar() {
  let numero = parseInt(prompt("Introduce un número: ", ""));
  if (numero % 2 === 0) {
    alert(numero + " es par.");
  } else {
    alert(numero + " es impar.");
  }
}

function calcularIva() {
  let precio = parseInt(prompt("Introduce un número: ", ""));
  let iva = Math.round(21 * precio) / 100;
  let total = precio + iva;

  alert("IVA: " + iva + ". \nPrecio total: " + total);
}

function cadena() {
  let cadena = prompt("Introduce una cadena: ", "");
  let length = cadena.length;
  let cadenaNormal = cadena.split(" ");
  let cadenaAlReves = cadena.split(" ").reverse();

  document.write(
    "La longitud de la cadena es de " +
      length +
      " caracteres. <br>La cadena mayúsculas es: " +
      cadena.toUpperCase() +
      ". <br>La cadena en minúsculas es: " +
      cadena.toLowerCase() +
      ". <br>Cadena normal: "
  );

  cadenaNormal.forEach((element) => {
    document.write("<br>" + element);
  });

  document.write(". <br>Cadena al revés: ");

  cadenaAlReves.forEach((element) => {
    document.write("<br>" + element);
  });
}
