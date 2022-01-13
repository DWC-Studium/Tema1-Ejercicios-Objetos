let juan = { nombre: "Juan", edad: 25 };
let pepe = { nombre: "Pepe", edad: 30 };
let maria = { nombre: "María", edad: 29 };
let array = [juan, pepe, maria];

function getEdadMedia(usuarios) {
    return usuarios.reduce((prev, usuario) => prev + usuario.edad, 0) / usuarios.length;
}
alert(getEdadMedia(array)); // (25 + 30 + 29) / 3 = 28