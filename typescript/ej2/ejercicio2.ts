window.onload = function() {
    let precio: number;
    precio = parseInt(prompt("Introduce el precio del artículo para calcular su IVA"));
    
    const calcularIva = () => {
        return precio * 0.21;
    }
    
    const total = () => {
        return Math.round(precio + calcularIva() * 100) / 100;
    }

    return alert(`Precio total: ${total()}\nIVA: ${calcularIva()}`)
}