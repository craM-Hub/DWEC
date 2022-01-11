$(document).ready(function () {
    $('a').click(function () {
        var n = $('div').length;
        alert('Hay ' + n + ' divs');
        $('div').css({ color: 'green' });
    });
});
