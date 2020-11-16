import React, { useRef } from 'react'

const UseRefHooks = () => {
    const textInput = useRef();

    const focusOnText = () => {
        textInput.current.value = "Hola lola";
        textInput.current.focus();
    };
    // const contador = useRef(0);
    // const aumentarcontador = () => {
    //     console.log("Contador:", ++contador.current);
    // }
    return (
        <div>
            <div className="container">
                <input type="text" className="form-control" ref={textInput} />
                {/* <button onClick={aumentarcontador} className="btn btn-success">Contador usando useRef</button> */}
                <button className="btn btn-success" onClick={focusOnText}>Activar Focus</button>
            </div>
        </div>
    )
}

export default UseRefHooks
