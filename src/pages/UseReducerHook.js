import React, { useReducer } from 'react';
import reducerContador from '../reducers/Contador';

const UseReducerHook = () => {
  const [objEstado, dispatchContador] = useReducer(reducerContador, {
    contador: 0,
    congelar: false,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Contador: {objEstado.contador}</p>
          <button
            className="btn btn-success mr-1"
            onClick={() => dispatchContador({ type: 'AUMENTAR' })}
          >
            Aumentar
          </button>
          <button
            className="btn btn-danger mr-1"
            onClick={() => dispatchContador({ type: 'DISMINUIR' })}
          >
            Disminuir
          </button>
          <button
            className="btn btn-warning mr-1"
            onClick={() => dispatchContador({ type: 'REINICIAR', reset: 100 })}
          >
            Reiniciar
          </button>
          <button
            className="btn btn-primary mr-1"
            onClick={() => dispatchContador({ type: 'CONGELAR' })}
          >
            Congelar {objEstado.congelar ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerHook;
