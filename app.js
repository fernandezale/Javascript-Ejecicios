let tempEnCelcius = [0, 10, 20, 30, 40];

const convertirAFahrenheit = (temperaturas) => 
{
    const nuevasTemps = temperaturas.map((temp) =>
    {
        return (temp * 9/5) + 32;
    });
    return nuevasTemps;
}

const tempEnFahrenheit = convertirAFahrenheit(tempEnCelcius);