$(function () {
    $('#trigger').click(function () {
        $.get('ej3.xml', function (xml) {
            $(xml)
                .find('CD')
                .each(function () {
                    var title = $(this).find('TITLE').text(),
                        artist = $(this).find('ARTIST').text();

                    $('#contenedor').append(
                        '<li>' + title + ' - ' + artist + '</li>'
                    );
                });
        });
    });
});
