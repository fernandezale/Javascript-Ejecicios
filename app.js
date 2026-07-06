let stringSalida = []
for (let filas = 0; filas < 5; filas++) {
    for (let asteriscos = 0; asteriscos < filas+1; asteriscos++) {
        stringSalida.push("*");
    }
    console.log(stringSalida);
    stringSalida = [];
}