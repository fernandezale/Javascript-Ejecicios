/*
5. Simulador de "Carrito de Descuentos Progresivos" (Ciclo while)
Contexto: Muchas tiendas online aplican descuentos que dependen de la cantidad de productos en el carrito.

Consigna: El usuario comienza con un producto. El programa debe preguntar el precio de cada producto y sumarlo. El ciclo while continuará pidiendo productos mientras el usuario escriba "si" para agregar otro. Si el total supera los $5000, el sistema debe imprimir: "¡Has obtenido un 10% de descuento!".

Desafío lógico: Debes llevar un control del total acumulado en cada iteración y aplicar el descuento solo una vez al final, antes de imprimir el resultado.
*/
let total = 0;
let eleccion; 
let continuar = true;1
while (continuar == true) {
    precioIngresado = Number(prompt("Ingrese el precio del producto: "));
    total = total + precioIngresado;

    console.log(`Total actual: ${total}`);
    
    eleccion = prompt("Desea agregar otro producto? si/no :");
    if(eleccion == "no")
    {
        continuar = false;
    }
    
}

if(total > 5000)
    {
        console.log(`¡Has obtenido un 10% de descuento! El total es: ${total - total/10}`)
    }