$(function () {
	$.fn.desaparecer = function () {
		this.each(() => {
			elem = $(this);
			elem.css({
				display: 'none',
			});
		});
	};
	$('#desaparecer').click(function () {
		$('p').desaparecer();
	});
});
