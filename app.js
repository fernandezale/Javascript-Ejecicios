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