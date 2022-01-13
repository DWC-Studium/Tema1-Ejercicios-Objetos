function Acumulador(valorComienzo) {
    this.valor = valorComienzo;

    this.leer = function() {
        this.valor += +prompt('¿Cuánto hay que añadir?', 0);
    };

}
let acumulador = new Acumulador(1);
acumulador.leer();
acumulador.leer();
alert(acumulador.valor);