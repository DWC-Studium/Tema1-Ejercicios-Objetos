<h1>Ejercicio 2</h1>
<p>Escribe la función isEmpty(obj) que devuelve true si el objeto no tiene propiedades, y false en caso contrario.</p>
<p>Debería funcionar así:</p>

    let horario = {};
    alert( isEmpty(horario) ); // true
    horario["8:30"] = "levantarse";
    alert( isEmpty(horario) ); // false
