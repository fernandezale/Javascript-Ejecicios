
/*
Ejercicio 3: Calculadora básica
Solicita al usuario dos números decimales.  
Convierte las entradas. 
Pide al usuario que ingrese el tipo de operación: suma, resta, multiplicación o división.  
Usa condicionales para ejecutar la operación correspondiente.  
Muestra el resultado en la consola.  
Si la operación no es válida, informa al usuario con un mensaje en la consola.

*/
let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));
let opcion = prompt("Ingrese la operacion deseada:\n 1.Suma \n 2.Resta \n 3.multiplicacion \n 4.division");
if(opcion == 1)
{
 console.log(`Suma: ${num1 + num2}`);
}
else if(opcion == 2)
{
 console.log(`Resta: ${num1 - num2}`);
}
else if(opcion == 3)
{
 console.log(`Multiplicacion: ${num1 * num2}`);
}
else if(opcion == 4)
{
 console.log(`Division: ${num1 / num2}`);
}
else{
  console.log("Operacion NO VALIDA...");
}