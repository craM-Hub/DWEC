$(function () {
	$.fn.squareMove = function () {
		this.each(() => {
			elem = $(this);
			elem
				.animate({
					marginTop: '200px',
				})
				.animate({
					backgroundColor: '#FF0000',
				})
				.delay(1000)
				.animate({
					marginLeft: '200px',
				})
				.delay(1000)
				.animate({
					backgroundColor: '#FFA500',
				})
				.delay(1000)
				.animate({
					marginTop: '0px',
				})
				.delay(1000)
				.animate({
					backgroundColor: '#FF0000',
				})
				.delay(1000)
				.animate({
					marginLeft: '0px',
				})
				.delay(1000)
				.animate({
					backgroundColor: '#FFA500',
				});
		});
	};

	cuadrado = $('#cuadrado');
	$('#iniciar').click(function () {
		cuadrado.squareMove();
	});
	$('#parar').click(function () {
		cuadrado.stop(true);
	});
});
