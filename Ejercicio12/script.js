let juan = { nombre: "Juan", edad: 25 };
let pepe = { nombre: "Pepe", edad: 30 };
let maria = { nombre: "María", edad: 28 };
let array = [pepe, juan, maria];

function ordenarPorEdad(arr) {
    arr.sort((a, b) => a.edad > b.edad ? 1 : -1);
}
ordenarPorEdad(array);

alert(array[0].nombre); // Juan
alert(array[1].nombre); // María
alert(array[2].nombre); // Pepe