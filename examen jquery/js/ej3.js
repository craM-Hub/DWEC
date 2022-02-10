$(function () {
	$.fn.changeColor = function () {
		this.each(() => {
			elem = $(this);
			elem.css({
				color: 'lightgreen',
			});
		});
	};
	$('h1').hover(function () {
		$('h1').changeColor();
	});
});
