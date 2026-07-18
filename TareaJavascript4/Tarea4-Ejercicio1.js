/*
1. El Acumulador de "Dinero con Tope" (Ciclo while)
Consigna: Imagina que quieres ahorrar para un objetivo de $1000. El programa debe pedir al usuario que ingrese montos de ahorro diarios (en un prompt o variable) y los vaya sumando. El ciclo while debe ejecutarse mientras la suma total sea menor a $1000. Al llegar o superar el objetivo, imprime "¡Objetivo alcanzado!".

Desafío lógico: ¿Qué pasa si el usuario ingresa un número negativo? Añade una validación para que no sume montos inválidos.

Objetivo: Manejo de acumuladores con condiciones de salida basadas en metas.
*/

let ingreso = 0;
let ahorro = 0;

while (ahorro < 1000) {
    ingreso = Number(prompt("Ingresa el nuevo monto🤩: "));
    if(ingreso > 0)
    {
        ahorro = ahorro + ingreso;
    }
    else
    {
        alert("Ingrese un numero positivo. No se permiten negativos!");
    }
}
console.log(`Objetivo alcanzado!!! $ ${ahorro}!!!`);