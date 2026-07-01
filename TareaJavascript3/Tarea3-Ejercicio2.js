/**
 * Tabla de multiplicar de un número. 
Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10 utilizando un ciclo for
 * 
 */

let tabla = prompt("Ingresá el número de la tabla a calcular 👨‍💻");
for (let index = 0; index < 10; index++) {
    console.log(`${tabla} x ${index+1} = ${tabla*(index+1)}`);
    
}