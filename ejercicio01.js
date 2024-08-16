/* Guía Estructuras de Control JS */

/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */

const ageVerify = (age) => {
    console.log(`${age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}`); 
}

const age = 18;
ageVerify(age);