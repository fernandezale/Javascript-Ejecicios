let total = 0;
let eleccion; 
let continuar = true;
while (continuar === true) {
    let precioIngresado = Number(prompt("Ingrese el precio del producto: "));
    if(precioIngresado > 0)
    {
        total = total + precioIngresado;
        console.log(`Total actual: ${total}`);
    }
    else
    {
        alert("Ingrese un precio valido.");
    }

    
    eleccion = prompt("Desea agregar otro producto? si/no :");
    if(eleccion === "no")
    {
        continuar = false;
    }
    
}

if(total > 5000)
    {
        console.log(`¡Has obtenido un 10% de descuento! El total es: ${total - total/10}`)
    }
else
    {
        console.log(`Total final sin descuento es: ${total}`);
    }