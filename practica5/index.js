window.onload = function () {
    document.getElementById('nombre').focus();
    let lista = document.getElementById('aficion');
    lista.onchange = infoSelect;

    let submit = document.getElementById('saveChanges');
    submit.onclick = validateForm;

    let colores = document.getElementById('colores');
    colores.onchange = cambiarColor;

    let coloresRadio = document.getElementsByName('colors');
    
    for (let i = 0; i < coloresRadio.length; i++) {
      coloresRadio[i].onclick = cambiarColorRadio;
    }

    
    let tipoLetra = document.getElementsByName('tipoLetra');

    for (let i = 0; i < tipoLetra.length; i++) {
        tipoLetra[i].onclick = cambiarTipoLetra;
    }


};

function infoSelect() {
    let lista = document.getElementById('aficion');
    let longitud = lista.length;
    let indice = lista.selectedIndex;
    let seleccion = lista.options[indice];

    let valor = seleccion.value;

    alert(
        'Longitud: ' + longitud + '\nIndice: ' + indice + '\nValor: ' + valor
    );
}

function validateForm() {
    if (!requiredDNI()) return false;
    if (!phonePattern()) return false;
}

function requiredDNI() {
    let dni = document.getElementById('dni').value;
    if (dni.length == 0) {
        alert('Dni Obligatorio');
        return false;
    }
    return true;
}

function phonePattern() {
    let phone = document.getElementById('telefono').value;
    console.log(phone);
    const reg = /^[0-9]{9}$/;
    if (!reg.test(phone)) {
        alert('Formato teléfono incorrecto');
        return false;
    }
    return true;
}

function cambiarColor() {
    let lista = document.getElementById('colores');
    let coloreame = document.getElementById('coloreame');
    let indice = lista.selectedIndex;
    let color = lista.options[indice].value;
    coloreame.style.backgroundColor = color;
}

function cambiarColorRadio() {
    let coloresRadio = document.getElementsByName('colors');
    let color;

    for (let i = 0; i < coloresRadio.length; i++) {
        if (coloresRadio[i].checked) {
          color = coloresRadio[i].value;
        }
    }
    let coloreame = document.getElementById('coloreame');
    coloreame.style.backgroundColor = color;
}

function cambiarTipoLetra() {
    let tipoLetra = document.getElementsByName('tipoLetra');
    let tipo;

    for (let i = 0; i < tipoLetra.length; i++) {
        if (tipoLetra[i].checked) {
            ctipoolor = tipoLetra[i].value;
        }
    }
    let coloreame = document.getElementById('coloreame');
    coloreame.style.fontStyle = color;
}
