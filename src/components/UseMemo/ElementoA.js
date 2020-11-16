import React from 'react';

const ElementoA = ({ texto }) => {
  console.log('Renderizando Elemento A');
  return (
    <div>
      <p>Texto: {texto}</p>
    </div>
  );
};

export default ElementoA;
