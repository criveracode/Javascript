/**
 * !Bucles¡
 *
 * Los bucles son estructuras de control que nos permiten
 * repetir un bloque de código un número determinado de veces.
 *
 * Tipos de bucles: For, While, Do While, For In, For Of, For Each, etc.
 */

// Bucle For
for (let i = 0; i < 5; i++) {
  console.log(`Iteración for: ${i}`);
}

// Bucle While
let j = 0;
while (j < 5) {
  console.log(`Iteración while: ${j}`);
  j++;
}

// Bucle Do While
let k = 0;
do {
  console.log(`Iteración do while: ${k}`);
  k++;
} while (k < 10);

// Bucle For In
const colores = ["Rojo", "Verde", "Azul"]; // Array
for (let color in colores) { // Itera sobre los índices del array
  console.log(colores[color]); // Accede a los valores del array a través de los índices
}

// Bucle For Of
const coloresDos = ["Rojo", "Verde", "Azul"]; // Array
for (let color of coloresDos) { // Itera sobre los valores del array
  console.log(color); // Accede a los valores del array directamente
}

// Bucle For Each
const coloresTres = ["Rojo", "Verde", "Azul"]; // Array
coloresTres.forEach((color, index) => { // Itera sobre los valores del array
  console.log(`Color: ${color}, Índice: ${index}`); // Accede a los valores del array y a los índices
}); 

// Bucle For Each (con objetos)
const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30
};
Object.keys(persona).forEach((key) => {
  console.log(`${key}: ${persona[key]}`);
}); 
