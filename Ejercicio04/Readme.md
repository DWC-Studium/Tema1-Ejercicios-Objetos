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
