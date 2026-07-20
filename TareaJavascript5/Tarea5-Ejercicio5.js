/*
Ejercicio 5: Gestión de Objetos (El "Inventario Simple")
Crea un array llamado inventario que contenga 3 objetos. Cada objeto debe representar un producto con las propiedades: nombre (string) y precio (number).

Crea una función llamada listarPrecios que recorra el array y retorne un nuevo array solo con los precios usando .map().

Tip: Accede a la propiedad mediante producto.precio.
*/


const inventario = [
    {nombre: "pinza", precio: 100},
    {nombre: "espatula", precio: 80},
    {nombre: "destornillador", precio: 60}
];

const listarPrecios = (productos) =>
{
    const precios = productos.map((prod) =>
    {
        return prod.precio;
    });
    return precios;
};

console.log(listarPrecios(inventario));