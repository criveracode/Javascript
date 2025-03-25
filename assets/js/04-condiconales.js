/**
 * !Condicionales¡
 * 
 * Las condicionales son estructuras de control que nos 
 * permiten tomar decisiones en nuestro código.
 * If, else, else if, switch.
 */


// If
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// Else
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Else if
let calificacion = 7;
if (calificacion >= 9) {
  console.log("Aprobado");
} else if (calificacion >= 6) {
  console.log("Regular");
} else {
  console.log("Reprobado");
}

// Switch
let dia = 1;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia no valido");
    break;
}

// Operador ternario
let numero = 10;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
console.log(resultado);

// Operador ternario anidado
let numero2 = 10;
let resultado2 =
  numero % 2 === 0 ? "Par" : numero % 3 === 0 ? "Multiplo de 3" : "Impar";
console.log(resultado2);

// Operador ternario con if
let numero3 = 10;
let resultado3 =
  numero % 2 === 0 ? "Par" : numero % 3 === 0 ? "Multiplo de 3" : "Impar";
console.log(resultado3);

// Operador ternario con if else
let numero4 = 10;
let resultado4 =
  numero % 2 === 0 ? "Par" : numero % 3 === 0 ? "Multiplo de 3" : "Impar";
console.log(resultado4);
