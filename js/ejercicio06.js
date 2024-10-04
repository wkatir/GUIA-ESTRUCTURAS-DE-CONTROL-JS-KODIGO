/* Guía Estructuras de Control JS */

/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

const calculateTravelDiscount = () => {
  const origin = prompt("Introduce la ciudad de origen: ").toLowerCase();
  const destination = prompt("Introduce el destino: ").toLowerCase();
  const baseCost = parseFloat(prompt("Introduce el costo del viaje: "));
  if (baseCost === "" || isNaN(baseCost) || parseFloat(baseCost) <= 0) {
    alert("Por favor, introduce un costo válido (un número mayor que 0).");
    return;
  }
  let discount = 0;
  if (origin === "palma") {
    switch (destination) {
      case "la costa del sol":
        discount = 0.05;
        break;
      case "panchimalco":
        discount = 0.1;
        break;
      case "puerto el triunfo":
        discount = 0.15;
        break;
      default:
        discount = 0;
        break;
    }
  }

  if (discount > 0) {
    const discountedCost = baseCost - baseCost * discount;
    alert(
      `El descuento aplicable es del ${(discount * 100).toFixed(
        2
      )}%. El costo del viaje con descuento es: $${discountedCost.toFixed(2)}`
    );
  } else {
    alert(
      "No hay descuento aplicable para el destino ingresado. El costo del viaje es: $" +
        baseCost.toFixed(2)
    );
  }
};
