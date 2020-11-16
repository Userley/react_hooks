import React, { useState } from 'react';
import ElementoEspejo from './ElementoEspejo';

const ComponenteEspejo = () => {
  const [valorTexto, setValorTexto] = useState('');

  const onChangeText = (e) => {
    setValorTexto(e.target.value);
  };

  return <ElementoEspejo valorTexto={valorTexto} onChangeText={onChangeText} />;
};

export default ComponenteEspejo;
