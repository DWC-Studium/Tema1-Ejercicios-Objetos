<h1>Ejercicio 1</h1>
<p>Escribe el código, una línea por cada acción:</p>
<ol>
    <li>Crea un objeto vacío usuario.</li>
    <li>Añade la propiedad nombre con el valor Juan.</li>
    <li>Añade la propiedad apellido con el valor Pérez.</li>
    <li>Cambia el valor nombre a Pepe.</li>
    <li>Elimina la propiedad nombre del objeto.</li>
</ol>

<h1>Ejercicio 2</h1>
<p>Escribe la función isEmpty(obj) que devuelve true si el objeto no tiene propiedades, y false en caso contrario.</p>
<p>Debería funcionar así:</p>

    let horario = {};
    alert( isEmpty(horario) ); // true
    horario["8:30"] = "levantarse";
    alert( isEmpty(horario) ); // false

<h1>Ejercicio 3</h1>
<p>Tenemos un objeto que almacena los salarios de nuestro equipo:</p>

    let salarios = {
      Juan: 100,
      Ana: 160,
      Pepe: 130
    }

<p>Escribe el código para sumar todos los salarios y almacenarlo en la variable sum. Debería dar 390 en el ejemplo anterior.</p>
<p>Si salarios está vacío, entonces el resultado debe ser 0.</p>

<h1>Ejercicio 4</h1>
<p>Crea una función multiplicarNumericas(obj) que multiplique todas las propiedades numéricas de obj por 2.</p>
<p>Por ejemplo:</p>

    // antes de la llamada
    let menu = {
      width: 200,
      height: 300,
      title: "Mi menú"
    };
    multiplicarNumericas(menu);
    // despues de la llamada
    menu = {
      width: 400,
      height: 600,
      title: "Mi menú"
    };

<p>Note que multiplicarNumericas no necesita devolver nada. Debería modificar el objeto directamente.</p>
<p>Nota: Usar typeof para comprobar que es un número.</p>

<h1>Ejercicio 5</h1>
<p>Crea un objeto calculadora con tres métodos:</p>
<ul>
    <li>leer() pide dos valores y los guarda como propiedades de un objeto.</li>
    <li>sumar() devuelve la suma de los valores guardados.</li>
    <li>multiplicar() multiplica los valores guardados y devuelve el resultado.</li>
</ul>

    let calculadora = {
      // ... tu código ...
    };
    calculadora.leer();
    alert( calculadora.sumar() );
    alert( calculadora.multiplicar() );

<h1>Ejercicio 6</h1>
<p>Modificar el siguiente objeto escalera que te permita subir y bajar:</p>

        let escalera = {
          escalon: 0,
          subir() {
            // Subir un peldaño
          },
          bajar() {
            // Bajar un peldaño
          },
          porDondeVoy: function() { 
            // Mostrar por pantalla por dónde vamos.
          }
        };

<p>Ahora, si necesitamos hacer diferentes llamadas en secuencia, podemos hacer algo así:</p>

        escalera.subir();
        escalera.subir();
        escalera.bajar();
        escalera.mostrarEscalon(); // 1

<p>Modifica el código de subir, bajar y porDondeVoy para hacer las llamadas encadenables, como esto:</p>
        escalera.subir().subir().bajar().porDondeVoy(); // 1
<p>Esta aproximación se usa ampliamente en las librerías de JavaScript.</p>

<h1>Ejercicio 7</h1>
<p>Crear una función Calculadora con constructor que crea objetos con 3 métodos:</p>
<ul>
    <li>leer() pregunta por dos valores usando prompt y los recuerda en propiedades del objeto.</li>
    <li>sumar() devuelve la suma de esas propiedades.</li>
    <li>multiplicar() devuelve la multiplicación de esas propiedades.</li>
</ul>
<p>Por ejemplo:</p>

        let calculadora = new Calculadora();
        calculadora.leer();
        alert( "Suma=" + calculadora.sumar() );
        alert( "Multiplicación=" + calculadora.multiplicar() );

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

<h1>Ejercicio 9</h1>
<p>Crear una función con constructor Calculadora que cree objetos calculadora “extensibles”.</p>
<p>La tarea consta de dos partes.</p>
<p>Primero, implemente el método calcular(str) que toma un string como "1 + 2" en el formato “NUMERO operador NUMERO” (separado por espacios) y devuelve el resultado. Debería entender + y -.</p> 
<p>Ejemplo de uso:</p>

    let calc = new Calculadora;
    alert( calc.calcular("3 + 7") ); // 10

<p>Añade el método addMetodo(nombre, funcion) que enseñe a la calculadora a realizar una nueva operación. Recibe el operador nombre y la función de dos argumentos funcion(a,b) que la implementa.</p>
<p>Por ejemplo, vamos a añadir la multiplicación *, división / y potencia **:</p>

    let otraCalc = new Calculadora;
    otraCalc.addMethod("*", (a, b) => a * b);
    otraCalc.addMethod("/", (a, b) => a / b);
    otraCalc.addMethod("**", (a, b) => a ** b);
    let resultado = otraCalc.calcular("2 ** 3");
    alert( result ); // 8

<p>No usar paréntesis o expresiones complejas en esta tarea.</p>
<p>Los números y el operador están delimitados por exactamente un espacio.</p>

<h1>Ejercicio 10</h1>
<p>Tienes un array de objetos de usuario, cada uno tiene un usuario.nombre. Escribe el código que lo convierte en un array de nombres.</p>
<p>Por ejemplo:</p>

    let juan = { nombre: "Juan", edad: 25 };
    let pepe = { nombre: "Pepe", edad: 30 };
    let maria = { nombre: "María", edad: 28 };
    let usuarios = [ juan, pepe, maria ];
    let nombres = /* ... tu código */
    alert( nombres ); // Juan, Pepe, María

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

<h1>Ejercicio 12</h1>
<p>Escribe la función ordenarPorEdad(usuarios) que recibe un array de objetos con la propiedad edad y los ordena por edad.</p>
<p>Por ejemplo:</p>

    let juan = { nombre: "Juan", edad: 25 };
    let pepe = { nombre: "Pepe", edad: 30 };
    let maria = { nombre: "María", edad: 28 };
    let array = [ pepe, juan, maria ];
    ordenarPorEdad(array);
    // ahora: [juan, maria, pepe]
    alert(array[0].nombre); // Juan
    alert(array[1].nombre); // María
    alert(array[2].nombre); // Pepe

<h1>Ejercicio 13</h1>
<p>Escribir la función getEdadMedia(usuarios) que recibe un array de objetos con propiedad edad y devuelve la edad media.</p>
<p>La fórmula de la media es (edad1 + edad2 + ... + edadN) / N.</p>
<p>Por ejemplo:</p>

    let juan = { nombre: "Juan", edad: 25 };
    let pepe = { nombre: "Pepe", edad: 30 };
    let maria = { nombre: "María", edad: 29 };
    let array = [ juan, pepe, maria ];
    alert( getEdadMedia(array) ); // (25 + 30 + 29) / 3 = 28

<h1>Ejercicio 14</h1>
<p>Queremos obtener un array de map.keys() y continuar trabajando con él (aparte del propio mapa).</p>
<p>Pero hay un problema:</p>

    let map = new Map();
    map.set("nombre", "Juan");
    let keys = map.keys();
    // Error: keys.push is not a function
    keys.push("mas");

<p>¿Por qué? ¿Cómo podemos arreglar el código para hacer funcionar a keys.push?</p>

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

<h1>Ejercicio 16</h1>
<p>Hay un array de mensajes como en la tarea anterior. La situación es similar.</p>

    let mensajes = [
        {texto: "Hola", de: "Juan"},
        {texto: "¿Qué tal?", de: "Juan"},
        {texto: "Nos vemos pronto", de: "Alicia"}
    ];

<p>La cuestión ahora es: ¿Qué estructura de datos sugerirías para almacenar la información: ¿cuándo se leyó el mensaje?</p>
<p>En la tarea anterior sólo necesitábamos almacenar el hecho de “sí/no”. Ahora necesitamos almacenar la fecha y, una vez más, debería desaparecer si el mensaje también lo hace.</p>

<h1>Ejercicio 17</h1>
<p>Hay un objeto salarios con un número arbitrario de salarios.</p>
<p>Escribe la función sumarSalarios(salarios) que devuelve la suma de todos los salarios usando Object.values y el bucle for..of.</p>
<p>Si salarios está vacío, entonces el resultado debe ser 0.</p>
<p>Por ejemplo:</p>

    let salarios = {
      "Juan": 100,
      "Pepe": 300,
      "María": 250
    };
    alert( sumarSalarios(salarios) ); // 650

<h1>Ejercicio 18</h1>
<p>Escribir una función contar(obj) que devuelve el número de propiedades en un objeto:</p>

    let usuario = {
      nombre: 'Juan',
      edad: 30
    };
    alert( contar(usuario) ); // 2

<p>Intenta hacer el código tan corto como sea posible.</p>

<h1>Ejercicio 19</h1>
<p>Tenemos un objeto:</p>

    let usuario = {
      nombre: "Juan",
      edad: 30
    };

<p>Escribe las asignaciones de desestructuración que lean las propiedades:</p>
<ul>
    <li>nombre en la variable nombre.</li>
    <li>edad en la variable age.</li>
    <li>esAdmin en la variable esAdmin (false si no está)</li>
</ul>
<p>Los valores después de la asignación sería:</p>

    let usuario = { nombre: "Juan", edad: 30 };
    // tu código en el lado izquierdo:
    // ... = usuario
    alert( nombre ); // Juan
    alert( age ); // 30
    alert( esAdmin ); // false

<h1>Ejercicio 20</h1>
<p>Hay un objeto salarios:</p>

    let salarios = {
      "Juan": 100,
      "Pepe": 300,
      "María": 250
    };

<p>Crear la función topSalario(salarios) que devuelva el nombre de la persona que más cobra.</p>
<p>Si salarios está vacío, debería devolver null.</p>
<p>Si hay más de una persona que cobra el salario máximo, devuelve cualquiera de ellas.</p>
<p>Nota. Usa Object.entries y desestructura para iterar sobre los pares clave/valor.</p>

<h1>Ejercicio 21</h1>
<p>Convertir usuario en JSON y luego leerlo de vuelta en otra variable.</p>

    let usuario = {
      nombre: "Pepe Pérez",
      edad: 35
    };
