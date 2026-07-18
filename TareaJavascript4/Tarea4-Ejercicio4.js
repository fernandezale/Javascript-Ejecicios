/*
4. Gestor de "Horas de Estudio" (Ciclo for)
Contexto: Los estudiantes suelen organizar su semana para cumplir con el curso Fullstack.

Consigna: Crea un programa donde el usuario ingrese cuántas horas dedicará a estudiar cada día de la semana (7 días). El programa debe usar un ciclo for para solicitar el dato 7 veces, ir sumando las horas en un acumulador y, al final, mostrar el promedio de horas diarias dedicadas al estudio.

Desafío lógico: ¿Qué pasa si el usuario ingresa un valor negativo? El programa debe ignorar ese dato y pedir que ingrese un número mayor a 0.
*/
let dia = 0;
let horasTotales = 0;
while (dia < 7) {
    let horasIngresadas = Number(prompt("Ingrese las horas estudiadas🤓 del dia:"));
    if(horasIngresadas < 0){
        alert("Por favor ingrese un numero positivo");
    }
    else{
        horasTotales = horasTotales + horasIngresadas;
        dia++;
    }
    
}
console.log(`Promedio de horas estudiadas por dia en una semana: ${horasTotales/7}`);