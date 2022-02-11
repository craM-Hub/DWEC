window.onload = function () {
    var suma = 0;
    var mayor100 = 0;
    var num;
    for (var index = 0; index < 5; index++) {
        num = parseInt(prompt("Introduce un número"));
        suma += num;
        if (num > 100) {
            mayor100++;
        }
    }
    return alert("La suma hace un total de: ".concat(suma, "\n Hay ").concat(mayor100, " mayores que 100"));
};
