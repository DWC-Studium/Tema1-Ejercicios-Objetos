/*function sumarSalarios(salarios) {
    let sum = 0;
    for (let salario of Object.values(salarios)) {
        sum += salario;
    }
    return sum; // 650
}*/
function sumarSalarios(salarios) {
    return Object.values(salarios).reduce((a, b) => a + b, 0) // 650
}
let salarios = {
    "Juan": 100,
    "Pepe": 300,
    "María": 250
};
alert(sumarSalarios(salarios)); // 650