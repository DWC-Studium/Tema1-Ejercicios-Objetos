function topSalario(salarios) {
    let max = 0;
    let maxNombre = null;
    for (const [nombre, salario] of Object.entries(salarios)) {
        if (max < salario) {
            max = salario;
            maxNombre = nombre;
        }
    }
    return maxNombre;
}