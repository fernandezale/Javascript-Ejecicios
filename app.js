let TodasLasEdades = [12, 18, 25, 10, 30, 15];

const obtenerMayoresDeEdad = (edades) => 
    {
       return edades.filter((edad) =>
        {return edad >= 18});
    };

const edadesMayores = obtenerMayoresDeEdad(TodasLasEdades);

console.log(edadesMayores);