/* Guía Estructuras de Control JS */

/* EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30% 
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. */

const salaryIncrease = () => {
  const increaseA = 0.15;
  const increaseB = 0.3;
  const increaseC = 0.1;
  const increaseD = 0.2;
  const baseSalary = parseFloat(prompt("Ingrese el salario del empleado: "));
  const employeeName = prompt("Ingrese el nombre del empleado: ");
  let category = prompt(
    "Ingrese la categoría del empleado (A, B, C, D)"
  ).toUpperCase();

  if (isNaN(baseSalary) || baseSalary <= 0) {
    alert("El salario ingresado no es válido.");
    return;
  }

  let finalSalary = baseSalary;

  switch (category) {
    case "A":
      finalSalary += baseSalary * increaseA;
      alert(
        `El empleado ${employeeName} con categoría ${category} tiene un salario final de $${finalSalary.toFixed(
          2
        )}`
      );
      break;
    case "B":
      finalSalary += baseSalary * increaseB;
      alert(
        `El empleado ${employeeName} con categoría ${category} tiene un salario final de $${finalSalary.toFixed(
          2
        )}`
      );
      break;
    case "C":
      finalSalary += baseSalary * increaseC;
      alert(
        `El empleado ${employeeName} con categoría ${category} tiene un salario final de $${finalSalary.toFixed(
          2
        )}`
      );
      break;
    case "D":
      finalSalary += baseSalary * increaseD;
      alert(
        `El empleado ${employeeName} con categoría ${category} tiene un salario final de $${finalSalary.toFixed(
          2
        )}`
      );
      break;
    default:
      alert(
        `Categoría ${category} no válida. Por favor, ingrese una categoría válida (A, B, C, D).`
      );
      return;
  }
};

