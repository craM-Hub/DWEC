$(document).ready(function () {
    $('p').mouseover(function () {
        $('p').css({ fontSize: 16 });
    });
    $('p').mouseout(function () {
        $('p').css({ fontSize: 30 });
    });
});
