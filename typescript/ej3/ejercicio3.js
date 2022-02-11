$(function () {
    var suma = function () {
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
        return (a + b);
    };
    $('#sumar').click(function () {
        $('#container').html("<br>La suma de los inputs es: <input type=\"text\" value=\"".concat(suma(), "\" />"));
    });
});
