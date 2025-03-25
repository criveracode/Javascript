/**
 * !Arreglos¡
 *
 * Un array es una lista ordenada de valores. Cada valor
 * en un array se llama elemento, y cada elemento tiene
 * una posición 1  numérica llamada índice. Los índices
 * de los arrays en JavaScript comienzan en 0.
 */

// Array Literal
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "hola", true, null];

// Array Constructor
let frutasDos = new Array("melon", "sandia", "durazno");

/**
 * !Manipulacion de los arrays¡
 */

// Acceder a elementos: Puedes acceder a un elemento de un array utilizando su índice.
console.log(frutas[0]);

// Modificar elementos: Puedes modificar un elemento de un array asignándole un nuevo valor.
frutas[1] = "pera";
console.log(frutas);

// Añade uno o más elementos al final del array -> push():
frutas.push("uva");

// Añade uno o más elementos al principio del array -> unshift():
frutas.unshift("kiwi");
console.log(frutas);

// Elimina el último elemento del array y lo devuelve -> pop():
frutasDos.pop();

// Elimina el primer elemento del array y lo devuelve -> shift():
frutasDos.shift();

// Elimina elementos de cualquier posición del array -> splice():
frutasDos.splice(1, 1);

console.log(frutasDos);

/**
 * length: Devuelve el número de elementos del array.
 * concat(): Combina dos o más arrays.
 * slice(): Devuelve una copia de una parte del array.
 * join(): Convierte un array en una cadena de texto.
 * indexOf(): Devuelve el índice de la primera aparición de un elemento.
 * lastIndexOf(): Devuelve el índice de la última aparición de un elemento.
 * includes(): Determina si un array contiene un elemento.
 * reverse(): Invierte el orden de los elementos del array.
 * sort(): Ordena los elementos del array.
 * forEach(): Ejecuta una función para cada elemento del array.
 * map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento.
 * filter(): Crea un nuevo array con los elementos que cumplen una condición.
 * reduce(): Reduce un array a un único valor.
 */

const numerosDos = [1, 2, 3, 4, 5];

const cuadrados = numerosDos.map((numero) => numero * numero);
console.log(cuadrados);

const pares = numerosDos.filter((numero) => numero % 2 === 0);
console.log(pares);

const suma = numerosDos.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);
