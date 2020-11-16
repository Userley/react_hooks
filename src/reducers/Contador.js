const reducerContador = (state, action) => {
  let nuevoEstado = { ...state };
  console.log(nuevoEstado);
  switch (action.type) {
    case 'AUMENTAR':
      if (!state.congelar) nuevoEstado.contador = state.contador + 1;
      break;
    case 'DISMINUIR':
      if (!state.congelar) nuevoEstado.contador = state.contador - 1;
      break;
    case 'REINICIAR':
      if (!state.congelar) nuevoEstado.contador = action.reset;
      break;
    case 'CONGELAR':
      nuevoEstado.congelar = !state.congelar;
      break;
    default:
      break;
  }

  return nuevoEstado;
};

export default reducerContador;
