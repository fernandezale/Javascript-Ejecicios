let intentos = 0;
while (intentos < 3) {
    let ingreso = Number(prompt("Ingrese el Token de Seguridad⚠️: "));
    if(ingreso != 5555)
    {
        intentos++;
        console.log(`Token invalido le quedan ${3-intentos} intentos`);
    }
    else
        {
            console.log("Token ingresado correctamente👌")
            break;
        }

    if(intentos === 3)
    {
        console.log("❌No hay mas intentos. Acceso denegado!");
    }
}