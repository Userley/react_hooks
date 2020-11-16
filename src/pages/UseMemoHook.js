import React, { useState } from 'react';
import ElementoA from '../components/UseMemo/ElementoA';
import ElementoB from '../components/UseMemo/ElementoB';

const UseMemoHook = () => {
  const [valorTexto, setvalorTexto] = useState('Batman');
  const [valorNumero, setvalorNumero] = useState(1);
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="texto">
          <b>Heroe</b>
        </label>
        <input
          name="texto"
          value={valorTexto}
          onChange={(e) => setvalorTexto(e.target.value)}
          className="form-control"
        />
        <ElementoA texto={valorTexto} />
      </div>
      <hr />
      <div className="form-group">
        <label htmlFor="factorial">
          <b>Factorial</b>
        </label>
        <input
          type="number"
          name="factorial"
          value={valorNumero}
          onChange={(e) => setvalorNumero(e.target.value)}
          className="form-control"
        />
        <ElementoB numero={valorNumero} />
      </div>
    </div>
  );
};

export default UseMemoHook;
