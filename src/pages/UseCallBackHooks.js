import React, { useState, useCallback } from 'react';

const funciones = new Set();

const UseCallBackHooks = () => {

    const [primerContador, setprimerContador] = useState(0);
    const [segundoContador, setsegundoContador] = useState(0);

    const primerAumentador = useCallback(() => {
        setprimerContador((a) => a + 1);
    }, [primerContador]);

    const segundoAumentador = useCallback(() => {
        setsegundoContador((b) => b + 1);
    }, [segundoContador]);

    // const segundoAumentador = () => {
    //     setsegundoContador((b) => b + 1);
    // };

    funciones.add(primerAumentador);
    funciones.add(segundoAumentador);

    return (
        <div className="container">
            <div>Primer Contador: {primerContador}</div>
            <div>Segundo Contador: {segundoContador}</div>
            <br />
            <button className="btn btn-primary mr-3" onClick={primerAumentador}>Primer Aumentador</button>
            <button className="btn btn-secondary" onClick={segundoAumentador}>Segundo Aumentador</button>
            <br />
            <p>Funciones creadas: {funciones.size}</p>
        </div>
    )
}

export default UseCallBackHooks
