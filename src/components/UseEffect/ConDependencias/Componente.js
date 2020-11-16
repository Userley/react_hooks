import React, { useState, useEffect } from 'react';
import Elemento from './Elemento';

const Componente = () => {
  const [textoBuscar, setTextoBuscar] = useState('');
  const onSubmitTextoBuscar = (e) => {
    e.preventDefault();
    const formBusqueda = new FormData(e.target);
    setTextoBuscar(formBusqueda.get('txtBusqueda'));
  };

  useEffect(() => {
    console.log('Cambio el texto Buscar');
  }, [textoBuscar]);

  return (
    <div>
      <form onSubmit={onSubmitTextoBuscar}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              name="txtBusqueda"
              className="form-control"
              placeholder="Texto a buscar..."
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </form>
      <Elemento textoBuscar={textoBuscar} />
    </div>
  );
};

export default Componente;
