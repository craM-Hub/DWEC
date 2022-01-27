$(function () {
    img = $('img');
    $('#fundir').click(function () {
        img.fadeOut(1200);
        img.fadeIn(1200);
    });
    $('#dezlizar').click(function () {
        img.slideUp();
        img.slideDown();
    });
    $('#animar').click(function () {
        img.animate(
            {
                height: '50px',
                width: '50px',
            },
            1000
        );
        img.animate(
            {
                height: '480px',
                width: '320px',
            },
            1000
        );
    });
});
