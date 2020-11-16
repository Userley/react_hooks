import React, { useState, useEffect } from 'react';

const Componente = () => {
  const [mujeres, setMujeres] = useState(7);
  const [hombres, setHombres] = useState(10);

  useEffect(() => {
    console.log('Sólo se ejecuta en el primer renderizado.');
  }, []);

  useEffect(() => {
    console.log(
      'Se ejecuta en el primer renderizado y cada cambio del estado: mujeres.'
    );
  }, [mujeres]);

  useEffect(() => {
    console.log(
      'Se ejecuta en el primer renderizado y cada cambio del estado: hombres.'
    );
  }, [hombres]);

  return (
    <div>
      Cantidad Mujeres: {mujeres}
      <br />
      Cantidad Hombres: {hombres}
      <hr />
      <button
        className="btn btn-danger mr-3"
        onClick={() => setMujeres(mujeres + 1)}
        type="button"
      >
        Mujeres
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setHombres(hombres + 1)}
        type="button"
      >
        Hombres
      </button>
    </div>
  );
};

export default Componente;
