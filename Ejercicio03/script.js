let salarios = {
    Juan: 100,
    Ana: 160,
    Pepe: 130
}

let sum = 0;
for (let clave in salarios) {
    sum += salarios[clave];
}

alert(sum); // 390