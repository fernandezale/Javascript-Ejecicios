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