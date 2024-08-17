/* Guía Estructuras de Control JS */

/* EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const evaluateTemperature = () => {
  const celsius = parseFloat(prompt("Introduce la temperatura en Celsius:"));
  if (!isNaN(celsius)) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    if (fahrenheit >= 14 && fahrenheit <= 32) {
      alert("Temperatura baja");
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
      alert("Temperatura adecuada");
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
      alert("Temperatura alta");
    } else {
      alert("Temperatura desconocida");
    }
  } else {
    alert("Ingrese un dato numérico válido");
  }
};
