const ventas = [100, 250, 50, 300, 120];
const calcularTotalVentas = (ventas) =>
{
    const totalventas = ventas.reduce((acum, produc) => acum + produc,0,);
    return totalventas;
};

console.log(calcularTotalVentas(ventas));