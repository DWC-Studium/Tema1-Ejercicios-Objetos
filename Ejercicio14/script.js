//Esto es porque map.keys() devuelve un iterable, pero no un array.
//Podemos convertirlo en un array usando Array.from.
let map = new Map();
map.set("nombre", "Juan");
let keys = Array.from(map.keys());
keys.push("más");
alert(keys); // nombre, más