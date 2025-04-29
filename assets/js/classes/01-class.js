class NombreDeLaClase {
    // Constructor: se ejecuta al crear una instancia de la clase
    constructor(propiedad1, propiedad2) {
        this.propiedad1 = propiedad1; // Propiedad pública
        this.propiedad2 = propiedad2; // Propiedad pública
    }

    // Métodos públicos
    metodoPublico() {
        console.log('Este es un método público.');
    }

    // Métodos privados (usando #)
    #metodoPrivado() {
        console.log('Este es un método privado.');
    }

    // Método que utiliza el método privado
    usarMetodoPrivado() {
        this.#metodoPrivado();
    }

    // Métodos estáticos (no requieren una instancia para ser llamados)
    static metodoEstatico() {
        console.log('Este es un método estático.');
    }

    // Getters: para obtener el valor de una propiedad
    get obtenerPropiedad1() {
        return this._propiedad1;
    }

    // Setters: para modificar el valor de una propiedad
    set modificarPropiedad1(valor) {
        this._propiedad1 = valor;
    }
}

// Crear una instancia de la clase
const instancia = new NombreDeLaClase('valor1', 'valor2');

// Llamar a métodos y acceder a propiedades
instancia.metodoPublico();
instancia.usarMetodoPrivado();
console.log(instancia.propiedad1);
instancia.modificarPropiedad1 = 'nuevo valor';
console.log(instancia.obtenerPropiedad1);
// Llamar a un método privado (no se puede acceder directamente)

// Llamar a un método estático
NombreDeLaClase.metodoEstatico();



/**
 * Componentes principales:
 * 
 * 1) Constructor: Define las propiedades iniciales de la clase.
 * 2) Propiedades: Variables asociadas a la clase o instancia.
 * 3) Métodos públicos: Funciones accesibles desde fuera de la clase.
 * 4) Métodos privados: Funciones accesibles solo dentro de la clase (usando #).
 * 5) Métodos estáticos: Funciones que pertenecen a la clase, no a las instancias.
 * 6) Getters y Setters: Métodos para acceder y modificar propiedades de forma controlada.
 * 
 */