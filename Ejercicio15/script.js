let mensajes = [
    { texto: "Hola", de: "Juan" },
    { texto: "¿Qué tal?", de: "Juan" },
    { texto: "Nos vemos pronto", de: "Alicia" }
];
let leerMensajes = new WeakSet();
// dos mensajes han sido leídos
mensajesLeidos.add(mensajes[0]);
mensajesLeidos.add(mensajes[1]);
// mensajesLeidos tiene 2 elementos
// ...vamos a leer el primer mensaje de nuevo
mensajesLeidos.add(mensajes[0]);
// mensajesLeidos aún tiene 2 elementos únicos
// respuesta: se leyó el mensaje[0]?
alert("Mensaje 0 leído: " + mensajesLeidos.has(mensajes[0])); // true
mensajes.shift();
// ahora mensajesLeidos tiene 1 elemento (técnicamente la memoria se puede limpiar más tarde)