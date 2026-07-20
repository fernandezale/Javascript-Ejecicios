const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];
const estudiantesAprobados = (estudiantesInput) =>
{
    const soloAprobados = estudiantesInput.filter((estudiante) =>
    {
        return estudiante.nota >= 6;
    });
    return soloAprobados.map((estudiante) =>
        {
            return estudiante.nombre;
        });
};

console.log(estudiantesAprobados(estudiantes));