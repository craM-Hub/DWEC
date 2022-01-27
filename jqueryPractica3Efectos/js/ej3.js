$(function () {
    cuadrado = $('#cuadrado');
    let intervalID;
    $('#iniciar').click(function () {
        loop = () => { cuadrado
            .animate({
                marginTop: '200px',
            })
            .animate({
                marginLeft: '200px',
            })
            .animate({
                marginTop: '0px',
            })
            .animate({
                marginLeft: '0px',
            }), loop();
        }
        loop();
        //intervalID = setInterval(loop, 2000);
    });
    $('#parar').click(function () {
        cuadrado.stop(true);
    });
});
