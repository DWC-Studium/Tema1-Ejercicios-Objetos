let juan = { nombre: "Juan", apellido: "García", id: 1 };
let pepe = { nombre: "Pepe", apellido: "Pérez", id: 2 };
let maria = { nombre: "María", apellido: "López", id: 3 };
let usuarios = [juan, pepe, maria];
let usuariosMapeados = usuarios.map(usuario => ({
    nombreCompleto: `${usuario.nombre} ${usuario.apellido}`,
    id: usuario.id
}));
/*
usuariosMapeados = [
  { nombreCompleto: "Juan García", id: 1 },
  { nombreCompleto: "Pepe Pérez", id: 2 },
  { nombreCompleto: "María López", id: 3 }
]
*/
alert(usuariosMapeados[0].id) // 1
alert(usuariosMapeados[0].nombreCompleto) // Juan García