$(function () {
    // plugin
    $.fn.arcoiris = function (opt) {
        const config = {
            color: 'black',
            size: '20px',
        };

        $.extend(config, opt);

        //this.css("font-size", config.size)
        //this.css("color", config.color)
        this.animate({fontSize: config.size}, 400)
        .animate({color: config.color}, 1000);
    };

    $('#plugin').click(function () {
        loop = () => {
            $('p').arcoiris({
                color: '#' + Math.floor(Math.random() * 1000),
                size: Math.floor(Math.random() * (40 - 20)) + 20,
            });
            
        };
        setInterval(loop, 1000);
    });
});
