/*
Ejercicio 1: El Transformador de Datos (map)
Tienes una lista de temperaturas en grados Celsius. Crea una función llamada convertirAFahrenheit que reciba este array y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.

Fórmula: (celsius * 9/5) + 32

Array inicial: [0, 10, 20, 30, 40]
*/

let tempEnCelcius = [0, 10, 20, 30, 40];

const convertirAFahrenheit = (temperaturas) => 
{
    const nuevasTemps = temperaturas.map((temp) =>
    {
        return (temp * 9/5) + 32;
    });
    return nuevasTemps;
}

const tempEnFahrenheit = convertirAFahrenheit(tempEnCelcius);