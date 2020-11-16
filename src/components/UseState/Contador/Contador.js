import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Número {contador}</p>
      <button
        className="btn btn-warning mr-3"
        type="button"
        onClick={aumentarContador}
      >
        Aumentar
      </button>
      <button
        className="btn btn-warning"
        type="button"
        onClick={disminuirContador}
      >
        Disminuir
      </button>
    </div>
  );
};

export default Contador;
