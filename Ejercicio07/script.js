function Calculadora() {
    this.leer = function() {
        this.a = +prompt('Número 1', 0);
        this.b = +prompt('Número 2', 0);
    };
    this.sumar = function() {
        return this.a + this.b;
    };
    this.multiplicar = function() {
        return this.a * this.b;
    };
}

let calculadora = new Calculadora();
calculadora.leer();
alert("Suma= " + calculadora.sumar());
alert("Multiplicación= " + calculadora.multiplicar());