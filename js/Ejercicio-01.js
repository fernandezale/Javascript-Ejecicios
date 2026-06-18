//  Ejercicio 1: Comparar números enteros
// Solicita al usuario dos números enteros.  
// Convierte las entradas a números enteros.  
// Determina cuál de los dos números es mayor, o si son iguales.  
// Muestra el resultado en la consola.

let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));

if(num1 > num2)
{
    
    console.log("El primer numero es el mayor!!!");
}
if(num1 < num2)
{
    console.log("El segundo numero es el mayor!!!");
}