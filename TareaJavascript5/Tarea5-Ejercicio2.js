/*
Ejercicio 2: El Filtro de Seguridad (filter)
Tienes un array de números que representan edades de personas. Crea una función llamada obtenerMayoresDeEdad que use .filter() para devolver un array solo con las edades que sean 18 o más.

Array inicial: [12, 18, 25, 10, 30, 15]
*/

let TodasLasEdades = [12, 18, 25, 10, 30, 15];

const obtenerMayoresDeEdad = (edades) => 
    {
       return edades.filter((edad) =>
        {return edad >= 18});
    };

const edadesMayores = obtenerMayoresDeEdad(TodasLasEdades);

console.log(edadesMayores);