/* Guía Estructuras de Control JS */

/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.  */

let number1 = 2;
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

verifyGreater(number1, number2);