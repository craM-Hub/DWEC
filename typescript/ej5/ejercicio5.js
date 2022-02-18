var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var alumno = new Curso('Marc', 30, '2DAW', 'Segundo curso de grado superior de DAW');
    alert("Mi nombre es ".concat(alumno.nombre, "\nTengo ").concat(alumno.edad, "\nEstoy en ").concat(alumno.curso, " ").concat(alumno.titulo));
};
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    return Alumno;
}());
var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso(nombre, edad, curso, titulo) {
        var _this = _super.call(this, nombre, edad, curso) || this;
        _this.titulo = titulo;
        return _this;
    }
    return Curso;
}(Alumno));
