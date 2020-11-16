import React, { useState } from 'react';
import Elemento from './Elemento';

const Componente = () => {
  const [renderizar, setRenderizar] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setRenderizar(!renderizar)}
      >
        {renderizar ? 'No Renderizar ' : 'Renderizar '}Elemento
      </button>
      {renderizar ? <Elemento /> : null}
    </div>
  );
};

export default Componente;
