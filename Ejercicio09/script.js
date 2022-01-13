function Calculadora() {
    this.metodos = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calcular = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.metodos[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.metodos[op](a, b);
    }
    this.addMethod = function(nombre, func) {
        this.metodos[nombre] = func;
    };
}