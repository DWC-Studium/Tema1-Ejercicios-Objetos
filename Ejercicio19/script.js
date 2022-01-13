let usuario = {
    nombre: "Juan",
    edad: 30
};
let { nombre, edad: age, esAdmin = false } = usuario;
alert(nombre); // John
alert(age); // 30
alert(esAdmin); // false