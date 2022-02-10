$(function () {
	$('#mostrarImagen').click(function () {
		$('#img').show();
	});
	$('#pikachu').hover(function () {
		$('#pikachu')
			.slideUp(1000)
			.animate(
				{
					width: '40%',
				},
				1000
			)
			.fadeOut(1000);
	});
});
