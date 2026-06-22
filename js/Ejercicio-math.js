/* 
Crear un script que simule el juego de Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar. Devolver un mensaje si ganó o perdió.
*/

let numeroAleatorio = (Math.ceil(Math.random() * 10));
let numeroElegido = prompt("Adivine el numero!!! \nIngrese un numero del 1-10 🤓: ");
console.log(`El numero aleatorio es: ${numeroAleatorio}`);
if(numeroAleatorio == numeroElegido)
  {
    console.log("Le pegaste justo!!!🤯");
  }
  else
    {
      console.log("Fallaste... Suerte para la proxima😉");
    }