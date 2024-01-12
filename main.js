const listaAlumnos = [];

function agregarAlumno() {
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let calificacionAlumno = Number(prompt("Ingrese la calificación del alumno:"));

    let alumno = {
        nombre: nombreAlumno,
        calificacion: calificacionAlumno
    }

    listaAlumnos.push(alumno);
}

function mayorCalif() {
    const calfBusqueda = Number(prompt("Ingrese la calificación mínima para filtrar:"));
    const filtrados = listaAlumnos.filter((item) => item.calificacion > calfBusqueda);

    filtrados.forEach((item) => {
        alert(`
        Nombre: ${item.nombre}
        Calificación: ${item.calificacion}
        `);
    });
}

while (true) {
    let opcion = Number(prompt("Seleccione una opción:\n1. Agregar alumno\n2. Consultar alumnos\n3. Salir"));

    switch (opcion) {
        case 1:
            agregarAlumno();
            break;
        case 2:
            mayorCalif();
            break;
        case 3:
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opción no válida. Inténtelo de nuevo.");
    }

    if (opcion === 3) {
        break;
    }
}
