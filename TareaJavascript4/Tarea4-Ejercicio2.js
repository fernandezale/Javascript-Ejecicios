/*
2. El "Triángulo de Asteriscos" (Ciclo for anidado)
Consigna: Utiliza dos bucles for (uno dentro de otro) para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas:

Desafío lógico: El bucle externo controla las filas y el interno controla cuántos asteriscos imprimir en cada fila. 

Objetivo: Dominar la complejidad de los bucles anidados, fundamental para entender estructuras de datos complejas en el futuro. 
*/

let stringSalida = []
for (let filas = 0; filas < 5; filas++) {
    for (let asteriscos = 0; asteriscos < filas+1; asteriscos++) {
        stringSalida.push("*");
    }
    console.log(stringSalida);
    stringSalida = [];
}