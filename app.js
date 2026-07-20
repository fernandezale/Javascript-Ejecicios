const listaProducto1 = ["A10", "B20", "C30", "D40"];
const buscarProducto = (listadeProductos,CodigoBuscado) =>
{
    const productoEncontrado = listadeProductos.find((prod) => prod === CodigoBuscado);

    return productoEncontrado || "No Encontrado";
};

console.log(buscarProducto(listaProducto1, "C30")); // "SI"
console.log(buscarProducto(listaProducto1, "Z99")); // "NO"