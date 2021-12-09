window.onload = function () {
    let trigger = document.getElementById('trigger');
    //trigger.onclick = sacardatos('datos.txt', 'contenedor'); No se porque pero lo carga automaticamente sin usar el boton
    trigger.addEventListener('click', () => {
        sacardatos('ejercicio4.xml', 'contenedor');
    });
};

var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP');
}

function sacardatos(datos, idDiv) {
    if (XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);
        XMLHttpRequestObject.open('GET', datos);
        XMLHttpRequestObject.onreadystatechange = function () {
            if (
                XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200
            ) {
                documentoXml = XMLHttpRequestObject.responseXML;

                let raiz = documentoXml.getElementsByTagName('CATALOG')[0];
                let length = raiz.getElementsByTagName('CD').length;

                for (var i = 0; i < length; i++) {
                    cd = raiz.getElementsByTagName('CD')[i];
                    title =
                        cd.getElementsByTagName('TITLE')[0].firstChild
                            .nodeValue;
                    artist =
                        cd.getElementsByTagName('ARTIST')[0].firstChild
                            .nodeValue;
                    country =
                        cd.getElementsByTagName('COUNTRY')[0].firstChild
                            .nodeValue;
                    company =
                        cd.getElementsByTagName('COMPANY')[0].firstChild
                            .nodeValue;
                    price =
                        cd.getElementsByTagName('PRICE')[0].firstChild
                            .nodeValue;
                    year =
                        cd.getElementsByTagName('YEAR')[0].firstChild.nodeValue;

                    muestraHTML(
                        'contenedor',
                        'Title: ' +
                            title +
                            ', Artist: ' +
                            artist +
                            ', Country: ' +
                            country +
                            ', Company: ' +
                            company +
                            ', Price: ' +
                            price +
                            ', Year: ' +
                            year +
                            '<br/>'
                    );
                }
            }
        };
        XMLHttpRequestObject.send(null);
    }
}

function muestraHTML(id, texto) {
    if (document.getElementById) {
        document.getElementById(id).innerHTML += texto;
    }
}
