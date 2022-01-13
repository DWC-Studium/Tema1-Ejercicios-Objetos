let mensajes = [
    { texto: "Hola", de: "Juan" },
    { texto: "¿Qué tal?", de: "Juan" },
    { texto: "Nos vemos pronto", de: "Alicia" }
];
let mapaLeidos = new WeakMap();
mapaLeidos.set(mensajes[0], new Date(2017, 1, 1));