$(document).ready(function () {
    $('#ocultar').click(function () {
        $('img').hide('slow');
    });
    $('#mostrar').click(function () {
        $('img').show(2500);
    });
});
