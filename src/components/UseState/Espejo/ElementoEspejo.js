import React from 'react';

const ElementoEspejo = ({ valorTexto, onChangeText }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={valorTexto}
        onChange={onChangeText}
      />
      <p>Texto ingresado: {valorTexto}</p>
    </div>
  );
};

export default ElementoEspejo;
