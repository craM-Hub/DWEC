$(document).ready(function () {
    $('input').click(function () {
        $('p').css({ backgroundColor: $(this).val() });
    });
});
