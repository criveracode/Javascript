/**
 * !Objetos¡
 * 
 * Los objetos son una colección de pares clave-valor. 
 * Cada clave es una cadena (o un símbolo), y cada valor 
 * puede ser cualquier tipo de dato, incluyendo otros objetos.
 */

// Objeto Literal
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
};

// Objeto Constructor
let personaDos = new Object();
personaDos.nombre = "Juan";
personaDos.edad = 30;
personaDos.ciudad = "Madrid";

// Propiedades de objetos
console.log(persona.nombre);
console.log(persona["edad"]);

// Modificar las propiedades
persona.edad = 31;
console.log(persona); // Imprime { nombre: "Juan", edad: 31, ciudad: "Madrid" }

// Agregar nuevas propiedades
persona.profesion = "programador";
console.log(persona); // Imprime { nombre: "Juan", edad: 31, ciudad: "Madrid", profesion: "programador" }

// Eliminar propiedades
delete persona.ciudad;
console.log(persona); // Imprime { nombre: "Juan", edad: 31, profesion: "programador" }

// Métodos de objetos
let personaTres = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log("¡Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años!");
    },
};

personaTres.saludar(); // Imprime "¡Hola, mi nombre es Juan, tengo 30 años!"