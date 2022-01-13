let calculadora = {
    leer() {
        this.a = +prompt('Número 1', 0);
        this.b = +prompt('Número 2', 0);
    },
    sumar() {
        return this.a + this.b;
    },
    multiplicar() {
        return this.a * this.b;
    }
};

calculadora.leer();
alert("La suma de los 2 números es " + calculadora.sumar());
alert("La multiplicación de los 2 números es " + calculadora.multiplicar());