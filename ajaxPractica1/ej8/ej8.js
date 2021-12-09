window.onload = function () {
    let trigger = document.getElementById('trigger');
    //trigger.onclick = sacardatos('datos.txt', 'contenedor'); No se porque pero lo carga automaticamente sin usar el boton
    trigger.addEventListener('click', () => {
        sacardatos('ejercicio8.json', 'contenedor');
    });
};
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP');
}

function sacardatos(datos, idDiv) {
    datos += '?coche=rojo';
    if (XMLHttpRequestObject) {
        var contenedor = document.getElementById(idDiv);
        XMLHttpRequestObject.open('GET', datos);
        XMLHttpRequestObject.onreadystatechange = function () {
            if (
                XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200
            ) {
                objetoJSON = JSON.parse(XMLHttpRequestObject.responseText);
                contenedor.innerHTML =
                    'Debug: ' +
                    objetoJSON.widget.debug +
                    '<br>' +
                    'Window title: ' +
                    objetoJSON.widget.window.title +
                    '<br>' +
                    'Text data: ' +
                    objetoJSON.widget.text.data +
                    '<br>';
            }
        };
        XMLHttpRequestObject.send(null);
    }
}
