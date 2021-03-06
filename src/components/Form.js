import { useState } from 'react';
import { calcularTotal } from '../helpers/calcularTotal';
// import Spinner from './components/Spinner';

const Form = ({ cantidad, setCantidad, plazo, setPlazo, total, setTotal }) => {
  const [error, setError] = useState(false);

  const sendingForm = (e) => {
    e.preventDefault();

    if (cantidad === 0 || plazo === '') {
      setError(true);
      return;
    }
    setError(false);
    const total = calcularTotal(cantidad, plazo);
    setTotal(total);
  };

  return (
    <>
      <form onSubmit={sendingForm}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              required
              min={100}
              max={100000}
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </>
  );
};

export default Form;
