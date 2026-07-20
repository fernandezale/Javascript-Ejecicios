/**
 * Ejercicio 3: El Buscador de Códigos (find)
Tienes un array de strings que representan códigos de productos. Crea una función llamada buscarProducto que reciba el array y un código específico. La función debe usar .find() para retornar el código si existe, o "No encontrado" si no está.

Array inicial: ["A10", "B20", "C30", "D40"]
 */
const listaProducto = ["A10", "B20", "C30", "D40"];
const buscarProducto = (listaProducto,CodigoBuscado) =>
{
    const productoEncontrado = listaProducto.find((prod) =>
    {return prod === CodigoBuscado});
    if(productoEncontrado)
    {
        return productoEncontrado;
    }
    else
        {
            return "No Encontrado";
        }
};

console.log(buscarProducto(listaProducto, "C30")); // "SI"
console.log(buscarProducto(listaProducto, "Z99")); // "NO"