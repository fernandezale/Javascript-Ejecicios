let dia = 0;
let horasTotales = 0;
while (dia < 7) {
    let horasIngresadas = Number(prompt("Ingrese las horas estudiadas🤓 del dia:"));
    if(horasIngresadas < 0){
        console.log("Por favor ingrese un numero positivo");
    }
    else{
        horasTotales = horasTotales + horasIngresadas;
        dia++;
    }
    
}
console.log(`Promedio de horas estudiadas por dia en una semana: ${horasTotales/7}`);