
window.onload = function() {

let suma: number = 0;
let mayor100: number = 0;
let num: number;

for (let index = 0; index < 5; index++) {
    num = parseInt(prompt("Introduce un número"));
    suma += num;
    if (num > 100) {
        mayor100++;
    }
}

return alert(`La suma hace un total de: ${suma}\n Hay ${mayor100} mayores que 100`)
}