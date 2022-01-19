$(function () {
	$('#trigger').click(function () {
		$('#contenedor > img').show();
		$.ajax({
			url: 'datos.php',
			cache: false,
			success: function (data) {
				$('#contenedor > p').html(data);
				$('#contenedor > img').hide();
			},
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
	$('#trigger2').click(function () {
		$('#contenedor > img').show();
		$.ajax({
			url: 'datos',
			cache: false,
			success: function (data) {
				$('#contenedor > p').html(data);
				$('#contenedor > img').hide();
			},
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
});
