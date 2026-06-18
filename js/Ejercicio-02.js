/*
Ejercicio 2: Calcular promedio de notas
Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6).
 */

let nota1 = parseFloat(prompt("Ingrese la primer nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la tercer nota: "));

let promedio;

promedio = (nota1 + nota2 + nota3)/3;

console.log(`El promedio es: ${promedio}`);

if(promedio >= 6)
{
    console.log("APROBADO!");
}
else{
    console.log("Desaprobado!");
}