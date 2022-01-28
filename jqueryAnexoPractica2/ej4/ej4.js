$(function () {
	$('#trigger').click(function () {
		$.get('datos.php', $('form').serialize(), (response) =>
			$('#contenedor').html(response)
		).fail((request) =>
			$('#contenedor').html(request.status + ' Error inesperado')
		);
	});
});
