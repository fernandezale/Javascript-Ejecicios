/*
Ejercicio 6: El Desafío Combinado (Integración)
Tienes un array de objetos llamado estudiantes donde cada uno tiene nombre y nota.

Usa .filter() para obtener solo los estudiantes que aprobaron (nota >= 6).

A esos estudiantes aprobados, usa .map() para obtener solo sus nombres en un nuevo array.

Imprime el resultado final.

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];
*/
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