/* Guía Estructuras de Control JS */

/* EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

const multiplicationTable = () => {
  const number = parseInt(
    prompt(
      "Ingresa un número para mostrar su tabla de multiplicar del 1 al 10: "
    )
  );

  if (!isNaN(number)) {
    let table = `Tabla de multiplicar del ${number}:\n`;

    for (let i = 1; i <= 10; i++) {
      table += `${number} x ${i} = ${number * i}\n`;
    }

    alert(table);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
};
