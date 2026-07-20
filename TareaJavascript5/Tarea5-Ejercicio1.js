/*
Ejercicio 1: El Transformador de Datos (map)
Tienes una lista de temperaturas en grados Celsius. Crea una función llamada convertirAFahrenheit que reciba este array y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.

Fórmula: (celsius * 9/5) + 32

Array inicial: [0, 10, 20, 30, 40]
*/

let tempEnCelcius = [0, 10, 20, 30, 40];

const convertirAFahrenheit = (temperaturas) => 
    temperaturas.map((temp) => (temp * 9/5) + 32);

const tempEnFahrenheit = convertirAFahrenheit(tempEnCelcius);