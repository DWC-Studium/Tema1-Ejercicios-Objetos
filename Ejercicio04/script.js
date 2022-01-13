let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplicarNumericas(menu);

function multiplicarNumericas(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
            console.log(obj[key]);
        }
    }
}