export const calcularTotal = (cantidad, plazo) => {
  let cantidadTotal;

  if (cantidad <= 1000) {
    cantidadTotal = cantidad * 0.25;
  } else if (cantidad > 1000 && cantidad <= 5000) {
    cantidadTotal = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad < 10000) {
    cantidadTotal = cantidad * 0.15;
  } else {
    cantidadTotal = cantidad * 0.1;
  }

  let totalPlazo = 0;

  switch (plazo) {
    case 3:
      totalPlazo = cantidad * 0.05;
      break;
    case 6:
      totalPlazo = cantidad * 0.1;
      break;
    case 12:
      totalPlazo = cantidad * 0.15;
      break;
    case 24:
      totalPlazo = cantidad * 0.2;
      break;

    default:
      console.log(
        '🚀 ~ file: calcularTotal.js ~ line 17 ~ calcularTotal ~ plazo',
        plazo
      );
  }

  return totalPlazo + cantidadTotal + cantidad;
};
