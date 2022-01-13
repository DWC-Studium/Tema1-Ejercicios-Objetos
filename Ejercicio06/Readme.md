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
