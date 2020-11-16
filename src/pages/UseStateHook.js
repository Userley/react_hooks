import React from 'react';
import Contador from '../components/UseState/Contador/Contador';
import ComponenteEspejo from '../components/UseState/Espejo/ComponenteEspejo';

const UseStateHook = (props) => {
  return (
    <div className="container">
      <br/>
      {props.userId}
      <ComponenteEspejo />
    </div>
  );
};

export default UseStateHook;
