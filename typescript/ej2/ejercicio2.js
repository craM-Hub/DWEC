window.onload = function () {
    var precio;
    precio = parseInt(prompt("Introduce el precio del artículo para calcular su IVA"));
    var calcularIva = function () {
        return precio * 0.21;
    };
    var total = function () {
        return Math.round(precio + calcularIva() * 100) / 100;
    };
    return alert("Precio total: ".concat(total(), "\nIVA: ").concat(calcularIva()));
};
