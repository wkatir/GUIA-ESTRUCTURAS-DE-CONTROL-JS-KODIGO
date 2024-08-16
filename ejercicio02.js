/* Guía Estructuras de Control JS */

/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

let exam = 10;
let homeworks = 10;
let attendance = 10;
let research = 10;
let studentName = "Wilmer Salazar";
let idCarnet = "SM100223";

const gradeVerify = (exam, homeworks, attendance, research, studentName, idCarnet) => {
    let grade = (exam * 0.20) + (homeworks * 0.40) + (attendance * 0.10) + (research * 0.30);
    console.log(`La nota de ${studentName} con id: ${idCarnet} su nota final es : ${grade} `);
}

gradeVerify(exam, homeworks, attendance, research, studentName, idCarnet);