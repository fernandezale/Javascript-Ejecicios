/*
Se necesita un script que solicite al usuario escribir una frase o texto y luego ingresar una palabra que quiera buscar. En cualquier caso (sea que encuentre la palabra o no) el programa debe devolver un mensaje informando el resultado (Usar emojis también).

Usar los métodos aprendidos en la clase para encontrar la solución.
 */
let palabraABuscar = prompt("Ingrese la palabra a buscar🤓: ");
let palabraguardada = "auto";

palabraABuscar = palabraABuscar.toLowerCase();
palabraABuscar = palabraABuscar.trim();

if(palabraABuscar == palabraguardada)
{
  console.log(`La palabra fue encontrada😉👌: ${palabraABuscar}`);
}
else
{
  console.log("No se encontro la palabra😒...")
}

