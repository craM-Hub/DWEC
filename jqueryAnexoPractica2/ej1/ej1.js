$(function () {
	$('#trigger').click(function () {
		$.ajax({
			url: 'datos.txt',
			cache: false,
			success: function (data) {
				$('#contenedor > p').html(data);
			},
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
	$('#trigger2').click(function () {
		$.ajax({
			url: 'datos',
			cache: false,
			success: function (data) {
				$('#contenedor > p').html(data);
			},
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
});
