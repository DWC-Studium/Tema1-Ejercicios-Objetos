<h1>Ejercicio 15</h1>
<p>Hay un array de mensajes:</p>
    let mensajes = [
        {texto: "Hola", de: "Juan"},
        {texto: "¿Qué tal?", de: "Juan"},
        {texto: "Nos vemos pronto", de: "Alicia"}
    ];
<p>Tu código puede acceder a él, pero los mensajes están gestionados por otra persona. Se añaden mensajes nuevos, y viejos se eliminan regularmente, y no sabes exactamente cuándo ocurre.</p>
<p>¿Ahora, qué estructura de datos usarías para almacenar información de que el mensaje “ha sido leído”? La estructura debe ser adecuada para dar una respuesta a la pregunta “¿se ha leído ya?” para cualquier objeto mensaje dado.</p>
<p>Nota. Cuando un mensaje se borra de mensajes, debe desaparecer de tu estructura también.</p>
<p>Nota 2. No deberíamos modificar los objetos de los mensajes directamente. Si están gestionados por alguien aparte de nosotros mismo, añadir propiedades extra puede tener consecuencias nefastas.</p>
