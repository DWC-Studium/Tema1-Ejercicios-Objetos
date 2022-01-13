<h1>Ejercicio 11</h1>
<p>Tienes un array de objetos usuario, cada uno tiene un nombre, apellido e id.</p>
<p>Escribe el código que crea otro array de él, de objetos con id y nombreCompleto, donde nombreCompleto se genera a partir de nombre y apellido.</p>
<p>Por ejemplo:</p>
    let juan = { nombre: "Juan", apellido: "García", id: 1 };
    let pepe = { nombre: "Pepe", apellido: "Pérez", id: 2 };
    let maria = { nombre: "María", apellido: "López", id: 3 };
    let usuarios = [ juan, pepe, maria ];
    let usuariosMapeados = /* ... tu código ... */
    /*
    usuariosMapeados = [
      { nombreCompleto: "Juan García", id: 1 },
      { nombreCompleto: "Pepe Pérez", id: 2 },
      { nombreCompleto: "María López", id: 3 }
    ]
    */
    alert( usuariosMapeados[0].id ) // 1
    alert( usuariosMapeados[0].nombreCompleto ) // Juan García
<p>Así que en realidad necesitar mapear un array de objetos en otros. Intenta usar => aquí. Hay un pequeño truco.</p>