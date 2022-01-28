$(function () {
	$.fn.arcoiris = function () {
		//this.each(() => {
		elem = $(this);
		elem
			.animate({
				color: 'red',
			})
			.delay(50)
			.animate({
				color: 'green',
			})
			.delay(50)
			.animate({
				color: 'red',
			})
			.delay(500)
			.animate({
				marginTop: '200px',
			})
			.delay(500)
			.animate({
				backgroundColor: 'yellow',
			})
			.delay(500)
			.animate({
				backgroundColor: '##6495ed',
				marginTop: '0px',
			});
		//});
	};
	$('#desaparecer').click(function () {
		$('p').arcoiris();
	});
});
