/* Guía Estructuras de Control JS */

/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */

const ageVerify = () => {
  const age = Number(prompt("Ingresa tu edad: "));
  if (isNaN(age) || age < 0) {
    alert("Por favor, ingrese un número válido y positivo para la edad.");
  } else {
    alert(`${age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}`);
  }
};
