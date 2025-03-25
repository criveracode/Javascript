/**
 * !Funciones¡
 *
 * En JavaScript, una función es un bloque de código
 * reutilizable que se ejecuta cuando se llama
 */

/**
 * !Funciones Declaradas¡
 *
 * Son funciones nombradas que pueden ser llamadas antes de su declaración debido al hoisting.
 */

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Juan")); // "Hola, Juan!"

/**
 * !Funciones Expresadas¡
 *
 * Se asignan a una variable y no pueden llamarse antes de su declaración.
 */

const despedir = function (nombre) {
  return `Adiós, ${nombre}!`;
};

console.log(despedir("María")); // "Adiós, María!"

/**
 * !Funciones Flecha¡
 *
 * Son una forma más corta de escribir funciones.
 */

const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8

// Si hay solo un parámetro, no necesita paréntesis:
const cuadrado = (num) => num * num;
console.log(cuadrado(4)); // 16

// Si la función tiene varias líneas, se necesita {} y return:
const multiplicar = (a, b) => {
  let resultado = a * b;
  return resultado;
};
console.log(multiplicar(3, 4)); // 12

/**
 * !Funciones Anónimas¡
 *
 * No tienen nombre y se usan en callbacks o eventos.
 */

setTimeout(function () {
  console.log("Hola después de 2 segundos");
}, 2000);

/**
 * !Funciones como Parámetro (Callbacks)¡
 *
 * Se pasan como argumento a otra función.
 */

function procesarDato(dato, callback) {
  console.log(`Procesando: ${dato}`);
  callback();
}

procesarDato("Mensaje", () => console.log("Proceso completado"));

/**
 * !Funciones con Parámetros por Defecto¡
 *
 * Si no se proporciona un valor, toma el valor por defecto.
 *
 */

function saludar(nombre = "Usuario") {
  return `Hola, ${nombre}!`;
}

console.log(saludar()); // "Hola, Usuario!"
console.log(saludar("Ana")); // "Hola, Ana!"

/**
 * !Funciones con arguemntos por Valor¡
 *
 * En JavaScript, los valores primitivos (como number,
 * string, boolean, null, undefined, symbol, bigint)
 * se pasan a las funciones por valor. Esto significa
 * que la función recibe una copia del valor original,
 * y cualquier modificación dentro de la función no
 * afecta la variable original fuera de ella.
 */

let x = 10;
let mensaje = "Hola mundo";
let activo = true;

function duplicar(numero) {
  numero = numero * 2;
  console.log("Dentro de la función:", numero);
}

duplicar(x);
console.log("Fuera de la función:", x);

function cambiarTexto(texto) {
  texto = "Nuevo texto";
  console.log("Dentro de la función:", texto);
}

cambiarTexto(mensaje);
console.log("Fuera de la función:", mensaje);

function invertirValor(valor) {
  valor = !valor;
  console.log("Dentro de la función:", valor);
}

invertirValor(activo);
console.log("Fuera de la función:", activo);

/**
 * !Funciones con argumentos por Referencia¡
 *
 * Cuando pasamos un objeto o un array como argumento
 * en una función, se pasa una referencia a la memoria
 * del objeto, no una copia. Esto significa que si la
 * función modifica el objeto, el cambio se verá
 * reflejado fuera de la función.
 */

let usuario = { nombre: "Ana", edad: 25 };
let numeros = [1, 2, 3];

function modificarObjeto(persona) {
  persona.nombre = "Claudio";
  persona.edad = 33;
  console.log("Dentro de la función:", persona);
}

modificarObjeto(usuario);
console.log("Fuera de la función:", usuario);

function agregarElemento(arr) {
  arr.push(100);
  console.log("Dentro de la función:", arr);
}

agregarElemento(numeros);
console.log("Fuera de la función:", numeros);
