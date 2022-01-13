<h1>Ejercicio 14</h1>
<p>Queremos obtener un array de map.keys() y continuar trabajando con él (aparte del propio mapa).</p>
<p>Pero hay un problema:</p>
    let map = new Map();
    map.set("nombre", "Juan");
    let keys = map.keys();
    // Error: keys.push is not a function
    keys.push("mas");
<p>¿Por qué? ¿Cómo podemos arreglar el código para hacer funcionar a keys.push?</p>
