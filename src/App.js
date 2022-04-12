import { useState } from 'react';
import CardResult from './components/CardResult';
import Form from './components/Form';
import Header from './components/Header';
import Message from './components/Message';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0); //
  return (
    <>
      <Header titulo="Cotizador de préstamos" />
      <div className="container">
        <Form
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
        />
        <div className="mensajes">
          {total === 0 ? (
            <Message />
          ) : (
            <CardResult total={total} plazo={plazo} cantidad={cantidad} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
