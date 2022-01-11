$(document).ready(function () {
    $('#mostrar').click(function () {
        let resultado =
            parseInt($('#text1').val()) + parseInt($('#text2').val());
        if ($('#mostrar').prop('checked')) {
            $('body').append(
                "<input type='text' name='resultado' id='resultado' value=''/>"
            );
            $('#resultado').val(resultado);
        } else {
            $('#resultado').remove();
        }
    });
});
