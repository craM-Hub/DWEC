$(document).ready(function () {
	$('#test').on('click', () => {
		$.getJSON('https://catfact.ninja/fact', (data) => {
			$('#contenedor').html(data.fact);
		});
	});
});
