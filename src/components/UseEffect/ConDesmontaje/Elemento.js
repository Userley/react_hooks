import React, { useEffect } from 'react';

const Elemento = () => {
  useEffect(() => {
    console.log('Montaje...');
    return () => {
      console.log('Desmontando componente...');
    };
  });

  return (
    <div>
      <h5>Componente Renderizado.</h5>
    </div>
  );
};

export default Elemento;
