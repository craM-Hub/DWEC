$(function () {
	$('#apicat').click(function () {
		$.getJSON('https://catfact.ninja/fact', (data) => {
			$('#contenedor').html(data.fact);
		}).fail((response) => $('#contenedor').html(response.status));
	});
	$('#apipokemon').click(function () {
		$.getJSON('https://pokeapi.co/api/v2/pokemon', (data) => {
			$.each(data.results, function (_, data2) {
				$('#contenedor').append('<li>' + data2.name + '</li>');
			});
		}).fail((response) => $('#contenedor').html(response.status));
	});
});
