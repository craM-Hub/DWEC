window.onload = function() {
    let alumno = new Curso('Marc', 30, '2DAW', 'Segundo curso de grado superior de DAW')
    alert(`Mi nombre es ${alumno.nombre}\nTengo ${alumno.edad}\nEstoy en ${alumno.curso} ${alumno.titulo}`
    );
}
class Alumno {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

class Curso extends Alumno {
    titulo: string;

    constructor(nombre: string, edad: number, curso: string, titulo: string) {
        super(nombre, edad, curso)
        this.titulo = titulo;
    }
}
