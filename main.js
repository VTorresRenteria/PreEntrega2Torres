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

function consultarAlumno() {
    
}

while (true) {
    let opcion = Number(prompt("Seleccione una opción: \n1. Agregar alumno\n2. Consultar alumnos\n3. Salir"));

    switch (opcion) {
        case 1:
            agregarAlumno();
            break;
        case 2:
            consultarAlumnos();
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

console.log(listaAlumnos);