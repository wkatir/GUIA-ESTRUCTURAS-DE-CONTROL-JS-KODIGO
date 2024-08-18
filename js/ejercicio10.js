/* Guía Estructuras de Control JS */

/* EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

const calculateAverage = (ages) => {
  const sum = ages.reduce((acc, age) => acc + age, 0);
  return sum / ages.length;
};

const getValidAges = (turn, count) => {
  let ages = [];
  for (let i = 0; i < count; i++) {
    let age;
    do {
      age = parseInt(
        prompt(`Ingrese la edad del estudiante ${i + 1} del turno ${turn}: `)
      );
      if (isNaN(age) || age <= 0) {
        alert("Por favor, ingrese un número positivo válido para la edad.");
      }
    } while (isNaN(age) || age <= 0);
    ages.push(age);
  }

  return ages;
};

const analyzeShifts = () => {
  const morningShiftAges = getValidAges("mañana", 5);
  const afternoonShiftAges = getValidAges("tarde", 6);
  const nightShiftAges = getValidAges("noche", 11);

  const morningShiftAverage = calculateAverage(morningShiftAges);
  const afternoonShiftAverage = calculateAverage(afternoonShiftAges);
  const nightShiftAverage = calculateAverage(nightShiftAges);

  alert(
    `Promedio de edades del turno mañana: ${morningShiftAverage.toFixed(2)}`
  );
  alert(
    `Promedio de edades del turno tarde: ${afternoonShiftAverage.toFixed(2)}`
  );
  alert(`Promedio de edades del turno noche: ${nightShiftAverage.toFixed(2)}`);
  let message;
  if (
    morningShiftAverage > afternoonShiftAverage &&
    morningShiftAverage > nightShiftAverage
  ) {
    message = "El turno mañana tiene el promedio de edades más alto.";
  } else if (
    afternoonShiftAverage > morningShiftAverage &&
    afternoonShiftAverage > nightShiftAverage
  ) {
    message = "El turno tarde tiene el promedio de edades más alto.";
  } else if (
    nightShiftAverage > morningShiftAverage &&
    nightShiftAverage > afternoonShiftAverage
  ) {
    message = "El turno noche tiene el promedio de edades más alto.";
  } else {
    message = "Hay un empate entre los turnos en cuanto al promedio de edades.";
  }
  alert(message);
};
