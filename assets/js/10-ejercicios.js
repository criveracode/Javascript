

// Calculadora con FOR

for (let i = 1; i <= 1; i++) {
    for (let e = 1; e <= 10; e++) {
        console.log(`${i}x${e} = ${i * e}`);
    }
}


// for...in

// Propósito: Itera sobre las propiedades enumerables de un objeto. 
// Esto significa que recorre los nombres de las claves (keys) de un objeto.

const usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Santiago"
};

for (const propiedad in usuario) {
    console.log(propiedad); // Output: "nombre", "edad", "ciudad"
    console.log(usuario[propiedad]); // Output: "Juan", 30, "Santiago"

}


// No recomendable 
const canasta = ["manzana", "banana", "cereza"];

for (const indice in canasta) {
    console.log(indice); // Output: "0", "1", "2"
}

/**
 * for...of
 * 
 * Propósito: Itera sobre los valores de los objetos iterables. 
 * Un objeto iterable es aquel que define un protocolo de iteración 
 * (por ejemplo, a través del método [Symbol.iterator]()).
 */

const miArray = ["manzana", "banana", "cereza"];

for (const fruta of miArray) {
    console.log(fruta); // Output: "manzana", "banana", "cereza"
}

const miCadena = "Hola";

for (const letra of miCadena) {
    console.log(letra); // Output: "H", "o", "l", "a"
}



const cartas = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

for (let i = 2; i <= 10; i++) {
    for (const element of cartas) {
        console.log(i + element);
    }


}

for (const item of cartas) {
    for (const keys of especiales) {
        console.log(keys + item);
    }
}