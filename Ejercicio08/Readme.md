<h1>Ejercicio 8</h1>
<p>Crea una función constructor Acumulador(valorComienzo).</p>
<p>El objeto que crea:</p>
<ul>
<li>Almacena el “valor actual” en la propiedad valor. El valor inicial se establece por el argumento del constructor valorComienzo.</li>
<li>El método leer() debería usar prompt para leer un nuevo número y añadirlo a valor.</li>
</ul>
<p>En otras palabras, la propiedad valor es la suma de de todos los valores que ha introducido el usuario con el valor inicial valorComienzo.</p>
<p>Aquí hay una demostración del código:</p>
    let acumulador = new Acumulador(1); // el valor inicial es 1
    acumulador.read(); // añade el valor que introduzca el usuario
    acumulador.read(); // añade el valor que introduzca el usuario
    alert(acumulador.valor); // muestra la suma de estos valores
