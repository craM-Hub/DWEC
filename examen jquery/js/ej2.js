$(function () {
	$('#pekin').click(function () {
		$('#formContainer').append(
			"<form><input type='text' id='nombre' placeholder='Nombre' name='nombre' /><input type='text' id='correo' placeholder='Correo' name='correo' /><input type='button' value='submit' id='enviar'></form>"
		);
		$('#enviar').click(function () {
			$.ajax({
				method: 'GET',
				url: 'datos.php',
				data: { nombre: $('#nombre').val(), correo: $('#correo').val() },
				success: function (data) {
					$('#contenedor').html(data);
				},
			});
		});
	});

	/* $('#enviar').click(function () {
		$.get('datos.php', $('form').serialize(), (response) =>
			$('#contenedor').html(response)
		).fail((request) =>
			$('#contenedor').html(request.status + ' Error inesperado')
		);
	}); */
});
