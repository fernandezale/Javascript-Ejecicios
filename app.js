let ingreso = 0;
let ahorro = 0;

while (ahorro < 1000) {
    ingreso = Number(prompt("Ingresa el nuevo monto🤩: "));
    ahorro = ahorro + ingreso;
}
console.log(`Objetivo alcanzado!!! $ ${ahorro}!!!`);