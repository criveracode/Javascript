/**
 * !Operadores¡
 *
 * Aritméticos, Asignación, Comparación, Lógicos
 *
 */

// Aritméticos
let a = 5;
let b = 2;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let exponente = a ** b;

console.log(suma); // 7
console.log(resta); // 3
console.log(multiplicacion); // 10
console.log(division); // 2.5
console.log(modulo); // 1
console.log(exponente); // 25

// Asignación
let x = 10;
let y = 5;

x += y; // x = x + y
console.log(x); // 15

x -= y; // x = x - y
console.log(x); // 10

x *= y; // x = x * y
console.log(x); // 50

x /= y; // x = x / y
console.log(x); // 10

x %= y; // x = x % y
console.log(x); // 0

// Comparación
let c = 5;
let d = "5";

console.log(c == d); // true (compara valor)
console.log(c === d); // false (compara valor y tipo de dato)
console.log(c != d); // false (compara valor)
console.log(c !== d); // true (compara valor y tipo de dato)
console.log(c < d); // false (compara valor)
console.log(c > d); // false (compara valor)
console.log(c <= d); // true (compara valor)
console.log(c >= d); // true (compara valor)

// Lógicos
let e = true;
let f = false;

console.log(e && f); // false
console.log(e || f); // true
console.log(!e); // false
console.log(!f); // true

/**
 * ! Tabla de verdad del operador lógico AND (&&) ¡
 *
 * A     B     A && B
 * -----------------
 * true  true  true
 * true  false false
 * false true  false
 * false false false
 */

/**
 * ! Tabla de verdad del operador lógico OR (||) ¡
 *
 * A     B     A || B
 * -----------------
 * true  true  true
 * true  false true
 * false true  true
 * false false false
 */

/**
 * ! Tabla de verdad del operador lógico NOT (!) ¡
 *
 * A     !A
 * --------
 * true  false
 * false true
 */
