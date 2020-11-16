import React, { useMemo } from 'react';

const ElementoB = ({ numero }) => {
  console.log('Renderizado elemto B');

  const resultado = useMemo(() => {
    let factorial = 1;
    console.log('Entra a Memo');
    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }
    console.log('Realiza Cálculo');
    return factorial;

  }, [numero])

  return (
    <p>
      !{numero} : {resultado}
    </p>
  );
};

export default ElementoB;
