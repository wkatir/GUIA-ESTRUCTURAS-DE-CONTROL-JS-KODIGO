/* Guía Estructuras de Control JS */

/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

const isValidGrade = (grade) => !isNaN(grade) && grade >= 0 && grade <= 100;

const gradeVerify = () => {
  const studentName = prompt("Ingrese el nombre del alumno: ");
  const idCarnet = prompt("Ingrese el carnet del alumno: ");
  const exam = parseFloat(
    prompt("Ingrese la calificación del examen (0-100): ")
  );
  const assignments = parseFloat(
    prompt("Ingrese la calificación de las tareas (0-100): ")
  );
  const attendance = parseFloat(
    prompt("Ingrese la calificación de la asistencia (0-100): ")
  );
  const research = parseFloat(
    prompt("Ingrese la calificación de la investigación (0-100): ")
  );

  const examPercentage = 0.2;
  const assignmentsPercentage = 0.4;
  const attendancePercentage = 0.1;
  const researchPercentage = 0.3;

  if (
    !isValidGrade(exam) ||
    !isValidGrade(assignments) ||
    !isValidGrade(attendance) ||
    !isValidGrade(research)
  ) {
    alert(
      "Por favor, ingrese números válidos en el campo de calificaciones (0-100)"
    );
  } else {
    const grade =
      exam * examPercentage +
      assignments * assignmentsPercentage +
      attendance * attendancePercentage +
      research * researchPercentage;
    alert(
      `Nombre: ${studentName}\nID: ${idCarnet}\nNota Final: ${grade.toFixed(2)}`
    );
  }
};
