$(function () {
    $('#trigger').click(function () {
        $.post('ej4.php', {nombre: "Marc"}, function(data){
			$('#contenedor > p').html(data);
		});
    });
});
