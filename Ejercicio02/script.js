function isEmpty(obj) {
    for (let clave in obj) {
        // si el bucle empieza, es que hay una propiedad
        return false;
    }
    return true;
}