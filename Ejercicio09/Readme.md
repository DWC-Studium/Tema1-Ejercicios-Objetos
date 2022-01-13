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