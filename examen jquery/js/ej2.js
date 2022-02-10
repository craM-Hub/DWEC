$(function () {
	$('#pekin').click(function () {
		$('#formContainer').append(
			"<form><input type='text' placeholder='Nombre' name='nombre' /><input type='text' placeholder='Correo' name='correo' /><input type='button' value='submit' id='enviar'></form>"
		);
	});

	$('#enviar').click(function () {
		$.get('datos.php', $('form').serialize(), (response) =>
			$('#contenedor').html(response)
		).fail((request) =>
			$('#contenedor').html(request.status + ' Error inesperado')
		);
	});
});
