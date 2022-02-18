var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.alumno = function () {
        return "Nombre: ".concat(this.nombre, ", edad: ").concat(this.edad, ", curso: ").concat(this.curso);
    };
    return Alumno;
}());
var alumno = new Alumno('Marc', 30, '2DAW');
$(function () {
    $('#mostrar').click(function () {
        $('#container').html("\n    Nombre=\"".concat(alumno.nombre, "\", \n    Edad=\"").concat(alumno.edad, "\", \n    Curso=\"").concat(alumno.curso, "\""));
    });
});
