let juan = { nombre: "Juan", edad: 25 };
let pepe = { nombre: "Pepe", edad: 30 };
let maria = { nombre: "María", edad: 28 };
let usuarios = [juan, pepe, maria];
let nombres = usuarios.map(usuario => usuario.nombre);
alert(nombres); // Juan, Pepe, María