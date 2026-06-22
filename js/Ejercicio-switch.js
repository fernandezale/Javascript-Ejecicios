/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.

Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

let opcion = Number(prompt("Ingrese el menu deseado:\n 1.Carne🥩 \n 2.Pescado🐟 \n 3.Verdura🥬"));

switch(opcion)
{
    case 1:
        console.log("Te ofrecemos vino tinto para acompañar la carne");
        break;
    case 2:
        console.log("Te ofrecemos vino blanco para acompañar la carne");
        break;
    case 3:
        console.log("Te ofrecemos agua para acompañar la carne");
        break;
    default:
        console.log("Eleccion invalida. Por favor ingrese un numero del menu5.");
        break;    
}