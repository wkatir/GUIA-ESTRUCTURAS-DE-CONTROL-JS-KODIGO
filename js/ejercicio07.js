/* Guía Estructuras de Control JS */

/* EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

const analyzeNumbers = () => {
  let values = [];
  let negativeCount = 0;
  let positiveCount = 0;
  let multiplesOf15Count = 0;
  let evenSum = 0;
  for (let i = 0; i < 10; i++) {
    let value = parseInt(prompt(`Ingrese un valor entero ${i + 1}: `));
    if (isNaN(value)) {
      alert("Por favor, ingrese un número entero.");
      i--;
      continue;
    }
    values.push(value);
  }
  values.forEach((value) => {
    if (value < 0) {
      negativeCount++;
    } else if (value > 0) {
      positiveCount++;
    }

    if (value % 15 === 0) {
      multiplesOf15Count++;
    }

    if (value % 2 === 0) {
      evenSum += value;
    }
  });

  alert(`Cantidad de valores negativos: ${negativeCount}`);
  alert(`Cantidad de valores positivos: ${positiveCount}`);
  alert(`Cantidad de múltiplos de 15: ${multiplesOf15Count}`);
  alert(`Valor acumulado de los números pares: ${evenSum}`);
};

