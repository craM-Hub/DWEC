class Alumno {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    alumno() {
        return `Nombre: ${this.nombre}, edad: ${this.edad}, curso: ${this.curso}`;
    }
}


let alumno = new Alumno('Marc', 30, '2DAW');
$(function() {
alert('hola')
})
