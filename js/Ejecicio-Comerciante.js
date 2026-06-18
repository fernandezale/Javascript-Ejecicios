/*
Un comerciante hace descuentos a sus clientes
de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra esta entre 100 y 300 dolares le descuenta un 5%
- Si la compra supera los 500 dolares le descuenta un 15%
 */

let compra = Number(prompt("Ingrese el valor de la compra: "));
if(compra < 100)
{
    console.log("No hay descuento :C ...");
}
else if(compra > 100 && compra < 300)
{
    compra = compra - compra*0.05;
    console.log(`Descuento del 5% aplicado! Valor final: ${compra}!`);

}
else if(compra > 500)
{
    compra = compra - compra*0.15;
    console.log(`Descuento del 15% aplicado! Valor final: ${compra}!`);
}