$(function () {
	$('#test').click(function () {
		$.getJSON('https://catfact.ninja/fact', (data) => {
			$('#contenedor').html(data.fact);
		}).fail((response) => $('#contenedor').html(response.status));
	});
});
