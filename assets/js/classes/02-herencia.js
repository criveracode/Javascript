// Herencia de clases
class ClaseBase {
    constructor() {
        this.propiedadBase = 'Soy de la clase base';
    }

    metodoBase() {
        console.log('Método de la clase base');
    }
}
class ClaseDerivada extends ClaseBase {
    constructor() {
        super(); // Llama al constructor de la clase base
        this.propiedadDerivada = 'Soy de la clase derivada';
    }

    metodoDerivado() {
        console.log('Método de la clase derivada');
    }
} ﬂƒ
// Crear una instancia de la clase derivada
const instanciaDerivada = new ClaseDerivada();
// Llamar a métodos y acceder a propiedades
instanciaDerivada.metodoBase(); // Método de la clase base
instanciaDerivada.metodoDerivado(); // Método de la clase derivada
console.log(instanciaDerivada.propiedadBase); // Soy de la clase base
console.log(instanciaDerivada.propiedadDerivada); // Soy de la clase derivada