$(function () {
	$('#trigger').click(function () {
		$.ajax({
			url: 'datos.js',
			dataType: 'script',
			cache: false,
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
	$('#trigger2').click(function () {
		$.ajax({
			url: 'datos',
			cache: false,
			error: function () {
				alert('La transferencia no se ha realizado');
			},
		});
	});
});
