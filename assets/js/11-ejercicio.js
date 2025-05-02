/**
 * Arrays Exercise
 */

let frutas = ["manzana", "plátano", "sandia", 'limón'];


// 1. Métodos que modifican el array original:

let agregarFruta = frutas.push("naranja"); // Añade un elementos al final del array y devuelve la nueva longitud del array.

console.log(frutas);
console.log(`push(): ${agregarFruta}`);

let eliminarFruta = frutas.pop(); // Elimina el último elemento del array y devuelve ese elemento.

console.log(frutas);
console.log(`pop(): ${eliminarFruta}`);

let primeraFruta = frutas.shift(); // Elimina el primer elemento del array y devuelve ese elemento.

console.log(frutas);
console.log(`shift(): ${primeraFruta}`);

let nuevaLongitud = frutas.unshift("manzana"); // Añade uno o más elementos al principio del array y devuelve la nueva longitud del array.

console.log(frutas);
console.log(`unshift(): ${nuevaLongitud}`);

// Eliminar 1 elemento desde el índice 1
frutas.splice(1, 1);// splice(índiceDeInicio, cantidadAEliminar, elemento1, elemento2, ...)
console.log(frutas);

// Reemplazar 1 elemento desde el índice 1 con "kiwi"
frutas.splice(1, 1, "kiwi");
console.log(frutas);

// Insertar "plátano" en el índice 1 sin eliminar nada
frutas.splice(1, 0, "plátano");
console.log(frutas);

let numeros = [1, 30, 4, 21, 100000];

numeros.sort(); // Ordena los elementos de un array en su lugar y devuelve el array ordenado.
console.log(numeros);

numeros.sort((a, b) => a - b); // Orden numérico ascendente
console.log(numeros);

numeros.sort((a, b) => b - a); // Orden numérico descendente
console.log(numeros);

let personas = [{ nombre: "Ana", edad: 30 }, { nombre: "Juan", edad: 25 }, { nombre: "Pedro", edad: 35 }];

personas.sort((a, b) => a.edad - b.edad); // Ordenar por edad ascendente
console.log(personas);