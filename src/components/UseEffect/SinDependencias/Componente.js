import React, { useState, useEffect } from 'react';
import Elemento from './Elemento';

const Componente = () => {
  const [objMensaje, setObjMensaje] = useState({});

  const setMensaje = () => {
    const mensajeEffect = {
      mensaje: 'Segundo Renderizado desde UseEffect.',
    };
    setObjMensaje(mensajeEffect);
  };

  useEffect(() => {
    setTimeout(() => {
      setMensaje();
    }, 5000);
  }, []);

  return (
    <div>
      <Elemento mensaje={objMensaje.mensaje} />
    </div>
  );
};

export default Componente;
