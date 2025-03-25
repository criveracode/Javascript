/**
 * !DOM¡
 * 
 * DOM es una representación en forma de árbol 
 * de la estructura de tu documento HTML. Cada 
 * etiqueta HTML, atributo y texto dentro de tu 
 * documento se convierte en un "nodo" en este árbol. 
 * JavaScript utiliza el DOM para acceder y modificar 
 * estos nodos, lo que te permite cambiar el contenido, 
 * la estructura y el estilo de tu página web de manera dinámica.
 * 
 * Seleccionar elementos HTML: ¿Cómo encontrar elementos específicos en tu página usando JavaScript? (por ejemplo, por su ID, clase, etiqueta, etc.)
 * Modificar contenido: ¿Cómo cambiar el texto dentro de un elemento, el valor de un atributo o incluso el HTML interno de un elemento?
 * Modificar estilos: ¿Cómo cambiar las propiedades CSS de un elemento de forma dinámica?
 * Crear y eliminar elementos: ¿Cómo agregar nuevos elementos HTML a la página o eliminar elementos existentes?
 * Manejar eventos: ¿Cómo hacer que tu página responda a las interacciones del usuario (clics, movimientos del ratón, etc.)?
 */

// Seleccionamos el parrafo por su ID
const parrafo = document.querySelector('#parrafo-principal');

// Modificar el contenido de texto
parrafo.textContent = 'Este párrafo ha sido modificado por JavaScript.';

// Modificar el estilo en línea
parrafo.style.color = 'blue';
parrafo.style.fontWeight = 'bold';

// Seleccionar la lista no ordenada
const lista = document.querySelector('ul');

// Crear un nuevo elemento de lista
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'Nuevo elemento agregado';

// Agregar el nuevo elemento al final de la lista
lista.appendChild(nuevoElemento);

// Seleccionamos el div por su class
const divBotones = document.querySelector('.div-botones');

// Crear un nuevo elemento button
const nuevoBoton = document.createElement('button');

// Agregar nuevo elemento
divBotones.append(nuevoBoton);

// Modificamos el elemento 
nuevoBoton.textContent = 'Inicio';
 
// Agregamos estilos css
nuevoBoton.classList.add('btn');
nuevoBoton.classList.add('btn-primary');

const nuevoBotonDos = document.createElement('button');
divBotones.append(nuevoBotonDos);
nuevoBotonDos.textContent = 'Home';
nuevoBotonDos.classList.add('btn');
nuevoBotonDos.classList.add('btn-danger');