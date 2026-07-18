/*
3. El Simulador de "Token de Seguridad" (Ciclo while)
Contexto: Hoy en día, los sistemas de seguridad nos piden ingresar un código que caduca en segundos o nos limita la cantidad de intentos.

Consigna: Crea un programa que simule un sistema de autenticación de 2 pasos. El sistema tiene un código fijo (ej: 5555). El usuario tiene un máximo de 3 intentos para ingresarlo correctamente.

Desafío lógico: Usa un contador que aumente con cada intento fallido y un while que verifique dos condiciones: que el código sea incorrecto y que los intentos sean menores a 3.
*/
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

