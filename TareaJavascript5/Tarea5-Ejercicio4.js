/*
Ejercicio 4: El Acumulador Maestro (reduce)
Tienes un array de números que representan las ventas del día. Crea una función llamada calcularTotalVentas que use .reduce() para sumar todas las ventas y devolver el total.

Array inicial: [100, 250, 50, 300, 120]
*/

const ventas = [100, 250, 50, 300, 120];
const calcularTotalVentas = (ventas) =>
{
    const totalventas = ventas.reduce((acum, produc) => acum + produc,0,);
    return totalventas;
};

console.log(calcularTotalVentas(ventas));