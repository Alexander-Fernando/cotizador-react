import React from 'react';

const CardResult = ({ total, plazo, cantidad }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>Cantidad solicitada es $ {cantidad.toFixed(2)}</p>
    <p>a pagar en $ {plazo} meses</p>
    <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
    <p>Total a pagar: $ {total.toFixed(2)}</p>
  </div>
);

export default CardResult;
