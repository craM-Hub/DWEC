function color(color) {
  document.getElementById('divColor').style.backgroundColor = color;
  console.log(color);
}

function contarEl(el) {
  alert(document.getElementsByTagName(el).length);
}

function addP() {
  let target = document.getElementsByTagName('p');
  // target[target.length - 1].parentNode.insertBefore(nodo, target.nextSibling);
  target[target.length - 1].insertAdjacentHTML(
    'afterend',
    '<p>Párrafo añadido</p>'
  );
}
function insertP() {
  let target = document.getElementsByTagName('p');
  target[0].insertAdjacentHTML('afterend', '<p>Párrafo insertado</p>');
}
function replaceP() {
  let target = document.getElementsByTagName('p');
  target[0].nextElementSibling.innerHTML = '<p>Párrafo reemplazado</p>';
}
function delP() {
  let target = document.getElementsByTagName('p');
  target[0].nextElementSibling.remove();
}
function cloneD() {
  let div = document.getElementById('e1');
  let clonedDiv = div.cloneNode(true);

  div.appendChild(clonedDiv);
}

function addE() {
  let target = document.getElementsByTagName('li');
  // target[target.length - 1].parentNode.insertBefore(nodo, target.nextSibling);
  target[target.length - 1].insertAdjacentHTML('afterend', '<li>Gato</li>');
}
function insertE() {
  let target = document.getElementsByTagName('li');
  target[0].insertAdjacentHTML('afterend', '<li>Perro</li>');
}
function replaceE() {
  let target = document.getElementsByTagName('li');
  target[0].nextElementSibling.innerHTML = '<li>hurón</li>';
}
function delE() {
  let target = document.getElementsByTagName('li');
  target[0].nextElementSibling.remove();
}
function cloneE() {
  let div = document.getElementById('e2');
  let clonedDiv = div.cloneNode(true);

  div.appendChild(clonedDiv);
}

function crearSublistaDom() {
  let target = document.getElementsByTagName('li');
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  let cachorro = document.createTextNode('cachorro');
  let adulto = document.createTextNode('adulto');
  let anciano = document.createTextNode('anciano');
  li.appendChild(cachorro);
  li2.appendChild(adulto);
  li3.appendChild(anciano);
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);

  target[0].appendChild(ul);
}

function crearSublistaInner() {
  let target = document.getElementsByTagName('li');
  target[0].innerHTML = `león
                        <ul>
                          <li>cachorro</li>
                          <li>adulto</li>
                          <li>anciano</li>
                        </ul>
  `;
}

function crearTextArea() {
  let target = document.getElementById('e5');
  target.innerHTML = `
                    <h4>Ejercicio 5</h4>
                    <button onclick="cambiarAttributos()">Cámbiame los atributos</button>
                    <div>
                      <textarea id="textArea" rows="4" cols="50" name="textarea" placeholder="Escríbenos tus dudas"></textarea>
                    </div>
  `;
}

function cambiarAttributos() {
  let target = document.getElementById('textArea');
  target.setAttribute('cols', 90);
  target.setAttribute(
    'placeholder',
    'me has cambiado el placeholder, el número de columnas y el color de fondo'
  );
  target.setAttribute('style', 'background-color:#FFCC91');
}
