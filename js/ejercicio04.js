/* Guía Estructuras de Control JS */

/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.  */

const findMaximum = () => {
  const number1 = parseInt(prompt("Ingresa el primer número entero: "));
  const number2 = parseInt(prompt("Ingresa el segundo número entero: "));

  if (isNaN(number1) || isNaN(number2)) {
    alert("Ambas entradas deben ser números válidos");
    return;
  }

  if (number1 > number2) {
    alert(`El número mayor es: ${number1}`);
  } else if (number2 > number1) {
    alert(`El número mayor es: ${number2}`);
  } else {
    alert("Ambos números son iguales");
  }
};

/* let number1 = 2;
let number2 = 3;

const verifyGreater = (number1, number2) => {
    if(number1 === number2){
        console.log(`El numero ${number1} y el numero ${number2} son iguales`);
    }else if( number1 > number2 ){
        console.log(`El numero ${number1} es el mayor`);
    }else{
        console.log(`El numero ${number2} es el mayor`);
    }
}

verifyGreater(number1, number2); */
